'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import RoleSolutionsSection from './RoleSolutions';
import IndustrySolutionsSection from './IndustrySolutions';
import CaseStudiesSection from './CaseStudiesShowcase';
import CTASection from './CTASection';

const SolutionsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('roles');

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

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    const sectionMap: { [key: string]: string } = {
      'roles': 'role-solutions',
      'industries': 'industry-solutions',
      'case-studies': 'case-studies'
    };
    const targetId = sectionMap[category];
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCategorySelect={handleCategorySelect} />
      
      <div id="role-solutions">
        <RoleSolutionsSection isVisible={activeCategory === 'roles'} />
      </div>
      
      <div id="industry-solutions">
        <IndustrySolutionsSection isVisible={activeCategory === 'industries'} />
      </div>
      
      <div id="case-studies">
        <CaseStudiesSection isVisible={activeCategory === 'case-studies'} />
      </div>
      
      <CTASection />
    </div>
  );
};

export default SolutionsInteractive;