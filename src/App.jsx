import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import BrandingBar from './components/BrandingBar'
import AboutMe from './components/AboutMe'


function App() {

  return (
    <>
      <Navbar />
      <BrandingBar />
      <AboutMe />
      <ContactMe />
      <Projects />
    </>
  )
}

export default App
