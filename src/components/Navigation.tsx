import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface NavigationProps {
  onContact: () => void;
  onAbout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onContact, onAbout }) => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm tracking-widest text-neutral-500">MARTIN</p>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={onAbout}
            className="text-sm tracking-widest text-neutral-500 hover:text-white transition-colors"
          >
            ABOUT
          </button>
          <button 
            onClick={onContact}
            className="text-sm tracking-widest text-neutral-500 hover:text-white transition-colors"
          >
            CONTACT
          </button>
          {[Github, Twitter, Linkedin].map((Icon, index) => (
            <button 
              key={index} 
              className="text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};