import { useEffect, useRef, useState } from 'react';
import { universities } from '../../CONSTANT/CONSTANT';

import { EducationSectionWrapper,
  EducationCardWrapper,
  EducationCard,
  EducationDetailContainer,
  SubjectsContainer,
  Subject,
  SubjectScore
 } from './Education.styled';

 
export default function Education() {
  const [openCard, setOpenCard] = useState<string | null>(null); // State to manage the open card
  const [educationCardHeight, setEducationCardHeight] = useState(0);
  const educationCardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (name: string) => {
    setOpenCard((prevOpenCard) => prevOpenCard === name ? null : name);
    
  }


  useEffect(() => {
    if(educationCardRef.current){
     setEducationCardHeight((educationCardRef.current.scrollHeight));
    }
  },[openCard])
  
  return (
    <>
      <EducationSectionWrapper>
        <h3>Education</h3>
        <EducationCardWrapper >
          {universities.map((uni) => (
            <EducationCard
              key={uni.name}
              id={uni.name}
              height={educationCardHeight}
              open={openCard === uni.name}
              onClick={() => handleCardClick(uni.name)}
              onDoubleClick={() => handleCardClick(uni.name)}
              
            >
                <EducationDetailContainer open={openCard === uni.name}>
                  <h4>{uni.name}</h4>
                  <p>{uni.degree}</p>
                  <p>Graduated: {uni.finishedYear}</p>
                  <p>Score: {uni.score}</p>
                </EducationDetailContainer>
              {openCard === uni.name && (
                <SubjectsContainer ref={educationCardRef}  open={openCard === uni.name}>
                  {uni.subjects.map((subject, index) => (
                    <Subject key={index}>
                      <p><span>{subject.name}</span> <SubjectScore>{subject.score}</SubjectScore></p>
                    </Subject>
                  ))}
                </SubjectsContainer>
              )}
            </EducationCard>
          ))}
        </EducationCardWrapper>
      </EducationSectionWrapper>
    </>
  );
}
