import Icon from '@/components/ui/AppIcon';

interface ArchitectureLayer {
  id: number;
  title: string;
  icon: string;
  description: string;
  components: string[];
  color: string;
}

interface TechnicalArchitectureProps {
  className?: string;
}

const TechnicalArchitecture = ({ className = '' }: TechnicalArchitectureProps) => {
  const layers: ArchitectureLayer[] = [
    {
      id: 1,
      title: 'Data Collection Layer',
      icon: 'CircleStackIcon',
      description: 'IoT sensors and edge devices with hardware-level security',
      components: ['S1 Device Signatures', 'Multi-Protocol Support', 'Edge Computing', 'Real-Time Streaming'],
      color: 'bg-primary/10 border-primary/20 text-primary'
    },
    {
      id: 2,
      title: 'Validation Layer',
      icon: 'ShieldCheckIcon',
      description: 'AI-powered data validation and anomaly detection',
      components: ['ML Anomaly Detection', 'Cross-Reference Validation', 'Quality Scoring', 'Automated Flagging'],
      color: 'bg-secondary/10 border-secondary/20 text-secondary'
    },
    {
      id: 3,
      title: 'Anchoring Layer',
      icon: 'CubeTransparentIcon',
      description: 'Blockchain integration and cryptographic proof generation',
      components: ['Merkle Tree Generation', 'Multi-Chain Support', 'Proof Receipts', 'Independent Verification'],
      color: 'bg-accent/10 border-accent/20 text-accent'
    },
    {
      id: 4,
      title: 'Certification Layer',
      icon: 'DocumentCheckIcon',
      description: 'Automated compliance checking and badge issuance',
      components: ['Framework Mapping', 'Credit Calculation', 'Badge Generation', 'Audit Trail Export'],
      color: 'bg-success/10 border-success/20 text-success'
    }
  ];

  return (
    <section className={`bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Technical Architecture
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Four-layer architecture ensuring data integrity from collection to certification
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.id}
              className={`relative bg-card border-2 rounded-2xl p-8 hover:shadow-hover transition-smooth ${layer.color}`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${layer.color}`}>
                  <Icon name={layer.icon as any} size={24} className="text-current" variant="solid" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-body-medium text-text-secondary">Layer {layer.id}</span>
                  </div>
                  <h3 className="text-xl font-headline font-headline-bold text-foreground mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-body">
                    {layer.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {layer.components.map((component, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 bg-background rounded-lg"
                  >
                    <Icon name="CheckIcon" size={14} className="text-success flex-shrink-0" />
                    <span className="text-xs font-body text-text-primary">{component}</span>
                  </div>
                ))}
              </div>

              {index < layers.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="ArrowRightIcon" size={16} className="text-primary-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth inline-flex items-center space-x-2">
            <span>Download Architecture Whitepaper</span>
            <Icon name="ArrowDownTrayIcon" size={20} className="text-current" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;