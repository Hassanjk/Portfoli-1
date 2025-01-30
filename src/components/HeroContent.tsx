import React from 'react';
import { ProfileImage } from './ProfileImage';
import { ArrowRight } from 'lucide-react';

interface HeroContentProps {
  onViewProjects: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onViewProjects }) => {
  return (
    <div className="relative min-h-screen grid grid-cols-2 items-center max-w-7xl mx-auto px-8">
      {/* Left Column - Text Content */}
      <div className="space-y-8">
        <div>
          <p className="text-sm tracking-widest text-neutral-500 mb-4">CREATIVE DEVELOPER</p>
          <h1 className="text-7xl font-light tracking-tight text-white/90">
            Martin<br />Anderson
          </h1>
        </div>

        <p className="text-lg text-neutral-400 max-w-md leading-relaxed">
          Crafting digital experiences through elegant code and thoughtful design. 
          Based in Stockholm, working worldwide.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <button 
            onClick={onViewProjects}
            className="group relative"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider text-white py-4">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 h-[1px] bottom-4 bg-neutral-800 transition-all duration-300 group-hover:h-full"></div>
          </button>
          
          <button className="text-sm tracking-wider text-neutral-500 hover:text-white transition-colors duration-300">
            Contact
          </button>
        </div>
      </div>

      {/* Right Column - Profile Image */}
      <div className="flex justify-center items-center">
        <ProfileImage />
      </div>

      {/* Bottom Tag */}
      <div className="absolute bottom-12 left-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-neutral-800"></div>
          <p className="text-xs tracking-widest text-neutral-500">SCROLL</p>
        </div>
      </div>
    </div>
  );
};