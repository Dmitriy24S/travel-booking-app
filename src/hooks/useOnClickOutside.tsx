import { RefObject, useEffect } from 'react'

type HandleClickOutside = () => void

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  isOpen: boolean,
  func: HandleClickOutside
) => {
  const element = ref.current

  useEffect(() => {
    if (!element) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      console.log('handleClickOutside element', element)
      console.log('handleClickOutside event', event)

      // Do nothing if clicking ref's element or descendent elements
      if (element.contains(event.target as Node)) {
        console.log('contains element return')
        return
      }

      console.log('handle click outside')
      func()
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [element, isOpen, func])
}

export default useOnClickOutside
