import React from "react";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiDatabase,
  FiSmartphone,
  FiServer,
  FiLayers,
  FiCode,
  FiCheck,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiGlobe />,
      title: "Full Stack Web Development",
      description:
        "Engineering end-to-end web applications with professional architectures using React, Django, and refined styling.",
      features: [
        "Modern Frontend Engines",
        "Robust Backend Systems",
        "API Orchestration",
        "Cloud Deployment",
      ],
      color: "blue",
    },
    {
      icon: <FiDatabase />,
      title: "Database Design & Optimization",
      description:
        "Architecting high-performance database schemas and optimizing query engines for maximum throughput.",
      features: [
        "Schema Architecture",
        "Query Performance",
        "Data Migration",
        "Redis Caching",
      ],
      color: "emerald",
    },
    {
      icon: <FiServer />,
      title: "RESTful API Engineering",
      description:
        "Building secure, high-concurrency APIs with Django REST Framework, focused on performance and security.",
      features: [
        "Secure Auth Systems",
        "Thorough Documentation",
        "Third-party Hooks",
        "Rate Limiting",
      ],
      color: "purple",
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive UI Design",
      description:
        "Crafting fluid, high-fidelity user interfaces that provide seamless experiences across all device classes.",
      features: [
        "Adaptive Layouts",
        "Cross-platform Fidelity",
        "Motion Design",
        "Accessibility",
      ],
      color: "amber",
    },
    {
      icon: <FiLayers />,
      title: "Scalable System Architecture",
      description:
        "Designing distributed system architectures for high-traffic applications with a focus on reliability.",
      features: [
        "Microservices Design",
        "Load Balancing",
        "Security Hardening",
        "CI/CD Pipelines",
      ],
      color: "blue",
    },
    {
      icon: <FiCode />,
      title: "Technical Consulting",
      description:
        "In-depth code reviews and architectural audits to improve system maintainability and performance.",
      features: [
        "Code Auditing",
        "Tech Debt Reduction",
        "Security Analysis",
        "Performance Tuning",
      ],
      color: "rose",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-bg-light dark:bg-bg-dark transition-colors duration-300"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4">
              Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Professional{" "}
              <span className="italic text-slate-400">Offerings</span>.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className="glass-panel p-8 rounded-4xl border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col transition-all duration-500 group-hover:border-blue-500/20 group-hover:shadow-glow">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-${service.color}-50 dark:bg-${service.color}-900/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div
                      className={`text-${service.color}-600 dark:text-${service.color}-400 text-2xl`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 grow text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-${service.color}-50 dark:bg-${service.color}-900/30 flex items-center justify-center`}
                        >
                          <FiCheck
                            className={`text-${service.color}-600 dark:text-${service.color}-400 text-[10px]`}
                          />
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 text-xs font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
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
