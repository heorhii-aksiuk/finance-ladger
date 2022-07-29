import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, Box } from './Modal.styled'

const modalRoot = document.getElementById('modal-root')

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <Overlay onClick={handleClick}>
      <Box>{children}</Box>
    </Overlay>,
    modalRoot,
  )
}
