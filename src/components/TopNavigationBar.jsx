import React from 'react';

import '../styles/TopNavigationBar.scss'

const TopNavigationBar = () => {

  return (
    <nav className='top-nav'>
      <span>
        Rylan Baun | Portfolio
      </span>
      <div className='links'>
        <a href='#about-me'>About Me</a>
        <a href='#education'>Education</a>
        <a href='#employment'>Employment</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact and Accounts</a>
      </div>
    </nav>
  );
};

export default TopNavigationBar;