import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import a from "../assets/a1.png"
import b from '../assets/a2.png'
import c from '../assets/a3.png'
import d from '../assets/a4.png'
const SliderNav = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  }

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <img
            src={d}
            alt='Image 1'
          />
        </div>
        <div>
          <img
            src={b}
            alt='Image 2'
          />
        </div>
        <div>
          <img
            src={c}
            alt='Image 3'
          />
        </div>
      </Slider>
    </div>
  )
}

export default SliderNav
