import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import BrandingBar from './components/BrandingBar'


function App() {

  return (
    <>
      <Navbar />
      <BrandingBar />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
