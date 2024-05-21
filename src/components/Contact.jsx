import React from 'react';

import '../styles/Contact.scss'
import RGBAnimation from './RGBAnimation';


const Contact = () => {

  return (
    <section className='contact'>
      <a id='contact'>
      </a>
      <form>
        <h2>I'd Love to hear from you!</h2>
        <div className='inputs'>
          <input type='text' placeholder='Name' name='name'></input>
          <input type='text' placeholder='Email' name='email'></input>
        </div>
        <textarea className='textbox' placeholder='Your message here...' rows='5' cols='50'/>
        <button>Submit</button>
      </form>
      <div className='links'>
        <p>You can also find me on 
          <a href='https://www.linkedin.com/in/rylan-baun-6720b71a2/' target='_blank'>
            <i className="fa-brands fa-linkedin"></i> 
          </a>
          <a href='https://github.com/RJBaun' target='_blank'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href='https://www.instagram.com/rylanbaun/' target='_blank'>
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </p>
        <p>Or view my resume <a href='https://flowcv.com/resume/bkdm18rbti' target='_blank'><i className="fa-solid fa-file-lines"></i></a></p>
      </div>
      <RGBAnimation></RGBAnimation>
    </section>
  )
}

export default Contact;