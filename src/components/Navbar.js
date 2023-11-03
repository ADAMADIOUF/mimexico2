import React, { useState } from 'react';
import SliderNav from './SliderNav';
import logo from "../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='menu-toggle-container'>
        <div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className="logo">
         <img src={logo} alt="" />
        </div>
        <div className="reservations-nav">reseveations</div>
        <div className="phone-number">
         <h3>701500543267</h3>
        </div>
      </div>
      <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
        <div className='nav-container'>
          <div className='reservation-nav'>
            <h3>we welcome you.</h3>
            <p>Reserve a table today and indulge your sense of taste.</p>
            <button className='btn-reserve'>reserve a table</button>
          </div>
          <div>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Menu</a>
            </li>
            <li>
              <a href='#'>Reservations</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </div>
          <SliderNav />
        </div>
      </ul>
    </nav>
  )
};

export default Navbar;
