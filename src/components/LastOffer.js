import React, { useState, useEffect } from 'react'

const slides = [
  {
    title: 'Fiesta Fridays: Taste of Mexico',
    description: `Kick off your weekend with our Fiesta Fridays! Dive into a vibrant selection of authentic Mexican dishes, from tangy ceviche to our famous tacos al pastor. Enjoy a 20% discount on all appetizers and get a free margarita when you order an entrée. Let's turn your Friday into a fiesta!`,
    imageUrl: './image/o1.png',
    buttonText: 'Learn More',
  },
  {
    title: 'Midweek Delight: Couples Combo',
    description:
      'Wednesday is the new date night at Mi Mexico! Indulge in a romantic dinner with our special Couples Combo. Savor a duo of entrees, including our succulent Carne Asada and our signature Pescado Veracruzano, complemented by a bottle of fine wine at half price. Share the love and the flavor!',
    imageUrl: './image/o2.png',
    buttonText: 'Discover',
  },
  {
    title: 'Sizzling Sundays: Family Platter',
    description:
      'Make Sundays special with our Family Platter offer. Gather around the table for a feast that includes an assortment of enchiladas, chiles rellenos, and carnitas. Plus, kids eat free! End your weekend with a full heart and a satisfied appetite, only at Mi Mexico.',
    imageUrl: './image/o3.png',
    buttonText: 'Shop Now',
  },
  {
    title: 'Lunch Break Escapes: Quick & Flavorful',
    description:
      'Escape the office and spice up your lunch break at Mi Mexico. Our Lunch Break Escapes menu offers quick, delicious options that will transport your taste buds to the heart of Mexico. Try our Express Enchilada or the Taco Trio, and get back to work feeling refreshed and energized.',
    imageUrl: './image/o4.png',
    buttonText: 'Sign Up',
  },
]

const LastO = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = 100 / slides.length
        return Math.min(oldProgress + diff, 100)
      })
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setCurrentSlide((prevCurrent) => (prevCurrent + 1) % slides.length)
    }, 4000)

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className='slider-home'>
      <div className='slider-home-container'>
        <div className='slider-content'>
          <div className='slider-text'>
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
            <button className='btn'>{slides[currentSlide].buttonText}</button>
          </div>
          <div
            className='slider-image'
            style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
          ></div>
        </div>
        
      </div>
    </div>
  )
}

export default LastO
