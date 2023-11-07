import React from 'react'

const Reservation = () => {
  return (
    <>
      <div className='reservation-pages'>
        <div className='overlay'></div>
        <div className='reservation-pages-content'>
          <h1>Make Your Reservation at Mi Mexico</h1>
          <p>
            Looking forward to an unforgettable dining experience? Reserve your
            table today and immerse yourself in the vibrant flavors and culture
            of Mexico. Whether it's a family gathering, a romantic dinner, or a
            special celebration, we're here to make your visit memorable.
            Contact us to book your spot and let us take care of the rest.
          </p>
        </div>
      </div>
      <div className='reservation-form'>
        <a
          href='https://direct.chownow.com/order/16089/locations/22847'
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          Reserve Now
        </a>
      </div>
    </>
  )
}

export default Reservation
