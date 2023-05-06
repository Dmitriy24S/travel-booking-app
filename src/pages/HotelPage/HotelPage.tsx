import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HotelDetails from '../../components/HotelDetails/HotelDetails'
import MainContentLayout from '../../components/Layout/MainContentLayout'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'

const HotelPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainContentLayout>
        <HotelDetails />
      </MainContentLayout>
      <MailList />
      <Footer />
    </>
  )
}

export default HotelPage
