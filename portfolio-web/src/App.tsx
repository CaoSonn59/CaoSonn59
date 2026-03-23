import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Github, Layout, Terminal, ExternalLink, Mail, Zap, Braces, Layers } from 'lucide-react'
import './App.css'

const SkillCard = ({ name, icon: Icon, description }: { name: string, icon: any, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all border-glow"
  >
    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

const App = () => {
  return (
    <div className="min-h-screen font-['Outfit'] text-white overflow-x-hidden">
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[35vw] h-[35vw] bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter gradient-text cursor-default">
            CAOSONN59
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#leetcode" className="hover:text-indigo-400 transition-colors">LeetCode</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/5">Connect</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 px-6">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-sm font-semibold text-indigo-400"
            >
              Open for opportunities
            </motion.div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-none mb-4">
              Building <span className="gradient-text italic">The Future</span> <br /> of Software.
            </h1>
            <p className="max-w-2xl text-xl text-gray-400">
              I'm <span className="text-white font-bold">Sơn (Caosonn59)</span>, a passionate developer from Vietnam. 
              I specialize in robust <span className="text-white font-bold">Java</span> backend systems and modern <span className="text-white font-bold">React</span> interfaces.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all">
                Let's talk <Mail size={20} />
              </a>
              <a href="https://github.com/Caosonn59" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all">
                Github <Github size={20} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mx-auto py-20 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold mb-2 uppercase tracking-widest text-sm">
                <Zap size={16} /> Expertise
              </div>
              <h2 className="text-4xl font-extrabold">Technical Skillset</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              name="Java Backend" 
              icon={Terminal} 
              description="Crafting high-performance server-side architectures with Spring Boot and heavy emphasis on SOLID principles."
            />
            <SkillCard 
              name="React Frontend" 
              icon={Layers} 
              description="Building dynamic, responsive user interfaces with focus on state management and performance."
            />
            <SkillCard 
              name="HTML5 & CSS3" 
              icon={Layout} 
              description="Modern web styling incorporating advanced layouts, animations, and CSS-in-JS solutions."
            />
            <SkillCard 
              name="Problem Solving" 
              icon={Code2} 
              description="Data structures & Algorithms expert with active participation in LeetCode challenges."
            />
          </div>
        </section>

        {/* LeetCode Section */}
        <section id="leetcode" className="max-w-7xl mx-auto py-20 mb-32">
          <div className="bg-gradient-to-br from-indigo-900/40 to-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 flex flex-col items-center text-center">
            <div className="bg-[#FFA116] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,161,22,0.4)]">
              <Braces size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-black mb-4">LeetCode Stats</h2>
            <p className="text-gray-400 mb-8 max-w-xl">
              Consistency is key. I actively solve problems to sharpen my logic and analytical thinking. 
              My journey on LeetCode has been one of continuous growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center"
              >
                <img src="https://leetcode-stats-six.vercel.app/api?username=Caosonn59&theme=dark" alt="LeetCode Stats" className="rounded-xl w-full" />
              </motion.div>
              <div className="flex flex-col justify-center items-start text-left gap-4 h-full p-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  Top Solving <ExternalLink size={20} className="text-indigo-400" />
                </h3>
                <p className="text-gray-400">
                  I enjoy tackling Medium and Hard level problems, focusing on dynamic programming, graph theory, and system design challenges.
                </p>
                <a 
                  href="https://leetcode.com/Caosonn59" 
                  target="_blank" 
                  className="mt-4 text-indigo-400 font-bold hover:underline"
                >
                  View Full Profile &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="max-w-7xl mx-auto py-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black">Let's build something <br /> <span className="gradient-text underline">extraordinary together.</span></h2>
              <p className="text-gray-400 text-lg">Currently available for freelance and full-time roles.</p>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <a href="mailto:son.caopersonal@example.com" className="text-2xl font-bold hover:gradient-text transition-all">son.caopersonal@example.com</a>
              <div className="flex gap-6 mt-4 opacity-70">
                <a href="https://github.com/Caosonn59" className="hover:opacity-100 transition-all"><Github /></a>
                <a href="https://leetcode.com/Caosonn59" className="hover:opacity-100 transition-all"><Code2 /></a>
              </div>
            </div>
          </div>
          <p className="mt-20 text-center text-gray-500 text-sm">© 2026 Sơn (Caosonn59). All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
