import { Box, ArrowLeft, ArrowRight, ArrowImage, Close } from './Gallery.styled'

import prev from './images/png/prev.png'
import next from './images/png/next.png'
import close from './images/png/close.png'

export default function Gallery({
  fullImage,
  changeIndex,
  index,
  galleryLength,
  onClose,
}) {
  const firstImage = index === 0
  const lastImage = index === galleryLength - 1

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
          srcSet={`${fullImage.webP} 1x, ${fullImage.webP2x} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${fullImage.jpg} 1x, ${fullImage.jpg2x} 2x`}
          type="image/jpeg"
        />
        <img src={fullImage.jpg} alt="Gallery item full" />
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
  )
}
