import React from 'react'
import a from "../assets/e1.png"
import b from '../assets/e2.png'
import c from '../assets/e3.png'
import LastBanner from './LastBanner'


const Events = () => {
  return (
    <>
      <div className='events section-center'>
        <h2 className='events-title'>Our Special Events</h2>
        <div className='row top-row'>
          <img src={a} alt='Event 1' />
          <img src={b} alt='Event 2' />
        </div>
        <div className='row bottom-row'>
          <img src={c} alt='Event 3' />
          <div className='text-content'>
            <p className='description'>
              Join us for an unforgettable experience with our exclusive
              culinary events. From gourmet tastings to festive celebrations,
              there's always something exciting happening at Mi Mexico!
            </p>
            <button className='learn-more'>Learn More</button>
            <hr className='underline' />
          </div>
        </div>
      </div>
      <LastBanner />
    </>
  )
}

export default Events
