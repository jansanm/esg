'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProofBadge {
  id: number;
  type: string;
  status: 'verified' | 'anchored' | 'certified';
  timestamp: string;
  hash: string;
}

const TrustStrip = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const proofBadges: ProofBadge[] = [
    {
      id: 1,
      type: 'Carbon Emission',
      status: 'verified',
      timestamp: '2025-11-21T14:30:00Z',
      hash: '0x7a8f9b2c...',
    },
    {
      id: 2,
      type: 'Water Usage',
      status: 'anchored',
      timestamp: '2025-11-21T13:15:00Z',
      hash: '0x4d6e8a1f...',
    },
    {
      id: 3,
      type: 'Energy Consumption',
      status: 'certified',
      timestamp: '2025-11-21T12:00:00Z',
      hash: '0x9c3b5f7e...',
    },
    {
      id: 4,
      type: 'Waste Management',
      status: 'verified',
      timestamp: '2025-11-21T11:45:00Z',
      hash: '0x2e7d4a9c...',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'text-success bg-success/10 border-success/30';
      case 'anchored':
        return 'text-brand-secondary bg-brand-secondary/10 border-brand-secondary/30';
      case 'certified':
        return 'text-primary bg-primary/10 border-primary/30';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return 'CheckCircleIcon';
      case 'anchored':
        return 'LinkIcon';
      case 'certified':
        return 'DocumentCheckIcon';
      default:
        return 'ClockIcon';
    }
  };

  return (
    <section className="bg-card border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full mb-4">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-body-medium text-primary">Live Proof Verification</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-headline font-headline-bold text-foreground mb-3">
            Real-Time Anchor Receipts
          </h2>
          <p className="text-base text-text-secondary font-body max-w-2xl mx-auto">
            Every verification is blockchain-anchored with immutable proof. Click any badge to view the complete audit trail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofBadges.map((badge) => (
            <button
              key={badge.id}
              onClick={() => isHydrated && setSelectedBadge(badge.id)}
              className="group relative bg-card border border-border hover:border-primary/50 rounded-xl p-6 transition-smooth hover:shadow-card text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${getStatusColor(
                    badge.status
                  )} border transition-smooth`}
                >
                  <Icon
                    name={getStatusIcon(badge.status) as any}
                    size={24}
                    className="text-current"
                    variant="solid"
                  />
                </div>
                <Icon
                  name="ArrowTopRightOnSquareIcon"
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-smooth"
                />
              </div>

              <h3 className="text-base font-body-medium text-foreground mb-2 group-hover:text-primary transition-smooth">
                {badge.type}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-body-medium rounded-md ${getStatusColor(
                      badge.status
                    )} border capitalize`}
                  >
                    {badge.status}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-muted-foreground font-mono">
                  <Icon name="LinkIcon" size={14} className="text-current" />
                  <span className="truncate">{badge.hash}</span>
                </div>
              </div>

              {selectedBadge === badge.id && isHydrated && (
                <div className="absolute inset-0 bg-primary/5 border-2 border-primary rounded-xl pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-body mb-4">
            All verifications are cryptographically secured and publicly auditable
          </p>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={16} className="text-success" />
              <span className="text-xs text-text-secondary font-body">Real-time Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="LockClosedIcon" size={16} className="text-brand-secondary" variant="solid" />
              <span className="text-xs text-text-secondary font-body">Immutable Records</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="GlobeAltIcon" size={16} className="text-primary" />
              <span className="text-xs text-text-secondary font-body">Global Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;