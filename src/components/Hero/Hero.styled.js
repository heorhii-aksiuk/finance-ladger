import styled from 'styled-components'
import showcase from './images/jpg/showcase.jpg'

export const Container = styled.section`
  height: 533px;
  color: ${(props) => props.theme.color.heroText};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${showcase});
  background-size: cover;
  background-position: 50% 50%;

  @media screen and (min-width: 768px) {
    height: 1024px;
  }
`

export const Box = styled.div`
  display: flex;
  padding-top: 142px;
  flex-direction: column;
  align-items: center;
  width: 246px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-top: 407px;
    width: 100%;
  }
`

export const Motto = styled.p`
  padding-bottom: 20px;
  font-size: 52px;
  font-weight: 300;
  line-height: 1.27;
  text-transform: capitalize;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-bottom: 24px;
    font-size: 55px;
    line-height: 1.2;
  }
`

export const Title = styled.h1`
  padding-bottom: 24px;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.67;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
    font-size: 22px;
    line-height: 1.67;
  }
`
