import {
  Container,
  PreTitle,
  Title,
  Paragraph,
  Gallery as GalleryList,
  GalleryItem,
  // Image,
} from './Cases.styled'
import gallery from './images/jpg'
import { useToggle } from '../../hooks'
import Modal from '../Modal'
import Gallery from '../Gallery'
import { useState } from 'react'
// import ImageGallery from 'react-image-gallery'

export default function Cases() {
  const [showModal, toggleModal] = useToggle(false)
  const [index, setIndex] = useState(0)

  const handleClick = (index) => {
    toggleModal()
    setIndex(index)
  }

  return (
    <>
      <Container id="cases">
        <PreTitle>This is what we do</PreTitle>
        <Title>Business Cases</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Paragraph>
        <GalleryList>
          {gallery.map((image, index) => (
            <GalleryItem onClick={() => handleClick(index)} key={index}>
              <img src={image} alt="???" />
            </GalleryItem>
          ))}
        </GalleryList>
      </Container>
      {showModal && (
        <Modal onClose={() => toggleModal()}>
          <Gallery
            onClose={() => toggleModal()}
            fullImage={gallery[index]}
            changeIndex={(index) => setIndex(index)}
            index={index}
            galleryLength={gallery.length}
          />
        </Modal>
      )}
    </>
  )
}
