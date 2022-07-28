import {
  Container,
  Image,
  ContentBox,
  PreTitle,
  Title,
  Paragraph,
} from './Blog.styled'
import Button from '../Button'
import blog from './images/jpg/blog.jpg'

export default function Blog() {
  return (
    <Container>
      <Image src={blog} alt="Table with notebooks, tablet and coffee" />
      <ContentBox>
        <PreTitle>April 16 2020</PreTitle>
        <Title>Blog Post One</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Paragraph>
        <Button blogWithBorder>Read our blog</Button>
      </ContentBox>
    </Container>
  )
}
