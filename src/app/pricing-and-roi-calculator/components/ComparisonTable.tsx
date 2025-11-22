import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    manual: string;
    ecoveraz: string;
  }[];
}

const ComparisonTable = () => {
  const comparisonData: ComparisonFeature[] = [
    {
      category: 'Verification Process',
      features: [
        {
          name: 'Data Collection',
          manual: 'Manual entry, spreadsheets',
          ecoveraz: 'Automated IoT sensor integration',
        },
        {
          name: 'Verification Time',
          manual: '4-6 weeks per audit',
          ecoveraz: 'Real-time continuous verification',
        },
        {
          name: 'Audit Trail',
          manual: 'Paper-based documentation',
          ecoveraz: 'Blockchain-anchored immutable records',
        },
      ],
    },
    {
      category: 'Cost Structure',
      features: [
        {
          name: 'Per Audit Cost',
          manual: '$50,000 - $150,000',
          ecoveraz: '$12,000 - $35,000',
        },
        {
          name: 'Staff Hours',
          manual: '200-300 hours',
          ecoveraz: '70-100 hours',
        },
        {
          name: 'Third-Party Fees',
          manual: '$15,000 - $40,000',
          ecoveraz: 'Included in platform',
        },
      ],
    },
    {
      category: 'Compliance & Risk',
      features: [
        {
          name: 'Framework Alignment',
          manual: 'Manual mapping required',
          ecoveraz: 'Native GHG, GRI, ESRS, SEC support',
        },
        {
          name: 'Error Rate',
          manual: '8-12% data discrepancies',
          ecoveraz: '<1% with automated validation',
        },
        {
          name: 'Audit Readiness',
          manual: '2-3 weeks preparation',
          ecoveraz: 'Instant export generation',
        },
      ],
    },
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-brand-primary/10 px-6 py-4 border-b border-border">
        <h3 className="text-lg font-headline font-headline-bold text-foreground">
          Manual Process vs. EcoVeraZ Platform
        </h3>
        <p className="text-sm font-body text-text-secondary mt-1">
          Comprehensive comparison of verification approaches
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-6 py-4 text-left text-sm font-body-medium text-foreground">
                Feature
              </th>
              <th className="px-6 py-4 text-left text-sm font-body-medium text-foreground">
                Manual Process
              </th>
              <th className="px-6 py-4 text-left text-sm font-body-medium text-foreground">
                EcoVeraZ Platform
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <tr className="bg-muted/30">
                  <td
                    colSpan={3}
                    className="px-6 py-3 text-sm font-headline font-headline-bold text-foreground"
                  >
                    {category.category}
                  </td>
                </tr>
                {category.features.map((feature, featureIndex) => (
                  <tr
                    key={featureIndex}
                    className="border-b border-border hover:bg-muted/20 transition-smooth"
                  >
                    <td className="px-6 py-4 text-sm font-body text-foreground">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-body text-text-secondary">
                      <div className="flex items-start gap-2">
                        <Icon
                          name="XMarkIcon"
                          size={16}
                          className="text-error flex-shrink-0 mt-0.5"
                        />
                        <span>{feature.manual}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-body text-foreground">
                      <div className="flex items-start gap-2">
                        <Icon
                          name="CheckIcon"
                          size={16}
                          className="text-success flex-shrink-0 mt-0.5"
                        />
                        <span>{feature.ecoveraz}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;