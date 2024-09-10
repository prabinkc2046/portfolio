import styled from 'styled-components'

import { Card } from '../../commonStyles/common.styled'

export const RepoSectionWrapper = styled(Card)`
   width: 100%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: ${({theme}) => theme.colors.primaryBg};
    color: ${({theme}) => theme.colors.secondaryFontColor};

    @media (min-width: 600px){
      width: 90%;
    }

    @media (min-width: 900px){
      width: 95%;
    }

`