import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Code2 } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="group relative cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
    >
      {/* Card Background with Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
      <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 group-hover:border-neutral-700/50 rounded-2xl overflow-hidden transition-all duration-300">
        
        {/* Project Image */}
        <div className="relative h-[280px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-transparent to-neutral-900/50 z-10"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Floating Action Button */}
          <motion.a
            href={project.link}
            className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full z-20">
            <span className="text-xs text-white/80 tracking-wider uppercase">
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-light text-white group-hover:text-blue-100 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
          
          {/* Project Meta */}
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Code2 className="w-3 h-3" />
              <span>{project.tags.length} Tech{project.tags.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          
          {/* Tech Stack Tags */}
          <div className="flex gap-2 flex-wrap">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs tracking-wider text-neutral-400 bg-neutral-800/50 border border-neutral-700/50 rounded-full group-hover:border-neutral-600/50 group-hover:text-neutral-300 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + tagIndex * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-xs tracking-wider text-neutral-500 bg-neutral-800/30 border border-neutral-700/30 rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
};