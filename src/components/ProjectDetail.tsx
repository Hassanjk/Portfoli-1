import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Clock, Target, Lightbulb, TrendingUp, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-16 px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={onBack}
            className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-all duration-300 mb-8"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-2 rounded-full bg-neutral-900/50 border border-neutral-800 group-hover:border-neutral-600 transition-colors"
              whileHover={{ rotate: -180 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.div>
            <span className="text-sm tracking-wider uppercase">Back to Projects</span>
          </motion.button>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
          variants={itemVariants}
        >
          {/* Left Column - Project Info */}
          <div className="space-y-8">
            <div>
              <motion.div 
                className="flex items-center gap-3 mb-4"
                variants={itemVariants}
              >
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                  <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                </div>
                {project.year && (
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                )}
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
                variants={itemVariants}
              >
                {project.title}
              </motion.h1>

              <motion.p 
                className="text-xl text-neutral-400 leading-relaxed"
                variants={itemVariants}
              >
                {project.fullDescription || project.description}
              </motion.p>
            </div>

            {/* Project Meta */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {project.client && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <User className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Client</span>
                  </div>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              )}
              
              {project.duration && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Duration</span>
                  </div>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
              )}

              {project.technologies && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Code className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-neutral-500">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Site</span>
                </motion.a>
              )}
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-neutral-800 rounded-lg text-white font-medium hover:bg-neutral-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Right Column - Image Gallery */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              
              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Features */}
          {project.features && (
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-light text-white mb-6">Key Features</h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-neutral-900/30 backdrop-blur-sm rounded-lg border border-neutral-800/50"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <p className="text-neutral-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results */}
          {project.results && (
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-light text-white mb-6">Results & Impact</h3>
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-neutral-300">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Challenge & Solution */}
        {(project.challenges || project.solution) && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
            variants={itemVariants}
          >
            {project.challenges && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-red-400" />
                  <h3 className="text-2xl font-light text-white">Challenge</h3>
                </div>
                <div className="p-6 bg-red-500/10 rounded-xl border border-red-500/20">
                  <p className="text-neutral-300 leading-relaxed">{project.challenges}</p>
                </div>
              </div>
            )}

            {project.solution && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-2xl font-light text-white">Solution</h3>
                </div>
                <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <p className="text-neutral-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Technology Stack */}
        {project.technologies && (
          <motion.div 
            className="mb-20"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-light text-white mb-8">Technology Stack</h3>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full border border-neutral-600 text-white font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    background: 'linear-gradient(to right, #3B82F6, #8B5CF6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
