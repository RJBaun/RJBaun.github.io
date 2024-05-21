import React from 'react'
import Education from './Education'
import Employment from './Employment'

import '../styles/AboutMe.scss'

const AboutMe = () => {
  return (
    <div className='about-me'>
      <a id='about-me'>
        <h2>ABOUT ME</h2>
        <p className='about-me-intro'>
          Prior to taking the leap of faith into the world of programming, I have worked to establish an eclectic list of employment and 
          educational experiences. Each experience I have been lucky enough to partake in has left me with a strong array of both hard and 
          soft skills; I am a passionate professional with exceptional communication, problem solving, and work ethic. Above all, I have shown 
          my consistent ability to take on new challenges and excel in environments I was previously unfamiliar with. 
        </p>
        <p className='about-me-intro'>
          Below you can find a list of my most recent and significant undertakings.
        </p>
      </a>
      <div className='about-me-background'>
        <Education />
        <Employment />
      </div>
    </div>
  )
}

export default AboutMe;