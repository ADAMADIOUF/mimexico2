import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import OfferPages from './components/OfferPages'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/offer' element={<OfferPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
