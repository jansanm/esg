'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProofHeroProps {
  className?: string;
}

const ProofHero = ({ className = '' }: ProofHeroProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeProofCount, setActiveProofCount] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
    const interval = setInterval(() => {
      setActiveProofCount(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const proofMetrics = [
    { label: 'Verified Case Studies', value: '47+', icon: 'DocumentCheckIcon' },
    { label: 'Blockchain Anchors', value: '12,500+', icon: 'ShieldCheckIcon' },
    { label: 'Industries Covered', value: '6', icon: 'BuildingOfficeIcon' },
    { label: 'Average ROI', value: '340%', icon: 'ChartBarIcon' }
  ];

  return (
    <section className={`relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Icon name="CheckBadgeIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-body-medium text-primary">Live Verification Evidence</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground leading-tight">
              Proof Before Promise:<br />
              <span className="text-primary">Verified ESG Evidence</span>
            </h1>

            <p className="text-lg text-text-secondary font-body leading-relaxed">
              Explore real-world case studies with blockchain-anchored verification. Every claim backed by live proof, every metric traceable to source, every outcome independently verifiable.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center space-x-2">
                <span>Explore Case Studies</span>
                <Icon name="ArrowRightIcon" size={20} className="text-current" />
              </button>
              <button className="px-6 py-3 bg-card border border-border text-foreground font-cta rounded-lg hover:border-primary hover:text-primary transition-smooth flex items-center space-x-2">
                <Icon name="PlayIcon" size={20} className="text-current" variant="solid" />
                <span>Watch Verification Demo</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="text-lg font-headline font-headline-medium text-foreground">Live Proof Metrics</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-text-secondary font-body">Real-time</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {proofMetrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className={`p-4 rounded-lg border transition-smooth ${
                        isHydrated && activeProofCount === index
                          ? 'bg-primary/5 border-primary' :'bg-muted border-border'
                      }`}
                    >
                      <Icon
                        name={metric.icon as any}
                        size={24}
                        className={isHydrated && activeProofCount === index ? 'text-primary' : 'text-text-secondary'}
                        variant="outline"
                      />
                      <div className="mt-3">
                        <div className="text-2xl font-headline font-headline-bold text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-sm text-text-secondary font-body mt-1">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary font-body">Last Updated:</span>
                    <span className="text-foreground font-body-medium">
                      {isHydrated ? new Date().toLocaleString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Loading...'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent to-primary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofHero;