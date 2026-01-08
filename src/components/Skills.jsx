import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, 
  FaDatabase, FaGitAlt, FaNodeJs 
} from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMysql, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, level: 85, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: '#06B6D4' },
    { name: 'Django', icon: <SiDjango />, level: 87, color: '#092E20' },
    { name: 'Django REST', icon: <FaPython />, level: 85, color: '#306998' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82, color: '#336791' },
    { name: 'MySQL', icon: <SiMysql />, level: 80, color: '#4479A1' },
    { name: 'Git', icon: <FaGitAlt />, level: 88, color: '#F05032' },
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks for building full-stack applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center"
              >
                <div 
                  className="text-4xl mb-4"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Django', 'Django REST Framework', 'PostgreSQL', 'MySQL', 'Git', 'RESTful APIs', 'Responsive Design', 'Python', 'API Integration', 'Web Performance'].map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;