import React from 'react';

import '../styles/Intro.scss'

const Intro = () => {

  return (
    <div className='intro'>
      <div className='message'>
        <h1>Hi, I'm Rylan</h1>
        <p>I am a new full stack web developer excited to continue learning and growing within the industry.</p>
      </div>
      <div className="shape" id="blue"></div>
      <div className="shape" id="red"></div>
      <div className="shape" id="green"></div>
    </div>
  )
}

export default Intro;