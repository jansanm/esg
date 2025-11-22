import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROIResults {
  timeSavings: number;
  costReduction: number;
  creditYieldImprovement: number;
  paybackMonths: number;
  annualSavings: number;
}

interface ROIResultsDisplayProps {
  results: ROIResults | null;
}

const ROIResultsDisplay = ({ results }: ROIResultsDisplayProps) => {
  if (!results) {
    return (
      <div className="bg-muted/30 border border-border rounded-xl p-8 text-center">
        <Icon name="ChartBarIcon" size={48} className="text-text-secondary mx-auto mb-4" />
        <p className="text-sm font-body text-text-secondary">
          Complete the calculator form to see your projected ROI
        </p>
      </div>
    );
  }

  const metrics = [
    {
      icon: 'ClockIcon',
      label: 'Time Savings per Audit',
      value: `${results.timeSavings} hours`,
      description: '65% reduction in manual verification time',
      color: 'text-brand-primary',
      bgColor: 'bg-brand-primary/10',
    },
    {
      icon: 'CurrencyDollarIcon',
      label: 'Cost Reduction per Audit',
      value: `$${results.costReduction.toLocaleString()}`,
      description: '45% decrease in verification expenses',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: 'ArrowTrendingUpIcon',
      label: 'Credit Yield Improvement',
      value: `${results.creditYieldImprovement.toLocaleString()} tCO2e`,
      description: '18% increase through verified data',
      color: 'text-brand-secondary',
      bgColor: 'bg-brand-secondary/10',
    },
    {
      icon: 'CalendarIcon',
      label: 'Payback Period',
      value: `${results.paybackMonths} months`,
      description: 'Time to recover initial investment',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary/5 to-brand-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="SparklesIcon" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-headline font-headline-bold text-foreground">
              Projected Annual Savings
            </h3>
            <p className="text-sm font-body text-text-secondary">
              Total value delivered by EcoVeraZ
            </p>
          </div>
        </div>
        <div className="text-4xl font-headline font-headline-bold text-primary">
          ${results.annualSavings.toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-smooth"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={metric.icon as any} size={24} className={metric.color} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-body text-text-secondary mb-1">
                  {metric.label}
                </p>
                <p className="text-2xl font-headline font-headline-bold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className="text-xs font-body text-text-secondary">
                  {metric.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h4 className="text-sm font-headline font-headline-bold text-foreground mb-4">
          ROI Breakdown
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-body text-text-secondary">
              Audit Time Reduction
            </span>
            <span className="text-sm font-body-medium text-foreground">65%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-body text-text-secondary">
              Cost Savings
            </span>
            <span className="text-sm font-body-medium text-foreground">45%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-body text-text-secondary">
              Credit Yield Increase
            </span>
            <span className="text-sm font-body-medium text-foreground">18%</span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-sm font-body-medium text-foreground">
              Total Annual Value
            </span>
            <span className="text-lg font-headline font-headline-bold text-primary">
              ${results.annualSavings.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIResultsDisplay;