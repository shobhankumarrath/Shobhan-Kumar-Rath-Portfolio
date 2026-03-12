import Navbar from './components/Navbar'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import BrandingBar from './components/BrandingBar'
import AboutMe from './components/AboutMe'
import RecruiterChatWidget from './components/RecruiterChatWidget'


function App() {

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <BrandingBar />
      <AboutMe />
      <ContactMe />
      <Projects />
      <RecruiterChatWidget />
    </div>
  )
}

export default App
