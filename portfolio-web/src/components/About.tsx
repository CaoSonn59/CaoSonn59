import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">About</span>
        <h2 className="section__title">Who I Am</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm <strong>Sơn (CaoSonn59)</strong>, a Computer Science student from Vietnam
              with a strong passion for backend development. I specialize in building
              robust server-side applications using <strong>Java</strong> and <strong>Spring Boot</strong>,
              with a focus on clean architecture and RESTful API design.
            </p>
            <p>
              I also have hands-on experience with <strong>React</strong> for frontend development,
              and I actively sharpen my problem-solving skills through <strong>LeetCode</strong> challenges.
            </p>
            <p>
              Currently seeking <strong>Intern / Fresher</strong> positions where I can contribute
              to real-world projects and continue growing as a developer.
            </p>
          </div>

          <div className="about__details">
            <div className="about__detail-item">
              <span className="about__detail-label">Focus</span>
              <span className="about__detail-value">Java Backend Development</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">Framework</span>
              <span className="about__detail-value">Spring Boot</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">Frontend</span>
              <span className="about__detail-value">React, HTML/CSS</span>
            </div>
            <div className="about__detail-item">
              <span className="about__detail-label">Looking for</span>
              <span className="about__detail-value">Intern / Fresher roles</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
