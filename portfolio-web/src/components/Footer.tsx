import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="footer__content"
      >
        <div className="footer__cta">
          <h2 className="footer__title">
            Let's build something <span className="text-accent">great</span> together.
          </h2>
          <p className="footer__subtitle">
            Currently available for intern and fresher roles. Feel free to reach out.
          </p>
        </div>

        <div className="footer__links">
          <a href="mailto:Caoson1912@gmail.com" className="footer__link">
            Caoson1912@gmail.com
          </a>
          <div className="footer__socials">
            <a href="https://github.com/Caosonn59" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="footer__divider">·</span>
            <a href="https://leetcode.com/u/CaoSonn59/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </div>
        </div>
      </motion.div>

      <p className="footer__copy">© 2026 Sơn (CaoSonn59). All rights reserved.</p>
    </footer>
  )
}

export default Footer
