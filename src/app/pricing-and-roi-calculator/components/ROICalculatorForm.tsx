'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  auditFrequency: number;
  manualCosts: number;
  carbonVolume: number;
  complianceHours: number;
  industryType: string;
}

interface ROIResults {
  timeSavings: number;
  costReduction: number;
  creditYieldImprovement: number;
  paybackMonths: number;
  annualSavings: number;
}

interface ROICalculatorFormProps {
  onCalculate: (results: ROIResults) => void;
}

const ROICalculatorForm = ({ onCalculate }: ROICalculatorFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    auditFrequency: 4,
    manualCosts: 50000,
    carbonVolume: 10000,
    complianceHours: 200,
    industryType: 'manufacturing',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateROI = () => {
    const industryMultipliers: Record<string, number> = {
      manufacturing: 1.2,
      mining: 1.5,
      pharma: 1.3,
      utilities: 1.4,
      realestate: 1.1,
    };

    const multiplier = industryMultipliers[inputs.industryType] || 1.0;

    const timeSavings = Math.round(inputs.complianceHours * 0.65 * multiplier);
    const costReduction = Math.round((inputs.manualCosts * 0.45 * multiplier) / 100) * 100;
    const creditYieldImprovement = Math.round(inputs.carbonVolume * 0.18 * multiplier);
    const annualSavings = costReduction * inputs.auditFrequency;
    const paybackMonths = Math.round((75000 / annualSavings) * 12);

    const results: ROIResults = {
      timeSavings,
      costReduction,
      creditYieldImprovement,
      paybackMonths,
      annualSavings,
    };

    onCalculate(results);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-6 bg-muted rounded w-1/3"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={20} className="text-primary" />
        </div>
        <h3 className="text-xl font-headline font-headline-bold text-foreground">
          Calculate Your ROI
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-body-medium text-foreground mb-2">
            Annual Audit Frequency
          </label>
          <input
            type="number"
            value={inputs.auditFrequency}
            onChange={(e) => handleInputChange('auditFrequency', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            min="1"
            max="12"
          />
          <p className="text-xs font-body text-text-secondary mt-1">
            Number of compliance audits per year
          </p>
        </div>

        <div>
          <label className="block text-sm font-body-medium text-foreground mb-2">
            Manual Verification Costs (USD)
          </label>
          <input
            type="number"
            value={inputs.manualCosts}
            onChange={(e) => handleInputChange('manualCosts', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            min="0"
            step="1000"
          />
          <p className="text-xs font-body text-text-secondary mt-1">
            Current cost per audit cycle
          </p>
        </div>

        <div>
          <label className="block text-sm font-body-medium text-foreground mb-2">
            Annual Carbon Credit Volume (tCO2e)
          </label>
          <input
            type="number"
            value={inputs.carbonVolume}
            onChange={(e) => handleInputChange('carbonVolume', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            min="0"
            step="100"
          />
          <p className="text-xs font-body text-text-secondary mt-1">
            Total carbon credits generated annually
          </p>
        </div>

        <div>
          <label className="block text-sm font-body-medium text-foreground mb-2">
            Compliance Hours per Audit
          </label>
          <input
            type="number"
            value={inputs.complianceHours}
            onChange={(e) => handleInputChange('complianceHours', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            min="0"
            step="10"
          />
          <p className="text-xs font-body text-text-secondary mt-1">
            Staff hours spent on manual verification
          </p>
        </div>

        <div>
          <label className="block text-sm font-body-medium text-foreground mb-2">
            Industry Type
          </label>
          <select
            value={inputs.industryType}
            onChange={(e) => handleInputChange('industryType', e.target.value)}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            <option value="manufacturing">Manufacturing</option>
            <option value="mining">Mining & Extraction</option>
            <option value="pharma">Pharmaceutical</option>
            <option value="utilities">Utilities & Energy</option>
            <option value="realestate">Real Estate</option>
          </select>
          <p className="text-xs font-body text-text-secondary mt-1">
            Industry-specific ROI multipliers applied
          </p>
        </div>

        <button
          onClick={calculateROI}
          className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-cta-bold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth"
        >
          Calculate ROI
        </button>
      </div>
    </div>
  );
};

export default ROICalculatorForm;