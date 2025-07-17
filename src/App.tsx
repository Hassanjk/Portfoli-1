import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroContent } from './components/HeroContent';
import { ProjectsSection } from './components/ProjectsSection';
import { PageTransition } from './components/PageTransition';
import { usePageTransition } from './hooks/usePageTransition';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentPage, isTransitioning, transition, cleanup } = usePageTransition();

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  // Common animation props for all pages
  const pageAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative bg-black text-white overflow-hidden">
          <BackgroundEffects />
          <Navigation 
            onContact={() => transition('contact')}
            onAbout={() => transition('about')}
          />
          
          <AnimatePresence mode="wait" onExitComplete={() => {
            // Force cleanup of any lingering animations
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0);
            }
          }}>
            {currentPage === 'home' && (
              <motion.div key="home" {...pageAnimationProps} className="min-h-screen flex flex-col">
                <div className="flex-1 flex flex-col">
                  <HeroContent 
                    onViewProjects={() => transition('projects')} 
                    onContact={() => transition('contact')}
                  />
                </div>
                <Footer />
              </motion.div>
            )}
            
            {currentPage === 'projects' && (
              <motion.div key="projects" {...pageAnimationProps} className="min-h-screen">
                <ProjectsSection key="projects-section" onBack={() => transition('home')} />
                <Footer compact />
              </motion.div>
            )}

            {currentPage === 'contact' && (
              <motion.div key="contact" {...pageAnimationProps} className="min-h-screen flex flex-col">
                <div className="flex-1">
                  <ContactSection onBack={() => transition('home')} />
                </div>
                <Footer />
              </motion.div>
            )}

            {currentPage === 'about' && (
              <motion.div key="about" {...pageAnimationProps} className="min-h-screen flex flex-col">
                <div className="flex-1">
                  <AboutSection onBack={() => transition('home')} />
                </div>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>

          <PageTransition isTransitioning={isTransitioning} />
        </div>
      )}
    </>
  );
}

export default App;