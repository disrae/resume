# Resume Version Management Instructions

Read the job description provided, assess if it is a good match, if it is not a
good match skip this and return explaining it is not a good match. If it is a
good match go ahead and follow the instructions below.

You must stay true to the experiences I have actually had, you cannot say I have
done things that I have not, you can only frame them in a new way but you must
stay true to my experiences.

## File Naming Convention

- **Format**: `index-{CompanyName}-{JobTitle}.html`
- **Examples**:
  - `index-TrustFlight-ReactSoftwareEngineer.html`
  - `index-Google-SeniorSoftwareEngineer.html`
  - `index-Microsoft-FrontendDeveloper.html`

## Purpose

- Enable tracking multiple job applications per company
- Support future analytics with timestamps and job-specific data
- Maintain clean version control for different roles

## Reference Files

- **Experience Source**: `experience-tracker.md` - Complete record of all
  professional experience, skills, and achievements
- **Link for prompts**: When using AI tools for resume generation, reference
  both this instructions file and the experience-tracker.md file

## Workflow

1. **Start New Session**: User pastes job description
2. **Read Instructions**: Always check this file first
3. **Embed Job Data**: Add structured JSON block with job details to HTML file
4. **Create Version**: Copy `index.html` to
   `versions/index-{CompanyName}-{JobTitle}.html`
5. **Customize Content**: Tailor resume for specific job requirements
6. **Generate PDF**: Run `node generate-pdf.js {CompanyName}-{JobTitle}`

## Job Data Embedding

Embed comprehensive job information as JSON in each resume file for future
dashboard/analytics:

```html
<script type="application/json" id="job-application-data">
  {
    "company": "TrustFlight",
    "jobTitle": "Software Engineer (React & TypeScript)",
    "appliedDate": "2026-02-03",
    "status": "Applied",
    "salaryRange": "$90K-$110K CAD",
    "location": "Vancouver, BC - On-site",
    "workType": "Full-time",
    "companyDescription": "TrustFlight is an innovative aviation software company that specializes in developing cutting-edge AI, digital workflow, and analytics applications for the aviation industry. Our software empowers many of the world's airlines, business jet operators, MROs, training organizations, and aviation service providers to enhance safety, streamline operations, and improve overall efficiency. We are one of the largest independent software providers in aviation, trusted by more than 1,600 organizations in over 120 countries.",
    "mission": "To revolutionize aviation by delivering digital workflow solutions that enhance safety, streamline operations, and inspire confidence across the industry.",
    "impact": "Over 200,000 users rely on our systems every day for operational safety, compliance management, and mission-critical decision-making.",
    "coreValues": ["Integrity", "Responsibility", "Innovation", "Excellence"],
    "team": "SmartDoc team - AI-powered document authoring platform for aviation professionals",
    "roleType": "Frontend-focused, full-stack role",
    "responsibilities": [
      "Build modern, responsive user interfaces using React, TypeScript, Zustand, and Vite",
      "Design and maintain modular frontend architectures and state management solutions",
      "Establish scalable folder structures, shared component libraries, and reusable patterns",
      "Integrate frontend features with backend services via REST APIs (Node/Nest.js)",
      "Collaborate with backend engineers on API contracts and data flows",
      "Implement automated testing using Jest and React Testing Library, contribute to E2E tests",
      "Drive frontend performance improvements through code splitting, lazy loading, and profiling",
      "Maintain and expand Storybook for component documentation",
      "Apply modern AI tooling to document authoring workflows",
      "Participate in system design discussions and sprint planning"
    ],
    "requirements": [
      "3-5 years professional experience building web applications, frontend focus",
      "Strong experience with React and TypeScript, complex stateful UIs",
      "Frontend state management (Zustand, Redux, or similar)",
      "Maintainable, modular frontend code with reusable components",
      "Experience integrating with REST APIs and collaborating with backend engineers",
      "Automated testing with Jest and React Testing Library, E2E testing",
      "Frontend performance considerations (rendering, code splitting, lazy loading)",
      "Modern AI tooling application to improve workflows",
      "Strong software engineering fundamentals and testing discipline",
      "Growth mindset and continuous learning approach",
      "Clear communication and ownership over code quality",
      "Bachelor's degree in CS/Software Engineering or equivalent experience"
    ],
    "niceToHave": [
      "Experience with Node.js or Nest.js",
      "Familiarity with Storybook or component-driven development",
      "Experience with document editors, rich text editing, complex form-based UIs",
      "Performance profiling or frontend optimization beyond basics",
      "Interest in aviation, compliance, or safety-critical software"
    ],
    "benefits": [
      "Comprehensive benefits package including health and dental benefits",
      "Paid time off plus an extra day off to celebrate your birthday",
      "Company contribution to pension/RRSP matching program",
      "Professional growth and career advancement opportunities",
      "Freedom to innovate, build, and create solutions for digital aviation"
    ],
    "whyJoin": [
      "Direct impact on aviation safety affecting hundreds of thousands monthly",
      "Part of fast-growing company at inflection point with AI tools and SaaS",
      "Freedom to innovate and build solutions that define digital aviation future"
    ],
    "customizationNotes": [
      "Emphasized document editing experience from ehsAI coop",
      "Highlighted React/TypeScript expertise across multiple projects",
      "Focused on AI-assisted development and modern tooling experience",
      "Removed any fabricated safety-critical references",
      "Emphasized automation systems and performance optimization"
    ],
    "interviewPrep": [
      "Prepare examples of document editing interfaces and complex UIs",
      "Discuss AI tooling workflow and development acceleration",
      "Research SmartDoc platform and aviation compliance documentation",
      "Highlight experience with performance optimization and testing",
      "Demonstrate collaborative experience with backend engineers"
    ],
    "jobPostingUrl": "",
    "applicationSource": "LinkedIn",
    "contactInfo": ""
  }
</script>
```

## Content Customization Guidelines

- **Focus on Relevance**: Emphasize experience matching job requirements
- **Source of Truth**: ALWAYS reference `experience-tracker.md` for accurate
  experience details
- **Maintain Accuracy**: Only use existing experience from baseline resume AND
  experience-tracker.md
- **No Fabrication**: NEVER invent, exaggerate, or include
  technologies/experience not in experience-tracker.md
- **Highlight Keywords**: Include job-specific terminology naturally from your
  actual experience
- **Quantify Impact**: Show measurable results and achievements from documented
  experience

When generating new resume, provide any suggestions back in the chat, for
example, you can interview me in the chat to try and see if there is any more
experience that I forgot to mention. Upon which you can update the
experience-tracker file and regenerate the new resume.

## Technical Notes

- PDFs save to `versions/pdf/` subdirectory
- Baseline `index.html` stays untouched
- Each version represents one job application

## Begin trying to identify patterns here, log themes here and update as you go.

- **TrustFlight**: Emphasize document editing, React/TypeScript, aviation
  software
- **Default**: Full-stack development, AI tooling, performance optimization
