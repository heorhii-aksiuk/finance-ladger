import {
  Container,
  Image,
  ContentBox,
  PreTitle,
  Title,
  Paragraph,
} from './About.styled'
import Button from '../Button'
import team from './images/jpg/people.jpg'

export default function About() {
  return (
    <Container id="about">
      <Image src={team} alt="Team" />
      <ContentBox>
        <PreTitle>What you are looking for</PreTitle>
        <Title>We provide bespoke solutions</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Paragraph>
        <Button accentWithBorder>Read more</Button>
      </ContentBox>
    </Container>
  )
}
