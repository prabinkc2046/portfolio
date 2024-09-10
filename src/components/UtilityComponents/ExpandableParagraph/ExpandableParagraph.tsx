import {useEffect, useRef, useState} from 'react'
import { ExpandableParagraphStyled } from './ExpandableParagraph.styled';

type ExpandableParagraphProps = {
    text: string,
    wordsCount?: number
}
export const ExpandableParagraph = ({text, wordsCount=5}: ExpandableParagraphProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedParagraphHeight, setExpandedParagraphHeight] = useState(0);
    const paragraphRef = useRef<HTMLParagraphElement>(null);


   useEffect(() => {
    if(paragraphRef.current){
     setExpandedParagraphHeight(paragraphRef.current.scrollHeight)
    }
   },[isExpanded])

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    const words = text.split(' ');
    const textToShow = isExpanded ? text : words.slice(0, wordsCount).join(' ') + ' . . .';
  
return (
  
  <ExpandableParagraphStyled ref={paragraphRef} height={expandedParagraphHeight} expanded={isExpanded} onClick={handleToggle}>
    {textToShow}
  </ExpandableParagraphStyled>
  )
}
