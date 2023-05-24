import ListResult from './ListResult/ListResult'
import ListSearch from './ListSearch/ListSearch'

import styles from './HotelList.module.scss'

const data = [
  {
    name: 'Tower Street Apartments',
    features: 'Entire studio • 1 bathroom • 21m² 1 full bed',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
    distance: '500m from center',
    taxi: 'Free airport taxi',
    subtitle: 'Studio Apartment with Air conditioning',
    cancelation: 'Free cancellation',
    cancelationSubtitle: 'You can cancel later, so lock in this great price today!',
    rating: '8.9',
    ratingText: 'Excellent',
    price: '$112',
  },
  {
    name: 'Tower Street Apartments',
    features: 'Entire studio • 1 bathroom • 21m² 1 full bed',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
    distance: '500m from center',
    taxi: 'Free airport taxi',
    subtitle: 'Studio Apartment with Air conditioning',
    cancelation: 'Free cancellation',
    cancelationSubtitle: 'You can cancel later, so lock in this great price today!',
    rating: '8.9',
    ratingText: 'Excellent',
    price: '$112',
  },
  {
    name: 'Tower Street Apartments',
    features: 'Entire studio • 1 bathroom • 21m² 1 full bed',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
    distance: '500m from center',
    taxi: 'Free airport taxi',
    subtitle: 'Studio Apartment with Air conditioning',
    cancelation: 'Free cancellation',
    cancelationSubtitle: 'You can cancel later, so lock in this great price today!',
    rating: '8.9',
    ratingText: 'Excellent',
    price: '$112',
  },
  {
    name: 'Tower Street Apartments',
    features: 'Entire studio • 1 bathroom • 21m² 1 full bed',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
    distance: '500m from center',
    taxi: 'Free airport taxi',
    subtitle: 'Studio Apartment with Air conditioning',
    cancelation: 'Free cancellation',
    cancelationSubtitle: 'You can cancel later, so lock in this great price today!',
    rating: '8.9',
    ratingText: 'Excellent',
    price: '$112',
  },
  {
    name: 'Tower Street Apartments',
    features: 'Entire studio • 1 bathroom • 21m² 1 full bed',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
    distance: '500m from center',
    taxi: 'Free airport taxi',
    subtitle: 'Studio Apartment with Air conditioning',
    cancelation: 'Free cancellation',
    cancelationSubtitle: 'You can cancel later, so lock in this great price today!',
    rating: '8.9',
    ratingText: 'Excellent',
    price: '$112',
  },
]

export type IHotel = (typeof data)[0]

const List = () => {
  return (
    <div className={styles.listContainer}>
      <ListSearch />
      <ListResult data={data} />
    </div>
  )
}

export default List
