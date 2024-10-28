export interface Job {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    tools: string[];
}

export interface ResumeData {
    personal: {
        name: string;
        title: string;
        email: string;
        linkedin: string;
    };
    experience: Job[];
    education: {
        school: string;
        degree: string;
        period: string;
        details: string;
    }[];
    skills: string[];
    awards: string[];
    languages: string[];
}
