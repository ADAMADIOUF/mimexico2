import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import Ambience from './Ambience'
import LastOffer from './LastOffer'

const OfferPages = () => {
  
  const pdfPath = '/Orange & White Simple Food Menu.pdf'

  return (
    <>
      <div className='offer-pages'>
        <div className='overlay'></div>
        <div className='offer-pages-content'>
          <h1>
            Indulge in Mi Mexico's Authentic Delights – Special Offers Inside!
          </h1>
          <h3>Menu</h3>
          <a href={pdfPath} target='_blank' rel='noopener noreferrer'>
            <FaFilePdf className='pdf' />
          </a>
        </div>
      </div>
      <div className='offer-section section-center'>
        <p>
          Step into the vibrant heart of culinary tradition with Mi Mexico's
          latest offerings! Our menu is a celebration of authentic flavors, each
          dish crafted to transport your senses straight to the bustling streets
          of Mexico. From the smoky depths of our mole to the zesty tang of our
          ceviche, every bite is a fiesta. And now, we're inviting you to
          indulge with exclusive specials that make every meal an adventure.
          Unwrap the rich tapestry of tastes with our handpicked ingredients and
          homemade recipes that have been passed down through generations. At Mi
          Mexico, we're not just serving food; we're serving memories, joy, and
          the unbridled spirit of Mexico. Dive into our specials today and savor
          the true essence of Mexican hospitality. ¡Buen provecho!
        </p>
      </div>
      <Ambience/>
      <LastOffer/>
    </>
  )
}

export default OfferPages
