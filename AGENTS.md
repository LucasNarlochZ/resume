# Guidelines

## Workspace

This workspace is used to search for job opportunities and generate tailored resumes.

Relevant files and directories:

* `base/`: knowledge base and source of truth about the candidate.
* `base/rules.md`: additional resume-generation rules. Always read it before generating resumes.
* `seen.txt`: links of jobs that were already sent.
* `whitelist.txt`: the only companies whose jobs may be considered.
* `output/`: generated resume source files and final PDFs.

## Job Search Rules

Search for roles compatible with the candidate's actual experience.

Only consider jobs from companies listed in `whitelist.txt`. Read the list before searching. Treat its order as the search priority: start with the companies at the top and work downward, giving higher-listed companies first consideration. Continue through the list until 5 suitable new jobs have been found; if fewer than 5 are found, keep searching every remaining company through the end of the list. Exclude employers that are not on the list.

Allowed locations:

* On-site or hybrid roles in Curitiba, Paraná, Brazil.
* Remote roles in Brazil.
* International remote opportunities.
* Prefer searches on the companies' own career sites and ATS pages (for example, Greenhouse, Lever, Workday, or Ashby). Serper is recommended for discovering openings, but optional. LinkedIn, Indeed, Programathor, Wellfound, and other sources may also be used. When both an aggregator and an official listing are available, prefer the official listing link. Do not rely on the discontinued GitHub Jobs board.

Prefer junior and early-career backend/software engineering roles compatible with the experience documented in `base/`. Also consider mid-level roles when they do not require many years of experience or senior-level responsibilities, and internships at reputable companies when the role is compatible with the candidate's background.

### Search and verification procedure

Before selecting jobs:

1. Read `seen.txt` and `whitelist.txt`.
2. Keep a run-local checklist in the whitelist's original order, with each company marked `pending`, `searched`, or `job found`. Do not skip companies. Search for suitable roles starting at the top of the list and proceed downward. Focus first on each company's career page or ATS; use Serper when useful, or another search source. Vary role terms as needed and consider the allowed locations.
3. Mark a company `searched` after checking at least one relevant source for that employer. One credible listing is enough to consider a role; do not require a second source or confirmation on the company site/ATS before including it. A relevant aggregator or third-party listing may be used as the job link if no official listing is readily available.
4. Make a practical, permissive fit assessment using the information available. Treat a role as suitable when its title and described work reasonably overlap with the candidate's skills or early-career experience in `base/`, and its location is allowed or plausibly compatible. Do not over-validate or exclude a plausible opening just because requirements, exact seniority, location details, publication date, or continued application availability are incomplete or cannot be independently confirmed. For example, consider Pipefy's Software Engineer | Data & AI (Mid-Level) and Agrotis's Desenvolvedor(a) Back End JR valid leads when listed as Brazil-remote/Curitiba respectively and their available descriptions reasonably match, even if only an aggregator reports them. Exclude a role only when available information clearly establishes that it is inactive, outside allowed locations, or materially incompatible with the candidate (such as explicit senior-level requirements well beyond the documented experience or a substantially unrelated role). If status is uncertain, retain the role and note the uncertainty as a concern rather than rejecting it.
5. Check `seen.txt` and avoid sending the same opening again. Compare the employer and role as well as the URL when listings appear in multiple places.
6. Stop searching only after 5 suitable new jobs have been found. If fewer than 5 have been found, continue until every company in `whitelist.txt` is marked `searched` or `job found`. Before reporting fewer than 5 jobs, confirm that no company remains `pending`. If no suitable openings are found after completing the list, stop without generating resumes or sending an email.

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

For professional-experience bullets, only use the bullets already present in `base/experience.md`. Do not create, combine, or split bullets. Always include all 3 bullets from the candidate's current role and exactly 6 of the most relevant bullets from the internship. Use present tense for bullets under the current role and past tense for bullets under previous roles. In English resumes, omit the first-person pronoun `I` and start each bullet with an appropriate action verb (for example, `Build` or `Maintain` for current work; `Migrated` or `Implemented` for previous work). Adapt tense and language naturally without changing the supported facts. This requirement overrides conflicting experience-bullet tense and pronoun guidance in `base/rules.md`.

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
