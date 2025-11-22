'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MappingField {
  standard: string;
  field: string;
  ecoverazField: string;
  dataType: string;
  automation: 'full' | 'partial' | 'manual';
}

interface FrameworkMappingProps {
  className?: string;
}

const FrameworkMapping = ({ className = '' }: FrameworkMappingProps) => {
  const [selectedFramework, setSelectedFramework] = useState<string>('ghg');

  const frameworks = [
    { id: 'ghg', name: 'GHG Protocol', icon: 'CloudIcon' },
    { id: 'gri', name: 'GRI Standards', icon: 'GlobeAltIcon' },
    { id: 'esrs', name: 'ESRS', icon: 'DocumentCheckIcon' },
    { id: 'sec', name: 'SEC Climate', icon: 'BuildingLibraryIcon' }
  ];

  const mappingData: Record<string, MappingField[]> = {
    ghg: [
      {
        standard: 'Scope 1',
        field: 'Direct GHG Emissions',
        ecoverazField: 'emissions.scope1.total',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'Scope 2',
        field: 'Indirect Energy Emissions',
        ecoverazField: 'emissions.scope2.location_based',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'Scope 3',
        field: 'Value Chain Emissions',
        ecoverazField: 'emissions.scope3.categories',
        dataType: 'tCO2e',
        automation: 'partial'
      },
      {
        standard: 'Biogenic',
        field: 'Biogenic CO2 Emissions',
        ecoverazField: 'emissions.biogenic.total',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'Intensity',
        field: 'Emissions Intensity Ratio',
        ecoverazField: 'metrics.intensity.revenue',
        dataType: 'tCO2e/$M',
        automation: 'full'
      }
    ],
    gri: [
      {
        standard: 'GRI 305-1',
        field: 'Direct GHG Emissions',
        ecoverazField: 'gri.305_1.scope1',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'GRI 305-2',
        field: 'Energy Indirect Emissions',
        ecoverazField: 'gri.305_2.scope2',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'GRI 305-3',
        field: 'Other Indirect Emissions',
        ecoverazField: 'gri.305_3.scope3',
        dataType: 'tCO2e',
        automation: 'partial'
      },
      {
        standard: 'GRI 305-4',
        field: 'GHG Emissions Intensity',
        ecoverazField: 'gri.305_4.intensity',
        dataType: 'Ratio',
        automation: 'full'
      },
      {
        standard: 'GRI 305-5',
        field: 'Reduction of Emissions',
        ecoverazField: 'gri.305_5.reductions',
        dataType: 'tCO2e',
        automation: 'full'
      }
    ],
    esrs: [
      {
        standard: 'E1-1',
        field: 'Transition Plan',
        ecoverazField: 'esrs.e1_1.transition_plan',
        dataType: 'Narrative',
        automation: 'manual'
      },
      {
        standard: 'E1-4',
        field: 'GHG Emissions',
        ecoverazField: 'esrs.e1_4.total_emissions',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'E1-5',
        field: 'Energy Consumption',
        ecoverazField: 'esrs.e1_5.energy_mix',
        dataType: 'MWh',
        automation: 'full'
      },
      {
        standard: 'E1-6',
        field: 'Emissions Intensity',
        ecoverazField: 'esrs.e1_6.intensity_metrics',
        dataType: 'Multiple',
        automation: 'full'
      },
      {
        standard: 'E1-9',
        field: 'Anticipated Financial Effects',
        ecoverazField: 'esrs.e1_9.financial_impacts',
        dataType: 'Currency',
        automation: 'partial'
      }
    ],
    sec: [
      {
        standard: 'Item 1502(a)',
        field: 'Scope 1 & 2 Emissions',
        ecoverazField: 'sec.1502a.scope1_2',
        dataType: 'tCO2e',
        automation: 'full'
      },
      {
        standard: 'Item 1502(d)',
        field: 'GHG Intensity',
        ecoverazField: 'sec.1502d.intensity',
        dataType: 'Metric',
        automation: 'full'
      },
      {
        standard: 'Item 1503',
        field: 'Climate-Related Targets',
        ecoverazField: 'sec.1503.targets',
        dataType: 'Narrative',
        automation: 'partial'
      },
      {
        standard: 'Item 1504',
        field: 'Attestation Report',
        ecoverazField: 'sec.1504.attestation',
        dataType: 'Document',
        automation: 'manual'
      },
      {
        standard: 'Item 1506',
        field: 'Financial Statement Impacts',
        ecoverazField: 'sec.1506.financial_impacts',
        dataType: 'Currency',
        automation: 'partial'
      }
    ]
  };

  const getAutomationBadge = (automation: string) => {
    switch (automation) {
      case 'full':
        return { color: 'bg-success/10 text-success', label: 'Fully Automated' };
      case 'partial':
        return { color: 'bg-warning/10 text-warning', label: 'Partially Automated' };
      case 'manual':
        return { color: 'bg-muted text-muted-foreground', label: 'Manual Input' };
      default:
        return { color: 'bg-muted text-muted-foreground', label: 'Unknown' };
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Detailed Framework Field Mapping
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Explore how EcoVeraZ data fields align with specific requirements across major sustainability reporting frameworks.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {frameworks.map((framework) => (
            <button
              key={framework.id}
              onClick={() => setSelectedFramework(framework.id)}
              className={`px-6 py-3 rounded-lg font-body-medium transition-smooth flex items-center space-x-2 ${
                selectedFramework === framework.id
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-card text-text-primary border border-border hover:border-primary'
              }`}
            >
              <Icon name={framework.icon as any} size={20} className="text-current" />
              <span>{framework.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-headline font-headline-medium text-foreground">
                    Standard Field
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-headline font-headline-medium text-foreground">
                    Requirement
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-headline font-headline-medium text-foreground">
                    EcoVeraZ Field
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-headline font-headline-medium text-foreground">
                    Data Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-headline font-headline-medium text-foreground">
                    Automation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mappingData[selectedFramework]?.map((field, index) => {
                  const badge = getAutomationBadge(field.automation);
                  return (
                    <tr key={index} className="hover:bg-muted/30 transition-smooth">
                      <td className="px-6 py-4">
                        <span className="text-sm font-body-medium text-foreground">{field.standard}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-text-primary font-body">{field.field}</span>
                      </td>
                      <td className="px-6 py-4">
                        <code className="px-2 py-1 bg-muted rounded text-xs font-mono text-primary">
                          {field.ecoverazField}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-text-secondary font-body">{field.dataType}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-body-medium ${badge.color}`}>
                          {badge.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-2">
            <Icon name="ArrowDownTrayIcon" size={20} className="text-current" />
            <span>Download Complete Mapping (CSV)</span>
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-card text-foreground font-cta border border-border rounded-lg hover:border-primary hover:text-primary transition-smooth flex items-center justify-center space-x-2">
            <Icon name="DocumentTextIcon" size={20} className="text-current" />
            <span>View Technical Documentation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkMapping;