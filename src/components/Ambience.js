import React from 'react'
import a from "../assets/am.png"
import b from '../assets/am1.png'

const Ambience = () => {
  return (
    <div className='ambience-section section-center'>
      <div className='ambience-title'>
        <h1>ENJOY AND FEEL GOOD</h1>
        <p className='unique-ambience'>
          THE UNIQUE AMBIENCE IN OUR RESTAURANT MAKES YOUR STAY AN INCOMPARABLE
          EXPERIENCE FOR ALL THE SENSES.
        </p>
      </div>
      <div className='ambience-container'>
        <article>
          <img src={a} alt='' />
        </article>
        <article>
         <h3 className="title">A Haven of Taste & Elegance</h3>
        <p className="description">
          Our heart is the old vaulted cellar, which impresses with its
          charming rusticity and simple elegance. The furnishings are classically
          stylish and can also be festive if desired. Our passion and expertise
          for high-quality wine culture can be discovered everywhere. Warm,
          bright, and yet pleasantly soft lighting makes the vault a cozy place
          to enjoy and linger.
        </p>
        <p className="description">
          In summer, our terrace and garden spaces offer a wonderful view of the
          Aare and the impressive church. Enjoy the summer warmth on our shaded
          terrace and taste excellent food in our garden. It's not just a meal;
          it's an experience that transcends the ordinary, creating memories
          that linger long after the last bite.
        </p>
          <a href='contact-url' className='btn'>
            CONTACT NOW
          </a>
        </article>
      </div>
      <div className="img-ambience-right">
       <img src={b} alt="" />
      </div>
    </div>
  )
}

export default Ambience
