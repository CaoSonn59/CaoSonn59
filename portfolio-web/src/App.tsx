import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import LeetCode from './components/LeetCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const App = () => {
  return (
    <div className="app">
      {/* Interactive particle background */}
      <ParticleBackground />

      {/* Background blurs */}
      <div className="bg-blur bg-blur--1" />
      <div className="bg-blur bg-blur--2" />
      <div className="bg-blur bg-blur--3" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <LeetCode />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
