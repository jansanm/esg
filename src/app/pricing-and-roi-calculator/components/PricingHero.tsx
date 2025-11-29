'use client';

import React from 'react';

const PricingHero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="relative w-full h-48 md:h-64 rounded-[2rem] overflow-hidden">
        {/* Background Image / Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-9a82bf5586b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          {/* Green overlay for theme consistency */}
          <div className="absolute inset-0 bg-green-900/40" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
            Plans and Pricing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
