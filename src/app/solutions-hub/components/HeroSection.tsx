import Icon from '@/components/ui/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Solutions for Trusted Sustainability */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground mb-4">
              Solutions for Trusted Sustainability
            </h1>
            <p className="text-lg text-text-secondary font-body leading-relaxed">
              Each solution is designed to make verification seamless and compliant by default, powered by our patent-pending trust infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'LockClosedIcon',
                title: 'ESG Data Integrity',
                description: 'Automate trust in environmental and social data streams with cryptographic verification.',
                compatible: 'CSRD, GRI, SASB'
              },
              {
                icon: 'BoltIcon',
                title: 'Real-Time Verification',
                description: 'Live validation of field data, certifications, and emissions reports with instant trust badges.',
                compatible: 'TCFD, SFDR'
              },
              {
                icon: 'ChartBarIcon',
                title: 'Carbon Trace',
                description: 'Track carbon flows across products and supply networks with scope 1-3 coverage.',
                compatible: 'GHG Protocol, ISO 14064'
              },
              {
                icon: 'ClipboardDocumentCheckIcon',
                title: 'Procurement Intelligence',
                description: 'Prioritize suppliers with verifiable sustainability credentials and ESG performance scores.',
                compatible: 'SASB, GRI 308'
              },
              {
                icon: 'DocumentTextIcon',
                title: 'Reporting Automation',
                description: 'Generate transparent ESG disclosures aligned with key frameworks and regulatory requirements.',
                compatible: 'CSRD, ESRS, SEC'
              },
              {
                icon: 'CpuChipIcon',
                title: 'ESG Insights Engine',
                description: 'AI-driven analysis reveals trends, risks, and compliance gaps with actionable recommendations.',
                compatible: 'All major frameworks'
              }
            ].map((solution, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-smooth group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={solution.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-text-secondary font-body text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Compatible with:</span>
                    <p className="text-sm font-medium text-foreground mt-1">{solution.compatible}</p>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                    <Icon name="CheckBadgeIcon" size={14} className="text-primary" />
                    <span className="text-xs font-medium text-primary">Patent-pending verification technology</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Framework Support */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-headline-bold text-foreground mb-4">
              Comprehensive Framework Support
            </h2>
            <p className="text-lg text-text-secondary font-body leading-relaxed">
              EcoVeraZ seamlessly integrates with all major sustainability frameworks and regulatory requirements, ensuring your compliance while building trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'CSRD',
                name: 'Corporate Sustainability Reporting',
                icon: 'DocumentChartBarIcon'
              },
              {
                id: 'GRI',
                name: 'Global Reporting Initiative',
                icon: 'GlobeAltIcon'
              },
              {
                id: 'SASB',
                name: 'Sustainability Accounting',
                icon: 'CalculatorIcon'
              },
              {
                id: 'TCFD',
                name: 'Climate-related Financial',
                icon: 'BanknotesIcon'
              }
            ].map((framework, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 group text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={framework.icon as any} size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-headline font-headline-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {framework.id}
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  {framework.name}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Industry Sectors */}
        {/* <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-headline-bold text-foreground mb-4">
              Industry Sectors
            </h2>
            <p className="text-lg text-text-secondary font-body leading-relaxed">
              Ten sectors unified by one verification framework — EcoVeraZ's patent-pending trust infrastructure designed for enterprise-scale sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                icon: 'WrenchScrewdriverIcon',
                title: 'Manufacturing',
                description: 'Proven ESG metrics across multi-tier supplier networks with real-time compliance monitoring.'
              },
              {
                icon: 'BoltIcon',
                title: 'Energy',
                description: 'Transparent carbon accounting for renewables and utilities with lifecycle assessment.'
              },
              {
                icon: 'TruckIcon',
                title: 'Logistics',
                description: 'Auditable tracking of scope 3 transport emissions and supply chain efficiency.'
              },
              {
                icon: 'BanknotesIcon',
                title: 'Finance',
                description: 'Assured data integrity for sustainable finance reporting and ESG investment scoring.'
              },
              {
                icon: 'GlobeAltIcon',
                title: 'Agriculture',
                description: 'Verified soil, water, and yield sustainability at source with regenerative practice tracking.'
              },
              {
                icon: 'ShoppingBagIcon',
                title: 'Retail',
                description: 'Product-level carbon labeling and ethical sourcing validation for consumer trust.'
              },
              {
                icon: 'BuildingOfficeIcon',
                title: 'Real Estate',
                description: 'Lifecycle emissions and efficiency verification for building portfolios and developments.'
              },
              {
                icon: 'ComputerDesktopIcon',
                title: 'Technology',
                description: 'Cloud and device-level ESG impact tracking with data center efficiency metrics.'
              },
              {
                icon: 'HeartIcon',
                title: 'Healthcare',
                description: 'Compliance and transparency for medical supply ecosystems and pharmaceutical chains.'
              },
              {
                icon: 'BuildingLibraryIcon',
                title: 'Government',
                description: 'Public procurement with verifiable sustainability metrics and policy compliance.'
              }
            ].map((sector, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={sector.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-lg font-headline font-headline-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                
                <p className="text-sm text-text-secondary font-body mb-6 flex-grow">
                  {sector.description}
                </p>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded border border-yellow-200">Gold Tier</span>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Icon name="CheckBadgeIcon" size={12} className="text-primary" />
                      Publicly verifiable
                    </span>
                  </div>
                  
                  <button className="text-primary text-sm font-cta-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View example <Icon name="ArrowRightIcon" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;