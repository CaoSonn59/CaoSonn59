import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LeetCode from './components/LeetCode'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      {/* Background blurs */}
      <div className="bg-blur bg-blur--1" />
      <div className="bg-blur bg-blur--2" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
      </main>
      <Footer />
    </div>
  )
}

export default App
