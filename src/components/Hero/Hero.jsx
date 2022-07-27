import { Container, Motto, Title, ButtonBox } from './Hero.styled'
import Button from '../Button'

export default function Hero() {
  return (
    <Container>
      <Motto>The sky is the limit</Motto>
      <Title>We provide world class financial assistance</Title>
      <ButtonBox>
        <Button>Read more</Button>
      </ButtonBox>
    </Container>
  )
}
