'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DemoStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
  timestamp: string;
  data: string;
}

interface InteractiveDemoProps {
  className?: string;
}

const InteractiveDemo = ({ className = '' }: InteractiveDemoProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: 'Sensor Data Collection',
      description: 'IoT device captures CO2 emissions reading',
      status: currentStep >= 1 ? 'completed' : 'pending',
      timestamp: '2025-11-21 16:34:29',
      data: '{"device_id": "S1-7829", "reading": 245.7, "unit": "kg CO2"}'
    },
    {
      id: 2,
      title: 'Cryptographic Signing',
      description: 'Hardware signature applied to data envelope',
      status: currentStep >= 2 ? 'completed' : currentStep === 1 ? 'active' : 'pending',
      timestamp: '2025-11-21 16:34:30',
      data: '{"signature": "0x8f3a2b...", "algorithm": "ECDSA-P256"}'
    },
    {
      id: 3,
      title: 'AI Validation',
      description: 'Anomaly detection and quality scoring',
      status: currentStep >= 3 ? 'completed' : currentStep === 2 ? 'active' : 'pending',
      timestamp: '2025-11-21 16:34:32',
      data: '{"quality_score": 98.5, "anomaly_flag": false}'
    },
    {
      id: 4,
      title: 'Blockchain Anchoring',
      description: 'Merkle proof generated and anchored',
      status: currentStep >= 4 ? 'completed' : currentStep === 3 ? 'active' : 'pending',
      timestamp: '2025-11-21 16:34:35',
      data: '{"merkle_root": "0x4c9f1e...", "block": 18234567}'
    },
    {
      id: 5,
      title: 'Certificate Issuance',
      description: 'Carbon credit badge generated',
      status: currentStep >= 5 ? 'completed' : currentStep === 4 ? 'active' : 'pending',
      timestamp: '2025-11-21 16:34:38',
      data: '{"certificate_id": "CC-2025-11-7829", "credits": 0.25}'
    }
  ];

  const handlePlayDemo = () => {
    setIsPlaying(true);
    setCurrentStep(1);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 5) {
          clearInterval(interval);
          setIsPlaying(false);
          return 5;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const handleResetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(1);
  };

  return (
    <section className={`bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Interactive Platform Demo
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Watch real-time data flow from sensor to certificate in our live demonstration
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
          <div className="bg-muted border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <span className="text-sm font-body-medium text-text-primary">Live Demo Environment</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePlayDemo}
                disabled={isPlaying}
                className={`px-4 py-2 rounded-lg font-cta flex items-center space-x-2 transition-smooth ${
                  isPlaying
                    ? 'bg-muted text-text-secondary cursor-not-allowed' :'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                <Icon name="PlayIcon" size={16} className="text-current" variant="solid" />
                <span>{isPlaying ? 'Running...' : 'Start Demo'}</span>
              </button>
              <button
                onClick={handleResetDemo}
                className="px-4 py-2 bg-card border border-border text-foreground font-cta rounded-lg hover:border-primary hover:text-primary transition-smooth"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-6">
              {demoSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className={`flex items-start space-x-4 p-6 rounded-xl border-2 transition-smooth ${
                    step.status === 'completed'
                      ? 'bg-success/5 border-success/20'
                      : step.status === 'active' ?'bg-primary/5 border-primary animate-pulse' :'bg-muted border-border'
                  }`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      step.status === 'completed'
                        ? 'bg-success text-success-foreground'
                        : step.status === 'active' ?'bg-primary text-primary-foreground' :'bg-muted text-text-secondary'
                    }`}>
                      {step.status === 'completed' ? (
                        <Icon name="CheckIcon" size={20} className="text-current" />
                      ) : (
                        <span className="text-sm font-headline-bold">{step.id}</span>
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-headline font-headline-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="text-xs font-body text-text-secondary">{step.timestamp}</span>
                      </div>
                      <p className="text-sm text-text-secondary font-body">{step.description}</p>
                      
                      {step.status !== 'pending' && (
                        <div className="mt-3 p-3 bg-background rounded-lg border border-border">
                          <code className="text-xs font-mono text-text-primary">{step.data}</code>
                        </div>
                      )}
                    </div>
                  </div>

                  {index < demoSteps.length - 1 && (
                    <div className={`absolute left-[29px] top-[76px] w-0.5 h-6 ${
                      step.status === 'completed' ? 'bg-success' : 'bg-border'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary font-body mb-4">
            This demonstration uses sample data. Real implementations process millions of data points daily.
          </p>
          <button className="px-6 py-3 bg-card border border-border text-foreground font-cta rounded-lg hover:border-primary hover:text-primary transition-smooth inline-flex items-center space-x-2">
            <span>Request Full Platform Access</span>
            <Icon name="ArrowRightIcon" size={16} className="text-current" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;