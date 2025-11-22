'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  quarter: string;
  items: string[];
  icon: string;
}

interface ComplianceRoadmapProps {
  className?: string;
}

const ComplianceRoadmap = ({ className = '' }: ComplianceRoadmapProps) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('phase2');

  const roadmapPhases: RoadmapPhase[] = [
    {
      id: 'phase1',
      phase: 'Phase 1',
      title: 'Foundation & Core Security',
      status: 'completed',
      quarter: 'Q4 2024',
      icon: 'ShieldCheckIcon',
      items: [
        'SOC 2 Type I certification achieved',
        'ISO 27001 framework implementation',
        'GDPR compliance infrastructure',
        'Data encryption at rest and in transit',
        'Multi-factor authentication deployment'
      ]
    },
    {
      id: 'phase2',
      phase: 'Phase 2',
      title: 'Advanced Compliance & Audit',
      status: 'in-progress',
      quarter: 'Q1 2025',
      icon: 'DocumentMagnifyingGlassIcon',
      items: [
        'SOC 2 Type II audit preparation',
        'ISO 27001 certification process',
        'CSRD readiness assessment',
        'Third-party penetration testing',
        'Continuous monitoring implementation'
      ]
    },
    {
      id: 'phase3',
      phase: 'Phase 3',
      title: 'Global Standards Integration',
      status: 'planned',
      quarter: 'Q2 2025',
      icon: 'GlobeAltIcon',
      items: [
        'ESRS E1-E5 full compliance',
        'SEC climate disclosure automation',
        'Regional data residency options',
        'Multi-jurisdiction audit support',
        'Real-time compliance dashboard'
      ]
    },
    {
      id: 'phase4',
      phase: 'Phase 4',
      title: 'Enterprise & Regulatory Excellence',
      status: 'planned',
      quarter: 'Q3 2025',
      icon: 'BuildingOffice2Icon',
      items: [
        'FedRAMP authorization pursuit',
        'Industry-specific certifications',
        'Automated regulatory change tracking',
        'AI-powered compliance recommendations',
        'Blockchain audit trail enhancements'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-warning text-warning-foreground';
      case 'planned':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'CheckCircleIcon';
      case 'in-progress':
        return 'ArrowPathIcon';
      case 'planned':
        return 'ClockIcon';
      default:
        return 'ClockIcon';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Compliance & Security Roadmap
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Our commitment to enterprise-grade security and global compliance standards with transparent progress tracking and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {roadmapPhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`p-4 rounded-lg border-2 transition-smooth text-left ${
                selectedPhase === phase.id
                  ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-body-medium text-text-secondary">{phase.quarter}</span>
                <Icon
                  name={getStatusIcon(phase.status) as any}
                  size={16}
                  className={`${
                    phase.status === 'completed'
                      ? 'text-success'
                      : phase.status === 'in-progress' ?'text-warning' :'text-muted-foreground'
                  }`}
                  variant="solid"
                />
              </div>
              <h3 className="text-sm font-headline font-headline-medium text-foreground mb-1">
                {phase.phase}
              </h3>
              <p className="text-xs text-text-secondary font-body line-clamp-2">{phase.title}</p>
            </button>
          ))}
        </div>

        {roadmapPhases
          .filter((phase) => phase.id === selectedPhase)
          .map((phase) => (
            <div key={phase.id} className="bg-card border border-border rounded-xl p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={phase.icon as any} size={32} className="text-white" variant="solid" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-headline font-headline-bold text-foreground">
                        {phase.phase}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-body-medium ${getStatusColor(phase.status)}`}>
                        {phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                    <p className="text-lg text-text-primary font-body-medium">{phase.title}</p>
                  </div>
                </div>
                <div className="text-sm text-text-secondary font-body-medium">{phase.quarter}</div>
              </div>

              <div className="space-y-3">
                {phase.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                    <Icon
                      name={phase.status === 'completed' ? 'CheckCircleIcon' : 'ArrowRightIcon'}
                      size={20}
                      className={phase.status === 'completed' ? 'text-success' : 'text-primary'}
                      variant={phase.status === 'completed' ? 'solid' : 'outline'}
                    />
                    <span className="text-sm text-text-primary font-body flex-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ComplianceRoadmap;