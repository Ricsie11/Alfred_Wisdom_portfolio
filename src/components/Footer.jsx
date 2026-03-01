import React from "react";
import { Link } from "react-scroll";
import {
  FiGithub,
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden border-t border-slate-100 dark:border-slate-800/50 bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <Link
              to="navbar"
              smooth={true}
              className="flex items-center space-x-3 cursor-pointer group mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">AW</span>
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight">
                  Alfred Wisdom
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
                  Full Stack Engineer
                </p>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Crafting high-performance digital systems that balance
              architectural integrity with visual excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold mb-6">
                Navigation
              </h4>
              <nav className="flex flex-col space-y-4">
                {["About", "Skills", "Projects", "Experience"].map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold mb-6">
                Social
              </h4>
              <nav className="flex flex-col space-y-4">
                {[
                  {
                    name: "GitHub",
                    icon: <FiGithub />,
                    href: "https://github.com/Ricsie11",
                  },
                  {
                    name: "Email",
                    icon: <FiMail />,
                    href: "mailto:contact@alfredwisdom.dev",
                  },
                  { name: "LinkedIn", icon: <FiLinkedin />, href: "#" },
                  { name: "Twitter", icon: <FiTwitter />, href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    {social.icon} <span>{social.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-mono tracking-wider">
            © {currentYear} ALFRED WISDOM. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-slate-400 hover:text-blue-600 transition-all border border-slate-100 dark:border-slate-800 group"
          >
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Visual flourishes */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
};

export default Footer;
