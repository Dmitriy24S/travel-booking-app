import styles from './MainContentLayout.module.scss'

interface Props {
  children: React.ReactNode
  page?: 'home' | undefined
}

const MainContentLayout: React.FC<Props> = ({ children, page }) => {
  return (
    <div
      className={[styles.container, page === 'home' ? styles.homeContainer : ''].join(
        ' '
      )}
    >
      {children}
    </div>
  )
}

export default MainContentLayout
