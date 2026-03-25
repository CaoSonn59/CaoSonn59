import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, GitFork, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:Caoson1912@gmail.com?subject=${subject}&body=${body}`, '_self')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Contact</span>
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              I'm currently looking for <strong>Intern / Fresher</strong> opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <Mail size={18} />
                <a href="mailto:Caoson1912@gmail.com">Caoson1912@gmail.com</a>
              </div>
              <div className="contact__detail">
                <MapPin size={18} />
                <span>Vietnam</span>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/CaoSonn59" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <GitFork size={18} />
                <span>GitHub</span>
              </a>
              <a href="https://leetcode.com/u/CaoSonn59/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <ExternalLink size={18} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                id="contact-name"
                className="form__input"
                placeholder=" "
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <label htmlFor="contact-name" className="form__label">Your Name</label>
            </div>

            <div className="form__group">
              <input
                type="email"
                id="contact-email"
                className="form__input"
                placeholder=" "
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              <label htmlFor="contact-email" className="form__label">Your Email</label>
            </div>

            <div className="form__group">
              <textarea
                id="contact-message"
                className="form__input form__textarea"
                placeholder=" "
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
              <label htmlFor="contact-message" className="form__label">Message</label>
            </div>

            <motion.button
              type="submit"
              className="btn btn--primary btn--submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? 'Opening mail client...' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
