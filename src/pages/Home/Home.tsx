import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyTypeList from '../../components/PropertyList/PropertyTypeList'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header page='home' />
      <div className={styles.homeContainer}>
        <Featured />
        <PropertyTypeList />
        <FeaturedProperties />
      </div>
    </>
  )
}

export default Home
