import React, { useState } from 'react';
import SliderNav from './SliderNav';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const handleItemClick = () => {
  setIsOpen(false)
}
  return (
    <nav className='navbar'>
      <div className='menu-toggle-container'>
        <div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='logo'>
          <Link to={`/`}>
         
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='reservations-nav'>
          <Link to={`/reservation`}>reservation</Link>
        </div>
        <div className='phone-number'>
          <h3>+1 701-858-0777</h3>
        </div>
      </div>
      <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
        <div className='nav-container'>
          <div className='reservation-nav'>
            <h3>we welcome you.</h3>
            <p>Reserve a table today and indulge your sense of taste.</p>
            <button className=' btn'>reserve a table</button>
          </div>
          <ul className='nav-links'>
            <li>
              <Link
                to='/'
                onClick={() => {
                  handleItemClick()
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/offer'
                onClick={() => {
                  handleItemClick()
                }}
              >
                offer
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                onClick={() => {
                  handleItemClick()
                }}
              >
                gallery
              </Link>
            </li>
            <li>
              <Link
                to='/events'
                onClick={() => {
                  handleItemClick()
                }}
              >
                events
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                onClick={() => {
                  handleItemClick()
                }}
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                onClick={() => {
                  handleItemClick()
                }}
              >
                contact
              </Link>
            </li>
          </ul>
          <SliderNav />
        </div>
      </ul>
    </nav>
  )
};

export default Navbar;
