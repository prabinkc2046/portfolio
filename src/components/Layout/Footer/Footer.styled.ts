
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    padding: 20px;
    text-align: center;
    position: relative; /* Ensure it stays within the normal document flow */
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 8px;
    background-color: ${({theme}) => theme.colors.footerBg};
    color: #ffffff;

    @media (min-width: 600px) {
  
    width: 100%;
   
  }
  
  @media (min-width: 735px){
   
      width: 100%;
  
  }
  
  @media (min-width: 900px) {
   
      width: 100%;
  
  }
`

export const SocialLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 5px;

    a{
        color: #fff; /* White color for social links */
        text-decoration: none;
        font-size: 1.2rem;
        transition: color 0.3s ease;
        padding: 5px;

        &:hover{
        color: #ffffff6a; /* Change color on hover */

        }
    }
`

export const QuickLinksContainer = styled.div`
   margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px;
    
    a {
        color: #fff; /* White color for quick links */
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
        padding: 3px;

        &:hover{
            color: #ff6347; /* Change color on hover */
        }
    }

`
