'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ManufacturingProblems from './ManufacturingProblems';
import SolutionsContent from './SolutionsContent';
import CTASection from './CTASection';

const SolutionsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted" />
          <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
            <div className="h-64 bg-muted rounded-xl" />
            <div className="h-64 bg-muted rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ManufacturingProblems />
      <HeroSection />
      <SolutionsContent />
      <CTASection />
    </div>
  );
};

export default SolutionsInteractive;