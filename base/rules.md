# Resume Source Rules

## Purpose

The files in `base/` are the complete English source of truth for Lucas Narloch Zabla's resumes. Use them to create role-specific `resume.md` files; do not copy every available item into a single final resume.

## Accuracy

- Use only facts present in these source files.
- Do not invent or exaggerate responsibilities, seniority, leadership, metrics, dates, technologies, proficiency, or project scope.
- Preserve exact metrics when used: deployment time from approximately 12 to 5 minutes, endpoint latency from 7–10 seconds to approximately 1.5 seconds (79–85%), approximately 64% monthly network-cost reduction (US$90 to US$32), 20% total AWS-cost reduction, 75% CloudWatch-spend reduction (US$120 to US$30 per month), more than 40,000 notifications per day, 120 integration tests, 300 unit tests, 113 to 5 Lambda errors per five-minute interval, 33 HTTP endpoints, more than 100 Sunlog.dev tests, and 196 PocScript tests.
- Describe the SmartLy experience as two roles: `Backend Developer` from `10/2026 - Present` and `Backend Developer Intern` from `10/2024 - 09/2026`.

## Content Selection

- Tailor each resume to the target role and job description.
- Select one positioning statement from `profile.md` and adapt it without changing its facts.
- Prioritize the most relevant skills, experience bullets, and projects instead of including everything.
- Preserve the strongest measurable version of an achievement and avoid repeating the same achievement in different words.
- Order experience bullets by relevance to the target role.
- Order projects by relevance to the target role.
- Prefer Sunlog.dev and PocScript for backend, cloud, DevOps, and software engineering roles.
- Prefer Sunlog.dev and PCBuilderBR for full stack and frontend-oriented roles.
- Use education before skills or experience when academic background is central to an internship application.

## Writing

- Write concise, factual, achievement-oriented content.
- Begin experience bullets with strong first-person action verbs.
- Include context, implementation, and measurable impact when available.
- Use first-person past tense for every experience bullet.
- Avoid vague claims, keyword stuffing, repeated technologies, and unsupported adjectives.
- Use the language requested for the final resume and preserve correct accents in Portuguese.
- Translate meaning naturally rather than word for word.

## Formatting

- Follow the root `TEMPLATE.md` when creating a generator-ready `resume.md`.
- Keep front matter complete and set `output` to a snake_case filename stem without an extension.
- Use `##` for resume sections and `###` for roles, projects, and education entries.
- Separate entry titles and dates with ` | `.
- Put project technologies on a fully italicized line and project links on a separate line.
- Remove optional sections or links cleanly when they are not relevant or available.
- Keep the final resume focused and short enough for the generated document to remain readable.

## Maintenance

- Update the appropriate source file before using new information in a resume.
- Store contact details, links, languages, and positioning statements in `profile.md`.
- Store professional responsibilities and achievements in `experience.md`.
- Store project facts, technologies, and links in `projects.md`.
- Store the deduplicated skill inventory in `skills.md`.
- Store education and certifications in `education.md`.
- Keep `base/resume.md` as a generated-resume source, separate from this content library.
- Exclude `mari.md`; it belongs to a different person.
