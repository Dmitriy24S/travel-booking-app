import styles from './Details.module.scss'

const Details = () => {
  return (
    <>
      <h1 className={styles.title}>A lifetime of discounts? It's Genius</h1>
      <p className={styles.description}>
        Get rewarded for your travels - unlock instant savings of 10% or more with a free
        Booking account.
      </p>
      <button className={styles.signInButton}>Sign in / Register</button>
    </>
  )
}

export default Details
