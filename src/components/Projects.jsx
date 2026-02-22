import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Travel App',
      description: 'A frontend travel planning application with interactive itinerary management and destination exploration.',
      technologies: ['React', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Ricsie11',
      liveDemo: 'https://atlas-travels.vercel.app/',
      icon: <FaReact className="text-blue-500" />,
      color: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Trackr',
      description: 'Trackr — a comprehensive expense tracking app with analytics, budgeting tools, multi-user support, and a live demo.',
      technologies: ['React', 'Django', 'MySQL', 'JWT Authentication'],
      github: 'https://github.com/Ricsie11',
      liveDemo: 'https://trackr-roan.vercel.app/',
      icon: <FaDatabase className="text-green-500" />,
      color: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'E-commerce Platform',
      description: 'Feature-rich e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe API', 'Redis'],
      github: 'https://github.com/Ricsie11',
      liveDemo: '#',
      icon: <SiDjango className="text-green-700" />,
      color: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      technologies: ['React', 'Django Channels', 'WebSocket', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Ricsie11',
      liveDemo: '#',
      icon: <FaPython className="text-yellow-500" />,
      color: 'bg-yellow-100 dark:bg-yellow-900/20'
    },
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-100 text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development capabilities
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden h-full border border-gray-100 dark:border-gray-800 transition-transform"
              >
                <div className={`h-2 ${project.color}`}></div>
                <div className="p-6 flex gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl text-gray-800 dark:text-white font-bold">{project.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Full Stack Application</p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-200 mt-4 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-95 transition"
                      >
                        <FiExternalLink className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                      >
                        <FiGithub className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/Ricsie11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <FiGithub className="mr-2" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;