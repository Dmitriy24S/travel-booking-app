import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import HotelListPage from './pages/HotelListPage/HotelListPage'
import HotelPage from './pages/HotelPage/HotelPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<HotelListPage />} />
        <Route path='/hotels/:id' element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
