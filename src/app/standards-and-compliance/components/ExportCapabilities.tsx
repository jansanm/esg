'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ExportFormat {
  id: string;
  name: string;
  description: string;
  icon: string;
  formats: string[];
  useCases: string[];
}

interface ExportCapabilitiesProps {
  className?: string;
}

const ExportCapabilities = ({ className = '' }: ExportCapabilitiesProps) => {
  const [selectedExport, setSelectedExport] = useState<string>('audit');

  const exportFormats: ExportFormat[] = [
    {
      id: 'audit',
      name: 'Audit Bundle',
      description: 'Complete audit-ready package with blockchain anchors, sensor data, and verification trails.',
      icon: 'FolderOpenIcon',
      formats: ['PDF', 'ZIP', 'JSON'],
      useCases: [
        'Third-party auditor submissions',
        'Regulatory compliance reporting',
        'Internal audit documentation',
        'Investor due diligence packages'
      ]
    },
    {
      id: 'framework',
      name: 'Framework Reports',
      description: 'Pre-formatted reports aligned with specific sustainability reporting standards.',
      icon: 'DocumentChartBarIcon',
      formats: ['PDF', 'XLSX', 'XBRL'],
      useCases: [
        'GHG Protocol annual reports',
        'GRI sustainability disclosures',
        'ESRS compliance submissions',
        'SEC climate disclosure filings'
      ]
    },
    {
      id: 'data',
      name: 'Raw Data Export',
      description: 'Structured data exports for custom analysis and integration with enterprise systems.',
      icon: 'TableCellsIcon',
      formats: ['CSV', 'JSON', 'XML', 'Parquet'],
      useCases: [
        'ERP system integration',
        'Custom analytics workflows',
        'Data warehouse ingestion',
        'Machine Abouting model training'
      ]
    },
    {
      id: 'certificates',
      name: 'Certificates & Badges',
      description: 'Verified certificates with TrustStrip integration for public disclosure.',
      icon: 'ShieldCheckIcon',
      formats: ['PDF', 'PNG', 'SVG', 'HTML'],
      useCases: [
        'Website sustainability badges',
        'Marketing collateral',
        'Investor presentations',
        'Public ESG disclosures'
      ]
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Multi-Format Export Capabilities
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Export verified data in multiple formats optimized for audits, compliance reporting, and system integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {exportFormats.map((format) => (
            <button
              key={format.id}
              onClick={() => setSelectedExport(format.id)}
              className={`p-4 rounded-lg border-2 transition-smooth text-left ${
                selectedExport === format.id
                  ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
              }`}
            >
              <Icon
                name={format.icon as any}
                size={24}
                className={selectedExport === format.id ? 'text-primary' : 'text-text-secondary'}
              />
              <h3 className="text-sm font-headline font-headline-medium text-foreground mt-3 mb-1">
                {format.name}
              </h3>
              <p className="text-xs text-text-secondary font-body line-clamp-2">{format.description}</p>
            </button>
          ))}
        </div>

        {exportFormats
          .filter((format) => format.id === selectedExport)
          .map((format) => (
            <div key={format.id} className="bg-card border border-border rounded-xl p-8 lg:p-10">
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name={format.icon as any} size={32} className="text-white" variant="solid" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-headline font-headline-bold text-foreground mb-2">
                    {format.name}
                  </h3>
                  <p className="text-base text-text-primary font-body mb-4">{format.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {format.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-3 py-1 bg-muted text-text-primary text-xs font-body-medium rounded-full"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-headline font-headline-medium text-foreground mb-4">
                  Common Use Cases
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {format.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                      <span className="text-sm text-text-primary font-body">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-2">
                  <Icon name="ArrowDownTrayIcon" size={20} className="text-current" />
                  <span>Download Sample Export</span>
                </button>
                <button className="flex-1 px-6 py-3 bg-card text-foreground font-cta border border-border rounded-lg hover:border-primary hover:text-primary transition-smooth flex items-center justify-center space-x-2">
                  <Icon name="DocumentTextIcon" size={20} className="text-current" />
                  <span>View Technical Specs</span>
                </button>
              </div>
            </div>
          ))}

        <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="CodeBracketIcon" size={24} className="text-white" variant="solid" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
                  Custom Export API
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  Build custom export workflows with our RESTful API. Access real-time data, automate report generation, and integrate with your existing systems.
                </p>
              </div>
            </div>
            <button className="w-full lg:w-auto px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-2 whitespace-nowrap">
              <span>View API Documentation</span>
              <Icon name="ArrowRightIcon" size={20} className="text-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportCapabilities;