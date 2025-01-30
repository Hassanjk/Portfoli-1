import { useState, useMemo } from 'react';
import { projects } from '../data/projectData';

export const useProjectFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => 
      project.category === selectedCategory
    );
  }, [selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects
  };
};