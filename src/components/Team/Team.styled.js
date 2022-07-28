import styled from 'styled-components'

export const Container = styled.section`
  padding: 40px 20px;
  color: ${(props) => props.theme.color.main};
  text-align: center;
`

export const PreTitle = styled.p`
  padding-bottom: 20px;
  font-size: 18px;
  line-height: 1.66;
`

export const Title = styled.h2`
  width: 220px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;
`

export const Paragraph = styled.p`
  width: 210px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
`
export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 8px;
  margin: 0 auto;
  padding: 0;
`
export const Image = styled.img`
  padding-bottom: 16px;
`

export const Name = styled.h3`
  padding-bottom: 12px;
  font-size: 23px;
  line-height: 1.25;
`

export const Position = styled.p`
  font-size: 16px;
  line-height: 1.6;
`

// export const GalleryItem = styled.li``
