import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  id: number;
  name: string;
  category: string;
  logo: string;
  logoAlt: string;
  description: string;
}

interface IntegrationPartnersProps {
  className?: string;
}

const IntegrationPartners = ({ className = '' }: IntegrationPartnersProps) => {
  const partners: Partner[] = [
  {
    id: 1,
    name: 'AWS IoT Core',
    category: 'Cloud Infrastructure',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_150787c71-1763743354913.png",
    logoAlt: 'AWS cloud services logo with orange and white color scheme on dark background',
    description: 'Seamless integration with AWS IoT device management and data streaming'
  },
  {
    id: 2,
    name: 'Ethereum',
    category: 'Blockchain Network',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_133d2f5ee-1763743354267.png",
    logoAlt: 'Ethereum cryptocurrency logo showing purple diamond symbol on digital background',
    description: 'Primary blockchain for proof anchoring and smart contract execution'
  },
  {
    id: 3,
    name: 'SAP Sustainability',
    category: 'ERP Integration',
    logo: "https://images.unsplash.com/photo-1565174967408-1ada6cf19bd5",
    logoAlt: 'SAP enterprise software logo in blue on modern office building glass facade',
    description: 'Direct integration with SAP sustainability management modules'
  },
  {
    id: 4,
    name: 'Siemens MindSphere',
    category: 'Industrial IoT',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_139de1ea8-1763743365799.png",
    logoAlt: 'Siemens industrial automation equipment with blue and white branding in factory setting',
    description: 'Native support for Siemens industrial sensor networks'
  },
  {
    id: 5,
    name: 'Microsoft Azure',
    category: 'Cloud Platform',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12cacf708-1763743356271.png",
    logoAlt: 'Microsoft Azure cloud platform logo with blue gradient on technology background',
    description: 'Azure Digital Twins and IoT Hub integration for enterprise deployments'
  },
  {
    id: 6,
    name: 'Polygon Network',
    category: 'Blockchain Network',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1157962c5-1763743355252.png",
    logoAlt: 'Polygon blockchain network logo showing purple geometric pattern on digital display',
    description: 'Cost-effective blockchain anchoring with high transaction throughput'
  }];


  return (
    <section className={`bg-card ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Pre-built connectors for leading cloud platforms, blockchain networks, and enterprise systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) =>
          <div
            key={partner.id}
            className="bg-background border border-border rounded-xl p-6 hover:border-primary hover:shadow-hover transition-smooth group">

              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-muted">
                  <AppImage
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-headline font-headline-bold text-foreground mb-1 group-hover:text-primary transition-smooth">
                    {partner.name}
                  </h3>
                  <span className="text-xs font-body-medium text-text-secondary px-2 py-1 bg-muted rounded">
                    {partner.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-text-secondary font-body mb-4">
                {partner.description}
              </p>
              <div className="flex items-center space-x-2 text-primary text-sm font-cta group-hover:translate-x-1 transition-smooth">
                <span>View Integration</span>
                <Icon name="ArrowRightIcon" size={14} className="text-current" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-text-secondary font-body">
            Need a custom integration? Our API-first architecture supports any system.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth inline-flex items-center space-x-2">
            <span>Explore API Documentation</span>
            <Icon name="CodeBracketIcon" size={20} className="text-current" />
          </button>
        </div>
      </div>
    </section>);

};

export default IntegrationPartners;