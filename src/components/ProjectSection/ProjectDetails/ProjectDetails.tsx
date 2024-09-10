import type { ProjectType } from '../../../CONSTANT/CONSTANT.types'
import { ProjectCard, ProjectTitle, ProjectLink } from './ProjectDetails.styled'

type ProjectDetailsProps = {
    projects: ProjectType[];
    expandedProjectIndex: null | number
}

export default function ProjectDetails({projects, expandedProjectIndex}: ProjectDetailsProps) {
  return (
      
    <>
    {expandedProjectIndex !== null && (
        <ProjectCard>
        <ProjectTitle>{projects[expandedProjectIndex].name}</ProjectTitle>
        <p>{projects[expandedProjectIndex].description}</p>
        <p>
            <strong>Outcome:</strong> {projects[expandedProjectIndex].outcome}
        </p>
        <ProjectLink>
            {projects[expandedProjectIndex].youtubeLink && (
            <a href={projects[expandedProjectIndex].youtubeLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> Watch Demo
            </a>
            )}
            <a href={projects[expandedProjectIndex].githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View Code
            </a>
        </ProjectLink>
        </ProjectCard>
    )}
     
    </>
       
   
  )
}