import styles from './Featured.module.scss'

const featuredItems = [
  {
    title: 'Dublin',
    description: '123 propertie',
    img: 'https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=',
  },
  {
    title: 'Austin',
    description: '533 properties',
    img: 'https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=',
  },
  {
    title: 'Reno',
    description: '532 properties',
    img: 'https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=',
  },
]

const Featured = () => {
  return (
    <div className={styles.featured}>
      {featuredItems.map((item) => (
        <div className={styles.featuredItem} key={item.title}>
          <img src={item.img} alt={item.title} className={styles.image} loading='lazy' />
          <div className={styles.details}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featured
