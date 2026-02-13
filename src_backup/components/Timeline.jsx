import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiAward } from 'react-icons/fi';

const Timeline = () => {
  const timelineItems = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance / Contract',
      icon: <FiCode />,
      description: 'Building full-stack applications for various clients using React, Django, and PostgreSQL. Focused on creating scalable solutions and RESTful APIs.',
      color: 'bg-blue-500'
    },
    {
      year: '2024 - 2025',
      title: 'Backend Developer',
      company: 'Tech Solutions Inc.',
      icon: <FiBriefcase />,
      description: 'Developed and maintained Django REST APIs, optimized database queries, and implemented authentication systems for enterprise applications.',
      color: 'bg-green-500'
    },
    {
      year: '2024 - 2025',
      title: 'Frontend Developer',
      company: 'Web Innovations LLC',
      icon: <FiCode />,
      description: 'Created responsive user interfaces with React and Tailwind CSS, collaborated with backend teams on API integration, and improved application performance.',
      color: 'bg-purple-500'
    },
    {
      year: '2021 - 2023',
      title: 'Computer Science Degree',
      company: 'Federal Polythenic Nasarawa',
      icon: <FiAward />,
      description: 'Graduated with honors, specializing in software engineering and database systems. Completed capstone project on scalable web applications.',
      color: 'bg-yellow-500'
    },
    {
      year: '2025 - present',
      title: 'Software Engineering',
      company: 'Miva Open University',
      icon: <FiAward />,
      description: 'Software Engineering student at Miva Open University, focusing on database systems and scalable web applications.',
      color: 'bg-yellow-500'
    },
  ];
  
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Career <span className="text-blue-600 dark:text-blue-400">Timeline</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-12`}
              >
                {/* Year */}
                <div className={`md:w-2/5 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="inline-block px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-bold">
                    {item.year}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-lg my-4 md:my-0 bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-900">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-2/5 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl text-gray-800 dark:text-gray-200 font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;