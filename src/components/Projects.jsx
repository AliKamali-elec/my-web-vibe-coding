import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Imen-yar',
      description: 'ESP32-based home gas leak alarm system with Bluetooth-mesh communication between units, local audible alerts, and automatic SMS/call notifications.',
      tags: ['ESP32', 'IoT', 'C++', 'Bluetooth Mesh', 'Safety'],
      github: 'https://github.com/AliKamali-elec/Imen-yar',
      status: 'Active'
    },
    {
      title: 'imen-yar-site',
      description: 'Web presence for the Imen-yar gas leak detection system project.',
      tags: ['Web Development', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/AliKamali-elec/imen-yar-site',
      status: 'In Progress'
    },
    {
      title: 'register',
      description: 'Grab your own sweet-looking \'.is-a.dev\' subdomain for your personal projects.',
      tags: ['Domain', 'Open Source', 'Community'],
      github: 'https://github.com/AliKamali-elec/register',
      status: 'Contribution'
    }
  ]

  return (
    <section id="projects" className="section bg-dark-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="font-mono text-primary-400 mr-3">03.</span>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-12" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary-400 font-mono text-sm">
                      Featured Project
                    </span>
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded text-xs font-medium">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-700 text-gray-400 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>

                <div className="md:w-64 h-40 bg-dark-700 rounded-lg border border-dark-600 group-hover:border-primary-500 transition-all duration-300 flex items-center justify-center">
                  <div className="font-mono text-4xl text-gray-600 group-hover:text-primary-400 transition-colors duration-300">
                    {'< />'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
