import styled from 'styled-components';
import { Card } from '../../commonStyles/common.styled';

export const EducationSectionWrapper = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primaryBg}; /* Updated with theme */

  h3 {
    color: ${({ theme }) => theme.colors.secondaryFontColor}; /* Updated with theme */
  }

  @media (min-width: 600px) {
    width: 90%;
    align-items: flex-start;
  }

  @media (min-width: 900px) {
    width: 95%;
    align-items: flex-start;
  }
`;

export const EducationCardWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 5px;

  @media (min-width: 900px) {
  
  }
`;

export const EducationCard = styled.div<{ open: boolean, height: number }>`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  animation: fadeInUp 0.7s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: height 1.5s ease, box-shadow 0.8s ease, transform 0.8s ease;
  height: 220px;
  overflow: hidden;
  min-height: 220px;
  background-color: ${({ theme }) => theme.colors.secondaryBg}; /* Updated with theme */

  &:hover{
    transform: translateZ(10px) scale(1.05);
    box-shadow: 0 2px 4px rgba(0,0,0,0.9);
  }
  ${({ open, height }) =>
    open &&
    `
    height: ${height}px;
    transform: scale(1.03);
  `}

  @media(min-width: 500px){
    min-height: 200px;
  }

  @media(min-width: 800px){
    min-height: 175px;
  }
`;

export const EducationDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;

  p,
  h4 {
    width: 100%;
    font-size: 1.2rem;
  }

  h4 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.secondaryFontColor}; /* Updated with theme */
  }
`;

export const SubjectsContainer = styled.div<{ open: boolean}>`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding-top: 10px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 220px;
`;

export const Subject = styled(Card)`
  width: 100%;
  font-weight: bold;
  line-height: 1.5;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.accentBg}; /* Updated with theme */
  color: ${({ theme }) => theme.colors.secondaryFontColor}; /* Updated with theme */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.9s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9); /* Slightly stronger shadow */
  }
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    overflow: hidden;
  }
`;

export const SubjectScore = styled.span`
  color: #0072ff;
`;
