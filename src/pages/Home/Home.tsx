import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header page='home' />
      <div className={styles.homeContainer}>
        <Featured />
      </div>
    </>
  )
}

export default Home
