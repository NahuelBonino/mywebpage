import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './Chatbot'

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#090D16] text-slate-100 font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}
