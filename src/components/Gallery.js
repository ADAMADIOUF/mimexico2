import React from 'react'
import GalleryContent from './GalleryContent'

const Gallery = () => {
  return (
    <>
      <div className='gallery-pages'>
        <div className='overlay'></div>
        <div className='gallery-pages-content'>
          <h1>Explore the Visual Feast of Mi Mexico</h1>
          <p>Where Every Meal is a Culinary Masterpiece</p>
        </div>
      </div>
      <GalleryContent />
    </>
  )
}

export default Gallery
