import styled from 'styled-components'

export const Box = styled.div`
  max-height: 80vh;
  position: relative;
`

export const ArrowLeft = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  width: 50px;
  height: 100%;
  opacity: 0;

  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    opacity: 1;
  }
`

export const ArrowRight = styled(ArrowLeft)`
  right: 0px;
`

export const ArrowImage = styled.img`
  cursor: pointer;
`

export const Close = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0px;
  opacity: 0.4;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    opacity: 1;
  }
`
