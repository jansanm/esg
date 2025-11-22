'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface PipelineStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  status: 'active' | 'completed' | 'pending';
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const pipelineSteps: PipelineStep[] = [
    {
      id: 1,
      title: 'IoT Sensor Data',
      description: 'Real-time environmental monitoring with S1 device signatures',
      icon: 'SignalIcon',
      status: activeStep === 0 ? 'active' : activeStep > 0 ? 'completed' : 'pending',
    },
    {
      id: 2,
      title: 'AI Validation',
      description: 'Automated verification and anomaly detection',
      icon: 'CpuChipIcon',
      status: activeStep === 1 ? 'active' : activeStep > 1 ? 'completed' : 'pending',
    },
    {
      id: 3,
      title: 'Blockchain Anchoring',
      description: 'Immutable proof with Merkle tree verification',
      icon: 'ShieldCheckIcon',
      status: activeStep === 2 ? 'active' : activeStep > 2 ? 'completed' : 'pending',
    },
    {
      id: 4,
      title: 'Certificate Issuance',
      description: 'Audit-grade ESG certification with live proof',
      icon: 'DocumentCheckIcon',
      status: activeStep === 3 ? 'active' : 'pending',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(76,175,80,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(33,150,243,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Icon name="CheckBadgeIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-body-medium text-primary">Proof Before Promise</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-headline-bold text-white leading-tight">
              From Sensor to Certificate
              <span className="block text-primary mt-2">Verified ESG Evidence</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 font-body leading-relaxed">
              Transform environmental data verification from claims-based to proof-based through blockchain-anchored evidence. Enterprise-grade verification that investors and regulators trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/platform-overview"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-cta-bold text-primary-foreground bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover rounded-lg transition-smooth"
              >
                See Live Proof
                <Icon name="ArrowRightIcon" size={20} className="ml-2 text-current" />
              </Link>
              <Link
                href="/pricing-and-roi-calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-cta text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-smooth"
              >
                Calculate ROI
                <Icon name="CalculatorIcon" size={20} className="ml-2 text-current" />
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={24} className="text-success" variant="solid" />
                <span className="text-sm text-gray-400 font-body">SOC 2 Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="GlobeAltIcon" size={24} className="text-brand-secondary" />
                <span className="text-sm text-gray-400 font-body">Global Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="LockClosedIcon" size={24} className="text-warning" variant="solid" />
                <span className="text-sm text-gray-400 font-body">Blockchain Anchored</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-modal">
              <h3 className="text-xl font-headline font-headline-medium text-white mb-6">
                Verification Pipeline
              </h3>

              <div className="space-y-6">
                {pipelineSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div
                      className={`flex items-start space-x-4 p-4 rounded-lg transition-smooth ${
                        step.status === 'active' ?'bg-primary/10 border border-primary/30'
                          : step.status === 'completed' ?'bg-success/5 border border-success/20' :'bg-muted/5 border border-border/30'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-smooth ${
                          step.status === 'active' ?'bg-primary text-primary-foreground'
                            : step.status === 'completed' ?'bg-success text-success-foreground' :'bg-muted text-muted-foreground'
                        }`}
                      >
                        <Icon
                          name={step.icon as any}
                          size={24}
                          className="text-current"
                          variant={step.status === 'completed' ? 'solid' : 'outline'}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-base font-body-medium mb-1 transition-smooth ${
                            step.status === 'active' ?'text-primary'
                              : step.status === 'completed' ?'text-success' :'text-gray-400'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-400 font-body">{step.description}</p>
                      </div>

                      {step.status === 'active' && isHydrated && (
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>

                    {index < pipelineSteps.length - 1 && (
                      <div className="ml-10 h-6 w-0.5 bg-gradient-to-b from-border/50 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-body">Live Verification Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-success font-body-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;