import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import ListSkills from '../components/SkillSection/ListSkill/ListSkill';
import Experience from '../components/Experience/Experience';
import ProjectList from '../components/ProjectSection/ProjectList/ProjectList';
import Education from '../components/Education/Education';
import Testimony from '../components/Testimony/Testimony';
import { Contact } from '../components/Contact/Contact';
import Repository from '../components/Repository/Repository';
import Chat from '../components/Chat/Chat';
import {
  faThermometerFull,
  faFileAlt,
  faLaptopCode,
  faDatabase,
  faChartLine,
  faCodeBranch,
  faCloud,
  faServer,
  faLock,
  faTools,
  faFileCode,
  faCloudUploadAlt,
  faBacon,
  faBox,
  faCube,
} from '@fortawesome/free-solid-svg-icons';

import {
  ProjectType,
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

export const projects: ProjectType[] = [
  {
    name: 'Personal Portfolio Website',
    description:
      'Developed a responsive portfolio website using React and TypeScript to showcase projects, skills, and experience.',
    outcome:
      'Created a visually appealing and user-friendly platform to enhance personal branding and job prospects.',
    skills: [
      'React',
      'TypeScript',
      'Styled Components',
      'CSS',
      'HTML',
      'JavaScript',
      'GitHub Pages',
      'Git',
      'Responsive Design',
      'Context API',
    ],
    githubLink: 'https://github.com/prabinkc2046/portfolio',
    icon: faLaptopCode,
  },
  {
    name: 'Temperature Dashboard',
    description:
      'Developed a full-stack application for visualizing temperature data using Next.js with TypeScript, Plotly, and MongoDB, with a focus on user interactivity and real-time data fetching.',
    outcome:
      'Provided a comprehensive dashboard for analyzing and visualizing temperature trends across multiple locations, enhancing data accessibility and decision-making.',
    skills: [
      'Next.js',
      'React',
      'Plotly',
      'MongoDB',
      'Node.js',
      'TypeScript',
      'API Development',
    ],
    githubLink:
      'https://github.com/prabinkc2046/TemperatureDashboard_Frontend_NextJS',
    icon: faChartLine,
    youtubeLink: 'https://temperature-dashboard-frontend-next-js.vercel.app/',
  },
  {
    name: 'Temperature Data API',
    description:
      'A RESTful API for managing and querying temperature data by location. Built with Express, TypeScript, and MongoDB, this API supports efficient filtering of temperature data by date ranges and the last N days. Caching mechanisms are implemented to optimize data access.',
    outcome:
      'Provides an efficient and scalable solution for retrieving and managing temperature data.',
    skills: ['TypeScript', 'MongoDB', 'API Development', 'Node'],
    githubLink:
      'https://github.com/prabinkc2046/TemperatureDashboard_Backend_NodeJS_TypeScript_MongoDB',
    icon: faThermometerFull,
  },
  {
    name: 'File Management System with Text Extraction and Summarization',
    description:
      'Developed a full-stack application for efficient file management, text extraction, and summarization using FastAPI and React.',
    outcome:
      'Enhanced document handling, analysis, and management with a secure, scalable, and user-friendly solution.',
    skills: ['React', 'FastAPI', 'MongoDB', 'Python', 'API Development'],
    githubLink:
      'https://github.com/prabinkc2046/File-Management-System-with-Text-Extraction-and-Summarization',
    icon: faFileAlt,
    youtubeLink: 'https://www.youtube.com/watch?v=fsmzRCtS3OY',
  },
  {
    name: 'MongoDB Setup and API Integration',
    description:
      'Installed and configured MongoDB on Ubuntu Linux, facilitating frontend-backend integration.',
    outcome: 'Enhanced data management and application performance.',
    skills: ['DBMS', 'Linux', 'API Development'],
    githubLink:
      'https://github.com/prabinkc2046/graphql-mongoose-mongodb-bookstore',
    icon: faDatabase,
  },
  {
    name: 'Financial Data Organization Script',
    description:
      'Developed a Python script to organize financial data into fiscal year and monthly folders.',
    outcome:
      'Streamlined data management and ensured accurate fiscal year organization.',
    skills: ['Python'],
    youtubeLink: 'https://youtu.be/vrG-Jj0J5Ks',
    githubLink: 'https://github.com/prabinkc2046/FinanceYearFolderGenerator',
    icon: faChartLine,
  },
  {
    name: 'React App Build and Deployment',
    description:
      'Configured a GitHub Actions workflow to build and deploy a React app to a Linode server.',
    outcome:
      'Automated deployment process, ensuring up-to-date builds on the server.',
    skills: ['CI/CD', 'Web Deployment'],
    githubLink:
      'https://github.com/prabinkc2046/taskmanagerwithReact/tree/main',
    icon: faCodeBranch,
  },
  {
    name: 'MongoDB and Node.js Setup Script',
    description:
      'Automated the installation and configuration of MongoDB, Node.js, and Nginx on Ubuntu.',
    outcome:
      'Streamlined the setup process for a web application with a fully operational backend service.',
    skills: ['DBMS', 'Node.js', 'Linux', 'Nginx', 'Scripting'],
    githubLink: 'https://github.com/prabinkc2046/express-mongoose-category-api',
    icon: faCloud,
  },
  {
    name: "React App Deployment with Nginx and Let's Encrypt",
    description:
      "Deployed a React app on Ubuntu using Nginx and secured it with Let's Encrypt SSL.",
    outcome:
      'Successfully deployed and secured a React application on a remote server.',
    skills: ['Web Deployment', 'Nginx', 'Linux'],
    githubLink:
      'https://github.com/prabinkc2046/Deploying-a-React-App-with-Nginx-and-Let-s-Encrypt',
    icon: faServer,
  },
  {
    name: 'AWS Automation Scripts Repository',
    description:
      'A collection of scripts to automate AWS resource deployment, including VPC setup and EC2 provisioning.',
    outcome: 'Facilitates efficient and automated deployment of AWS resources.',
    skills: ['AWS', 'Scripting'],
    youtubeLink: 'https://youtu.be/2DtvvvOoql8',
    githubLink:
      'https://github.com/prabinkc2046/AWS-Automation-Scripts-Repository',
    icon: faLock,
  },
  {
    name: 'Auto-Scaling Group to Scale Django Application with ELB Health Check',
    description:
      'Implemented auto-scaling for a Django application using an Auto Scaling Group and Application Load Balancer.',
    outcome:
      'Ensured seamless scaling of the Django application with automated scaling and load balancing.',
    skills: ['AWS', 'Python', 'Django'],
    youtubeLink: 'https://youtu.be/qdqGKtvUgAQ?si=gp_JRcxfHaVTUQvB',
    githubLink:
      'https://github.com/prabinkc2046/Auto-Scaling-Group-to-scale-Django-Application-with-ELB-health-check',
    icon: faTools,
  },
  {
    name: 'Scalable Architecture: Deploying Django with Network Load Balancer and MySQL',
    description:
      'Deployed a scalable Django application using Network Load Balancer and MySQL server.',
    outcome:
      'Achieved a robust, scalable, and secure cloud infrastructure for Django applications.',
    skills: ['AWS', 'Django', 'DBMS'],
    youtubeLink: 'https://youtu.be/UK_zi0v8qjI',
    githubLink:
      'https://github.com/prabinkc2046/Highly-Available-Django-Architecting-with-Network-Load-Balancer-and-MySQL-?tab=readme-ov-file',
    icon: faCube,
  },
  {
    name: 'Containerized App Scalability with AWS ALB',
    description:
      'Built and containerized a high-speed application, deployed with Docker, and used AWS ALB for scalability.',
    outcome:
      'Enhanced scalability and performance of Dockerized FastAPI application with AWS ALB.',
    skills: ['Docker', 'AWS', 'FastAPI'],
    youtubeLink: 'https://youtu.be/KNitmmYJP_c',
    githubLink:
      'https://github.com/prabinkc2046/Containerized-App-Scalability-with-AWS-ALB-Demo',
    icon: faBacon,
  },
  {
    name: 'AWS Elastic File System as a Shared Storage Solution for Web Hosting',
    description:
      'Used AWS EFS to provide shared storage for multiple web servers running Nginx.',
    outcome:
      'Implemented a scalable shared storage solution using AWS EFS for web servers.',
    skills: ['AWS', 'Linux', 'Nginx'],
    youtubeLink: 'https://youtu.be/lE_TtPICQZQ',
    githubLink:
      'https://github.com/prabinkc2046/AWS-Elastic-File-System-Uses-as-the-shared-storage-solution-for-web-hosting',
    icon: faBox,
  },
  {
    name: 'Useful SysAdmin Scripts',
    description:
      'A collection of scripts for system administrators to automate common tasks.',
    outcome:
      'Automated routine sysadmin tasks, enhancing efficiency and simplifying administrative processes.',
    skills: ['Linux', 'Scripting'],
    githubLink: 'https://github.com/prabinkc2046/Useful-Bash-Script',
    icon: faFileCode,
  },
  {
    name: 'Web Deployment Script',
    description:
      'A Bash script for setting up a web project on an Nginx server, including various distributions.',
    outcome:
      'Simplified web deployment by automating Nginx server setup and code deployment.',
    skills: ['Scripting', 'Linux', 'Nginx', 'Web Deployment'],
    githubLink: 'https://github.com/prabinkc2046/NginxAutomator',
    icon: faCloudUploadAlt,
  },
  {
    name: 'Django Application Deployment and Automation',
    description:
      'Covers deployment and automation of Django applications, including Apache load balancing and AWS ALB.',
    outcome:
      'Streamlined and automated the deployment process for Django applications.',
    skills: ['Django', 'AWS'],
    youtubeLink: 'https://youtu.be/VkGfj6f9TvU',
    githubLink:
      'https://github.com/prabinkc2046/Django-App-Deployment-with-Apache-Load-Balancer-and-AWS-Application-Load-Balancer',
    icon: faTools,
  },
  {
    name: 'Modular Web Deployment: Apache, Gunicorn, and Flask',
    description:
      'Demonstrates a modular deployment approach with Apache, Gunicorn, and Flask, including SSL encryption.',
    outcome:
      'Achieved a modular deployment architecture for enhanced scalability and resource optimization.',
    skills: ['Web Servers', 'Flask', 'Web Deployment'],
    youtubeLink: 'https://youtu.be/TM8UIQqkGdM',
    githubLink:
      'https://github.com/prabinkc2046/Modular-Web-deployment-with-Apache-Gunicorn-Flask',
    icon: faBox,
  },
  {
    name: 'Flask App Deployment with Apache and mod_wsgi',
    description:
      'Deployed a Flask application with Apache and mod_wsgi, including configuration and WSGI script setup.',
    outcome:
      'Successfully deployed a Flask application using Apache and mod_wsgi.',
    skills: ['Python', 'Web Servers', ' Web Deployment', 'Flask'],
    youtubeLink: 'https://youtu.be/nTkgBwa1gLw',
    githubLink:
      'https://github.com/prabinkc2046/Flask-App-Deployment-with-Apache-and-mod_wsgi',
    icon: faFileCode,
  },
  {
    name: 'LAMP Stack Web Application Deployment',
    description:
      'Deploys a web application using the LAMP stack with instructions for Apache, PHP, and MySQL setup.',
    outcome:
      'Set up a LAMP stack environment for a robust and scalable web application.',
    skills: ['Linux', 'Web Servers', 'DBMS', 'Web Development'],
    youtubeLink: 'https://youtu.be/P4j46nRF0Nw',
    githubLink:
      'https://github.com/prabinkc2046/LAMP-stack-Web-Application-Deployment',
    icon: faServer,
  },
  {
    name: 'MySQL Server Installation and Setup Guide for Ubuntu',
    description:
      'Step-by-step guide for installing and configuring MySQL server on Ubuntu.',
    outcome:
      'Configured MySQL server with secure access and performance optimization.',
    skills: ['Linux', 'DBMS'],
    githubLink: 'https://github.com/prabinkc2046/MySQL-Setup',
    icon: faDatabase,
  },
  {
    name: 'Deploying a Containerized Application with Ansible',
    description:
      'Automates deployment of containerized applications using Ansible roles.',
    outcome:
      'Automated containerized application deployment with Ansible configurations.',
    skills: ['Ansible', 'Docker', 'Web Deployment'],
    youtubeLink: 'https://www.youtube.com/watch?v=p2m_rcpUMF4',
    githubLink:
      'https://github.com/prabinkc2046/Deploying-a-Containerized-Application-with-Ansible',
    icon: faBacon,
  },
  {
    name: 'Ansible Playbook: Package Update, Docker Installation, and Hello-World',
    description:
      "Automates package updates, Docker installation, and runs a Docker 'hello-world' container.",
    outcome:
      'Streamlined setup with automated Docker installation and verification.',
    skills: ['Ansible', 'Docker'],
    githubLink: 'https://github.com/prabinkc2046/install-docker-ansible-demo',
    icon: faBacon,
  },
  {
    name: 'Ansible Playbook: Install and Uninstall Nginx on Linode Server',
    description: 'Automates Nginx installation and removal on Linode servers.',
    outcome:
      'Simplified Nginx management with automated deployment and removal.',
    skills: ['Ansible', 'Web Servers', 'Linux'],
    githubLink:
      'https://github.com/prabinkc2046/Nginx-install-uninstall-Ansible-demo',
    icon: faServer,
  },
  {
    name: 'Kubernetes Learning Journey',
    description: 'Documents and showcases Kubernetes concepts and practices.',
    outcome:
      'Detailed notes on Kubernetes fundamentals and practical applications.',
    skills: ['Kubernetes'],
    githubLink: 'https://github.com/prabinkc2046/Kubernetes-Learning-Journey',
    icon: faCube,
  },
  {
    name: 'Docker Storage Scenario - MySQL Database',
    description: 'Demonstrates Docker volume usage for MySQL data persistence.',
    outcome:
      'Confirmed data retention across container restarts using Docker volumes.',
    skills: ['Docker', 'DBMS'],
    githubLink:
      'https://github.com/prabinkc2046/Docker-Storage-Scenario-MySQL-Database',
    icon: faDatabase,
  },
  {
    name: 'BashScript-Challenges',
    description: 'Solutions for various bash scripting challenges.',
    outcome:
      'Showcases proficiency in bash scripting with practical task solutions.',
    skills: ['Scripting', 'Linux'],
    githubLink:
      'https://github.com/prabinkc2046/PrabinKC-BashScriptChallengesSolved',
    icon: faTools,
  },
];

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
    relatedArea: 'Data Science',
    skills: [
      { name: 'Machine Learning', level: 65, icon: 'fas fa-robot' },
      { name: 'Pandas', level: 60, icon: 'fas fa-table' },
      { name: 'scikit-learn', level: 55, icon: 'fas fa-brain' },
    ],
  },
];

export const skills = [
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
];

export const sectionList: SectionType[] = [
  { id: 'personal-info', component: PersonalInfo },
  { id: 'skills', component: ListSkills },
  { id: 'experience', component: Experience },
  { id: 'projects', component: ProjectList },
  { id: 'education', component: Education },
  { id: 'repository', component: Repository },
  { id: 'testimony', component: Testimony },
  { id: 'contact', component: Contact },
  { id: 'chat', component: Chat },
];
