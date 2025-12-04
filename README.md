# AI Resume Builder

Use your AI powered IDE to paste in relevant data and update the resume in index.html. 

Run `npm run gen` to output the pdf.

## Overview
- Resume follows an ATS friendly template (Single column, simple, etc).
- Copy-paste your current resume to the LLM (Cursor/Windsurf) to turn my resume into yours.
- Copy-paste a job description: *"Optimize the resume for this job posting"*
- Add work experience: *"Use my exported jira tickets to populate my work"*
- Generate from notes: *"Turn these work notes into resume bullets"*
- Run your resume through an ATS system like [Jobscan](https://www.jobscan.co) to iterate.

## Version Management

Keep your baseline resume clean with **company-specific versions**:
- **Baseline**: `index.html` stays general-purpose (your master resume)
- **Custom versions**: When applying to companies, the AI creates `index-CompanyName.html` files
- Generate custom PDFs: `node generate-pdf.js CompanyName` → `Daniel Israel - CompanyName Resume.pdf`

This prevents version drift and keeps your baseline resume pristine while allowing unlimited company-specific customizations!

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

