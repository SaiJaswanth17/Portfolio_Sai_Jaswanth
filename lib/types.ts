export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoLink?: string;
  liveLink?: string;
  status?: 'Completed' | 'Ongoing';
  icon: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'Internship' | 'Job' | 'Simulation' | 'Certification';
  certificateLink?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Publication {
  title: string;
  appNo: string;
  date: string;
  link: string;
}
