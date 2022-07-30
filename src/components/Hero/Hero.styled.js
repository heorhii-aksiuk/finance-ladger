import styled from 'styled-components'
import showcase from './img/showcase.jpg'
import showcase2x from './img/showcase@2x.jpg'

export const Container = styled.section`
  height: 533px;
  color: ${(props) => props.theme.color.heroText};
  background-color: #333333;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${showcase});
  background-size: cover;
  background-position: 50% 50%;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${showcase2x});
  }

  @media screen and (min-width: 768px) {
    height: 1024px;
  }

  @media screen and (min-width: 1360px) {
    height: 768px;
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

  @media screen and (min-width: 1360px) {
    padding-top: 279px;
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
