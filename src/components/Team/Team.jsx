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
import person1 from './images/jpg/person1.jpg'
import person2 from './images/jpg/person2.jpg'
import person3 from './images/jpg/person3.jpg'

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
            <Image src={person1} alt="President" />
            <ImageOverlay>
              <SocialLinks team />
            </ImageOverlay>
          </ImageWrapper>
          <Name>John Doe</Name>
          <Position>President</Position>
        </li>
        <li>
          <ImageWrapper>
            <Image src={person2} alt="Vice President" />
            <ImageOverlay>
              <SocialLinks team />
            </ImageOverlay>
          </ImageWrapper>
          <Name>Jane Doe</Name>
          <Position>Vice President</Position>
        </li>
        <li>
          <ImageWrapper>
            <Image src={person3} alt="Marketing Head" />
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
