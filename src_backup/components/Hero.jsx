import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  
  // Words to cycle through - starting with the name as requested
  const toRotate = ["Alfred Wisdom", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
  const period = 2000; // Time to wait before deleting

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5); // Speed up when deleting
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Wait before starting to delete
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset speed for typing
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
              Hello, I'm
            </h2>
            
            <div className="h-20 mb-4 flex items-center justify-center md:justify-start">
              <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {text}
                <span className="border-r-4 border-blue-600 dark:border-blue-400 ml-1 animate-blink"></span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I build exceptional digital experiences that are fast, accessible, lovely, and responsive. Let's turn your vision into reality.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="/resume" 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2"
              >
                View CV
                <FiExternalLink />
              </a>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div 
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning border effect */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600/50 border-r-purple-600/50 blur-[2px] animate-spin-slow" />
              
              {/* Profile Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                 {/* Placeholder for user image if they have one, otherwise a coding illustration */}
                 <span className="text-9xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
