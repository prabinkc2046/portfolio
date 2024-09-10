import styled from "styled-components";

export const ExpandableParagraphStyled = styled.p<{expanded: boolean, height: number}>`
    overflow: hidden; /* Hide overflowing content */
    cursor: pointer;
    position: relative;
    height: 6em;
    transition: height 0.5s ease-in-out; /* Smooth transition for expansion and collapse */
    &::after {
        content: 'Show more';
        background: linear-gradient(to right, transparent, white); /* Gradient effect to fade text */
        padding-left: 5px;
        font-size: 0.8em;
        color: #007bff;
        display: inline-block;
        pointer-events: none; /* Ensures only the paragraph is clickable */
        opacity: 0.6; /* Subtle visual hint */
    }

    ${({expanded, height}) =>
        expanded && 
        `
         height: ${height}px;

         &::after {
            content: 'Show less'; /* Remove content when expanded */

         }
        `
        
    }

`
