import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { FaBed, FaCar, FaPlaceOfWorship, FaPlane, FaTaxi } from 'react-icons/fa'

import Details from './Details/Details'
import styles from './Header.module.scss'
import Search from './Search/Search'

type Props = {
  page?: 'home' | undefined
}

const Header = ({ page = undefined }: Props) => {
  return (
    <div className={styles.header}>
      <div
        className={[styles.headerContainer, page !== 'home' ? styles.listMode : ''].join(
          ' '
        )}
      >
        <ul className={styles.list}>
          <li>
            <a href='#' className={[styles.listItem, styles.active].join(' ')}>
              <FaBed />
              <span>Stays</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.listItem}>
              <FaPlane />
              <span>Flights</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.listItem}>
              <FaCar />
              <span>Car rentals</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.listItem}>
              <FaPlaceOfWorship />
              <span>Attractions</span>
            </a>
          </li>
          <li>
            <a href='#' className={styles.listItem}>
              <FaTaxi />
              <span>Airport taxis</span>
            </a>
          </li>
        </ul>
        {page === 'home' && (
          <>
            <Details />
            <Search />
          </>
        )}
      </div>
    </div>
  )
}

export default Header
