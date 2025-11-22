import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: number;
  title: string;
  type: string;
  icon: string;
  description: string;
  size: string;
  downloadUrl: string;
}

interface TechnicalResourcesProps {
  className?: string;
}

const TechnicalResources = ({ className = '' }: TechnicalResourcesProps) => {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Platform Architecture Whitepaper',
      type: 'PDF Document',
      icon: 'DocumentTextIcon',
      description: 'Comprehensive technical overview of the four-layer verification architecture',
      size: '2.4 MB',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'API Reference Documentation',
      type: 'Interactive Docs',
      icon: 'CodeBracketIcon',
      description: 'Complete REST API documentation with code examples and authentication guides',
      size: 'Online',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Integration Playbook',
      type: 'PDF Guide',
      icon: 'BookOpenIcon',
      description: 'Step-by-step implementation guide for enterprise system integration',
      size: '1.8 MB',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Blockchain Anchoring Methodology',
      type: 'Technical Paper',
      icon: 'CubeTransparentIcon',
      description: 'Detailed explanation of Merkle proof generation and multi-chain anchoring',
      size: '3.1 MB',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Security & Compliance Overview',
      type: 'PDF Document',
      icon: 'ShieldCheckIcon',
      description: 'SOC 2 Type II roadmap, ISO 27001 compliance, and data governance framework',
      size: '1.5 MB',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Sample Data Envelopes',
      type: 'JSON Files',
      icon: 'DocumentDuplicateIcon',
      description: 'Real-world examples of signed data envelopes and anchor receipts',
      size: '245 KB',
      downloadUrl: '#'
    }
  ];

  return (
    <section className={`bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Technical Resources
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Comprehensive documentation and implementation guides for technical teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-hover transition-smooth group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon name={resource.icon as any} size={24} className="text-primary" />
                </div>
                <span className="text-xs font-body-medium text-text-secondary px-2 py-1 bg-muted rounded">
                  {resource.type}
                </span>
              </div>

              <h3 className="text-lg font-headline font-headline-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                {resource.title}
              </h3>

              <p className="text-sm text-text-secondary font-body mb-4">
                {resource.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-text-secondary font-body">{resource.size}</span>
                <button className="flex items-center space-x-2 text-primary text-sm font-cta hover:translate-x-1 transition-smooth">
                  <span>Download</span>
                  <Icon name="ArrowDownTrayIcon" size={16} className="text-current" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-8 text-center">
          <Icon name="AcademicCapIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-headline font-headline-bold text-foreground mb-3">
            Need Technical Support?
          </h3>
          <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
            Our technical team provides comprehensive onboarding support, including architecture reviews, integration planning, and hands-on implementation assistance.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth inline-flex items-center space-x-2">
            <span>Schedule Technical Consultation</span>
            <Icon name="CalendarIcon" size={20} className="text-current" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalResources;