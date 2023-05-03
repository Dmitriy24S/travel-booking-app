import styles from './MailList.module.scss'

const MailList = () => {
  return (
    <div className={styles.mailList}>
      <h3>Save time, save money!</h3>
      <p>Sign up and we'll send the best deals to you</p>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputContainer}>
          <input type='email' placeholder='Your email' />
          <button type='submit' className={styles.submitButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.checkboxContainer}>
          <input type='checkbox' name='app-signup' id='app-signup' />
          <label htmlFor='app-signup'>Send me a link to get the FREE Booking app!</label>
        </div>
      </form>
    </div>
  )
}

export default MailList
