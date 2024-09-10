import { useState } from 'react';
// import './Experience.css';
import { experience } from '../../CONSTANT/CONSTANT';
import { ExpandableParagraph } from '../UtilityComponents/ExpandableParagraph/ExpandableParagraph';
import ScrollToSomewhere from '../UtilityComponents/ScrollToSomewhere/ScrollToSomewhere';
import type { ExperienceType } from '../../CONSTANT/CONSTANT.types';
import { useScreenContext } from '../../context/screenContext';
import { 
  PortfolioSectionNavbar, 
  PortfolioSectionNavItem } from '../../commonStyles/common.styled';


import { 
  ExperienceSectionWrapper,
  ExperienceCardWrapper,
  ExperienceCard,
 } from './Experience.styled';
 
export default function Experience() {
  const [selectedRole, setSelectedRole] = useState('Software Support Technician');

  const {isMobile} = useScreenContext();

  // Get unique roles for the navbar, plus 'All'
  const roles = ['All', ...new Set(experience.map((exp: ExperienceType) => exp.role))];

  // Filter experience based on the selected role
  const filteredExperience = selectedRole === 'All'
    ? experience
    : experience.filter(exp => exp.role === selectedRole);

  return (
    <>
      <ExperienceSectionWrapper>
        <h3 id='experience-title'>Experience</h3>
        
        {/* Navbar for Roles */}
        <PortfolioSectionNavbar>
          {roles.map(role => (
            <PortfolioSectionNavItem
              key={role}
              isSelected={selectedRole === role}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </PortfolioSectionNavItem>
          ))}
        </PortfolioSectionNavbar>

        {/* Experience Container */}
        <ExperienceCardWrapper>
          {filteredExperience.map(exp => (
            <ExperienceCard key={exp.role}>
              <h4>{exp.role}</h4>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <ExpandableParagraph
              text={exp.details}
              wordsCount={10}
              />
            </ExperienceCard>
          ))}
        </ExperienceCardWrapper>

        {/* Scroll to top botton. only shows when all is shown */}
        {selectedRole === 'All' && isMobile && (
          <ScrollToSomewhere label={'Back to Top'} id={'experience-title'}/>
        )}
      </ExperienceSectionWrapper>
    </>
  );
}
