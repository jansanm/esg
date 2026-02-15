import Icon from '@/components/ui/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Solutions for Trusted Sustainability */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-[0.2em]">Solution Suite</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-headline font-headline-bold text-foreground mb-8 leading-tight">
              Solutions for <br />
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent italic">Trusted Sustainability</span>
            </h1>
            <p className="text-xl text-text-secondary font-body leading-relaxed max-w-2xl mx-auto">
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
              <div key={index} className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={solution.icon as any} size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-headline-bold text-foreground mb-4 group-hover:text-emerald-700 transition-colors uppercase text-sm tracking-widest">
                  {solution.title}
                </h3>
                
                <p className="text-text-secondary font-body text-[15px] leading-relaxed mb-8 flex-1">
                  {solution.description}
                </p>

                <div className="space-y-6 pt-8 border-t border-gray-50 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-widest block mb-2">Compatible with</span>
                      <p className="text-sm font-headline-bold text-foreground">{solution.compatible}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 items-center justify-center">
                    <Icon name="CheckBadgeIcon" size={16} className="text-emerald-600" />
                    <span className="text-[11px] font-headline-bold text-emerald-800 uppercase tracking-wide">Verification Shield Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Framework Support */}
        <div className="mt-40">
          <div className="text-center max-w-3xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 mb-6">
                <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-[0.2em]">Interopability</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-headline font-headline-bold text-foreground mb-6">
              Framework Support
            </h2>
            <p className="text-xl text-text-secondary font-body leading-relaxed max-w-2xl mx-auto">
              EcoVeraZ seamlessly integrates with all major sustainability frameworks and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Icon name={framework.icon as any} size={32} className="text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-headline-bold text-foreground mb-2 group-hover:text-emerald-700 transition-colors">
                  {framework.id}
                </h3>
                <p className="text-xs text-text-secondary font-body uppercase tracking-widest">
                  {framework.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;