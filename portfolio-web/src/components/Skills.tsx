import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'JPA / Hibernate'],
  },
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'Spring Data JPA'],
  },
  {
    category: 'Tools',
    items: ['Git', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Maven'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Expertise</span>
        <h2 className="section__title">Technical Skills</h2>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="skill-card"
            >
              <h3 className="skill-card__title">{group.category}</h3>
              <ul className="skill-card__list">
                {group.items.map(item => (
                  <li key={item} className="skill-card__item">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
