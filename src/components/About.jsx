import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FiCode className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building scalable, high-performance web applications with modern technologies
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full text-gray-800 dark:text-gray-200 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FiDatabase className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Database Expert</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized in PostgreSQL and MySQL database design and optimization
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FiCpu className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creative solutions that meet both technical and business requirements
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Adaptable and results-driven Full Stack Developer with a strong foundation in computer science and a passion for building scalable, high-performance systems. Skilled in RESTful API development, PostgreSQL and MySQL database management, and backend frameworks such as Django and Django REST Framework.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Known for rapid learning, creative problem-solving, and delivering clean, efficient solutions that meet both technical and business needs. With expertise in modern frontend technologies like React and Tailwind CSS, I create seamless user experiences backed by robust server-side architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;