import React from 'react'
import Header from './Header'
import a from "../assets/b1.png"
import b from '../assets/b2.png'
import Offer from './Offer'
const HomePage = () => {
  return (
    <>
      <div className='home'>
        <Header />
        <div className='home-page section-center'>
          <div className='home-page-mexico'>
            <div className='title'>
              <h3>mi mexico</h3>
            </div>
            <p>
              SAVOR AUTHENTIC MEXICAN FLAVORS, FRESH INGREDIENTS, AND TOP-SHELF
              TEQUILAS AT MI MEXICO, YOUR GO-TO DESTINATION FOR TRADITIONAL
              CUISINE IN THE HEART OF THE CITY.
            </p>
            <p>
              ENJOY THE VIBRANT ATMOSPHERE, COLORFUL DECOR, AND THE WARMTH OF
              OUR HOSPITALITY, PROVIDING THE PERFECT BACKDROP FOR AN
              UNFORGETTABLE DINING EXPERIENCE.
            </p>
            <p>
              JOIN US SOON FOR A TASTE OF MEXICO; WE CAN'T WAIT TO WELCOME YOU
              AND SHARE OUR PASSION FOR DELICIOUS, AUTHENTIC FOOD.
            </p>
          </div>
          <div className='home-about'>
            <article className='home-about-content'>
              <div className='title'>
                <h3>about us</h3>
              </div>
              <h3>WITH PASSION AND HEARTBLOOD</h3>
              <p>
                After opening in 2008, Mi Mexico became Minot’s finest authentic
                Mexican Cuisine. On March 2, 2022 Mi Mexico moved to their
                current location. Mi Mexico is a family run business perfect for
                celebrations. Mi Mexico offers a free meal on your birthday*,
                daily lunch specials and military discounts on all their food.
                When you are deciding on a restaurant, the fun and friendly
                atmosphere of Mi Mexico is a perfect to place relax. ​ Come in
                an experience authentic Mexican Cuisine.
              </p>
              <button className='btn'>reservation</button>
            </article>
            <article className='home-about-img'>
              <div className='home-about-first-img'>
                <img src={a} alt='' />
              </div>
              <div className='home-about-second-img'>
                <img src={b} alt='' />
              </div>
            </article>
          </div>
        </div>
      </div>
      <Offer />
      
    </>
  )
}

export default HomePage
