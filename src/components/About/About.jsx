import {
  Container,
  Image,
  ContentBox,
  PreTitle,
  Title,
  Paragraph,
} from './About.styled'
import Button from '../Button'

import people from './img/people.jpg'
import people2x from './img/people@2x.jpg'
import peopleWebP from './img/people.webp'
import peopleWebP2x from './img/people@2x.webp'

export default function About() {
  return (
    <Container id="about">
      <picture>
        <source
          srcSet={`${peopleWebP} 1x, ${peopleWebP2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${people} 1x, ${people2x} 2x`} type="image/jpeg" />
        <Image src={people} alt="Team" />
      </picture>
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
