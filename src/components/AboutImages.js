import React from 'react'
import a from "../assets/about1.png"
const AboutImages = () => {
  return (
    <div className='about-images section-center'>
      <div className='about-images-container'>
        <article className='about-img'>
          <img src={a} alt='' />
        </article>
        <article>
          <article>
            <h3>Welcome to Our Restaurant</h3>
            <p>
              Welcome to our restaurant where we serve passion on a plate. Our
              journey began with a love for authentic Mexican cuisine and a
              dream to share it with the world. Every dish tells a story of
              tradition, innovation, and the freshest ingredients. From the
              zesty tang of our salsa to the savory fillings of our burritos and
              tacos, each bite is a celebration of Mexico's rich culinary
              heritage.
            </p>
            <p>
              Our commitment to quality is unwavering, as we source only the
              finest, locally-grown produce to craft our dishes. Our chefs are
              artisans, blending spices and herbs to create the vibrant flavors
              that our customers love. Whether you're here for a quick lunch or
              a leisurely dinner, we invite you to relax, enjoy, and let our
              food transport you to the heart of Mexico. Come join us and be a
              part of our story.
            </p>
            <button className='btn'>contact now</button>
          </article>
        </article>
      </div>
    </div>
  )
}

export default AboutImages
