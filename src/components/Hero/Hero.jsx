import { Container, Box, Motto, Title, ButtonBox } from './Hero.styled'
import Button from '../Button'

export default function Hero() {
  return (
    <Container>
      <Box>
        <Motto>The sky is the limit</Motto>
        <Title>We provide world class financial assistance</Title>
        <ButtonBox>
          <Button accent>Read more</Button>
        </ButtonBox>
      </Box>
    </Container>
  )
}
