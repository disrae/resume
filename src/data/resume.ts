export const resumeData = {
    personal: {
        name: "Daniel Israel",
        title: "Software Developer",
        email: "danny.israel@gmail.com",
        linkedin: "daniel-israel-software-dev"
    },
    experience: [
        {
            title: "Front End Developer",
            company: "Goose Insurance",
            period: "July 2023 - Nov 2024",
            description: "Developer on React-Native App and Built AstroJS Website",
            links: [
                {
                    url: "https://www.gooseinsurance.com",
                    name: "gooseinsurance.com"
                },
                {
                    url: "https://www.smartbunny.com",
                    name: "smartbunny.com"
                },
                {
                    url: "https://apps.apple.com/ca/app/goose-insurance/id1382976076",
                    name: "The Goose App"
                },
            ],
            achievements: [
                "Worked on server-driven React Native app with dynamic UI updates",
                "Designed and implemented a recursive layout for backend-driven data rendering",
                "Developed SEO-optimized website using Astro, Tailwind, and CDN/Edge Network",
                "Created testing dashboard with Firebase and Next.js to parallelize testing",
                "Connected to the Zendesk API to scrape data and used GPT to transcribe and analyze it",
                "Created a video management dashboard for the marketing team to upload and manage videos"
            ],
            tools: ["React-Native", "Astro JS", "Typescript", "Redux", "Tailwind", "NextJS", "Firebase", "Push Notifications"]
        },
        {
            title: "Full Stack Developer",
            company: "University of British Columbia",
            period: "2020 - present",
            description: "Contributed, migrated, and then developed a social media poetry app",
            links: [{
                url: "https://www.phonemeproject.com",
                name: "phonemeproject.com"
            }],
            achievements: [
                "Implemented offline-capable poem creation with media uploads",
                "Migrated to serverless architecture, reducing costs by 97%, implemented as Progressive Web App (PWA)",
                "Created 3D search by rating poems on 5 axes and letting users select up to 3",
                "Built responsive web version using Next.js",
                "Complex debugging with Chrome Dev Tools"
            ],
            tools: ["React-Native", "Next JS", "Firebase", "Typescript"]
        },
        {
            title: "Full Stack Developer",
            company: "BARK Trading",
            period: "2022 - 2023",
            description: "Maintained trading application for lumber commodities",
            links: [],
            achievements: [
                "Ensured platform stability for critical trading operations",
                "Resolved calculation and alert system bugs"
            ],
            tools: ["Electron", "Javascript", "Firebase"]
        },
        {
            title: "Front End Developer",
            company: "ehsAI",
            period: "2020 - 2021",
            description: "Contributed to the development of a web-based pdf editor for correcting LLM output.",
            links: [],
            achievements: [
                "Ground up development of table building interface for correcting LLM output in a web based PDF editor",
                "Complex debugging with Chrome Dev Tools"
            ],
            tools: ["Preact", "Typescript", "SCSS", "CSS"]
        }
    ],
    ventures: [
        {
            name: "ChatPlanAI",
            role: "Founder",
            period: "2024 - present",
            description: "React Native Expo App for chat-based planning and collaboration.",
            links: [{
                url: "https://www.chatplanai.com",
                name: "ChatPlanAI.com"
            }],
            features: [
                "Cross-platform mobile and web app with React-Native (Expo) and Convex",
                "AI-powered chat planning with LLM integration",
                "Real-time collaboration with push notifications",
            ],
            tools: ["React Native", "Expo", "Convex", "Typescript", "Tailwind", "OpenAI", "Grok"]
        }
    ],
    education: [
        {
            school: "University of British Columbia",
            degree: "Bachelor of Computer Science",
            period: "2019 - 2022",
            details: "Data Structures, Algorithms, Machine Learning, Networking, Statistics, Computer Vision",
            awards: ["Third Place BCS hackathon 2019"]
        },
        {
            school: "Concordia University",
            degree: "Bachelor of Applied Human Sciences",
            period: "2009 - 2014",
            details: "Psychology, Sociology, Statistics, Research Methods",
            awards: ["Dean's List, Research Assistant, Teaching Assistant"]
        }
    ],
    skills: [
        "React.js",
        "React Native",
        "Expo",
        "Typescript",
        "Redux",
        "Git",
        "HTML/CSS",
        "Machine Learning",
        "Data Structures",
        "Algorithms",
        "Next JS",
        "Astro JS",
        "Tailwind",
        "Convex",
        "Dynamic and Versatile",
        "Problem Solving"
    ],
    awards: [
        "3rd Place BC Shackathon 2019",
        "Dean's list"
    ],
    languages: [
        "Javascript",
        "Typescript",
        "Python",
        "Java",
        "C"
    ]
} as const;

export type ResumeData = typeof resumeData;
