import { motion } from 'framer-motion'

const LeetCode = () => {
  return (
    <section id="leetcode" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Problem Solving</span>
        <h2 className="section__title">LeetCode Stats</h2>

        <div className="leetcode__container">
          <div className="leetcode__card">
            <img
              src="https://leetcard.jacoblin.cool/CaoSonn59?theme=dark&font=Outfit&ext=activity&border=0"
              alt="LeetCode Stats"
              className="leetcode__img"
              loading="lazy"
            />
          </div>

          <div className="leetcode__info">
            <p>
              I regularly solve algorithmic problems to sharpen my data structures
              and algorithm skills. Consistency and continuous improvement are
              what drive me.
            </p>
            <a
              href="https://leetcode.com/u/CaoSonn59/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              View Full Profile →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default LeetCode
