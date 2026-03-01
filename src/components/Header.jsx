import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiMail } from "react-icons/fi";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "timeline" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`glass-panel rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 ${
            scrolled
              ? "shadow-lg"
              : "shadow-none border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">AW</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight">
                Alfred Wisdom
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">
                Full Stack Engineer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-1 mr-2 border-r border-slate-200 dark:border-slate-800 pr-3">
              <a
                href="https://github.com/Ricsie11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                title="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="mailto:contact@alfredwisdom.dev"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                title="Email"
              >
                <FiMail size={18} />
              </a>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform active:scale-95"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 px-4 pt-2"
          >
            <div className="glass-panel rounded-2xl p-4 shadow-2xl border-slate-200 dark:border-slate-800">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex justify-center space-x-6">
                  <a
                    href="https://github.com/Ricsie11"
                    className="text-slate-500 dark:text-slate-400 p-2"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href="mailto:contact@alfredwisdom.dev"
                    className="text-slate-500 dark:text-slate-400 p-2"
                  >
                    <FiMail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
