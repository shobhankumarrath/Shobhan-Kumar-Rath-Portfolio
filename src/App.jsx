import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <Navbar />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
