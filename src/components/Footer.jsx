import React from "react";
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white py-12 mt-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AW</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Alfred Wisdom
                </h2>
                <p className="text-gray-600 dark:text-gray-100">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-100 max-w-md">
              Building scalable, high-performance web applications with modern
              technologies and clean code.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ricsie11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FiGithub />
              </a>
              <a
                href="mailto:contact@alfredwisdom.dev"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FiMail />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Alfred Wisdom. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and built with ❤️ and a beautiful mind 🧠{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
