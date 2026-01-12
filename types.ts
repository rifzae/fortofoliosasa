
export interface SocialAccount {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  profilePic: string;
  about: string;
  socials: SocialAccount[];
  education: Education[];
  skills: {
    soft: string[];
    hard: Skill[];
  };
  experience: Experience[];
  documentation?: string[];
}
