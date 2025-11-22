'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Industry {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface IndustryFilterProps {
  onFilterChange: (industryId: string) => void;
  className?: string;
}

const IndustryFilter = ({ onFilterChange, className = '' }: IndustryFilterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const industries: Industry[] = [
    { id: 'all', name: 'All Industries', icon: 'Squares2X2Icon', count: 47 },
    { id: 'mining', name: 'Mining', icon: 'CubeIcon', count: 8 },
    { id: 'manufacturing', name: 'Manufacturing', icon: 'CogIcon', count: 12 },
    { id: 'pharma', name: 'Pharmaceutical', icon: 'BeakerIcon', count: 7 },
    { id: 'utilities', name: 'Utilities', icon: 'BoltIcon', count: 9 },
    { id: 'realestate', name: 'Real Estate', icon: 'BuildingOffice2Icon', count: 6 },
    { id: 'public', name: 'Public Sector', icon: 'BuildingLibraryIcon', count: 5 }
  ];

  const handleFilterClick = (industryId: string) => {
    if (!isHydrated) return;
    setSelectedIndustry(industryId);
    onFilterChange(industryId);
  };

  return (
    <section className={`bg-card border-y border-border py-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-headline font-headline-medium text-foreground">
            Filter by Industry
          </h2>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="FunnelIcon" size={16} className="text-current" />
            <span className="font-body">
              {isHydrated ? `${industries.find(i => i.id === selectedIndustry)?.count || 0} case studies` : 'Loading...'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleFilterClick(industry.id)}
              disabled={!isHydrated}
              className={`p-4 rounded-lg border transition-smooth text-left ${
                isHydrated && selectedIndustry === industry.id
                  ? 'bg-primary/10 border-primary text-primary' :'bg-background border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
              } ${!isHydrated ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Icon
                name={industry.icon as any}
                size={24}
                className="text-current mb-2"
                variant="outline"
              />
              <div className="text-sm font-body-medium">{industry.name}</div>
              <div className="text-xs text-text-secondary mt-1 font-body">{industry.count} studies</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFilter;