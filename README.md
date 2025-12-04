# AI Resume Builder

Use your AI powered IDE to paste in relevant data and update the resume in index.html. Run `npm run gen` to output the pdf.

---

## Quick Start

You'll need [Cursor](https://cursor.sh) (or another AI editor), Node.js, and Git.

```bash
git clone https://github.com/disrae/resume.git
cd resume
npm install
cursor .
# Edit your resume using pasted Job Descriptions into cursor, and natural language about your work... 
npm run generate # to generate the pdf
npm run dev # to iterate just on the content of the pdf, but won't show true layout on letter sized sheet.
```

---

**Examples:**
- Copy-paste your current to the LLM to update my resume and turn it into yours.
- Copy-paste a job description: *"Optimize this resume for this job posting"*
- Add work experience: *"Use my exported jira tickets to populate my work"*
- Generate from notes: *"Turn these work notes into resume bullets"*

**Commands:**
- `npm run gen` - Generate PDF version of resume
- `npm run dev` - Render in browser (faster preview, not letter-sized)

## Notes
You can run your resume through an ATS system like [Jobscan](https://www.jobscan.co) to iterate.

