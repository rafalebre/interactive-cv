import { CVData } from '../types/cv';

export const cvData: CVData = {
  personalInfo: {
    name: "Rafael Lebre",
    title: "Full Stack Developer | JS | React | Python | Flask | CSS | REST API | SQL | MongoDB | GIT",
    email: "rafaellebre100@gmail.com",
    phone: "+34 644 66 41 57",
    location: "Barcelona",
    links: {
      linkedin: "https://www.linkedin.com/in/rafael-s-lebre",
      github: "https://github.com/rafalebre"
    }
  },
  summary: "Dynamic professional with a background in Marketing and a postgraduate specialisation in Digital Marketing, recently skilled in Full Stack Web Development from a 2023 bootcamp. Specialised in JS, React, Python, SQL, and related technologies, with experience creating applications aimed at strong market impact. Experience driving effective marketing campaigns, particularly in SEO and content analysis on platforms like TikTok and Meta. Eager to merge programming and marketing skills to drive innovative solutions in a tech-forward environment. Open to remote opportunities or potential relocation.",
  experience: [
    {
      company: "TELUS",
      role: "Social Media Content Analyst",
      period: "May '21 - Sep '23",
      location: "Barcelona, Catalonia, Spain",
      achievements: [
        "Executed in-depth monitoring and analysis of social media user-generated content, upholding META's privacy and safety guidelines and lowering the risk of non-compliance",
        "Developed and implemented a detailed content management tagging system for accurate categorization, enhancing review precision and operational efficiency",
        "Adapted content management methods for cases not directly addressed by standard policies",
        "Maintained high accuracy in decision-making for complex scenarios on social media platforms",
        "Implemented closely with team leaders and social media content specialists to refine moderation strategies, achieving and maintaining over 90% accuracy in content evaluations"
      ]
    },
    {
      company: "Majorel",
      role: "Social Media Content Analyst",
      period: "Feb '20 - May '21",
      location: "Barcelona, Spain",
      achievements: [
        "Monitored and analyzed user-generated content to ensure compliance with TikTok's privacy and safety guidelines, reducing the risk of non-compliance",
        "Implemented tagging systems for policy-specific content categorization, enhancing content review accuracy and efficiency",
        "Adapted moderation techniques for ambiguous cases not covered explicitly by existing policies, maintaining high decision accuracy in gray areas",
        "Collaborated with team leads and subject matter experts to streamline content moderation workflows, resulting in a 25% increase in process efficiency across the team"
      ]
    },
    {
      company: "Enterprise",
      role: "Customer Service Agent",
      period: "May '18 - Dec '19",
      location: "Amsterdam, Netherlands",
      achievements: [
        "Facilitated seamless customer experiences from contract initiation to vehicle return, enhancing customer satisfaction and loyalty",
        "Provided comprehensive support through direct contact, email, and phone, addressing inquiries and resolving issues promptly",
        "Managed daily office operations, including financial transactions and administrative tasks, ensuring operational efficiency",
        "Customized promotional deals and upgrades tailored to individual customer needs, boosting sales and customer engagement"
      ]
    },
    {
      company: "Social Media Freelancing",
      role: "Digital Marketing Strategist",
      period: "Dec '17 - Nov '18",
      location: "São Paulo Area, Brazil",
      achievements: [
        "Collaborated with partner companies to develop and implement targeted marketing campaigns",
        "Performed comprehensive market and competitive analysis, identifying key opportunities and threats to inform campaign strategies",
        "Directed online KPI analysis and enhanced campaign funding strategies, resulting in a 20% surge in campaign ROI",
        "Led the complete overhaul of social media strategies, introducing innovative campaigns that boosted engagement by 40% and traffic by 35%",
        "Partnered with journalists to pinpoint market trends and uncover gaps, effectively enhancing media coverage and public engagement",
        "Drove campaign updates proactively, briefing the team on necessary adjustments to maintain competitive edge and maximize results"
      ]
    },
    {
      company: "Crasso Music Label",
      role: "Marketing Assistant and Social Media Specialist",
      period: "Jan '15 - Dec '16",
      location: "São Paulo Area, Brazil",
      achievements: [
        "Developed and executed innovative newsletters (Crasso) that enhanced brand visibility and engagement",
        "Performed daily KPI tracking and monitoring, providing key insights for strategy adjustments",
        "Organized an event that led to record-breaking sales of records and significantly increased followers for both the label and its bands",
        "Retained existing customers and broadened market reach by coordinating live presentations in new cities",
        "Analyzed web data, managed content, and delivered detailed performance reports"
      ]
    }
  ],
  education: [
    {
      degree: "Full-Stack Web Development",
      institution: "4Geeks Academy España",
      period: "Dec '22 - Jun '23",
      certificateFile: "4geeks-certificate.pdf"
    },
    {
      degree: "Master's degree, Digital Marketing",
      institution: "Faculdade Projeção",
      period: "Jan '21 - Dec '21",
      certificateFile: "projecao-certificate.pdf"
    },
    {
      degree: "Bachelor's degree, Marketing",
      institution: "Centro Universitário da Grande Dourados",
      period: "Jan '18 - Dec '20",
      certificateFile: "unigran-certificate.pdf"
    },
    {
      degree: "Técnico em Gestão de Eventos",
      institution: "CETAP - RJ",
      period: "Jan '11 - Jan '13",
      certificateFile: "cetap-certificate.pdf"
    }
  ],
  projects: [
    {
      title: "React IG",
      description: "A full-stack social platform using React, Redux, and MongoDB, replicating core Instagram features like photo sharing, likes, and comments to demonstrate proficiency in modern web development",
      technologies: ["React", "Redux", "MongoDB", "Node.js", "Express"],
      link: "https://github.com/rafalebre/React_IG",
      deployedUrl: "https://react-ig-nu.vercel.app/"
    },
    {
      title: "Mini Blog",
      description: "A full-featured blogging platform built with React and Firebase, demonstrating CRUD operations and user authentication",
      technologies: ["React", "Firebase", "Authentication", "Cloud Storage"],
      link: "https://github.com/rafalebre/MiniBlog",
      deployedUrl: "https://mini-blog-omega-nine.vercel.app/"
    },
    {
      title: "Secret Word",
      description: "A React-based game for guessing words from hints, showcasing my skills in components, hooks, and UI design",
      technologies: ["React", "Hooks", "CSS", "JavaScript"],
      link: "https://github.com/rafalebre/Secret_Word_EN",
      deployedUrl: "https://secret-word-en.vercel.app/"
    }
  ],
  skills: [
    {
      category: "Technical Skills",
      items: [
        "JavaScript", "React.js", "Python", "Flask", "TypeScript", 
        "REST API", "Git", "Bootstrap", "PostgreSQL", "MySQL", "MongoDB"
      ]
    },
    {
      category: "Marketing & Digital",
      items: [
        "Digital Marketing", "Social Media Marketing", "SEO",
        "Content Strategy", "KPI Analysis"
      ]
    },
    {
      category: "Management & Analysis",
      items: [
        "Project Management", "Market Analysis", "Content Analysis",
        "Team Coordination", "Campaign Management"
      ]
    }
  ]
};