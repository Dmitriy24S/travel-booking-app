import { useNavigate } from 'react-router-dom'
import { IHotel } from '../HotelList'
import styles from './ListResult.module.scss'

const ListResult = ({ data }: { data: IHotel[] }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.list}>
      {data.map((item: IHotel, index: number) => (
        <div
          // key={item.id}
          key={index}
          className={styles.item}
        >
          <img
            src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
            alt=''
            className={styles.image}
            loading='lazy'
          />
          <div className={styles.details}>
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.distance}>{item.distance}</p>
            <p className={styles.taxi}>{item.taxi}</p>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <p className={styles.features}>{item.features}</p>
            <p className={styles.cancelation}>{item.cancelation} </p>
            <p className={styles.cancelationSubtitle}>{item.cancelationSubtitle} </p>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.ratingContainer}>
              <div className={styles.rating}>{item.rating}</div>
              <p className={styles.ratingText}>{item.ratingText}</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.price}>{item.price}</p>
              {/* <span className='siTaxOp'>Includes taxes and fees</span> */}
            </div>
          </div>
          <button onClick={() => navigate(`/hotels/${index}`)} className={styles.button}>
            See availability
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListResult
