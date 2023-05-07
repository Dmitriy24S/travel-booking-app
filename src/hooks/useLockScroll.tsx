import { useEffect } from 'react'

export const useLockScroll = (isActive: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isActive])
}
