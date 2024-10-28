export interface Job {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    tools: string[];
    links?: { url: string; name: string; }[];
}

type Venture = {
    name: string;
    role: string;
    period: string;
    description: string;
    links?: { url: string; name: string; }[];
    features: string[];
    comingSoon: string[];
    tools: string[];
};

export interface ResumeData {
    personal: {
        name: string;
        title: string;
        email: string;
        linkedin: string;
    };
    ventures: Venture[];
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
