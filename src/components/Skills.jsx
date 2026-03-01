import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaTerminal,
  FaServer,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Framer", icon: <SiFramer />, color: "#0055FF" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      ],
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Terminal", icon: <FaTerminal />, color: "#4D4D4D" },
        { name: "REST APIs", icon: <FaServer />, color: "#555555" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4">
              Stack
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Technical <span className="italic text-slate-400">Weaponry</span>.
            </h3>
          </div>

          <div className="space-y-16">
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-4">
                  <span>{cat.title}</span>
                  <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-panel p-5 rounded-2xl flex flex-col items-center justify-center transition-all group"
                    >
                      <div
                        className="text-3xl mb-4 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <h5 className="font-mono text-xs font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tag Cloud for more skills */}
          <div className="mt-20 pt-16 border-t border-slate-100 dark:border-slate-800">
            <p className="text-center text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest">
              Other Technologies & Paradigms
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML5",
                "CSS3",
                "PostgreSQL",
                "MySQL",
                "Redis",
                "Docker",
                "AWS",
                "Vercel",
                "Architecture Design",
                "Performance Tuning",
                "Security Audit",
                "UX Research",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-mono transition-colors hover:border-blue-500/30 hover:text-blue-600 cursor-default"
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
