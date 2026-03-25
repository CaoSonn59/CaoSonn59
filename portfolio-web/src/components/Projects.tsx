import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Banking System API',
    description:
      'A RESTful Banking API built with Spring Boot. Features include account management, deposit/withdraw, internal transfers, and full transaction history with centralized error handling.',
    tech: ['Java 17', 'Spring Boot 3', 'MySQL', 'JPA', 'Lombok', 'Maven'],
    github: 'https://github.com/CaoSonn59/banking-system-interview-project',
    status: 'completed' as const,
    highlights: [
      'Clean layered architecture (Controller → Service → Repository)',
      'Standardized API response format',
      'Input validation with Jakarta Validation',
      'Transaction history tracking',
    ],
  },
]

const statusConfig = {
  completed: { label: 'Completed', className: 'status--completed' },
  'in-progress': { label: 'In Development', className: 'status--progress' },
  planned: { label: 'Planned', className: 'status--planned' },
}

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Work</span>
        <h2 className="section__title">Projects</h2>

        <div className="projects__list">
          {projects.map((project, i) => {
            const status = statusConfig[project.status]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="project-card"
              >
                <div className="project-card__header">
                  <div className="project-card__title-row">
                    <h3 className="project-card__title">{project.title}</h3>
                    <span className={`project-card__status ${status.className}`}>
                      {status.label}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <ExternalLink size={14} />
                    View on GitHub
                  </a>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__highlights">
                  {project.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project-card__tech">
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="projects__note">More projects coming soon...</p>
      </motion.div>
    </section>
  )
}

export default Projects
