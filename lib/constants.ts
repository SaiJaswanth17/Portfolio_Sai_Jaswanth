import { Project, Experience, Education, SkillCategory, Publication } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    icon: 'Code',
    skills: ['Java', 'C++', 'JavaScript', 'Kotlin', 'React', 'Next.js', 'Vite', 'Spring Boot']
  },
  {
    title: 'Databases & Tools',
    icon: 'Database',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Postman', 'VS Code', 'IntelliJ IDEA']
  },
  {
    title: 'CS Fundamentals',
    icon: 'Cpu',
    skills: ['OOPS', 'SDLC', 'Logical Problem Solving', 'Artificial Neural Networks (ANN)']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Solar Power Prediction',
    description: 'Developed a machine learning model using Artificial Neural Networks (ANN) to predict the performance of a solar still based on environmental parameters like temperature and solar radiation.',
    tech: ['Python', 'ANN', 'ML'],
    repoLink: 'https://github.com/SaiJaswanth17/Solar_Still_ANN',
    status: 'Completed',
    icon: 'Sun',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Project Management Tool',
    description: 'Designed an intuitive dashboard with role-based authentication and integrated CRUD operations to streamline project tracking and progress visualization.',
    tech: ['React', 'Node.js', 'MongoDB'],
    repoLink: 'https://github.com/SaiJaswanth17/Project_Management_Tool',
    status: 'Completed',
    icon: 'LayoutDashboard',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Customer Management System',
    description: 'Full Stack Java Project. Built using Spring Boot, incorporating robust authentication via JWT, Kafka for asynchronous messaging, and role-specific access controls.',
    tech: ['Spring Boot', 'JWT', 'Kafka'],
    repoLink: 'https://gitlab.com/AnkithRajGodugu/cms',
    status: 'Ongoing',
    icon: 'Users',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Dodging Lectures',
    description: 'Smart Attendance Monitoring System. Developed an RFID/NFC based attendance tracking system that automates student attendance marking and prevents proxy entries.',
    tech: ['IoT', 'RFID', 'Automation'],
    status: 'Completed',
    icon: 'Radio',
    color: 'from-blue-500 to-cyan-500'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'EY Global Delivery Services & AICTE',
    role: 'Full Stack Developer Intern',
    period: 'Feb - Mar 2025',
    description: 'MERN Stack Development. Worked on scalable web applications.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1x5srZiKokym7qVDtBTYyaAX9uTiPAyeC/view'
  },
  {
    company: 'Forage',
    role: 'AWS Solutions Architecture Job Simulation',
    period: 'Oct 2025',
    description: 'Designed cloud-native solutions using AWS services.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1L7rNjHyjuWzQyiJ8-nTOtK03hYkZdR6S/view'
  },
  {
    company: 'Forage',
    role: 'GenAI Powered Data Analytics Job Simulation',
    period: 'Aug 2025',
    description: 'Leveraged Generative AI for advanced data analytics workflows.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1Lr4K2tdjt3kuHbGy779tl5NOTRUXm5Tw/view'
  },
  {
    company: 'Eduskills',
    role: 'Android Developer Virtual Internship',
    period: 'Oct - Dec 2024',
    description: 'Developed native Android applications using Kotlin.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1-TWNOAoLhZGVOaazZ3J3U1t66RhStxuX/view'
  },
  {
    company: 'Brainovision',
    role: 'International Student Workshop on Data Science using Python',
    period: 'Feb 2024',
    description: 'Learned data analysis and visualization using Python.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1nXPS2SQY3pzaF5hEpt11hxI0wredRFJR/view'
  },
  {
    company: 'Eduskills',
    role: 'AI-ML Virtual Internship',
    period: 'Jan - Mar 2025',
    description: 'Learned AI-ML concepts and applied them to real-world problems.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1-TWNOAoLhZGVOaazZ3J3U1t66RhStxuX/view'
  },
  {
    company: 'IIT Bombay',
    role: 'Blender 3D Design and Training',
    period: 'Mar 2024',
    description: 'Learned 3D modeling and animation using Blender.',
    type: 'Certification',
    certificateLink: 'https://drive.google.com/file/d/1c3Woql6EPUJ_vQI9f2_oGK182ikhrHf4/view'
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor's Degree in CSE",
    institution: 'Guru Nanak Institute of Technology',
    period: '2022-2026',
    score: 'CGPA: 9.14/10'
  },
  {
    degree: 'Class 12th (MPC)',
    institution: 'Narayana Junior College',
    period: '2020-2022',
    score: 'Percentage: 95%'
  },
  {
    degree: 'Class 10th',
    institution: 'Triveni School,Bhadrachalam',
    period: '2019-2020',
    score: 'Percentage: 100%'
  }
];

export const PUBLICATION: Publication = {
  title: '"A System and Method for Performance Prediction of Solar Still Using Artificial Neural Networks"',
  appNo: '202541075902A',
  date: '05 Sep 2025',
  link: 'https://drive.google.com/file/d/1Ns4P0AGD9X8auCQ_LehbRWt4gK6gfR7u/view?usp=drive_link'
};

export const SOCIAL_LINKS = {
  email: 'saijaswanth1728@gmail.com',
  phone: '+91 9014978288',
  github: 'https://github.com/SaiJaswanth17',
  linkedin: 'https://www.linkedin.com/in/sai-jaswanth-a78110302/',
  resume: 'https://drive.google.com/file/d/1iyriXebhZo4XFNiBYEM3CF9M0sLAL0Pq/view?usp=drive_link'
};
