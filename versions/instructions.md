# Resume Generation Playbook

Read this file + `experience-tracker.md` before doing anything.

## 1. Fit Check

Compare job reqs against `experience-tracker.md`. STOP if:

- Primary tech is not something I have experience in (Typescript, application
  development)
- Requires 5+ yrs exp or "Staff/Principal" level
- Domain requires certs/clearance we don't have
- Is not based in Vancouver or remote (I am based in Vancouver)/

Confirmed stack: React, React Native, TypeScript, JS, Python, Next.js, Expo,
Redux, Tailwind, AstroJS, Firebase, GCP, Node.js, Flask, SQL, Firestore, REST
APIs, Git.

If not a fit, say why and stop.

## 2. Pick Template

- Role title has "frontend"/"front end"/"UI" OR >70% of reqs are frontend: use
  `generator/base-frontend.html`
- Everything else: use `generator/base-fullstack.html`

## 3. Copy & Customize

Copy chosen base to `generator/versions/index-{Company}-{Title}.html`.

**Change ONLY these 3 things:**

### a) Title

`<!-- CUSTOMIZE:TITLE -->` line — set to exact job title from posting.

### b) Professional Summary

`<!-- CUSTOMIZE:SUMMARY -->` section — rewrite 2-3 sentences. Echo keywords from
job posting. Source claims ONLY from `experience-tracker.md`. Keep concise, no
fluff.

### c) Skills Order

`<!-- CUSTOMIZE:SKILLS_ORDER -->` section — reorder the 4 grid cells so most
relevant category appears first (top-left). **Do NOT add or remove
technologies.** Only reorder the cells and optionally reorder items within
cells.

## 4. Embed Job JSON

Insert `<script type="application/json" id="job-application-data">` block right
after `<head>` closing tag. Format:

```json
{
  "company": "",
  "jobTitle": "",
  "appliedDate": "YYYY-MM-DD",
  "status": "Applied",
  "salaryRange": "",
  "location": "",
  "workType": "",
  "companyDescription": "",
  "requirements": [],
  "niceToHave": [],
  "jobPostingUrl": "",
  "applicationSource": "",
  "templateUsed": "frontend|fullstack"
}
```

## 5. Hard Rules

- **DO NOT** rewrite bullet points under experience
- **DO NOT** add techs not in `experience-tracker.md` confirmed skills
- **DO NOT** invent or exaggerate experience
- **DO NOT** modify education, projects, or contact info
- Bullets are LOCKED in the base templates

## 6. Generate PDF

```bash
node generate-pdf.js {Company}-{Title}
```

## 7. File Naming

`index-{CompanyName}-{JobTitle}.html` — PascalCase, no spaces. Examples:
`index-Shopify-FrontendDeveloper.html`, `index-Stripe-SoftwareEngineer.html`
