import styled from "styled-components";


export const AppContainer = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto; /* Center the main container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (min-width: 600px) {
      width: 90%;
  }

   
  @media (min-width: 900px) {
      width: 95%; 
  }
`

 