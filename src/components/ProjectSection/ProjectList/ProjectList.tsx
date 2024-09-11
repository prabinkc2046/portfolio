import { useState } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import ScrollToSomewhere from '../../UtilityComponents/ScrollToSomewhere/ScrollToSomewhere';
import Modal from '../../UtilityComponents/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from '../../../CONSTANT/CONSTANT';
import { useScreenContext } from '../../../context/screenContext';
import { skills } from '../../../CONSTANT/CONSTANT';
import { 
  ProjectSectionWrapper, 
  SkillsNavbar, 
  SkillNavItem, 
  ProjectsWrapper, 
  Project, 
  ProjectTitle, 
  ProjectCount, 
  Count } from './ProjectList.styled';

export default function ProjectList() {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<null | number>(null);
  const [selectedSkill, setSelectedSkill] = useState('Web FrameWorks');
  const {isMobile} = useScreenContext();
  
  const handleProjectClick = (index: number) => {
    setExpandedProjectIndex(index);
  };

  const closeModal = () => {
    setExpandedProjectIndex(null);
  };

  const handleSkillChange = (skill: string) => {
    setSelectedSkill(skill);
    setExpandedProjectIndex(null); // Close any open project details
  };

  // Filter projects based on the selected skill
  const filteredProjects = selectedSkill === 'All'
    ? projects
    : projects.filter((project) => Array.isArray(project.skills) && project.skills.includes(selectedSkill));

  // Get the number of filtered projects
  const projectCount = filteredProjects.length;

  return (
    <>
      <ProjectSectionWrapper>
        <ProjectTitle id='project-title'>Projects</ProjectTitle>
        {/* Navbar for Skills */}
        <SkillsNavbar>
          <ul>
            {skills.map((skill, index) => (
              <SkillNavItem
                key={index}
                onClick={() => handleSkillChange(skill)}
                isSelected={selectedSkill === skill}
              >
                {skill}
              </SkillNavItem>
            ))}
          </ul>
        </SkillsNavbar>

        {/* Display project count with animation */}
        <ProjectCount>
          Showing <Count>{projectCount}</Count> project{projectCount !== 1 ? 's' : ''}
        </ProjectCount>

        {/* Project List */}
        <ProjectsWrapper key={selectedSkill}>
          <ul>
            {filteredProjects.map((project, index) => (
              <Project
                index={index}
                onClick={() => handleProjectClick(index)}
                id={`project-${index}`}
                key={index}
              >
               
                  <FontAwesomeIcon 
                  className='project-icon' 
                  icon={project.icon} size="lg" 
                  style={{ marginRight: '8px' }} 
                  />
                  {project.name}
                
              </Project>
            ))}
          </ul>
        </ProjectsWrapper>
        {selectedSkill === 'All' && isMobile && (
          <ScrollToSomewhere 
          label={'Back To Top'} 
          id={'project-title'}
          delayTime={10000}
          />
        )}
      </ProjectSectionWrapper>

      {/* Modal for Project Details */}
      <Modal
        content={
          <ProjectDetails projects={filteredProjects} expandedProjectIndex={expandedProjectIndex} />
        }
        isVisible={expandedProjectIndex !== null}
        onClose={closeModal}
      />
    </>
  );
}