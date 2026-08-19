const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
    Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
    ExternalHyperlink, TabStopType, BorderStyle
} = require("docx");

const NAVY = "1F3864";
const GRAY = "595959";
const LINE = "BFBFBF";
const CONTENT_WIDTH = 10800;

function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) return { fields: {}, body: raw };

    const fields = { links: [] };

    for (const line of match[1].split("\n")) {
        if (!line.trim()) continue;

        const idx = line.indexOf(":");
        const key = line.slice(0, idx).trim();
        const value = line.slice(idx + 1).trim();

        if (key === "link") {
            const [label, url] = value.split("|").map(s => s.trim());
            fields.links.push({ label, url });
        } else {
            fields[key] = value;
        }
    }

    return { fields, body: match[2] };
}

function parseBlocks(body) {
    const lines = body.split("\n");
    const blocks = [];
    let buffer = [];
    let listItems = null;

    function flushParagraph() {
        if (buffer.length) {
            blocks.push({ type: "p", text: buffer.join(" ").trim() });
            buffer = [];
        }
    }

    function flushList() {
        if (listItems) {
            blocks.push({ type: "list", items: listItems });
            listItems = null;
        }
    }

    for (const rawLine of lines) {
        const line = rawLine.trim();
        const h2 = line.match(/^##\s+(.+)/);
        const h3 = line.match(/^###\s+(.+)/);
        const li = line.match(/^-\s+(.+)/);

        if (h2) {
            flushParagraph();
            flushList();
            blocks.push({ type: "h2", text: h2[1].trim() });
        } else if (h3) {
            flushParagraph();
            flushList();
            blocks.push({ type: "h3", text: h3[1].trim() });
        } else if (li) {
            flushParagraph();
            if (!listItems) listItems = [];
            listItems.push(li[1].trim());
        } else if (!line) {
            flushParagraph();
            flushList();
        } else {
            flushList();
            buffer.push(line);
        }
    }

    flushParagraph();
    flushList();

    return blocks;
}

function parseInline(text, baseSize) {
    const runs = [];
    const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            runs.push(new TextRun({
                text: text.slice(lastIndex, match.index),
                size: baseSize,
                font: "Arial"
            }));
        }

        if (match[1] !== undefined) {
            runs.push(new TextRun({
                text: match[1],
                bold: true,
                size: baseSize,
                font: "Arial"
            }));
        } else {
            runs.push(new ExternalHyperlink({
                link: match[3],
                children: [
                    new TextRun({
                        text: match[2],
                        size: baseSize,
                        font: "Arial",
                        style: "Hyperlink"
                    })
                ]
            }));
        }

        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        runs.push(new TextRun({
            text: text.slice(lastIndex),
            size: baseSize,
            font: "Arial"
        }));
    }

    return runs;
}

function sectionHeader(text) {
    return new Paragraph({
        spacing: { before: 160, after: 60 },
        border: {
            bottom: {
                style: BorderStyle.SINGLE,
                size: 6,
                color: LINE,
                space: 2
            }
        },
        children: [
            new TextRun({
                text: text.toUpperCase(),
                bold: true,
                size: 19,
                color: NAVY,
                font: "Arial"
            })
        ]
    });
}

function titleDateLine(title, date) {
    return new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
        spacing: { after: 10 },
        children: [
            new TextRun({
                text: title,
                bold: true,
                size: 20,
                font: "Arial"
            }),
            new TextRun({
                text: `\t${date}`,
                size: 19,
                color: GRAY,
                font: "Arial"
            })
        ]
    });
}

function isLinksLine(text) {
    return /^(\[[^\]]+\]\([^)]+\)\s*\|\s*)*\[[^\]]+\]\([^)]+\)$/.test(text);
}

function isTechLine(text) {
    return /^_(.+)_$/.test(text);
}

function buildHeader(fields) {
    const linkRuns = [];

    fields.links.forEach((l, i) => {
        if (i > 0) {
            linkRuns.push(new TextRun({
                text: "  |  ",
                size: 18,
                font: "Arial"
            }));
        }

        linkRuns.push(new ExternalHyperlink({
            link: l.url,
            children: [
                new TextRun({
                    text: l.label,
                    size: 18,
                    font: "Arial",
                    style: "Hyperlink"
                })
            ]
        }));
    });

    return [
        new Paragraph({
            spacing: { after: 20 },
            children: [
                new TextRun({
                    text: fields.name || "",
                    bold: true,
                    size: 32,
                    color: NAVY,
                    font: "Arial"
                })
            ]
        }),
        new Paragraph({
            spacing: { after: 60 },
            children: [
                new TextRun({
                    text: fields.title || "",
                    size: 21,
                    color: GRAY,
                    font: "Arial"
                })
            ]
        }),
        new Paragraph({
            spacing: { after: 30 },
            children: [
                new TextRun({
                    text: `${fields.phone || ""}  |  ${fields.email || ""}  |  ${fields.location || ""}`,
                    size: 18,
                    font: "Arial"
                })
            ]
        }),
        new Paragraph({
            border: {
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 8,
                    color: NAVY,
                    space: 4
                }
            },
            spacing: { after: 0 },
            children: linkRuns
        })
    ];
}

