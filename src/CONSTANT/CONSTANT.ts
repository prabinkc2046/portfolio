import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import ListSkills from '../components/SkillSection/ListSkill/ListSkill';
import Experience from '../components/Experience/Experience';
import ProjectList from '../components/ProjectSection/ProjectList/ProjectList';
import Education from '../components/Education/Education';
import Testimony from '../components/Testimony/Testimony';
import { Contact } from '../components/Contact/Contact';
import Repository from '../components/Repository/Repository';
import Chat from '../components/ChatSection/Chat/Chat';

import {
  ExperienceType,
  CategorizedSkillType,
  TestimonyType,
  UniversityType,
  ContactType,
  NavMenuItemType,
  SectionType,
} from '../CONSTANT/CONSTANT.types';

export const profileIntro: string =
  'Dynamic professional skilled in system engineering and full-stack development. Proficient in Python, JavaScript, AWS, and DevOps tools like Docker and Kubernetes. Expert in building robust web apps with React, optimizing performance, and ensuring system reliability. Passionate about teamwork, mentoring, and solving complex challenges to drive business success.';

export const experience: ExperienceType[] = [
  {
    role: 'Software Support Technician',
    company: 'Xacom',
    duration: 'June 2021 - June 2022',
    details:
      'Collaborated with clients, stakeholders, and vendors to manage backups, disaster recovery, and system performance. Documented IT activities and reported on system performance. Worked with developers and support teams to resolve technical issues, escalating complex problems when necessary. Monitored and addressed routine system performance issues to ensure reliability and efficiency.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Self-employed',
    duration: 'June 2022- Jan 2023',
    details:
      'DevOps professional with expertise in CI/CD, infrastructure as code, and cloud technologies. Proficient in Docker, Kubernetes, Ansible, Bash scripting, and AWS. Skilled in optimizing workflows and enhancing system reliability. Ready to collaborate, mentor, and drive business improvements.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Self-employed',
    duration: 'Jan 2023 - Present',
    details:
      'Full Stack Developer skilled in React.js, state management, and performance optimization. Experienceth React, Next.js, Node.js, Express.js, Apollo GraphQL, and Mongoose. Proficient in JavaScript, TypeScript, HTML, CSS, and testing frameworks. Eager to collaborate, mentor, and drive impactful projects in dynamic teams.',
  },

  // Add more experience needed
];

export const categorizedSkills: CategorizedSkillType[] = [
  {
    relatedArea: 'Frontend Development',
    skills: [
      { name: 'TypeScript', level: 70, icon: 'fab fa-js-square' },
      { name: 'React', level: 85, icon: 'fab fa-react' },
      { name: 'Bootstrap', level: 75, icon: 'fab fa-bootstrap' },
      { name: 'Tailwind CSS', level: 70, icon: 'fa fa-cogs' },
      { name: 'Redux', level: 70, icon: 'fas fa-puzzle-piece' },
      { name: 'Context API', level: 80, icon: 'fas fa-cogs' },
      { name: 'API Integration', level: 80, icon: 'fas fa-plug' },
      { name: 'React Query', level: 70, icon: 'fas fa-search' },
    ],
  },
  {
    relatedArea: 'Backend Development',
    skills: [
      { name: 'Python', level: 80, icon: 'fab fa-python' },
      { name: 'Node.js', level: 70, icon: 'fab fa-node' },
    ],
  },
  {
    relatedArea: 'Frameworks',
    skills: [
      { name: 'React', level: 85, icon: 'fab fa-react' },
      { name: 'FastAPI', level: 75, icon: 'fas fa-cogs' },
      { name: 'Express.js', level: 70, icon: 'fas fa-code' },
      { name: 'Django', level: 65, icon: 'fab fa-python' },
      { name: 'Bootstrap', level: 70, icon: 'fab fa-bootstrap' },
    ],
  },
  {
    relatedArea: 'Operating Systems',
    skills: [
      { name: 'Linux', level: 90, icon: 'fas fa-linux' },
      { name: 'Windows Server', level: 70, icon: 'fas fa-windows' },
    ],
  },
  {
    relatedArea: 'Scripting',
    skills: [
      { name: 'Bash Scripting', level: 85, icon: 'fas fa-terminal' },
      { name: 'PowerShell', level: 65, icon: 'fas fa-terminal' },
    ],
  },
  {
    relatedArea: 'Cloud Platforms',
    skills: [
      { name: 'AWS', level: 75, icon: 'fab fa-aws' },
      { name: 'Linode Cloud', level: 65, icon: 'fas fa-cloud' },
    ],
  },
  {
    relatedArea: 'Containerization',
    skills: [{ name: 'Docker', level: 80, icon: 'fab fa-docker' }],
  },
  {
    relatedArea: 'Orchestration',
    skills: [{ name: 'Kubernetes', level: 65, icon: 'fas fa-cube' }],
  },
  {
    relatedArea: 'Networking',
    skills: [
      { name: 'Networking', level: 85, icon: 'fas fa-network-wired' },
      { name: 'Firewalls', level: 65, icon: 'fas fa-shield-alt' },
    ],
  },
  {
    relatedArea: 'Databases',
    skills: [
      { name: 'MongoDB', level: 75, icon: 'fas fa-database' },
      { name: 'MySQL', level: 70, icon: 'fas fa-database' },
      { name: 'Redis', level: 60, icon: 'fas fa-memory' },
    ],
  },
  {
    relatedArea: 'Version Control',
    skills: [{ name: 'Git', level: 85, icon: 'fab fa-git' }],
  },
  {
    relatedArea: 'CI/CD Tools',
    skills: [
      { name: 'GitHub Actions', level: 75, icon: 'fab fa-github' },
      { name: 'Jenkins', level: 65, icon: 'fas fa-cogs' },
    ],
  },
  {
    relatedArea: 'AI',
    skills: [
      { name: 'AI', level: 5, icon: 'fas fa-robot' },
      { name: 'Pandas', level: 5, icon: 'fas fa-table' },
      { name: 'scikit-learn', level: 5, icon: 'fas fa-brain' },
    ],
  },
];

