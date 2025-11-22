import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: Feature[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

interface PricingCardProps {
  tier: PricingTier;
  onSelectPlan: (tierName: string) => void;
}

const PricingCard = ({ tier, onSelectPlan }: PricingCardProps) => {
  return (
    <div
      className={`relative bg-card border rounded-xl p-8 transition-smooth hover:shadow-hover ${
        tier.highlighted
          ? 'border-primary shadow-card scale-105'
          : 'border-border'
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary to-brand-primary text-primary-foreground text-xs font-cta-bold rounded-full shadow-md">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-headline font-headline-bold text-foreground mb-2">
          {tier.name}
        </h3>
        <p className="text-sm font-body text-text-secondary mb-4">
          {tier.tagline}
        </p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-headline font-headline-bold text-foreground">
            {tier.price}
          </span>
          <span className="text-sm font-body text-text-secondary">
            {tier.billingPeriod}
          </span>
        </div>
        <p className="text-xs font-body text-text-secondary mt-2">
          {tier.description}
        </p>
      </div>

      <button
        onClick={() => onSelectPlan(tier.name)}
        className={`w-full py-3 px-6 rounded-lg font-cta-bold text-sm transition-smooth mb-6 ${
          tier.highlighted
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover'
            : 'bg-muted text-foreground hover:bg-muted/80'
        }`}
      >
        {tier.cta}
      </button>

      <div className="space-y-3">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                feature.included
                  ? 'bg-success/10' :'bg-muted'
              }`}
            >
              <Icon
                name={feature.included ? 'CheckIcon' : 'XMarkIcon'}
                size={14}
                className={
                  feature.included ? 'text-success' : 'text-text-secondary'
                }
              />
            </div>
            <span
              className={`text-sm font-body ${
                feature.included
                  ? 'text-foreground'
                  : 'text-text-secondary line-through'
              }`}
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;