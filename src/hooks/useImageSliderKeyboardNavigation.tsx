import { useEffect } from 'react'

interface Props {
  imageIndex: number
  togglePrevImage: (imageIndex: number) => void
  toggleNextImage: (imageIndex: number) => void
  toggleShowImageSlider: () => void
}

export const useImageSliderKeyboardNavigation = ({
  imageIndex,
  togglePrevImage,
  toggleNextImage,
  toggleShowImageSlider,
}: Props) => {
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        togglePrevImage(imageIndex)
      }
      if (e.key === 'ArrowRight') {
        toggleNextImage(imageIndex)
      }
    }

    document.addEventListener('keydown', handleArrowKeys)
    return () => {
      document.removeEventListener('keydown', handleArrowKeys)
    }
  }, [imageIndex, togglePrevImage, toggleNextImage])

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleShowImageSlider()
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [toggleShowImageSlider])
}
