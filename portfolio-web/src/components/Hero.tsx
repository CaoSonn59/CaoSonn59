import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero__content"
      >
        <span className="hero__badge">Open for Intern & Fresher positions</span>

        <h1 className="hero__title">
          Hi, I'm <span className="text-accent">Sơn</span>
          <br />
          <span className="text-muted">Java Backend Developer</span>
        </h1>

        <p className="hero__subtitle">
          I build scalable backend systems with <strong>Java</strong> & <strong>Spring Boot</strong>.
          Passionate about clean code, RESTful APIs, and solving algorithmic challenges.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Get in touch</a>
          <a href="https://github.com/Caosonn59" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            GitHub →
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
