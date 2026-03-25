import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2024 — Present',
    title: 'Self-Learning Java Backend',
    description: 'Deep diving into Spring Boot, REST API design, and clean architecture patterns. Building real-world projects.',
    tags: ['Spring Boot', 'JPA', 'MySQL'],
  },
  {
    year: '2023 — Present',
    title: 'Computer Science Student',
    description: 'Studying core CS fundamentals including Data Structures, Algorithms, OOP, and Database Management.',
    tags: ['DSA', 'OOP', 'DBMS'],
  },
  {
    year: '2023 — Present',
    title: 'LeetCode Practice',
    description: 'Consistently solving algorithmic challenges to sharpen problem-solving skills and prepare for technical interviews.',
    tags: ['Algorithms', 'Problem Solving'],
  },
  {
    year: '2024',
    title: 'Frontend Exploration',
    description: 'Learned React and modern frontend development to become a more well-rounded developer.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Journey</span>
        <h2 className="section__title">Experience & Education</h2>

        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="timeline__item"
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__year">{item.year}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
                <div className="timeline__tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
