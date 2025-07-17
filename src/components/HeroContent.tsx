import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, Palette } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';
import { StatsBar } from './StatsBar';

interface HeroContentProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onViewProjects, onContact }) => {
  const badges = [
    { icon: Code, text: 'Full Stack Developer' },
    { icon: Rocket, text: 'Tech Enthusiast' },
    { icon: Palette, text: 'UI/UX Designer' }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative h-full">
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-8 py-12 h-full flex flex-col">
        {/* Main content area - taking most of the viewport */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center min-h-0 mt-16">
          
          {/* Left column - Text content (3/5 width on large screens) */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={textVariants}>
              <p className="text-sm tracking-widest text-neutral-500 mb-4">CREATIVE DEVELOPER</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 leading-tight">
                Martin Anderson
              </h1>
            </motion.div>

            <motion.p 
              variants={textVariants}
              className="text-lg text-neutral-400 max-w-2xl leading-relaxed"
            >
              Crafting digital experiences through elegant code and thoughtful design. 
              Based in Stockholm, working worldwide.
            </motion.p>

            <motion.div 
              variants={textVariants}
              className="flex gap-4 flex-wrap"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-5 py-3 bg-neutral-900/50 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <badge.icon className="w-4 h-4 text-neutral-500" />
                  <span className="text-sm text-neutral-400">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={textVariants}
              className="flex items-center gap-8 pt-6"
            >
              <motion.button 
                onClick={onViewProjects}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2 text-base tracking-wider text-white py-4">
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 h-[1px] bottom-4 bg-neutral-800 transition-all duration-300 group-hover:h-full"></div>
              </motion.button>
              
              <motion.button 
                onClick={onContact}
                className="text-base tracking-wider text-neutral-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Profile image (2/5 width) */}
          <div className="lg:col-span-2 flex justify-center items-center">
            <motion.div
              className="relative w-64 h-80 md:w-72 md:h-96"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-28 h-28 bg-neutral-900/80 backdrop-blur-sm rounded-lg p-4 border border-neutral-800"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-xs tracking-widest text-neutral-500 mb-2">EXP</div>
                <div className="text-xl font-light">8+</div>
                <div className="text-sm text-neutral-400">Years</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar - Better sized version at bottom */}
        <motion.div 
          className="mt-8"
          variants={textVariants}
        >
          <StatsBar />
        </motion.div>
      </div>
    </div>
  );
};