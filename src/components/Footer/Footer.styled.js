import styled from 'styled-components'

export const Container = styled.footer`
  height: 110px;
  width: 100%;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: ${(props) => props.theme.color.footerBackground};
`

export const ContentBox = styled.div`
  padding: 20px;
  margin: 0 auto;
`
export const Copyright = styled.p`
  padding-top: 8px;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 6px;
    font-size: 18px;
    line-height: 1.56;
  }
`
