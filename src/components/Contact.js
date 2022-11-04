import React from 'react'
import Footer from './Footer'

const Contact = () => {
  const name = 'Chidera'
  return (
   <section className="contact">
    <h1>Contact Me</h1>
    <p>Hi there, contact me to ask about anything you have in mind</p>
    <form>
      <div className='flex-desktop'>
        <div>
          <label htmlFor="firstName">
            First name
          </label>
          <input type="text" placeholder='Enter your first name' id='first_name'/>
        </div>
        <div>
          <label htmlFor="lastName">
            Last name
          </label>
          <input type="text" placeholder='Enter your last name'id='last_name'/>
        </div>
      </div>
      <label htmlFor="email">
          Email
        </label>
        <input type="email" placeholder='yourname@email.com' id='email'/>
        <label htmlFor="message">
          Message
        </label>
        <textarea  id="message" cols="30" rows="10" placeholder="Send a message, I'll reply you as soon as possible..."></textarea>
          
          <label htmlFor='agreement' className='agreement'>
          <input type="checkbox" />
          <span className="checkmark"></span>
            You agree to provide your data to {name} who may contact you.
          </label>
          <button type="submit" id='btn__submit' onClick={(e)=> e.preventDefault()}>Send Message</button>
    </form>
    <Footer/>
   </section>
  )
}

export default Contact
