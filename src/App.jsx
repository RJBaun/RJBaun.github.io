import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.scss'

import TopNavigationBar from './components/TopNavigationBar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Proficiencies from './components/Proficiencies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <header>
        <TopNavigationBar></TopNavigationBar>
      </header>
      <section>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Proficiencies></Proficiencies>
        <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
