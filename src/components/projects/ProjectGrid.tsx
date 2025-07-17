import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../types/project';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12"
    >
      <AnimatePresence mode="wait">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            layout
            className="group"
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
      
      {projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-full flex flex-col items-center justify-center py-20 text-center"
        >
          <motion.div
            className="w-16 h-16 bg-neutral-800/50 rounded-full flex items-center justify-center mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-2xl">🔍</span>
          </motion.div>
          <h3 className="text-xl text-neutral-400 mb-2">No projects found</h3>
          <p className="text-neutral-500 text-sm">Try selecting a different category</p>
        </motion.div>
      )}
    </motion.div>
  );
};