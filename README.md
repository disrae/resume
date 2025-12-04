# AI Resume Builder

Use your AI powered IDE to paste in relevant data and update the resume in index.html. Run `npm run gen` to output the pdf.

---

## Quick Start

You'll need [Cursor](https://cursor.sh) (or another AI editor) and Node.js.

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

**Ideas**
- Resume follows an ATS friendly template (Single column, simple, etc).
- Copy-paste your current resume to the LLM (Cursor/Windsurf) to turn my resume into yours.
- Copy-paste a job description: *"Optimize the resume for this job posting"*. Change the output file name in the JS file to make it bespoke.
- Add work experience: *"Use my exported jira tickets to populate my work"*
- Generate from notes: *"Turn these work notes into resume bullets"*
- Run your resume through an ATS system like [Jobscan](https://www.jobscan.co) to iterate.
