import {
  Container,
  PreTitle,
  Title,
  Paragraph,
  Gallery,
  Image,
  Name,
  Position,
} from './Team.styled'
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
          <Image src={person1} alt="President" />
          <Name>John Doe</Name>
          <Position>President</Position>
        </li>
        <li>
          <Image src={person2} alt="Vice President" />
          <Name>Jane Doe</Name>
          <Position>Vice President</Position>
        </li>
        <li>
          <Image src={person3} alt="Marketing Head" />
          <Name>Steve Smith</Name>
          <Position>Marketing Head</Position>
        </li>
      </Gallery>
    </Container>
  )
}
