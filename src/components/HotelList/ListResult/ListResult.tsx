import styles from './ListResult.module.scss'

const ListResult = ({ data }: { data: any }) => {
  return (
    <div className={styles.list}>
      {data.map((item: any) => (
        <div className={styles.item} key={item.title}>
          <img
            src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
            alt=''
            className={styles.image}
            loading='lazy'
          />
          <div className={styles.details}>
            <h1 className={styles.tname}>Tower Street Apartments</h1>
            <p className={styles.distance}>500m from center</p>
            <p className={styles.taxi}>Free airport taxi</p>
            <p className={styles.subtitle}>Studio Apartment with Air conditioning</p>
            <p className={styles.features}>
              Entire studio • 1 bathroom • 21m² 1 full bed
            </p>
            <p className={styles.cancelation}>Free cancellation </p>
            <p className={styles.cancelationSubtitle}>
              You can cancel later, so lock in this great price today!
            </p>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.ratingContainer}>
              <div className={styles.rating}>8.9</div>
              <p className={styles.ratingText}>Excellent</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.price}>$112</p>
              {/* <span className='siTaxOp'>Includes taxes and fees</span> */}
            </div>
          </div>
          <button className={styles.button}>See availability</button>
        </div>
      ))}
    </div>
  )
}

export default ListResult
