import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home/Home'))
const HotelListPage = lazy(() => import('./pages/HotelListPage/HotelListPage'))
const HotelPage = lazy(() => import('./pages/HotelPage/HotelPage'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/hotels'
          element={
            <Suspense>
              <HotelListPage />
            </Suspense>
          }
        />
        <Route
          path='/hotels/:id'
          element={
            <Suspense>
              <HotelPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
