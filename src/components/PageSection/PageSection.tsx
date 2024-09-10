// VisibilitySection.tsx
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { StyledSection } from './PageSection.styled';

// Define the type for the component props
type VisibilitySectionProps = {
  id: string;
  Component: React.ElementType; // React component to render
};

export const PageSection: React.FC<VisibilitySectionProps> = ({ id, Component }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }: { isVisible: boolean }) => (
        <StyledSection isVisible={isVisible} id={id}>
          <Component />
        </StyledSection>
      )}
    </VisibilitySensor>
  );
};
