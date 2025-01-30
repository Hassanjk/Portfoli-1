import React from 'react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[#0A0A0A]"></div>
      
      {/* Minimal geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-neutral-800/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-neutral-800/20 to-transparent blur-3xl"></div>
    </div>
  );
};