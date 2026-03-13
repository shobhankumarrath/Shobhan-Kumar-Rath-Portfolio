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
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-amber-300 px-4 py-2 text-xs md:text-sm font-semibold text-slate-900 shadow-[0_0_30px_rgba(190,242,100,0.8)] hover:from-emerald-400 hover:via-lime-300 hover:to-amber-200 transition-transform duration-200 hover:scale-105"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-700 shadow-sm" />
        <span>Download Resume</span>
      </a>

      <RecruiterChatWidget />
    </div>
  )
}

export default App
