import { useState } from 'react';

import { NavbarMenuItemsList } from '../../../CONSTANT/CONSTANT';

import { StyledNavbar,
  NavItemsContainer,
  HamburgerToggleButton,
  NavbarMenu,
  NavbarMenuLinkItem,
  NavbarMenuItem
 } from './Navbar.styled';
type NavbarProps = {};


const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#personal-info'); // Set default active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
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
          {NavbarMenuItemsList.map((navItem) => (
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
