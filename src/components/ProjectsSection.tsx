import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from './projects/ProjectGrid';
import { ProjectFilters } from './projects/ProjectFilters';
import { useProjectFilters } from '../hooks/useProjectFilters';
import { Project } from '../types/project';

interface ProjectsSectionProps {
  onProjectClick?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  const { 
    selectedCategory,
    setSelectedCategory,
    filteredProjects 
  } = useProjectFilters();

  // Reset filters when component mounts
  useEffect(() => {
    setSelectedCategory('All');
  }, [setSelectedCategory]);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-16 px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Filters */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 rounded-2xl blur-xl"></div>
            <div className="relative bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
              <ProjectFilters 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div variants={itemVariants}>
          <ProjectGrid projects={filteredProjects} onProjectClick={onProjectClick} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};