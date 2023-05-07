import { useEffect, useState } from 'react'

const useActiveElement = () => {
  console.count('useActiveElement')
  const [active, setActive] = useState(document.activeElement)

  const handleFocusIn = () => {
    setActive(document.activeElement)
  }

  useEffect(() => {
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [])

  return active
}

export const useLockFocus = (ref: React.RefObject<HTMLDivElement>) => {
  console.count('useLockFocus')

  const focusedEl = useActiveElement()

  useEffect(() => {
    const element = ref.current

    if (!element || !focusedEl) {
      console.log('no element or activeleemnt so return from sueffect')

      return
    }

    element.focus()

    const handleFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        console.log('not tab -> return')
        return
      }

      const focusableElements = Array.from(
        element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      )

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (!focusableElements.includes(focusedEl)) {
        setTimeout(() => {
          firstElement.focus()
        }, 100)
        return
      }

      // if going forward by pressing Tab and lastElement is active shift focus to first focusable element - loop to start
      if (!event.shiftKey && focusedEl === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }

      // if going backward by pressing Shift+Tab and firstElement is active shift focus to last focusable element - loop to end
      if (event.shiftKey && focusedEl === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }
    }

    document.addEventListener('keydown', handleFocus)

    return () => {
      document.removeEventListener('keydown', handleFocus)
    }
  }, [ref, focusedEl])
}
