import Icon from '@/components/ui/AppIcon';

interface Framework {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  description: string;
  coverage: string;
  mappedFields: number;
  color: string;
}

interface FrameworksOverviewProps {
  className?: string;
}

const FrameworksOverview = ({ className = '' }: FrameworksOverviewProps) => {
  const frameworks: Framework[] = [
    {
      id: 'ghg',
      name: 'GHG Protocol',
      fullName: 'Greenhouse Gas Protocol',
      icon: 'CloudIcon',
      description: 'Corporate Accounting and Reporting Standard for Scope 1, 2, and 3 emissions with automated calculation and verification.',
      coverage: '100% Scope 1-3',
      mappedFields: 47,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'gri',
      name: 'GRI Standards',
      fullName: 'Global Reporting Initiative',
      icon: 'GlobeAltIcon',
      description: 'Universal sustainability reporting standards with comprehensive environmental, social, and governance disclosures.',
      coverage: 'GRI 300 Series',
      mappedFields: 62,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'esrs',
      name: 'ESRS',
      fullName: 'European Sustainability Reporting Standards',
      icon: 'DocumentCheckIcon',
      description: 'EU Corporate Sustainability Reporting Directive (CSRD) compliance with double materiality assessment support.',
      coverage: 'E1-E5 Standards',
      mappedFields: 89,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'sec',
      name: 'SEC Climate',
      fullName: 'SEC Climate Disclosure Rules',
      icon: 'BuildingLibraryIcon',
      description: 'U.S. Securities and Exchange Commission climate-related disclosure requirements for public companies.',
      coverage: 'Full Compliance',
      mappedFields: 34,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Comprehensive Framework Coverage
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            EcoVeraZ natively supports major global standards with automated field mapping, real-time validation, and audit-ready export capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {frameworks.map((framework) => (
            <div
              key={framework.id}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-hover hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${framework.color} flex items-center justify-center`}>
                  <Icon name={framework.icon as any} size={28} className="text-white" variant="solid" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-headline font-headline-bold text-foreground">{framework.mappedFields}</div>
                  <div className="text-xs text-text-secondary font-body">Mapped Fields</div>
                </div>
              </div>

              <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
                {framework.name}
              </h3>
              <p className="text-sm text-text-secondary font-body-medium mb-3">
                {framework.fullName}
              </p>
              <p className="text-sm text-text-primary font-body mb-4 leading-relaxed">
                {framework.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckBadgeIcon" size={18} className="text-success" variant="solid" />
                  <span className="text-sm font-body-medium text-success">{framework.coverage}</span>
                </div>
                <button className="text-sm font-cta text-primary hover:text-primary/80 flex items-center space-x-1 transition-smooth">
                  <span>View Mapping</span>
                  <Icon name="ArrowRightIcon" size={16} className="text-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworksOverview;