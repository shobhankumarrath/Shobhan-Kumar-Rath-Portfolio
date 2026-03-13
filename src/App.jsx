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

      {/* Floating resume download button, visible on all sections */}
      <a
        href="Shobhan Kumar Rath-Resume.pdf"
        download
        className="fixed bottom-4 left-4 z-40 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-green-500 transition-colors"
      >
        Download Resume
      </a>

      <RecruiterChatWidget />
    </div>
  )
}

export default App
