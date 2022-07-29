import styled from 'styled-components'

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;

  @media screen and (min-width: 768px) {
    max-width: 1360px;
  }

  @media screen and (min-width: 1360px) {
    max-width: 1920px;
  }
`
