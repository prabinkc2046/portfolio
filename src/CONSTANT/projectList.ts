import { ProjectType } from '../CONSTANT/CONSTANT.types';
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
  faHandsHelping,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';

export const projects: ProjectType[] = [
  {
    name: 'File Management With OpenAI, FastAPI, and MongoDB',
    description:
      'Developed the backend of a full-stack application for efficient file management, text extraction, and summarization using FastAPI.',
    outcome:
      'Enhanced document handling, analysis, and management with a secure, scalable, and user-friendly backend solution.',
    skills: ['FastAPI', 'Python', 'API Development', 'MongoDB'],
    githubLink:
      'https://github.com/prabinkc2046/FileManagementAndStoragePoweredByAIFileSummarisation-FastAPI-OpenAI-MongoDB',
    icon: faFileAlt,
  },

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
    name: 'Disaster Relief Fundraising Site for Nepal Flood Victims',
    description:
      'Developed an informative and fundraising website to support flood victims in Nepal. Integrated a real-time dashboard for tracking donations and built robust backend functionalities for data processing and security.',
    outcome:
      'Built a responsive site with live donation tracking, integrated email notifications, and implemented CSRF protection. Backend handled by FastAPI for donor management and NodeJS for email services.',
    skills: ['React', 'MongoDB', 'API Development', 'Node.js', 'FastAPI'],
    githubLink: 'https://github.com/prabinkc2046/Nepal-Flood-Support.git',
    youtubeLink: 'https://nepal-flood-support.vercel.app/',
    icon: faHandsHelping,
  },
  {
    name: 'Backend Email Service for Disaster Relief Notifications',
    description:
      'Created a secure backend email service in Node.js to send automated donation confirmations and updates to donors, enhancing donor engagement and transparency.',
    outcome:
      'Implemented a Node.js server with email functionality to automatically notify donors about successful transactions and provide regular campaign updates. Configured environment variables for secure handling of email credentials and set up CSRF protection for added security.',
    skills: ['Node.js'],
    githubLink:
      'https://github.com/prabinkc2046/Nepal-Flood-Support-Email-Backend.git',
    icon: faEnvelopeOpenText,
  },
  {
    name: 'User Data Management Service with FastAPI and MongoDB',
    description:
      'Developed a backend service using FastAPI to manage donor data securely, with MongoDB for efficient data storage and retrieval. This service supports the flood relief fundraising campaign by handling user profiles and donation records.',
    outcome:
      'Designed RESTful API endpoints to store, update, and retrieve donor information. Implemented data validation, CSRF protection, and optimized MongoDB queries for high performance, ensuring secure and efficient management of user data.',
    skills: ['FastAPI', 'MongoDB'],
    githubLink:
      'https://github.com/prabinkc2046/Nepal-Flood-Support-backend.git',
    icon: faDatabase,
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
