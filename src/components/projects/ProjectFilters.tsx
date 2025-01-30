import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/projectData';

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="relative group"
          >
            <span className={`text-sm tracking-wider px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category 
                ? 'text-white' 
                : 'text-neutral-500 hover:text-white'
            }`}>
              {category}
            </span>
            {selectedCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};