function buildBody(blocks) {
    const children = [];
    let currentSection = "";

    for (const block of blocks) {
        if (block.type === "h2") {
            currentSection = block.text;
            children.push(sectionHeader(block.text));
        } else if (block.type === "h3") {
            const parts = block.text.split("|").map(s => s.trim());

            if (parts.length === 2) {
                children.push(titleDateLine(parts[0], parts[1]));
            } else {
                children.push(new Paragraph({
                    spacing: { after: 10 },
                    children: [
                        new TextRun({
                            text: block.text,
                            bold: true,
                            size: 20,
                            font: "Arial"
                        })
                    ]
                }));
            }
        } else if (block.type === "list") {
            const plainSections = [
                "Competências Técnicas",
                "Idiomas",
                "Certificados"
            ];

            if (plainSections.includes(currentSection)) {
                block.items.forEach((item, i) => {
                    children.push(new Paragraph({
                        spacing: {
                            after: i === block.items.length - 1 ? 0 : 16
                        },
                        children: parseInline(item, 19)
                    }));
                });
            } else {
                block.items.forEach(item => {
                    children.push(new Paragraph({
                        numbering: { reference: "bullets", level: 0 },
                        spacing: { after: 30 },
                        children: parseInline(item, 19)
                    }));
                });
            }
        } else if (block.type === "p") {
            if (isTechLine(block.text)) {
                const inner = block.text.slice(1, -1);

                children.push(new Paragraph({
                    spacing: { after: 10 },
                    children: [
                        new TextRun({
                            text: inner,
                            italics: true,
                            size: 18,
                            color: GRAY,
                            font: "Arial"
                        })
                    ]
                }));
            } else if (isLinksLine(block.text)) {
                const linkRuns = [];
                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                let m;
                let first = true;

                while ((m = linkRegex.exec(block.text)) !== null) {
                    if (!first) {
                        linkRuns.push(new TextRun({
                            text: "  |  ",
                            size: 18,
                            font: "Arial"
                        }));
                    }

                    linkRuns.push(new ExternalHyperlink({
                        link: m[2],
                        children: [
                            new TextRun({
                                text: m[1],
                                size: 18,
                                font: "Arial",
                                style: "Hyperlink"
                            })
                        ]
                    }));

                    first = false;
                }

                children.push(new Paragraph({
                    spacing: { after: 100 },
                    children: linkRuns
                }));
            } else {
                children.push(new Paragraph({
                    spacing: { after: 0 },
                    children: parseInline(block.text, 19)
                }));
            }
        }
    }

    return children;
}

function main() {
    const mdPath = process.argv[2];

    if (!mdPath) {
        throw new Error("Usage: node generate.js <path-to-resume.md>");
    }

    const raw = fs.readFileSync(mdPath, "utf-8");
    const { fields, body } = parseFrontmatter(raw);
    const outputName = fields.output;

    if (!outputName) {
        throw new Error("The resume frontmatter must define an output field.");
    }

    const outName = path.join(
        path.dirname(mdPath),
        `lucas_narloch_${outputName}`
    );
    const blocks = parseBlocks(body);

    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: {
                        font: "Arial",
                        size: 19
                    }
                }
            }
        },
        numbering: {
            config: [
                {
                    reference: "bullets",
                    levels: [
                        {
                            level: 0,
                            format: LevelFormat.BULLET,
                            text: "\u2022",
                            alignment: AlignmentType.LEFT,
                            style: {
                                paragraph: {
                                    indent: {
                                        left: 260,
                                        hanging: 200
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        },
        sections: [
            {
                properties: {
                    page: {
                        size: {
                            width: 12240,
                            height: 15840
                        },
                        margin: {
                            top: 560,
                            right: 720,
                            bottom: 560,
                            left: 720
                        }
                    }
                },
                children: [
                    ...buildHeader(fields),
                    ...buildBody(blocks)
                ]
            }
        ]
    });

    Packer.toBuffer(doc).then(buffer => {
        const docxPath = `${outName}.docx`;
        fs.writeFileSync(docxPath, buffer);

        try {
            execSync(`soffice --headless --convert-to pdf --outdir "${path.dirname(docxPath)}" "${docxPath}"`, {
                stdio: "inherit"
            });
        } catch (e) {
            console.error("Conversao para PDF falhou. Verifique se o LibreOffice (soffice) esta instalado.");
        } finally {
            if (fs.existsSync(docxPath)) {
                fs.unlinkSync(docxPath);
            }
        }
    });
}

main();
