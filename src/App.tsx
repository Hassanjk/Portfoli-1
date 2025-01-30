import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroContent } from './components/HeroContent';
import { ProjectsSection } from './components/ProjectsSection';
import { Cursor } from './components/Cursor';
import { PageTransition } from './components/PageTransition';
import { usePageTransition } from './hooks/usePageTransition';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';

function App() {
  const { currentPage, isTransitioning, transition } = usePageTransition();

  // Common animation props for all pages
  const pageAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" } // Reduced from 0.5 to 0.3
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundEffects />
      <Navigation 
        onContact={() => transition('contact')}
        onAbout={() => transition('about')}
      />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div key="home" {...pageAnimationProps}>
            <HeroContent 
              onViewProjects={() => transition('projects')} 
              onContact={() => transition('contact')}
            />
          </motion.div>
        )}
        
        {currentPage === 'projects' && (
          <motion.div key="projects" {...pageAnimationProps}>
            <ProjectsSection onBack={() => transition('home')} />
          </motion.div>
        )}

        {currentPage === 'contact' && (
          <motion.div key="contact" {...pageAnimationProps}>
            <ContactSection onBack={() => transition('home')} />
          </motion.div>
        )}

        {currentPage === 'about' && (
          <motion.div key="about" {...pageAnimationProps}>
            <AboutSection onBack={() => transition('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      <PageTransition isTransitioning={isTransitioning} />
      <Cursor />
    </div>
  );
}

export default App;