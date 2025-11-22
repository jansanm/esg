import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  id: string;
  name: string;
  status: 'achieved' | 'in-progress' | 'planned';
  description: string;
  completionDate?: string;
  targetDate?: string;
  icon: string;
  badge: string;
}

interface SecurityCertificationsProps {
  className?: string;
}

const SecurityCertifications = ({ className = '' }: SecurityCertificationsProps) => {
  const certifications: Certification[] = [
  {
    id: 'soc2-type1',
    name: 'SOC 2 Type I',
    status: 'achieved',
    description: 'Independent audit of security controls and operational effectiveness at a point in time.',
    completionDate: 'November 2024',
    icon: 'ShieldCheckIcon',
    badge: "https://images.unsplash.com/photo-1708794758085-b733c022008c"
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    status: 'in-progress',
    description: 'International standard for information security management systems (ISMS) implementation.',
    targetDate: 'Q2 2025',
    icon: 'LockClosedIcon',
    badge: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873"
  },
  {
    id: 'soc2-type2',
    name: 'SOC 2 Type II',
    status: 'in-progress',
    description: 'Continuous monitoring audit demonstrating sustained security control effectiveness over time.',
    targetDate: 'Q1 2025',
    icon: 'ClockIcon',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0ce5715-1763743353471.png"
  },
  {
    id: 'gdpr',
    name: 'GDPR Compliance',
    status: 'achieved',
    description: 'Full compliance with European Union General Data Protection Regulation requirements.',
    completionDate: 'September 2024',
    icon: 'GlobeEuropeAfricaIcon',
    badge: "https://images.unsplash.com/photo-1707185792575-5c4afd1ff186"
  },
  {
    id: 'fedramp',
    name: 'FedRAMP',
    status: 'planned',
    description: 'Federal Risk and Authorization Management Program for U.S. government cloud services.',
    targetDate: 'Q3 2025',
    icon: 'BuildingLibraryIcon',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_16171e8cb-1763743352900.png"
  },
  {
    id: 'hipaa',
    name: 'HIPAA Ready',
    status: 'planned',
    description: 'Health Insurance Portability and Accountability Act compliance for healthcare sector.',
    targetDate: 'Q4 2025',
    icon: 'HeartIcon',
    badge: "https://images.unsplash.com/photo-1722235623546-4059fd83b47b"
  }];


  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'achieved':
        return { color: 'bg-success/10 text-success border-success/20', label: 'Achieved', icon: 'CheckCircleIcon' };
      case 'in-progress':
        return { color: 'bg-warning/10 text-warning border-warning/20', label: 'In Progress', icon: 'ArrowPathIcon' };
      case 'planned':
        return { color: 'bg-muted text-muted-foreground border-border', label: 'Planned', icon: 'CalendarIcon' };
      default:
        return { color: 'bg-muted text-muted-foreground border-border', label: 'Unknown', icon: 'QuestionMarkCircleIcon' };
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Security Certifications & Compliance
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Enterprise-grade security validated by independent third-party audits and international standards compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const badge = getStatusBadge(cert.status);
            return (
              <div
                key={cert.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-hover hover:-translate-y-1 transition-smooth">

                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                    <AppImage
                      src={cert.badge}
                      alt={`${cert.name} certification badge showing security compliance achievement`}
                      className="w-full h-full object-cover" />

                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-body-medium border ${badge.color} flex items-center space-x-1`}>
                    <Icon name={badge.icon as any} size={14} className="text-current" variant="solid" />
                    <span>{badge.label}</span>
                  </span>
                </div>

                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-text-primary font-body mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name={cert.icon as any} size={16} className="text-primary" />
                      <span className="text-xs text-text-secondary font-body-medium">
                        {cert.completionDate ? `Completed: ${cert.completionDate}` : `Target: ${cert.targetDate}`}
                      </span>
                    </div>
                    {cert.status === 'achieved' &&
                    <Icon name="CheckBadgeIcon" size={20} className="text-success" variant="solid" />
                    }
                  </div>
                </div>
              </div>);

          })}
        </div>

        <div className="mt-12 bg-card border border-border rounded-xl p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="DocumentTextIcon" size={24} className="text-primary" variant="solid" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
                  Security Documentation & Audit Reports
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  Access our complete security documentation, audit reports, and compliance certificates under NDA.
                </p>
              </div>
            </div>
            <button className="w-full lg:w-auto px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-2 whitespace-nowrap">
              <span>Request Documentation</span>
              <Icon name="ArrowRightIcon" size={20} className="text-current" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default SecurityCertifications;