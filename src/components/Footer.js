import React from 'react'
import backgroundImg from '../assets/footer.png'

const Footer = () => {
  return (
    <footer
      className='footer'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className='footer-overlay'>
        <div className='footer-content'>
          <p>+1 701-858-0777</p>
          <p>info@mimexico-restaurant.com</p>
          <p>3816 S. Broadway Minot, ND 58701-7670</p>
          <h3>OPENING HOURS</h3>
          <p>Mon-Thur 11:00am - 10:00pm</p>
          <p>Fri-Sat 11:00am - 10:30pm</p>

          <p>Sunday 11:00am - 9:00pm</p>
          <p>WE LOOK FORWARD TO YOUR VISIT!</p>
          <p>CONTACT US NOW</p>
          <nav className='footer-nav'>
            <a href='/home'>HOME</a>
            <a href='/offer'>OFFER</a>
            <a href='/gallery'>GALLERY</a>
            <a href='/events'>EVENTS</a>
            <a href='/about-us'>ABOUT US</a>
            <a href='/contact'>CONTACT</a>
          </nav>
          <p>© Copyright Mi Mexico Restaurant</p>
          <p>Web Design by adamadiouf</p>
          <p>Mi Mexico &copy; {new Date().getFullYear()} adamadiouf</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
