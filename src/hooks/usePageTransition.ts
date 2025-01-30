import { useState } from 'react';

type Page = 'home' | 'projects' | 'contact' | 'about';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const transition = (to: Page) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(to);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 800); // Reduced from 1500 to 800ms
  };

  return { isTransitioning, currentPage, transition };
};