export const skills = [
  'AI',
  'All',
  'Prompt Engineering',
  'React',
  'API Development',
  'FastAPI',
  'Django',
  'Flask',
  'Web Deployment',
  'Web Servers',
  'Linux',
  'DBMS',
  'Python',
  'CI/CD',
  'Node.js',
  'AWS',
  'Ansible',
  'Docker',
  'Kubernetes',
  'Scripting',
];

export const defaultSkillArea = categorizedSkills[0].relatedArea;

export const testimonies: TestimonyType[] = [
  {
    name: 'Tom Morley',
    position: 'General Manager, Xacom',
    testimony:
      'Prabin is a kind and generous individual, whose indefatigable positivity was an asset to our workplace. He is passionate about finding novel solutions to systemic challenges and is always eager to learn and explore new technologies.',
  },
  {
    name: 'Claudinei Pereira de Sousa',
    position: 'Software Support Technician, Xacom',
    testimony:
      'I have the chance to work alongside Prabin, and what a pleasure to work with. Great contribution to my workloads, always providing good insights and eager to help and lean from experienceam sure your success is already part of your professional journey. Hope to collaborate with you in other jobs again soon!',
  },
  {
    name: 'Minol Pamosha',
    position: 'RPA Engineer, Accario Global',
    testimony:
      "I had the pleasure of working with Prabin on an automated script project, and I am incredibly impressed with his expertise in Python. Prabin's technical skills are top-notch, and he demonstrated a deep understanding of automation processes. He was not only efficient in coding but also proactive in troubleshooting and optimizing the script to meet my needs perfectly. Prabin's professionalism, attention to detail, and ability to deliver quality work on time make him an excellent choice for any Python-related project. I highly recommend Prabin for his exceptional skills and dedication to his work.",
  },

  // Add more testimonies as needed
];

export const universities: UniversityType[] = [
  {
    name: 'Melbourne Institute of Technology',
    degree: 'Master of Networking',
    finishedYear: '2019',
    score: 'Distinction',
    subjects: [
      { name: 'Advanced Network Design', score: 'HD' },
      { name: 'Cyber Security and Analytics', score: 'D' },
      {
        name: 'Fundamentals of Operating Systems and Programming',
        score: 'HD',
      },
      { name: 'Data and Information Management', score: 'HD' },
      { name: 'Network Management in Organisations', score: 'HD' },
      { name: 'Overview of Network Security', score: 'HD' },
    ],
  },
  {
    name: 'Tribhuvan University',
    degree: 'Master of Physics',
    finishedYear: '2016',
    score: 'Distinction',
    subjects: [
      { name: 'Solid State Physics', score: '89%' },
      { name: 'Mathematical Physics', score: '75%' },
      { name: 'Quantum Theory and Spectroscopy', score: '71%' },
      { name: 'Electromagnetism and Electronics', score: '79%' },
      { name: 'Quantum Mechanics and Electrodynamics', score: '71%' },
      { name: 'Solid State Physics', score: '85%' },
    ],
  },
];

export const contactList: ContactType[] = [
  {
    iconClass: 'fas fa-envelope',
    href: 'mailto:pkmiracle36@gmail.com',
    displayName: 'pkmiracle36@gmail.com',
    link: 'pkmiracle36@gmail.com',
  },
  {
    iconClass: 'fas fa-phone',
    href: 'tel:+61473654956',
    displayName: '+61473654956',
    link: '+61473654956',
  },
  {
    iconClass: 'fab fa-linkedin',
    href: 'https://www.linkedin.com/in/prabin-kc/',
    displayName: 'LinkedIn',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    iconClass: 'fab fa-youtube',
    href: 'https://www.youtube.com/@prabin-demo/featured',
    displayName: 'CodeMindTV',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    iconClass: 'fab fa-upwork',
    href: 'https://www.upwork.com/freelancers/~01c69796f65626dcd9?s=1110580755107926016',
    displayName: 'Upwork',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    iconClass: 'fab fa-github',
    href: 'https://github.com/prabinkc2046?tab=repositories',
    displayName: 'Git Hub',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export const NavbarMenuItemsList: NavMenuItemType[] = [
  { id: '#personal-info', displayName: 'Me' },
  { id: '#skills', displayName: 'Skills' },
  { id: '#experience', displayName: 'Experience' },
  { id: '#projects', displayName: 'Projects' },
  { id: '#education', displayName: 'Education' },
  { id: '#testimony', displayName: 'Testimony' },
  { id: '#contact', displayName: 'Contact' },
  { id: '#chat', displayName: 'Got Questions?' },
];

export const sectionList: SectionType[] = [
  { id: 'personal-info', component: PersonalInfo },
  { id: 'skills', component: ListSkills },
  { id: 'experience', component: Experience },
  { id: 'projects', component: ProjectList },
  { id: 'education', component: Education },
  { id: 'repo', component: Repository },
  { id: 'testimony', component: Testimony },
  { id: 'contact', component: Contact },
  { id: 'chat', component: Chat },
];
