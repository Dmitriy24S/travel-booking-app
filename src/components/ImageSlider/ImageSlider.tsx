import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

import { useRef } from 'react'

import styles from './ImageSlider.module.scss'

interface Props {
  data: { src: string }[]
  imageIndex: number
  toggleShowImageSlider: () => void
  togglePrevImage: (index: number) => void
  toggleNextImage: (index: number) => void
}

const ImageSlider: React.FC<Props> = ({
  data,
  imageIndex = 0,
  toggleShowImageSlider,
  togglePrevImage,
  toggleNextImage,
}) => {
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === sliderContainerRef.current) {
      toggleShowImageSlider()
    }
  }

  return (
    <div className={styles.sliderContainer}>
      <div
        ref={sliderContainerRef}
        onClick={(e) => handleBackdropClick(e)}
        className={styles.sliderContent}
      >
        <button
          aria-label='close image slider'
          onClick={toggleShowImageSlider}
          className={styles.sliderCloseButton}
        >
          <AiFillCloseCircle />
        </button>
        <button
          aria-label='previous image'
          onClick={() => togglePrevImage(imageIndex)}
          className={styles.sliderLeftButton}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          aria-label='next image'
          onClick={() => toggleNextImage(imageIndex)}
          className={styles.sliderRightButton}
        >
          <BsFillArrowRightCircleFill />
        </button>
        <img
          src={data[imageIndex].src}
          alt=''
          loading='lazy'
          className={styles.sliderImage}
        />
      </div>
    </div>
  )
}

export default ImageSlider
