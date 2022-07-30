import { useState } from 'react';
import { useToggle } from '../../hooks';
import Gallery from '../Gallery';
import Modal from '../Modal';
import {
  Container,
  PreTitle,
  Title,
  Paragraph,
  Gallery as GalleryList,
  GalleryItem,
  Image,
} from './Cases.styled';
import gallery from './img';

export default function Cases() {
  const [showModal, toggleModal] = useToggle(false);
  const [index, setIndex] = useState(0);

  const handleClick = (index) => {
    toggleModal();
    setIndex(index);
  };

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
              <picture>
                <source
                  srcSet={`${image.webP} 1x, ${image.webP2x} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${image.jpg} 1x, ${image.jpg2x} 2x`}
                  type="image/jpeg"
                />
                <Image src={image.jpg} alt="Gallery item" />
              </picture>
            </GalleryItem>
          ))}
        </GalleryList>
      </Container>

      {showModal && (
        <Modal onClose={() => toggleModal()}>
          <Gallery
            onClose={() => toggleModal()}
            currentImage={gallery[index]}
            changeIndex={(index) => setIndex(index)}
            index={index}
            galleryLength={gallery.length}
          />
        </Modal>
      )}
    </>
  );
}
