import { Outlet, Route, Routes } from 'react-router-dom'
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
import TermsPage from './pages/TermsPage'
import useScrollToHash from './hooks/useScrollToHash'

// ── Pages ──────────────────────────────────────────────────────────────────

function HomePage() {
  useScrollToHash()
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Chatbot />
    </>
  )
}

// ── Layout ─────────────────────────────────────────────────────────────────

function Layout() {
  return (
    <div className="bg-[#090D16] text-slate-100 font-sans antialiased">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/terminos" element={<TermsPage />} />
      </Route>
    </Routes>
  )
}
