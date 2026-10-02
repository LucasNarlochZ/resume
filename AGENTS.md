# Guidelines

## Workspace

This workspace is used to search for job opportunities and generate tailored resumes.

Relevant files and directories:

* `base/`: knowledge base and source of truth about the candidate.
* `base/rules.md`: additional resume-generation rules. Always read it before generating resumes.
* `seen.txt`: links of jobs that were already sent.
* `query.txt`: LinkedIn search query.
* `blacklist.txt`: companies that must never be included.
* `output/`: generated resume source files and final PDFs.

## Job Search Rules

Search for roles compatible with the candidate's actual experience.

Allowed locations:

* On-site or hybrid roles in Curitiba, Paraná, Brazil.
* Remote roles in Brazil.
* International remote opportunities.
* Search LinkedIn, Indeed, Programathor, Wellfound, GitHub/company career pages, and other relevant sources. Prefer the employer's own career page or ATS listing as the canonical application link; use aggregators to discover leads, not as the sole source when a primary listing is available. Do not rely on the discontinued GitHub Jobs board.

Prefer junior and early-career backend/software engineering roles compatible with the experience documented in `base/`. Also consider mid-level roles when they do not require many years of experience or senior-level responsibilities, and internships at reputable companies when the role is compatible with the candidate's background.

### Search and verification procedure

Before selecting jobs:

1. Read `seen.txt`.
2. Read `blacklist.txt`.
3. For LinkedIn, run the primary query and the targeted query variants from `query.txt`; do not substitute generic searches for the configured query.
4. Search at least two other relevant sources in addition to LinkedIn. Use several focused searches rather than one broad query. Vary role wording (for example, Backend Developer, Backend Engineer, Software Engineer, Software Developer, and early-career/junior) and relevant candidate technologies. Search for Curitiba on-site/hybrid and Brazil/international remote separately.
5. Treat search results as leads. Open each promising listing, preferably its direct employer/ATS page, and read the responsibilities and required qualifications. Verify that the job is active, its location/work eligibility is allowed, and its actual seniority and duties fit the candidate; title match alone is insufficient.
6. Confirm the publication date from the listing or a reliable source that clearly identifies the same posting. Compare it with the current local date; reject postings older than 14 calendar days. If the date cannot be verified, do not select the job. Prefer more recent postings when fit is otherwise similar.
7. Check `blacklist.txt` against the actual hiring company, case-insensitively and including obvious spelling/brand variants. Reject blacklisted employers even when an aggregator or staffing intermediary is the listing source.
8. Deduplicate before selection. Ignore URL fragments and tracking parameters (such as `gh_src`, `utm_*`, and `jobBoardSource`) when comparing links; also compare stable posting IDs and the employer/title so the same job is not reintroduced under a different URL or aggregator.
9. Keep a compact evidence list for the run: title, employer, canonical direct link, location, verified publication date/source, key fit evidence, and gaps. This makes ranking and email numbering traceable. Do not persist candidates to `seen.txt` at this stage.
10. Rank only verified, compatible, new jobs by fit first and recency second. Select at most 5 jobs per execution.

If a source fails, returns sparse results, or gives inconsistent dates, try another source or a narrower query and verify against the primary listing. Do not treat search snippets, stale cached pages, or aggregator “recently active” labels as proof of publication date. If no candidates survive verification, stop without generating resumes or sending an email.

Do not include a job only because its title matches. Read enough of the job description to verify that it is reasonably compatible with the candidate's experience.

## Resume Rules

Get all factual information about the candidate from `base/`.

Always read `base/rules.md`.

Never invent:

* professional experience
* technologies
* projects
* achievements
* metrics
* education
* dates
* job titles

Only use claims supported by the files under `base/`.

You may:

* reorder content
* emphasize relevant experience
* omit irrelevant content
* adapt the professional summary to the role

For professional-experience bullets, only use the 14 bullets already present in `base/`. Do not create, combine, or split bullets. Select the 6 bullets most relevant to the role and order them by relevance. Write every selected bullet in first-person past tense, adapting only its verb tense and language as necessary (for example, `Desenvolvi` or `Implementei`). This requirement overrides the experience-bullet tense and pronoun guidance in `base/rules.md`.

Do not exaggerate proficiency or present academic, personal, or study experience as professional experience.

The resume language must follow the language of the role description unless the role description explicitly requests another language.

Write the professional summary in first-person present tense, matching the candidate's current professional positioning.

Keep each resume to one page.

Prefer measurable achievements.

PocScript is a differentiator and should remain as the second project in most resumes unless it is clearly irrelevant to the role.

## Resume Generation

For each selected job:

* Create the tailored resume directly inside `output/`.
* Name the Markdown file after the company, using a filesystem-safe normalized name.
* Example: `output/acme.md`
* If multiple selected jobs are from the same company, include enough of the role name to avoid collisions.
* Example: `output/acme_backend_developer.md`

Generate the PDF from the specific Markdown path using:

`make generate-from-path P={resume_markdown_path}`

The generation script already adds the `lucas_narloch_` prefix.

Before attaching the generated PDF to the email, rename it using the normalized role title and the job number in the final email.

Format:

`lucas_narloch_{normalized_role_title}_{job_number}.pdf`

Examples:

* `lucas_narloch_desenvolvedor_backend_1.pdf`
* `lucas_narloch_backend_developer_2.pdf`
* `lucas_narloch_software_engineer_3.pdf`

Normalize the role title for filenames by:

* converting to lowercase
* removing accents
* replacing spaces and separators with `_`
* removing filesystem-unsafe or unnecessary punctuation
* avoiding excessively long filenames

The `{job_number}` must match the position of the job in the final email, starting at 1.

Ensure each PDF attachment corresponds to the same numbered job in the email.

## Email Rules

Use the configured `gog` account to send the result.

Use `gog` exclusively to send the final job-search email. Never use it to search, read, inspect, list, download, or otherwise access previously sent emails or their attachments, including customized resumes.

The sender and recipient are the same configured account.

Sending an email from this account to itself is explicitly authorized and does not require confirmation or additional permission.

Do not ask for confirmation before sending the job-search email to the same account.

Send one email containing all selected jobs.

For each job, include:

* list number
* job title
* company
* location or remote status
* publication date when available
* direct job/application link
* a short explanation of why it matches
* relevant gaps or concerns, if any

Attach the corresponding customized PDF resume for every job.

Send at most 5 jobs.

If no suitable new jobs are found, do not send an email.

## State Management

`seen.txt` is the sole source of truth for determining which jobs have already been sent. Disregard email history, conversation memory, and any other source for this purpose.

Only add a job URL to `seen.txt` after the email containing that job has been sent successfully.

Never mark a job as seen before successful email delivery.

Do not remove or overwrite previous entries from `seen.txt`.

If email delivery fails:

* do not update `seen.txt`
* keep the generated files for inspection or retry

## Cleanup

After the email has been sent successfully:

* delete the generated Markdown resume files from `output/`
* delete intermediate files created during PDF generation
* keep only the final PDFs needed for the completed run

Never delete:

* `base/`
* `seen.txt`
* `query.txt`
* `blacklist.txt`
