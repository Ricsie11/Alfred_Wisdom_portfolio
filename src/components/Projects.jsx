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
      title: 'Expense Tracker',
      description: 'Comprehensive expense tracking application with analytics, budgeting tools, and multi-user support.',
      technologies: ['React', 'Django', 'MySQL', 'JWT Authentication'],
      github: 'https://github.com/Ricsie11',
      liveDemo: '#',
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
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
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
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
              >
                <div className={`h-3 ${project.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4">
                      <span className="text-2xl">{project.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-800 dark:text-gray-200 font-bold">{project.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Full Stack Application</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      View Code
                    </a>
                    <a
                      href={project.liveDemo}
                      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
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