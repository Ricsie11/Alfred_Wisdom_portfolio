import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { FaReact, FaPython } from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiFramer,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Atlas Travels",
      type: "Frontend Engine",
      description:
        "A high-performance travel architecture featuring interactive itinerary engines and dynamic destination exploration.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/Ricsie11",
      liveDemo: "https://atlas-travels.vercel.app/",
      featured: true,
      icons: [
        <FaReact key="react" className="text-blue-500" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400" />,
        <SiFramer key="framer" className="text-white" />,
      ],
      color: "blue",
    },
    {
      title: "Trackr",
      type: "Full Stack Ecosystem",
      description:
        "Enterprise-grade financial analytics suite with real-time budgeting algorithms and multi-layered security.",
      technologies: ["Django", "React", "PostgreSQL"],
      github: "https://github.com/Ricsie11",
      liveDemo: "https://trackr-roan.vercel.app",
      icons: [
        <SiDjango key="django" className="text-green-600" />,
        <FaReact key="react" className="text-blue-400" />,
        <SiPostgresql key="postgres" className="text-blue-600" />,
      ],
      color: "emerald",
    },
    {
      title: "Epic OG Collection",
      type: "Commerce Architecture",
      description:
        "E-commerce infrastructure designed for high-concurrency, featuring modular product engines and unified checkout.",
      technologies: ["React", "Django", "Redis", "Stripe"],
      github: "https://github.com/Ricsie11",
      liveDemo: "#",
      icons: [
        <FaReact key="react" className="text-blue-500" />,
        <SiDjango key="django" className="text-green-700" />,
      ],
      color: "purple",
    },
    {
      title: "SyncOS",
      type: "Real-time Protocol",
      description:
        "Collaborative orchestration tool powered by WebSockets for instantaneous state synchronization across distributed teams.",
      technologies: ["Django Channels", "WebSockets", "React"],
      github: "https://github.com/Ricsie11",
      liveDemo: "#",
      icons: [
        <FaPython key="python" className="text-yellow-500" />,
        <FaReact key="react" className="text-blue-500" />,
      ],
      color: "amber",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4">
                Portfolio
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Selected <span className="italic text-slate-400">Works</span>.
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md font-light leading-relaxed">
              A curated collection of digital systems designed to balance
              architectical integrity with visual excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full"
              >
                {/* Project Badge */}
                {project.featured && (
                  <div className="absolute -top-3 left-6 z-20 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-glow">
                    Featured Project
                  </div>
                )}

                {/* Card Container */}
                <div className="glass-panel rounded-4xl overflow-hidden grow flex flex-col border-slate-200/50 dark:border-slate-800/50 transition-all duration-500 group-hover:border-blue-500/20 group-hover:shadow-2xl">
                  {/* Decorative Background for Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5" />

                    {/* Preview Mock */}
                    <div className="absolute inset-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                      <div className="h-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 flex items-center px-3 gap-1.5 z-10 relative">
                        <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                        <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                        <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                      </div>

                      {/* Live Iframe Preview or Fallback */}
                      <div className="absolute inset-0 top-6 overflow-hidden">
                        {project.liveDemo !== "#" ? (
                          <div className="w-full h-full relative group/iframe">
                            <iframe
                              src={project.liveDemo}
                              title={project.title}
                              className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                              loading="lazy"
                            />
                            {/* Overlay to ensure hover is captured by parent and looks premium */}
                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/10 dark:to-slate-900/10 pointer-events-none" />
                          </div>
                        ) : (
                          <div className="p-6 h-full flex flex-col items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="flex gap-4 mb-4">
                              {project.icons.map((icon, i) => (
                                <div key={i} className="text-4xl">
                                  {icon}
                                </div>
                              ))}
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                              Preview coming soon
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.liveDemo !== "#" ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-full text-slate-900 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                        >
                          <FiExternalLink size={24} />
                        </a>
                      ) : (
                        <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        {project.type}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          <FiGithub size={18} />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
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
            className="mt-20 text-center"
          >
            <a
              href="https://github.com/Ricsie11"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 glass-panel rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            >
              Explore more on GitHub
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
