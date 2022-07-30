import {
  Box,
  ArrowLeft,
  ArrowRight,
  ArrowImage,
  Close,
} from './Gallery.styled';
import prev from './img/prev.png';
import next from './img/next.png';
import close from './img/close.png';

export default function Gallery({
  currentImage,
  changeIndex,
  index,
  galleryLength,
  onClose,
}) {
  const firstImage = index === 0;
  const lastImage = index === galleryLength - 1;

  return (
    <Box>
      {!firstImage && (
        <ArrowLeft>
          <ArrowImage
            onClick={() => changeIndex(index - 1)}
            src={prev}
            alt=""
          />
        </ArrowLeft>
      )}
      <picture>
        <source
          srcSet={`${currentImage.webP} 1x, ${currentImage.webP2x} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${currentImage.jpg} 1x, ${currentImage.jpg2x} 2x`}
          type="image/jpeg"
        />
        <img src={currentImage.jpg} alt="Gallery item full" />
      </picture>
      {!lastImage && (
        <ArrowRight>
          <ArrowImage
            onClick={() => changeIndex(index + 1)}
            src={next}
            alt=""
          />
        </ArrowRight>
      )}
      <Close onClick={() => onClose()} src={close} />
    </Box>
  );
}
