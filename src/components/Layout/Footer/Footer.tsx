import { contactList } from '../../../CONSTANT/CONSTANT';
import { NavbarMenuItemsList } from '../../../CONSTANT/CONSTANT';

import {
  StyledFooter,
  SocialLinksContainer,
  QuickLinksContainer,
} from './Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2024 Prabin K C. All rights reserved.</p>

      <SocialLinksContainer>
        {contactList.map(contact => (
          <a
            key={contact.href}
            href={contact.href}
            target={contact.target}
            rel={contact.rel}
          >
            <i className={contact.iconClass}></i> {contact.displayName}
          </a>
        ))}
      </SocialLinksContainer>

      <QuickLinksContainer>
        {NavbarMenuItemsList.map((navItem, index) => (
          <a key={index} href={navItem.id}>
            {navItem.displayName}
          </a>
        ))}
      </QuickLinksContainer>
    </StyledFooter>
  );
}
