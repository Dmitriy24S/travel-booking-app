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
