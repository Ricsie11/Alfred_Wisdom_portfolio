import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiAward, FiArrowUpRight } from "react-icons/fi";

const Timeline = () => {
  const timelineItems = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      company: "Freelance / Contract",
      icon: <FiCode />,
      description:
        "Building scalable full-stack applications using React, Django/Nestjs, and PostgreSQL. Focused on system optimization.",
      type: "Work",
      color: "blue",
    },
    {
      year: "2025",
      title: "Backend Developer",
      company: "ALX Africa",
      icon: <FiBriefcase />,
      description:
        "Developing server-side applications with Django/Python and Nestjs, covering REST API design, database modeling, and authentication.",
      type: "",
      color: "emerald",
    },
    {
      year: "2025",
      title: "Frontend Developer",
      company: "ALX Africa",
      icon: <FiCode />,
      description:
        "Building high-fidelity user experiences with React, framer-motion and Tailwind CSS, focusing on performance, scalability and user experience.",
      type: "",
      color: "emerald",
    },
    {
      year: "2021 - 2023",
      title: "Computer Science Diploma",
      company: "Federal Polythenic Nasarawa",
      icon: <FiAward />,
      description:
        "Studied Computer architecture and Database Theory. Gained hands-on experience in software development, data structures, algorithms, and system design.",
      type: "Education",
      color: "amber",
    },
    {
      year: "2025 - present",
      title: "Software Engineering",
      company: "Miva Open University",
      icon: <FiAward />,
      description:
        "Advanced my studies in Software Engineering, focusing on Software development and system design.",
      type: "Education",
      color: "blue",
    },
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Learning Path
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md font-light leading-relaxed">
              From curiosity to code — the path that brought me here.
            </p>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Central Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/50 via-slate-200 dark:via-slate-800 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[-25px] md:left-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 shadow-glow z-10 md:-translate-x-1/2 md:translate-y-0" />

                  {/* Date Side */}
                  <div
                    className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <div className="px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                      {item.year}
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2`}>
                    <div className="glass-panel p-8 rounded-4xl border-slate-200/50 dark:border-slate-800/50 group hover:border-blue-500/20 transition-all duration-500">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                          {item.type}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4 flex items-center gap-2">
                        {item.company}
                        <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>

                      <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
