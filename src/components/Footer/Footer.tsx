import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <ul className={styles.list}>
          <li className={styles.item}>Countries</li>
          <li className={styles.item}>Regions</li>
          <li className={styles.item}>Cities</li>
          <li className={styles.item}>Districts</li>
          <li className={styles.item}>Airports</li>
          <li className={styles.item}>Hotels</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Homes</li>
          <li className={styles.item}>Apartments</li>
          <li className={styles.item}>Resorts</li>
          <li className={styles.item}>Villas</li>
          <li className={styles.item}>Hostels</li>
          <li className={styles.item}>Guest houses</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Unique places to stay</li>
          <li className={styles.item}>All destinations</li>
          <li className={styles.item}>All flight destinations</li>
          <li className={styles.item}>All car hire locations</li>
          <li className={styles.item}>Discover</li>
          <li className={styles.item}>Reviews</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Car hire</li>
          <li className={styles.item}>Flight finder</li>
          <li className={styles.item}>Restaurant reservations</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Customer Service help</li>
          <li className={styles.item}>Careers</li>
          <li className={styles.item}>Sustainability</li>
          <li className={styles.item}>Press centre</li>
          <li className={styles.item}>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
