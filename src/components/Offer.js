import React from 'react'
import SliderHome from './SliderHome'
import Events from './Events'

const Offer = () => {
  return (
    <div className='offer section-center'>
      <div className='title'>
        <h3>a dream for the plate</h3>
        <p>
        
          Get an insight into our exquisite range of dishes and our diverse
          range of quality culinary delights that cater to every palate. From
          the freshest seafood selections to the most succulent cuts of meat,
          each dish is crafted with the utmost care and attention to detail. Our
          menu is a testament to our commitment to excellence, featuring a
          variety of flavors that are both traditional and innovative. Indulge
          in a dining experience that not only satisfies your taste buds but
          also captivates your senses, all within an ambiance that exudes
          elegance and comfort. Join us for a meal and discover the culinary
          treasures that make our establishment a beacon for food connoisseurs
          and casual diners alike.
        </p>
      </div>
      <SliderHome/>
      <Events/>
    </div>
  )
}

export default Offer
