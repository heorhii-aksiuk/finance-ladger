import styled from 'styled-components'

export const Container = styled.section`
  padding: 40px 20px;
  color: ${(props) => props.theme.color.main};
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 30px;
  }
`

export const PreTitle = styled.p`
  padding-bottom: 20px;
  font-size: 18px;
  line-height: 1.66;

  @media screen and (min-width: 768px) {
    padding-bottom: 24px;
    font-size: 20px;
    line-height: 1.65;
  }
`

export const Title = styled.h2`
  width: 220px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-bottom: 24px;
  }
`

export const Paragraph = styled.p`
  width: 210px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-bottom: 24px;
    font-size: 17px;
    line-height: 1.66;
  }

  @media screen and (min-width: 1360px) {
    font-size: 18px;
    line-height: 1.56;
  }
`
export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 8px;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 18px;
  }

  @media screen and (min-width: 1360px) {
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    grid-gap: 20px;
  }
`
export const Image = styled.img`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1360px) {
    margin-bottom: 20px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.secondaryText};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    opacity: 1;
  }
`

export const Name = styled.h3`
  padding-bottom: 12px;
  font-size: 23px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 1.27;
  }
`

export const Position = styled.p`
  font-size: 16px;
  line-height: 1.6;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }
`

// export const GalleryItem = styled.li``
