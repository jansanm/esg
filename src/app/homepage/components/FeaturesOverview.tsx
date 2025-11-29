import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  stats: string;
}

const FeaturesOverview = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Blockchain Anchoring',
      description: 'Immutable proof with Merkle tree verification and cryptographic signatures for every data point.',
      icon: 'LinkIcon',
      link: '/platform-overview',
      stats: '100% tamper-proof',
    },
    {
      id: 2,
      title: 'Global Standards',
      description: 'Native support for GHG Protocol, GRI, ESRS, and SEC climate disclosure frameworks.',
      icon: 'GlobeAltIcon',
      link: '/standards-and-compliance',
      stats: '15+ frameworks',
    },
    {
      id: 3,
      title: 'Real-Time Monitoring',
      description: 'IoT sensor integration with S1 device signatures for continuous environmental tracking.',
      icon: 'SignalIcon',
      link: '/platform-overview',
      stats: '24/7 verification',
    },
    {
      id: 4,
      title: 'AI Validation',
      description: 'Automated anomaly detection and data quality assurance powered by machine Abouting.',
      icon: 'CpuChipIcon',
      link: '/platform-overview',
      stats: '99.9% accuracy',
    },
    {
      id: 5,
      title: 'Selective Disclosure',
      description: 'Privacy-preserving verification with granular control over data sharing and redaction.',
      icon: 'EyeSlashIcon',
      link: '/platform-overview',
      stats: 'GDPR compliant',
    },
    {
      id: 6,
      title: 'Audit-Ready Reports',
      description: 'One-click export to PDF, CSV, and XBRL formats with complete audit trails.',
      icon: 'DocumentCheckIcon',
      link: '/proof-and-case-studies',
      stats: '80% time saved',
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Enterprise-Grade Verification Platform
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Six patent-backed technologies working together to deliver the most comprehensive ESG verification solution available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              className="group bg-card border border-border hover:border-primary/50 rounded-2xl p-8 transition-smooth hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 transition-smooth group-hover:scale-110">
                  <Icon name={feature.icon as any} size={28} className="text-primary" />
                </div>
                <Icon
                  name="ArrowTopRightOnSquareIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-smooth"
                />
              </div>

              <h3 className="text-xl font-headline font-headline-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>

              <p className="text-sm text-text-secondary font-body mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <Icon name="ChartBarIcon" size={16} className="text-success" />
                <span className="text-sm font-body-medium text-success">{feature.stats}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/platform-overview"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-cta-bold text-primary-foreground bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover rounded-lg transition-smooth"
          >
            Explore Full Platform
            <Icon name="ArrowRightIcon" size={20} className="ml-2 text-current" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;