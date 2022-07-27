import styled from 'styled-components'
import showcase from './images/jpg/showcase.jpg'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 533px;
  color: ${(props) => props.theme.color.heroText};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${showcase});
  background-size: cover;
  background-position: 50% 50%;
`

export const Motto = styled.p`
  padding-top: 142px;
  font-size: 52px;
  font-weight: 300;
  line-height: 1.27;
  text-transform: capitalize;
  text-align: center;
`

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.67;
  text-align: center;
`
export const ButtonBox = styled.div`
  padding-top: 24px;
`
