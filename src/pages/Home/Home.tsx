import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Header from '../../components/Header/Header'
import MainContentLayout from '../../components/Layout/MainContentLayout'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import PropertyTypeList from '../../components/PropertyList/PropertyTypeList'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header page='home' />
      <MainContentLayout page='home'>
        <Featured />
        <PropertyTypeList />
        <FeaturedProperties />
      </MainContentLayout>
      <MailList />
    </>
  )
}

export default Home
