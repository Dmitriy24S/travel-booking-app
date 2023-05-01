import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import {
  FaBed,
  FaCalendarDay,
  FaCar,
  FaPlaceOfWorship,
  FaPlane,
  FaTaxi,
} from 'react-icons/fa'

import styles from './Header.module.scss'

type Props = {
  //
}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.list}>
        <div className={[styles.listItem, styles.active].join(' ')}>
          <FaBed />
          <span>Stays</span>
        </div>
        <div className={styles.listItem}>
          <FaPlane />
          <span>Flights</span>
        </div>
        <div className={styles.listItem}>
          <FaCar />
          <span>Car rentals</span>
        </div>
        <div className={styles.listItem}>
          <FaPlaceOfWorship />
          <span>Attractions</span>
        </div>
        <div className={styles.listItem}>
          <FaTaxi />
          <span>Airport taxis</span>
        </div>
      </div>
      <h1 className={styles.title}>A lifetime of discounts? It's Genius</h1>
      <p className={styles.description}>
        Get rewarded for your travels - unlock instant savings of 10% or more with a free
        Booking account.
      </p>
      <button className={styles.signInButton}>Sign in / Register</button>
      <div className={styles.search}>
        <div className={styles.searchItem}>
          <FaBed className={[styles.icon, styles.searchIcon].join(' ')} />
          <input
            type='text'
            name='header-search'
            id='header-search'
            placeholder='Where are you going?'
            className={styles.searchInput}
          />
        </div>
        <div className={styles.searchItem}>
          <FaCalendarDay className={styles.icon} />
          <span className={styles.searchItemText}>Date to date</span>
        </div>
        <div className={styles.searchItem}>
          <BsFillPersonFill className={styles.icon} />
          <span className={styles.searchItemText}>2 adults 2 children 1 room</span>
        </div>
      </div>
    </div>
  )
}

export default Header
