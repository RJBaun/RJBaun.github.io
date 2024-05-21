import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.scss'

import TopNavigationBar from './components/TopNavigationBar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <div className='App'>
      <header>
        <TopNavigationBar></TopNavigationBar>
      </header>
      <section>
        <Intro></Intro>
        <AboutMe></AboutMe>
      </section>
    </div>
  )
}

export default App
