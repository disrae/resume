# AI Resume Generator

Create resumes that pass ATS systems by chatting with your AI assistant. Open `index.html` in Cursor, tell your AI what to change, and export a clean PDF.

## Features

- **AI-Powered Editing** - Use natural language to update your resume (copy-paste job descriptions, work logs, etc.)
- **ATS-Optimized** - Clean HTML structure that applicant tracking systems love
- **Simple PDF Export** - One command generates a professional PDF
- **Version Control** - Git branches for different job applications

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

Open `index.html` and start talking to your AI assistant. Tell it what to change - that's literally it.

---

## How It Works

Open `index.html` in Cursor and tell your AI assistant what to change. Copy-paste job descriptions, work logs, or just describe what you want.

**Examples:**
- Copy-paste a job description: *"Optimize this resume for this job posting"*
- Add work experience: *"Use my exported jira tickets to populate my work"*
- Generate from notes: *"Turn these work notes into resume bullets"*

**Commands:**
- `npm run gen` - Generate PDF version of resume
- `npm run dev` - Render in browser (faster preview, not letter-sized)

## Why This Works for ATS

- **Clean HTML structure** with proper headings
- **No fancy formatting** that confuses parsers
- **Standard fonts** that ATS systems can read
- **Keyword-friendly** content that your AI helps optimize

## Commands

```bash
npm run gen          # Generate PDF
npm run dev          # Preview in browser (optional)
```

## Customization

Your AI assistant handles most customization. For manual tweaks, edit the HTML directly or tell your AI exactly what you want changed.

## Resources

- **[ATS Guide](ATS-OPTIMIZATION-GUIDE.md)** - Tips for beating applicant tracking systems
- [Jobscan](https://www.jobscan.co) - ATS resume checker once a resume is generated for a job.
- [Cursor](https://cursor.sh) - AI editor I built this with

