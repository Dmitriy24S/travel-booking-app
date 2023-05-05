import styles from './FeaturedProperties.module.scss'

const featuredProperties = [
  {
    name: 'Aparthotel Stare Miasto',
    location: 'Madrid',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
    price: '$120',
    rating: '8.9',
    ratingText: 'Excellent',
    reviewsCount: 495,
  },
  {
    name: 'Comfort Suites Airport',
    location: 'Austin',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1',
    price: '$140',
    rating: '9.3',
    ratingText: 'Exceptional',
    reviewsCount: 65,
  },
  {
    name: 'Four Seasons Hotel',
    location: 'Lisbon',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/296866713.jpg?k=4db4cab5cf97fa244f2aa8b2ccdcfd5f2e09d5ac06038df6f7aec95107315132&o=&hp=1',
    price: '$99',
    rating: '8.8',
    ratingText: 'Excellent',
    reviewsCount: 74,
  },
  {
    name: 'Hilton Garden Inn',
    location: 'Berlin',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1',
    price: '$105',
    rating: '8.9',
    ratingText: 'Excellent',
    reviewsCount: 198,
  },
]

const FeaturedProperties = () => {
  return (
    <>
      <h1>Properties guests love</h1>
      <div className={styles.properties}>
        {featuredProperties.map((property) => (
          <div className={styles.property} key={property.name}>
            <img
              src={property.img}
              alt={property.name}
              className={styles.image}
              loading='lazy'
            />
            <h4 className={styles.name}>{property.name}</h4>
            <p className={styles.location}>{property.location}</p>
            <p className={styles.price}> Starting from {property.price}</p>
            <div className={styles.betweenContainer}>
              <div className={styles.ratingContainer}>
                <div className={styles.rating}>{property.rating}</div>
                <p className={styles.ratingText}>{property.ratingText}</p>
              </div>
              <p className={styles.reviewsCount}>{property.reviewsCount} reviews</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedProperties
