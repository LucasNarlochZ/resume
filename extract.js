const fs = require('node:fs');
const path = require('node:path');

const inputPath = path.join(__dirname, 'vagas.txt');
const outputPath = path.join(__dirname, 'links.txt');
const html = fs.readFileSync(inputPath, 'utf8');

const links = new Set();
const hrefPattern = /href\s*=\s*["'][^"']*\/jobs\/view\/(\d+)/gi;
const jobIdPattern = /data-(?:occludable-)?job-id\s*=\s*["'](\d+)["']/gi;

for (const match of html.matchAll(hrefPattern)) {
  links.add(`https://www.linkedin.com/jobs/view/${match[1]}`);
}

for (const match of html.matchAll(jobIdPattern)) {
  links.add(`https://www.linkedin.com/jobs/view/${match[1]}`);
}

fs.writeFileSync(outputPath, `${[...links].join('\n')}${links.size ? '\n' : ''}`);
console.log(`${links.size} link(s) extraído(s) em ${outputPath}`);
