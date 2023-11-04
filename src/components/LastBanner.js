import React from 'react'
import a from '../assets/l1.png'
import b from '../assets/l2.png'
import c from '../assets/l3.png'
import d from '../assets/l4.png'
import e from '../assets/l5.png'
import f from '../assets/l6.png'
import g from '../assets/l7.png'
import h from '../assets/l8.png'






const LastBanner = () => {
  return (
    <div className='last-banner'>
      <div className='white-background'>
        <h2 className='title'>Our Special Offers</h2>
        <p className='description'>
          Check out our latest deals and enjoy authentic flavors from Mi Mexico!
        </p>
        <button className='cta-button'>Discover More</button>
      </div>
      {/* First Row */}
      <div className='last-banner-row'>
        <img src={a} alt='Image 1' className='image' />
        <img src={b} alt='Image 2' className='image' />

        <div className='spacer'></div>
        <img src={c} alt='Image 3' className='image' />
        <img src={d} alt='Image 4' className='image' />
      </div>

      <div className='last-banner-row'>
        <img src={e} alt='Image 5' className='image' />
        <img src={f} alt='Image 6' className='image' />

        <div className='spacer'></div>
        <img src={g} alt='Image 7' className='image' />
        <img src={h} alt='Image 8' className='image' />
      </div>
    </div>
  )
}

export default LastBanner
