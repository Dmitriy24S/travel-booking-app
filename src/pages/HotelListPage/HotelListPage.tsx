import Header from '../../components/Header/Header'
import HotelList from '../../components/HotelList/HotelList'
import MainContentLayout from '../../components/Layout/MainContentLayout'
import Navbar from '../../components/Navbar/Navbar'

function HotelListPage() {
  return (
    <>
      <Navbar />
      <Header />
      <MainContentLayout>
        <HotelList />
      </MainContentLayout>
    </>
  )
}

export default HotelListPage
