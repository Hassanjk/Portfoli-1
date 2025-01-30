import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiTailwindcss, 
  SiFigma, SiGit, SiNextdotjs 
} from 'react-icons/si';

export const FloatingIcons = () => {
  const icons = [
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiTypescript, color: '#3178C6' },
    { Icon: SiTailwindcss, color: '#06B6D4' },
    { Icon: SiFigma, color: '#F24E1E' },
    { Icon: SiGit, color: '#F05032' },
    { Icon: SiNextdotjs, color: '#ffffff' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight]
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Icon 
            style={{ color }} 
            className="w-6 h-6 opacity-20 hover:opacity-100 transition-opacity" 
          />
        </motion.div>
      ))}
    </div>
  );
};
