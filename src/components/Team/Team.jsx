import {
  Container,
  PreTitle,
  Title,
  Paragraph,
  Gallery,
  Item,
  Image,
  ImageWrapper,
  ImageOverlay,
  Name,
  Position,
} from './Team.styled'
import SocialLinks from '../SocialLinks'

import person1 from './img/person1.jpg'
import person1_2x from './img/person1@2x.jpg'
import person1_WebP from './img/person1.webp'
import person1_WebP2x from './img/person1@2x.webp'

import person2 from './img/person2.jpg'
import person2_2x from './img/person2@2x.jpg'
import person2_WebP from './img/person2.webp'
import person2_WebP2x from './img/person2@2x.webp'

import person3 from './img/person3.jpg'
import person3_2x from './img/person3@2x.jpg'
import person3_WebP from './img/person3.webp'
import person3_WebP2x from './img/person3@2x.webp'

export default function Team() {
  return (
    <Container>
      <PreTitle>Who we are</PreTitle>
      <Title>Our Professional Team</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </Paragraph>
      <Gallery>
        <li>
          <ImageWrapper>
            <picture>
              <source
                srcSet={`${person1_WebP} 1x, ${person1_WebP2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${person1} 1x, ${person1_2x} 2x`}
                type="image/jpeg"
              />
              <Image src={person1} alt="President" />
            </picture>
            <ImageOverlay>
              <SocialLinks team />
            </ImageOverlay>
          </ImageWrapper>
          <Name>John Doe</Name>
          <Position>President</Position>
        </li>
        <li>
          <ImageWrapper>
            <picture>
              <source
                srcSet={`${person2_WebP} 1x, ${person2_WebP2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${person2} 1x, ${person2_2x} 2x`}
                type="image/jpeg"
              />
              <Image src={person2} alt="Vice President" />
            </picture>
            <ImageOverlay>
              <SocialLinks team />
            </ImageOverlay>
          </ImageWrapper>
          <Name>Jane Doe</Name>
          <Position>Vice President</Position>
        </li>
        <li>
          <ImageWrapper>
            <picture>
              <source
                srcSet={`${person3_WebP} 1x, ${person3_WebP2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${person3} 1x, ${person3_2x} 2x`}
                type="image/jpeg"
              />
              <Image src={person3} alt="Marketing Head" />
            </picture>
            <ImageOverlay>
              <SocialLinks team />
            </ImageOverlay>
          </ImageWrapper>
          <Name>Steve Smith</Name>
          <Position>Marketing Head</Position>
        </li>
      </Gallery>
    </Container>
  )
}
