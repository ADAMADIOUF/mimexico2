import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import OfferPages from './components/OfferPages'
import Gallery from './components/Gallery'
import EventPages from './components/EventPages'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
import Reservation from './components/Reservation'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/offer' element={<OfferPages />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/events' element={<EventPages />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
