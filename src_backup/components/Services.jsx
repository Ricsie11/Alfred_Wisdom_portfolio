import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiDatabase, FiSmartphone, FiServer, FiLayers, FiCode } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiGlobe />,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development using modern frameworks like React, Django, and Tailwind CSS.',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Deployment']
    },
    {
      icon: <FiDatabase />,
      title: 'Database Design & Optimization',
      description: 'Designing efficient database schemas and optimizing queries for PostgreSQL and MySQL.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Performance Tuning']
    },
    {
      icon: <FiServer />,
      title: 'RESTful API Development',
      description: 'Building secure, scalable, and well-documented REST APIs using Django REST Framework.',
      features: ['API Design', 'Authentication', 'Documentation', 'Third-party Integration']
    },
    {
      icon: <FiSmartphone />,
      title: 'Responsive UI Development',
      description: 'Creating mobile-friendly, responsive interfaces with React and modern CSS frameworks.',
      features: ['Mobile-First Design', 'Cross-browser Compatibility', 'UI/UX Implementation', 'Performance']
    },
    {
      icon: <FiLayers />,
      title: 'System Architecture',
      description: 'Designing scalable system architectures for high-performance web applications.',
      features: ['System Design', 'Scalability Planning', 'Security Implementation', 'Code Architecture']
    },
    {
      icon: <FiCode />,
      title: 'Code Review & Optimization',
      description: 'Improving code quality, performance, and maintainability through comprehensive reviews.',
      features: ['Code Review', 'Performance Optimization', 'Best Practices', 'Technical Debt Reduction']
    },
  ];
  
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive web development services from frontend to backend
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl text-gray-800 dark:text-gray-200 font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;