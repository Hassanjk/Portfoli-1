import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { categories } from '../../data/projectData';

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const componentId = useId();
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Filter className="w-4 h-4 text-neutral-400" />
        <span className="text-sm text-neutral-400 tracking-wider uppercase">Filter by Category</span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`relative px-6 py-3 rounded-full text-sm tracking-wider font-medium transition-all duration-300 ${
              selectedCategory === category 
                ? 'bg-blue-500/60 text-white shadow-lg shadow-blue-500/15 border border-blue-400/30' 
                : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 hover:text-white border border-neutral-700/50 hover:border-neutral-600/50'
            }`}>
              {category}
              
              {/* Selected state glow effect */}
              {selectedCategory === category && (
                <motion.div
                  layoutId={`selected-glow-${componentId}`}
                  className="absolute inset-0 bg-blue-500/30 rounded-full blur-sm -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};