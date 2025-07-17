import React, { useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`relative z-10 text-sm tracking-wider px-6 py-3 rounded-full transition-all duration-300 border ${
              selectedCategory === category 
                ? 'text-white border-blue-400/50 bg-blue-400/10' 
                : 'text-neutral-400 hover:text-white border-neutral-700 hover:border-neutral-600 bg-neutral-800/30 hover:bg-neutral-800/50'
            }`}>
              {category}
            </span>
            
            <AnimatePresence mode="wait">
              {selectedCategory === category && (
                <>
                  <motion.div
                    layoutId={`activeCategory-${componentId}`}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      type: "spring", 
                      bounce: 0.2, 
                      duration: 0.4,
                      layout: { duration: 0.2 }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-blue-400/5 rounded-full blur-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
};