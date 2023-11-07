import React from 'react'
import AboutImages from './AboutImages'

const AboutPage = () => {
  return (
    <>
      <div className='about-pages'>
        <div className='overlay'></div>
        <div className='about-pages-content'>
          <h1>Discover the Authentic Flavors of Mi Mexico</h1>
          <p>Savor Every Bite at Minot's Home of Traditional Mexican Cuisine</p>
        </div>
      </div>
      <div className='about-content section-center'>
        <p>
          After opening in 2008, Mi Mexico became Minot’s finest authentic
          Mexican Cuisine. On March 2, 2022, Mi Mexico moved to their current
          location.
        </p>
        <p>Mi Mexico is a family-run business perfect for celebrations.</p>
        <p>
          Mi Mexico offers a free meal on your birthday*, daily lunch specials,
          and military discounts on all their food. When you are deciding on a
          restaurant, the fun and friendly atmosphere of Mi Mexico is a perfect
          place to relax.
        </p>
        <p>Come in and experience authentic Mexican Cuisine.</p>
        <p>
          <em>
            *Some exceptions apply to the free birthday meal and military
            discount. Dine in Only
          </em>
        </p>
        <h2>Minot North Dakota's best Authentic Mexican restaurant</h2>
        <button className='btn'>View the menu</button>
        <h3>CANTINA — it makes me happy!</h3>
      </div>
      <AboutImages/>
    </>
  )
}

export default AboutPage
