export const resumeData = {
    personal: {
        name: "Daniel Israel",
        title: "Software Developer",
        email: "danny.israel@gmail.com",
        linkedin: "daniel-israel-software-dev"
    },
    experience: [
        {
            title: "Intermediate Front End Developer",
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
                "Developed SEO-optimized website using Astro",
                "Created testing dashboard with Firebase and Next.js",
                "Connected to the Zendesk API to scrape data and used GPT to transcribe and analyze it",
            ],
            tools: ["React-Native", "Astro JS", "Typescript", "Redux"]
        },
        {
            title: "React-Native & Next JS Developer",
            company: "University of British Columbia",
            period: "May 2020 - present",
            description: "Contributed, migrated, and then developed a social media poetry app",
            links: [{
                url: "https://www.phonemeproject.com",
                name: "PhoneMeProject.com"
            }],
            achievements: [
                "Implemented offline-capable poem creation with media uploads",
                "Migrated to serverless architecture, reducing costs by 97%",
                "Built responsive web version using Next.js"
            ],
            tools: ["React-Native", "Next JS", "Firebase", "Typescript"]
        },
        {
            title: "JS Electron Application Developer",
            company: "BARK Trading",
            period: "Nov 2022 - present",
            description: "Maintained trading application for lumber commodities",
            links: [],
            achievements: [
                "Ensured platform stability for critical trading operations",
                "Resolved calculation and alert system bugs"
            ],
            tools: ["Electron", "Javascript", "Firebase"]
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
                "Cross-platform mobile and web app with ReactExpo and Convex",
                "AI-powered chat planning with LLM integration",
                "Real-time collaboration with push notifications"
            ],
            tools: ["React Native", "Typescript", "OpenAI", "Convex", "Tailwind"]
        }
    ],
    education: [
        {
            school: "University of British Columbia",
            degree: "Bachelor of Computer Science",
            period: "September 2019 - May 2022",
            details: "Focus: Data Structures, Algorithms, Machine Learning"
        },
        {
            school: "Concordia University",
            degree: "Bachelor of Applied Human Sciences",
            period: "January 2009 - January 2014",
            details: "Dean's List"
        }
    ],
    skills: [
        "React/React-Native",
        "Typescript",
        "Redux",
        "Git",
        "HTML/CSS",
        "Machine Learning",
        "Data Structures"
    ],
    awards: [
        "3rd Place BC Shackathon 2019",
        "Dean's list"
    ],
    languages: [
        "Javascript/Typescript",
        "Python",
        "Java",
        "SQL"
    ]
} as const;

export type ResumeData = typeof resumeData;
