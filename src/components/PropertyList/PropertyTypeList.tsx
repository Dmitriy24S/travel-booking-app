import styles from './PropertyTypeList.module.scss'

const propertyTypeList = [
  {
    name: 'Hotels',
    details: '233 hotels',
    img: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
  },
  {
    name: 'Apartments',
    details: '461 apartments',
    img: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
  },
  {
    name: 'Resorts',
    details: '133 resorts',
    img: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
  },
  {
    name: 'Villas',
    details: '204 villas',
    img: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
  },
  {
    name: 'Cabins',
    details: '151 cabins',
    img: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
  },
]

const PropertyTypeList = () => {
  return (
    <>
      <h1>Browse by property type</h1>
      <div className={styles.wrapper}>
        {propertyTypeList.map((item) => (
          <div className={styles.propertyItem} key={item.name}>
            <img src={item.img} alt={item.name} className={styles.image} />
            <div className={styles.details}>
              <h3>{item.name}</h3>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PropertyTypeList
