export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'QA' | 'DevOps' | 'Tools' | 'Database';
    level: number;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface PortfolioData {
    name: string;
    role: string;
    description: string;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
}

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    type?: 'text' | 'cv-preview';
    cvData?: any;
}
