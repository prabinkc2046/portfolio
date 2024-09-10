import { testimonies } from '../../CONSTANT/CONSTANT';
import { ExpandableParagraph } from '../UtilityComponents/ExpandableParagraph/ExpandableParagraph';

import { TestimonySectionWrapper,
  TestimonyCardsWrapper,
  TestimonyCard,
  TestimonyProviderName
 } from './Testimony.styled';
 
export default function Testimony() {   
   
  return (
   <>
   <TestimonySectionWrapper>
        <h3>Testimonies</h3>
        <TestimonyCardsWrapper>
          {testimonies.map((testimony, index) => (
            <TestimonyCard key={index}>
              <p><TestimonyProviderName>{testimony.name}</TestimonyProviderName>, {testimony.position}</p>
              <ExpandableParagraph 
              wordsCount={10} 
              text={testimony.testimony}
              />
            </TestimonyCard>
          ))}
        </TestimonyCardsWrapper>
      </TestimonySectionWrapper>
   </>
  )
}