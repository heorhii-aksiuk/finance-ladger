import Button from '../Button';
import {
  Container,
  ContentBox,
  PreTitle,
  Title,
  Paragraph,
  Image,
} from './Blog.styled';

import blog from './img/blog.jpg';
import blog2x from './img/blog@2x.jpg';
import blogWebP from './img/blog.webp';
import blogWebP2x from './img/blog@2x.webp';

export default function Blog() {
  return (
    <Container id="blog">
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
      <picture>
        <source srcSet={`${blogWebP} 1x, ${blogWebP2x} 2x`} type="image/webp" />
        <source srcSet={`${blog} 1x, ${blog2x} 2x`} type="image/jpeg" />
        <Image src={blog} alt="Table with notebooks, tablet and coffee" />
      </picture>
    </Container>
  );
}
