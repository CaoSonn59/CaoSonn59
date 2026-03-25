import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 75 },
      { name: 'REST APIs', level: 80 },
      { name: 'JPA / Hibernate', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 65 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML5', level: 80 },
      { name: 'CSS3', level: 75 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', level: 70 },
      { name: 'Spring Data JPA', level: 65 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 75 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'VS Code', level: 85 },
      { name: 'Postman', level: 75 },
      { name: 'Maven', level: 65 },
    ],
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
              <div className="skill-card__list">
                {group.items.map((item, j) => (
                  <div key={item.name} className="skill-bar">
                    <div className="skill-bar__header">
                      <span className="skill-bar__name">{item.name}</span>
                      <span className="skill-bar__level">{item.level}%</span>
                    </div>
                    <div className="skill-bar__track">
                      <motion.div
                        className="skill-bar__fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 + j * 0.05, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
