import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type ProjectType = {
    name: string;
    description: string;
    outcome: string;
    skills: string[];
    githubLink: string;
    youtubeLink?: string;
    icon: IconDefinition;
  };

export type ExperienceType = {
    role: string;
    company: string;
    duration: string;
    details: string
}


export type SkillType = {
    name: string;
    level: number;
    icon: string;
 }
 
 export type CategorizedSkillType = {
     relatedArea: string;
     skills: SkillType[]
 }

export type TestimonyType = {
    name: string;
    position: string;
    testimony: string
}


export type SubjectType = {
    name: string;
    score: string;
}

export type UniversityType = {
    name: string;
    degree: string;
    finishedYear: string;
    score: string;
    subjects: SubjectType[]
}


export type ContactType = {
    iconClass: string;
    href: string;
    displayName: string;
    target?: string;
    rel?:string;
    link?:string;
  }

export type NavMenuItemType = {
    displayName:string,
    id: string
  }

 export  type SectionType = {
    id: string;
    component: React.ElementType
  }