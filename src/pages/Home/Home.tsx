import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Home.module.scss'

type Props = {
  //
}

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
    </>
  )
}

export default Home
