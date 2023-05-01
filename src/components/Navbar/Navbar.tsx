import React from 'react'
import styles from './Navbar.module.scss'

type Props = {
  //
}

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <span className={styles.logo}>Booking</span>
        <div className={styles.navItems}>
          <button className={styles.navButton}>Register</button>
          <button className={styles.navButton}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
