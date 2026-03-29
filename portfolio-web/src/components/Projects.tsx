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
  {
    title: 'FourSeasons Resort',
    description:
      'A modern resort & hotel landing page featuring elegant UI design with smooth animations, responsive layout, and interactive booking sections. Built to showcase frontend development skills.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/CaoSonn59/FourSeasons-Resort',
    status: 'completed' as const,
    highlights: [
      'Elegant resort-themed UI with premium aesthetics',
      'Fully responsive across all devices',
      'Smooth scroll animations & interactive elements',
      'Clean, maintainable code structure',
    ],
  },
  {
    title: 'Jennie Project',
    description:
      'A creative fan page project with dynamic content presentation, image galleries, and modern web design techniques. Demonstrates proficiency in frontend technologies and UI/UX design.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web Design'],
    github: 'https://github.com/CaoSonn59/Jennie-Project',
    status: 'completed' as const,
    highlights: [
      'Creative & visually appealing layout design',
      'Dynamic image galleries with smooth transitions',
      'Modern CSS techniques & animations',
      'Mobile-friendly responsive design',
    ],
  },
  {
    title: 'Disney React',
    description:
      'A Disney-themed web application built with React, featuring dynamic content rendering, component-based architecture, and a visually engaging UI inspired by the Disney brand.',
    tech: ['React', 'JavaScript', 'CSS3', 'Component Architecture'],
    github: 'https://github.com/CaoSonn59/Disney-React',
    status: 'completed' as const,
    highlights: [
      'Component-based architecture with React',
      'Dynamic content rendering & state management',
      'Disney-inspired premium UI/UX design',
      'Responsive layout for all screen sizes',
    ],
  },
  {
    title: 'Everyday Blissify',
    description:
      'A wellness & meditation web app featuring guided meditation categories, interactive music player with seek & volume controls, testimonial slider, pricing plans, FAQ accordion, and a blog section. Fully responsive with mobile navigation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    github: '',
    status: 'completed' as const,
    highlights: [
      'Interactive music player with custom controls',
      'Animated FAQ accordion & testimonial slider',
      'Subscription pricing with radio selection',
      'Responsive design with mobile hamburger menu',
    ],
  },
  {
    title: 'LEGO® Serious Play®',
    description:
      'A professional Vietnamese landing page for LEGO® Serious Play® training methodology. Features contact form, image galleries with overlay effects, training process timeline, news section, and scroll-to-top functionality.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    github: '',
    status: 'completed' as const,
    highlights: [
      'Professional business landing page design',
      'Image galleries with hover overlay effects',
      'Structured training process timeline',
      'Contact form with validation',
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      <ExternalLink size={14} />
                      View on GitHub
                    </a>
                  )}
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
