import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundEffects = ({ darkMode }) => {
  const [trail, setTrail] = useState([]);
  const [fireworks, setFireworks] = useState([]);

  // Mouse Trail Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrail(prev => {
        // Keep last 20 points
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Math.random() }];
        if (newTrail.length > 20) {
          return newTrail.slice(newTrail.length - 20);
        }
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fireworks Logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Increased frequency: 50% chance every 1.5 seconds
      if (Math.random() > 0.5) {
        const id = Date.now();
        const x = Math.floor(Math.random() * 80) + 10; // 10% to 90% screen width
        const y = Math.floor(Math.random() * 50) + 10; // 10% to 60% screen height
        // Brighter, bold colors for particles
        const colors = ['#FF0000', '#00FF00', '#4444FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF9900', '#FFFFFF', '#FF3366', '#33FFCC'];
        
        setFireworks(prev => [...prev, { id, x, y, colors }]);

        // Remove firework after animation
        setTimeout(() => {
          setFireworks(prev => prev.filter(fw => fw.id !== id));
        }, 2500);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Global Gradient Background */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${
        darkMode 
          ? 'bg-linear-to-br from-gray-900 via-blue-900/30 to-black' 
          : 'bg-linear-to-br from-blue-50 via-white to-purple-50'
      }`}></div>

      {/* Shooting Stars - More bold and frequent */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute top-0 right-0 animate-shooting-star opacity-0"
            style={{
              // Randomize start position
              top: `${Math.random() * 60}%`, 
              right: `${Math.random() * 40 - 20}%`,
              // Staggered long delays for continuous effect
              animationDelay: `${Math.random() * 10}s`, 
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {/* The Star Tail */}
            <div className="h-[2px] w-[100px] bg-linear-to-l from-transparent to-white rounded-full"></div>
            {/* The Star Head */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
          </div>
        ))}
      </div>

      {/* Mouse Trail */}
      <AnimatePresence>
        {trail.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-4 h-4 bg-blue-500 rounded-full blur-sm"
            style={{ 
              left: point.x, 
              top: point.y,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
            }}
          />
        ))}
      </AnimatePresence>

      {/* Fireworks - Explosion Effect */}
      <AnimatePresence>
        {fireworks.map(fw => (
          <div 
            key={fw.id}
            className="absolute"
            style={{ left: `${fw.x}%`, top: `${fw.y}%` }}
          >
            {/* Central Flash */}
            <motion.div
               initial={{ scale: 0, opacity: 1 }}
               animate={{ scale: 2.5, opacity: 0 }}
               transition={{ duration: 0.4 }}
               className="absolute w-4 h-4 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 blur-sm"
            />

            {/* Particles */}
            {[...Array(36)].map((_, i) => {
              const angle = (i * 10) * (Math.PI / 180); // 360 degrees / 36 particles
              const velocity = 150 + Math.random() * 100; // MUCH Larger spread distance
              const particleColor = fw.colors[Math.floor(Math.random() * fw.colors.length)];
              
              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ 
                    x: Math.cos(angle) * velocity, 
                    y: Math.sin(angle) * velocity, 
                    opacity: 0, 
                    scale: 0 
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute w-2 h-2 rounded-full shadow-md"
                  style={{ 
                    backgroundColor: particleColor,
                    boxShadow: `0 0 8px ${particleColor}`
                  }}
                />
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundEffects;
