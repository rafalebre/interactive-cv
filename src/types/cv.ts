// Define types for CV data
export interface Education {
    institution: string;
    degree: string;
    period: string;
  }
  
  export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    achievements: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    deployedUrl?: string;
  }
  
  export interface Skill {
    category: string;
    description?: string;
    items: string[];
  }
  
  export interface CVData {
    personalInfo: {
      name: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      links: {
        linkedin: string;
        github: string;
      };
    };
    summary: string;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skill[];
  }