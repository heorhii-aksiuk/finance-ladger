import {
  Container,
  PreTitle,
  Title,
  Paragraph,
  Gallery,
  GalleryItem,
  Image,
} from './Cases.styled'
import gallery from './images/jpg'

export default function Cases() {
  return (
    <Container>
      <PreTitle>This is what we do</PreTitle>
      <Title>Business Cases</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </Paragraph>
      <Gallery>
        {gallery.map((image, index) => (
          <GalleryItem key={index}>
            <Image src={image} alt="???" />
          </GalleryItem>
        ))}
      </Gallery>
    </Container>
  )
}
