'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface VerificationStep {
  id: string;
  title: string;
  status: 'completed' | 'active' | 'pending';
  timestamp: string;
  hash: string;
  icon: string;
}

interface TrustStripViewerProps {
  className?: string;
}

const TrustStripViewer = ({ className = '' }: TrustStripViewerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedStep, setSelectedStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const verificationSteps: VerificationStep[] = [
    {
      id: 'sensor',
      title: 'Sensor Data Capture',
      status: 'completed',
      timestamp: '2025-11-21 08:15:23 UTC',
      hash: '0x7a8f9e2b4c1d3e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f',
      icon: 'SignalIcon'
    },
    {
      id: 'envelope',
      title: 'Envelope Creation',
      status: 'completed',
      timestamp: '2025-11-21 08:15:45 UTC',
      hash: '0x3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c',
      icon: 'DocumentTextIcon'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Anchoring',
      status: 'completed',
      timestamp: '2025-11-21 08:16:12 UTC',
      hash: '0x5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e',
      icon: 'ShieldCheckIcon'
    },
    {
      id: 'verification',
      title: 'Third-Party Verification',
      status: 'completed',
      timestamp: '2025-11-21 08:17:34 UTC',
      hash: '0x7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a',
      icon: 'CheckBadgeIcon'
    },
    {
      id: 'certificate',
      title: 'Certificate Issuance',
      status: 'completed',
      timestamp: '2025-11-21 08:18:01 UTC',
      hash: '0x9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c',
      icon: 'DocumentCheckIcon'
    }
  ];

  const handleStepClick = (index: number) => {
    if (!isHydrated) return;
    setSelectedStep(index);
  };

  const toggleExpanded = () => {
    if (!isHydrated) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`bg-gradient-to-br from-card to-muted py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="EyeIcon" size={20} className="text-primary" />
            <span className="text-sm font-body-medium text-primary">Interactive TrustStrip Viewer</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Inspect Real Verification Data
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Explore the complete verification pipeline from sensor capture to certificate issuance. Every step is blockchain-anchored and independently verifiable.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
          <div className="space-y-8">
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                {verificationSteps.map((step, index) => (
                  <div key={step.id} className="flex-1 relative">
                    <button
                      onClick={() => handleStepClick(index)}
                      disabled={!isHydrated}
                      className={`w-full flex flex-col items-center transition-smooth ${
                        !isHydrated ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-smooth ${
                          isHydrated && selectedStep === index
                            ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                            : 'bg-muted text-text-secondary hover:bg-primary/10'
                        }`}
                      >
                        <Icon
                          name={step.icon as any}
                          size={24}
                          className="text-current"
                          variant={isHydrated && selectedStep === index ? 'solid' : 'outline'}
                        />
                      </div>
                      <span
                        className={`text-xs font-body-medium text-center ${
                          isHydrated && selectedStep === index ? 'text-primary' : 'text-text-secondary'
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                    {index < verificationSteps.length - 1 && (
                      <div className="absolute top-6 left-1/2 w-full h-0.5 bg-border -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-headline font-headline-medium text-foreground">
                  {isHydrated ? verificationSteps[selectedStep].title : 'Loading...'}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-success font-body-medium">Verified</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary font-body">Timestamp</div>
                  <div className="text-sm text-foreground font-body-medium font-mono">
                    {isHydrated ? verificationSteps[selectedStep].timestamp : 'Loading...'}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary font-body">Status</div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={16} className="text-success" variant="solid" />
                    <span className="text-sm text-foreground font-body-medium">Completed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-secondary font-body">Blockchain Hash</div>
                  <button
                    onClick={toggleExpanded}
                    disabled={!isHydrated}
                    className="text-sm text-primary hover:text-primary/80 font-body-medium transition-smooth flex items-center space-x-1"
                  >
                    <span>{isHydrated && isExpanded ? 'Hide' : 'Show'} Full Hash</span>
                    <Icon
                      name={isHydrated && isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                      size={16}
                      className="text-current"
                    />
                  </button>
                </div>
                <div className="bg-background rounded-lg p-3 font-mono text-xs text-foreground break-all">
                  {isHydrated
                    ? isExpanded
                      ? verificationSteps[selectedStep].hash
                      : `${verificationSteps[selectedStep].hash.slice(0, 20)}...${verificationSteps[selectedStep].hash.slice(-20)}`
                    : 'Loading...'}
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-4">
                <button className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-cta-bold rounded-lg hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-2">
                  <Icon name="MagnifyingGlassIcon" size={16} className="text-current" />
                  <span>View on Blockchain</span>
                </button>
                <button className="px-4 py-2.5 border border-border text-foreground text-sm font-cta rounded-lg hover:border-primary hover:bg-primary/5 transition-smooth flex items-center space-x-2">
                  <Icon name="ArrowDownTrayIcon" size={16} className="text-current" />
                  <span>Download Proof</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStripViewer;