import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Electronics & Hardware',
      icon: '⚡',
      skills: ['ESP32/ESP8266', 'Arduino', 'PCB Design', 'Circuit Analysis', 'Sensors & Actuators', 'BLE/BT Mesh']
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'Bash Scripting']
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git & GitHub', 'PlatformIO', 'KiCad', 'VS Code', 'Linux']
    },
    {
      title: 'Frameworks & Libraries',
      icon: '📦',
      skills: ['React', 'Node.js', 'ESP-IDF', 'Arduino Framework', 'Tailwind CSS']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="font-mono text-primary-400 mr-3">02.</span>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-12" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg text-sm font-mono border border-dark-600 hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
