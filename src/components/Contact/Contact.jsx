import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1zyo99y', 'template_djgt1ph', form.current, 'nBvZbBzJrlSiOVmF5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-container'>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                < input className='input-field' placeholder='Your Name' type="text" name="user_name" id="" />
                < input className='input-field' type="email" placeholder='Your email' name="user_email" id="" />
                < input className='input-field' type="text" placeholder='Subject' name="user_subject" id="" />
                < textarea className='text-field' placeholder='Message' type="text" name="message" id="" />
                <button type="submit" className='btn'>Send Now</button>
            </form>  
        <iframe  className='cont-map' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=addis ababa university&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    
    </div>
  )
}

export default Contact