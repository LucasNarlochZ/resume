# Resume Template

Use this structure for every `resume.md` file. Write the content in the resume's target language, but keep the Markdown structure unchanged.

```markdown
---
name: <full name>
title: <target role>
output: <snake_case_output_name>
phone: <phone number>
email: <email address>
location: <city - state, country>
link: GitHub | <GitHub URL>
link: LinkedIn | <LinkedIn URL>
link: Portfolio | <portfolio URL>
---

## Summary

<A concise professional summary tailored to the target role.>

## Technical Skills

- **<Category>:** <skill>, <skill>, <skill>
- **<Category>:** <skill>, <skill>, <skill>

## Experience

### <Role> - <Company> | <MM/YYYY> - <Present or MM/YYYY>

- <Achievement or responsibility with action, context, and measurable result.>
- <Achievement or responsibility with action, context, and measurable result.>

## Projects

### <Project name>

<Short description focused on the problem, implementation, scale, and result.>

_Technologies: <technology>, <technology>, <technology>_

[Code](<repository URL>) | [Live demo](<application URL>)

## Education

### <Degree> - <Institution> | <MM/YYYY> - <MM/YYYY>

<Optional scholarship, distinction, or relevant coursework.>

## Certifications

- **<Certification>** - <Issuer> | <MMM/YYYY>

## Languages

- **<Language>:** <proficiency>
- **<Language>:** <proficiency>
```

## Rules

- Keep the front matter at the beginning of the file and delimit it with `---`.
- Include `name`, `title`, `output`, `phone`, `email`, and `location`. The `output` field is required by the generator and must not include a file extension.
- Add each profile URL as a separate `link: <label> | <URL>` entry.
- Use `##` for section headings and `###` for experience, project, and education entries.
- Separate an entry title and its date range with ` | ` so the generator aligns the dates to the right.
- Use `MM/YYYY` for numeric date ranges and `MMM/YYYY` for certification dates.
- Write experience achievements as `- ` list items. Start each item with a strong action verb and quantify the result when possible.
- Write skill and language categories as `- **Category:** ...` entries.
- Put each project's technology list on its own fully italicized line.
- Put project links on their own line, separated by ` | `. Remove unavailable links instead of leaving placeholders.
- Keep Summary, Technical Skills, Experience, Projects, Education, and Languages. Certifications is optional.
- Tailor the summary, skills, achievement order, and project order to the target role. Education may appear before Technical Skills when academic background is central to the application.
- Use the translated section names for Portuguese resumes: `Resumo`, `Competências Técnicas`, `Experiência`, `Projetos`, `Formação`, `Certificados`, and `Idiomas`.
- Do not use level-one headings in a resume; the generated document header comes from the front matter.
