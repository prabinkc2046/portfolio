
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; 
    height: 60px; /* Adjust height if needed */
    display: flex;
    background-color: ${({theme}) => theme.colors.navBg};
    color: ${({theme}) => theme.colors.secondaryFontColor};

    @media (min-width: 900px){
      justify-content: center;
      align-items: center;
    }
`
export const NavItemsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    max-width: 1200px;
    @media (min-width: 900px){
      justify-content: center;
        align-items: center;
    }
`

export const HamburgerToggleButton = styled.button`
    background: none;
    border: none;
    color: #fff; /* White color for hamburger icon */
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem 1rem; /* Adjust padding */

    @media (max-width: 899px){
      display: block; /* Show hamburger menu on mobile */
    }
    @media (min-width: 900px){
      display: none;
    } 
`

export const NavbarMenuLinkItem = styled.a<{isActive: boolean}>`
    color: #ffffff; /* White color for menu links */
    text-decoration: none;
    padding: 0.5rem 1rem; /* Adjust padding */
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover{
      color: #ffffffb4; /* Change hover color if needed */
    }

    ${
      ({isActive}) => isActive && `
         color: #ffffff; /* Change color for the active link */
        border-bottom: 4px solid #ffffff; /* Optional: underline active link */
        font-weight: 900;
      `
    }

    @media (max-width: 899px){
        padding: 1rem; /* Larger padding for mobile */
        display: block;
        text-align: center;
    }

    @media (min-width: 900px){
      font-size: 18px;
      line-height: 1.2;
    }
`

export const NavbarMenuItem = styled.li`
  @media (max-width: 899px){
    margin: 0;
  }

  @media (min-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`


export const NavbarMenu = styled.ul<{isOpen:boolean}>`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: center; /* Center menu items */
    transition: transform 0.3s ease;
    background-color: ${({theme}) => theme.colors.navBg};

    @media (max-width: 899px){
      display: none;
        flex-direction: column;
        position: absolute;
        top: 60px; /* Height of the navbar */
        left: 0;
        width: 100%;
        padding: 15px;

        ${
          ({isOpen}) => isOpen && `
            display: flex;
          `
        }
    }

    @media (min-width: 900px){
      width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        column-gap: 8px;
    }
`
