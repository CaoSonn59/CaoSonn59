import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Java Backend Developer',
  'Spring Boot Engineer',
  'Problem Solver',
  'API Architect',
]

const stats = [
  { value: 50, suffix: '+', label: 'LeetCode Problems' },
  { value: 6, suffix: '+', label: 'Projects Built' },
  { value: 4, suffix: '+', label: 'Technologies' },
]

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const step = Math.max(1, Math.floor(target / 30))
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [target])

  return <span>{count}{suffix}</span>
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      const speed = isDeleting ? 40 : 80
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero__content"
      >
        <motion.span
          className="hero__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="hero__badge-dot" />
          Open for Intern & Fresher positions
        </motion.span>

        <h1 className="hero__title">
          Hi, I'm <span className="hero__name-gradient">Sơn</span>
          <br />
          <span className="hero__typing">
            {displayText}
            <span className="hero__cursor">|</span>
          </span>
        </h1>

        <p className="hero__subtitle">
          I build scalable backend systems with <strong>Java</strong> & <strong>Spring Boot</strong>.
          Passionate about clean code, RESTful APIs, and solving algorithmic challenges.
        </p>

        <div className="hero__stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
            >
              <span className="hero__stat-value">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="hero__actions">
          <motion.a
            href="#contact"
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
          <motion.a
            href="https://github.com/CaoSonn59"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub →
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
