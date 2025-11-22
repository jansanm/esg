'use client';

import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import ROICalculatorForm from './ROICalculatorForm';
import ROIResultsDisplay from './ROIResultsDisplay';
import ComparisonTable from './ComparisonTable';
import Icon from '@/components/ui/AppIcon';

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: { name: string; included: boolean }[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

interface ROIResults {
  timeSavings: number;
  costReduction: number;
  creditYieldImprovement: number;
  paybackMonths: number;
  annualSavings: number;
}

const PricingInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [roiResults, setRoiResults] = useState<ROIResults | null>(null);
  const [activeTab, setActiveTab] = useState<'pricing' | 'calculator'>('pricing');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Pilot Program',
      tagline: 'Proof-of-Concept Deployment',
      price: '$2,500',
      billingPeriod: '/month',
      description: 'Perfect for initial verification testing',
      features: [
        { name: 'Up to 5 verification sites', included: true },
        { name: '100 IoT sensor connections', included: true },
        { name: 'Basic blockchain anchoring', included: true },
        { name: 'Monthly compliance reports', included: true },
        { name: 'Email support (48hr SLA)', included: true },
        { name: 'GHG Protocol alignment', included: true },
        { name: 'Standard API access', included: true },
        { name: 'Advanced analytics dashboard', included: false },
        { name: 'Custom framework mapping', included: false },
        { name: 'Dedicated account manager', included: false },
      ],
      cta: 'Start Pilot Program',
      highlighted: false,
    },
    {
      name: 'Enterprise',
      tagline: 'Full-Scale Verification',
      price: '$8,500',
      billingPeriod: '/month',
      description: 'Comprehensive ESG verification platform',
      features: [
        { name: 'Unlimited verification sites', included: true },
        { name: 'Unlimited IoT sensor connections', included: true },
        { name: 'Advanced blockchain anchoring', included: true },
        { name: 'Real-time compliance monitoring', included: true },
        { name: 'Priority support (4hr SLA)', included: true },
        { name: 'All framework alignments', included: true },
        { name: 'Full API & webhook access', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Custom framework mapping', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
      cta: 'Request Enterprise Demo',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Global Scale',
      tagline: 'Multi-Region Deployment',
      price: 'Custom',
      billingPeriod: 'pricing',
      description: 'Tailored for multinational operations',
      features: [
        { name: 'Global site deployment', included: true },
        { name: 'Enterprise IoT infrastructure', included: true },
        { name: 'Multi-chain anchoring options', included: true },
        { name: 'White-label capabilities', included: true },
        { name: 'Dedicated support team (1hr SLA)', included: true },
        { name: 'Custom framework development', included: true },
        { name: 'Advanced API customization', included: true },
        { name: 'Predictive analytics & AI insights', included: true },
        { name: 'Regulatory change monitoring', included: true },
        { name: 'Executive advisory services', included: true },
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const handleSelectPlan = (tierName: string) => {
    setSelectedPlan(tierName);
  };

  const handleCalculateROI = (results: ROIResults) => {
    setRoiResults(results);
  };

  if (!isHydrated) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-muted rounded w-1/3 mx-auto"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-muted rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="text-lg font-body text-text-secondary max-w-3xl mx-auto">
            From proof-of-concept pilots to global enterprise deployments, choose the plan that matches your verification needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>

        {selectedPlan && (
          <div className="bg-success/10 border border-success/20 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Icon name="CheckCircleIcon" size={24} className="text-success" />
              <p className="text-lg font-headline font-headline-bold text-foreground">
                {selectedPlan} Plan Selected
              </p>
            </div>
            <p className="text-sm font-body text-text-secondary">
              Our team will contact you within 24 hours to discuss your verification requirements
            </p>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-6 py-3 rounded-lg font-cta-bold text-sm transition-smooth ${
              activeTab === 'pricing' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            Pricing Comparison
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-6 py-3 rounded-lg font-cta-bold text-sm transition-smooth ${
              activeTab === 'calculator' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            ROI Calculator
          </button>
        </div>

        {activeTab === 'pricing' ? (
          <ComparisonTable />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ROICalculatorForm onCalculate={handleCalculateROI} />
            <ROIResultsDisplay results={roiResults} />
          </div>
        )}
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-brand-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-headline font-headline-bold text-foreground mb-4">
            Risk-Free Pilot Program
          </h3>
          <p className="text-lg font-body text-text-secondary mb-6">
            Start with a 90-day proof-of-concept deployment. If EcoVeraZ doesn't deliver measurable ROI, we'll refund your investment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-cta-bold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 bg-card text-foreground border border-border rounded-lg font-cta-bold text-sm hover:bg-muted transition-smooth">
              Download Pricing Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingInteractive;