import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowRight, FiDownload, FiGithub } from "react-icons/fi";
import photo from "../assets/Myphoto.jpeg";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const toRotate = [
    "Full Stack Engineer",
    "Solution Architect",
    "Performance Optimizer",
  ];
  const period = 2000;

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

    if (isDeleting) setDelta((prevDelta) => prevDelta / 1.5);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden relative"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Main Content */}
          <div className="flex-[1.2] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6 group cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider font-mono">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Creating{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  digital excellence
                </span>
                <br className="hidden md:block" /> with precision.
              </h1>

              <div className="h-12 mb-8 hidden sm:flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl font-mono text-slate-500 dark:text-slate-400">
                  I'm a{" "}
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {text}
                  </span>
                  <span className="inline-block w-[2px] h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-blink align-middle"></span>
                </p>
              </div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Alfred Wisdom | High-performance full-stack engineering focused
                on crafting responsive, scalable, and visually stunning user
                experiences.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Link
                  to="projects"
                  smooth={true}
                  className="group cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all flex items-center gap-3 shadow-glow"
                >
                  Explore Work
                  <FiArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="/resume/frontend"
                  target="_blank"
                  className="group cursor-pointer border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-2xl font-semibold transition-all flex items-center gap-3"
                >
                  View Resume
                  <FiDownload
                    size={18}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              {/* Stats/Quick Info */}
              <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
                <div>
                  <h4 className="text-2xl font-bold">10+</h4>
                  <p className="text-sm text-slate-500 font-mono">
                    Projects Done
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">2+</h4>
                  <p className="text-sm text-slate-500 font-mono">Years Exp.</p>
                </div>
                <div className="hidden sm:block">
                  <h4 className="text-2xl font-bold">5+</h4>
                  <p className="text-sm text-slate-500 font-mono">
                    Happy Clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Creative Graphic Area */}
          <motion.div
            className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-10 border border-blue-500/10 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-20 border border-purple-500/5 rounded-full animate-spin-slow [animation-direction:reverse] pointer-events-none" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] glass-panel rounded-[2.5rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 relative shadow-2xl">
                  <img
                    src={photo}
                    alt="Alfred Wisdom"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent mix-blend-multiply transition-opacity group-hover:opacity-60" />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 p-4 glass-panel rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl border-white/20"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  <FiGithub size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-tighter text-slate-500">
                    Latest Pulse
                  </p>
                  <p className="text-sm font-bold">Commit 2h ago</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-8 p-4 glass-panel rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl border-white/20"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700"
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold">+12 Collaborators</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">
          Explore
        </span>
        <div className="w-px h-12 bg-linear-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
