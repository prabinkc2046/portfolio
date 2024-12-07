import { useState } from 'react';

import { NavbarMenuItemsList } from '../../../CONSTANT/CONSTANT';

import {
  StyledNavbar,
  NavItemsContainer,
  HamburgerToggleButton,
  NavbarMenu,
  NavbarMenuLinkItem,
  NavbarMenuItem,
} from './Navbar.styled';

type NavbarProps = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({ activeLink, setActiveLink }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);

    // update local storage memory
    localStorage.setItem('activeLink', link);

    // const section = document.getElementById(link);
    // console.log('Currently selected section is', section);
    // if (section) {
    //   section.scrollIntoView({
    //     behavior: 'auto',
    //   });
    // }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <StyledNavbar>
      <NavItemsContainer>
        <HamburgerToggleButton onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </HamburgerToggleButton>

        <NavbarMenu isOpen={isMenuOpen}>
          {NavbarMenuItemsList.map(navItem => (
            <NavbarMenuItem key={navItem.id}>
              <NavbarMenuLinkItem
                href={navItem.id}
                onClick={() => handleLinkClick(navItem.id)}
                isActive={activeLink === navItem.id}
              >
                {navItem.displayName}
              </NavbarMenuLinkItem>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavItemsContainer>
    </StyledNavbar>
  );
};

export default Navbar;
