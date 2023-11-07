import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone:""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/.netlify/functions/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
          phone:""
        })
        setTimeout(() => setMessage(''), 3000)
      } else {
        const errorData = await response.json()
        setMessage(`Failed to send message. ${errorData.message || ''}`)
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
      setTimeout(() => setMessage(''), 3000)
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <div className='contact-pages'>
        <div className='overlay'></div>
        <div className='contact-pages-content'>
          <h1>Get in Touch with Mi Mexico</h1>
          <p>
            We're here to answer any questions you may have about our menu,
            catering services, or your dining experience. Reach out to us and
            we'll respond as soon as we can.
          </p>
          <p>
            Even if there is something you have always wanted to experience and
            can't find it on Mi Mexico, let us know and we promise we'll do our
            best to find it for you and send you there.
          </p>
        </div>
      </div>
      <div className='contact section-center'>
        <div className='contact-container'>
          <article className='contact-content'>
            <h3>Telephone</h3>
            <p>+1 701-858-0777</p>
            <h3>E-mail</h3>
            <p>mimexicond@gmail.com</p>
            <h3>Address</h3>
            <p>3816 s. Broadway Minot, ND 58701</p>
            <h3>LOCATION & HOURS </h3>
            <p>
              Mon-Thur 11:00am - 10:00pm Fri-Sat 11:00am - 10:30pm Sunday
              11:00am - 9:00pm
            </p>
          </article>
          <article className='form'>
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit} className='form-contact'>
              <input
                type='text'
                placeholder='Your Name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <input
                type='tel'
                placeholder='Your Phone Number'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />

              <input
                placeholder='message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className='input-text-area-message '
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-book'
              >
                send message
              </button>
            </form>
            {message && <p>{message}</p>}
          </article>
        </div>
      </div>
    </>
  )
}

export default Contact
