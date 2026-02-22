import React from "react";
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-transparent text-gray-900 dark:text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold">AW</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Alfred Wisdom</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Full Stack Developer</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <a href="https://github.com/Ricsie11" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <FiGithub size={20} />
            </a>
            <a href="mailto:contact@alfredwisdom.dev" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <FiMail size={20} />
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <FiLinkedin size={20} />
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">© {currentYear} Alfred Wisdom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
