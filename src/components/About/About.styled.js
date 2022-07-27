import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img``

export const ContentBox = styled.div`
  padding: 40px 30px;
  margin: 0 auto;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: ${(props) => props.theme.color.accent};
`

export const PreTitle = styled.p`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.66;
`

export const Title = styled.h2`
  padding-bottom: 24px;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;
`

export const Paragraph = styled.p`
  padding-bottom: 24px;
  font-size: 16px;
  line-height: 1.6;
`
