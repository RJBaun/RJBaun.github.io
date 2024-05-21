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
      </div>
    </nav>
  );
};

export default TopNavigationBar;