import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <video autoPlay loop muted className='header-video'>
        <source
          src='https://media.istockphoto.com/id/1340761090/video/chefs-sous-chefs-and-kitchen-staff-working-at-their-stations-in-a-gourmet-restaurant.mp4?s=mp4-640x640-is&k=20&c=5vnFI7XNC0hPGRA0QFNp1ArvxFLYOlqf7UqOgSAMoEs='
          type='video/mp4'
        />
      </video>
      <div className='overlay'></div>
      <div className='header-content'>
        <h1>Welcome to Mi Mexico</h1>
        <p>Delicious Mexican Cuisine</p>
      </div>
    </header>
  )
}

export default Header
