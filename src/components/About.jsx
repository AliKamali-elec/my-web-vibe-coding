import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section bg-dark-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="font-mono text-primary-400 mr-3">01.</span>
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-300 leading-relaxed"
            >
              <p>
                I'm Ali Kamali, an electronics and programming enthusiast based in Iran.
                My journey started with Arduino projects and evolved into building complex
                electronic systems and software solutions.
              </p>
              <p>
                I love working with ESP32, IoT systems, and embedded programming.
                When I'm not soldering components or debugging circuits, you'll find me
                writing Python scripts or building web applications.
              </p>
              <p>
                I believe in continuous learning and sharing knowledge with the community.
                Every project is an opportunity to learn something new and push the boundaries
                of what's possible.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 gradient-text">What I Do</h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">▹</span>
                    Embedded Systems & IoT Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">▹</span>
                    Circuit Design & PCB Layout
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">▹</span>
                    Python & Web Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">▹</span>
                    Home Automation Solutions
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full aspect-square bg-dark-700 rounded-lg overflow-hidden border-2 border-dark-600 hover:border-primary-500 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-6xl mb-4 gradient-text">{'{ }'}</div>
                    <p className="text-gray-400 text-sm">Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-lg -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
