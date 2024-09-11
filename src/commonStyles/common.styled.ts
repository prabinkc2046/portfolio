import styled from 'styled-components';

// Card Component
export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-bottom: 20px;
  padding: 20px;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  opacity: 0;
  animation: fadeInUp 0.5s ease-in-out forwards;
  color: ${({theme}) => theme.colors.primaryFontColor};

  &:hover {
    transform: perspective(1000px) rotateX(-3deg) rotateY(3deg); /* Subtle hover effect */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow */
  }
`;

// Card Jumper Component
export const CardJumper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Box 3D Component
export const Box3D = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 3px 6px rgba(0, 0, 0, 0.08);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);

  }
`;

// Portfolio Section Navbar Component
export const PortfolioSectionNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1px;
  justify-content: space-between;
  row-gap: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

// Portfolio Section Nav Item Component
export const PortfolioSectionNavItem = styled.button<{isSelected: boolean}>`
  padding: 3px 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9);
  background-color: ${({theme}) => theme.colors.secondaryBg};
  color: ${({theme}) => theme.colors.primaryFontColor};
  cursor: pointer;
  transition: background-color 2s ease;
  width: 100px;
  font-size: var(--small-screen-font-size);
  text-align: center;
  overflow: hidden;
  color: ${({theme}) => theme.colors.secondaryFontColor};

  ${({isSelected}) => isSelected && `
      background-color: #0072ff;
      color: #ffffff;
      font-weight: bold;
  `}
 

  &:hover {
    ${({isSelected}) => !isSelected && `
        background: linear-gradient(to right, #869db4, #317bc4);
    `}
  }

  @media (min-width: 600px) {
    font-size: ${({theme}) => theme.fonts.medium};
  }

  @media (min-width: 800px) {
    font-size: ${({theme}) => theme.fonts.large};
    width: 110px;
  }
`;


export const ThreeDText = styled.p`
  /* font-size: 48px; */
  /* color: #333; */
  text-shadow: 
    1px 1px 0 #fff,
    2px 2px 0 #ddd,
    0px 1px 2px rgba(0, 0, 0, 0.8),
    3px 3px 3px rgba(0, 0, 0, 0.2),
    4px 4px 4px rgba(0, 0, 0, 0.1);
`;
