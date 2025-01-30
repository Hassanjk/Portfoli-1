import React from 'react';

export const ProfileImage = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-900 blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
      <div className="relative aspect-[2/3] w-[300px] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
          alt="Profile"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
      </div>
    </div>
  );
};