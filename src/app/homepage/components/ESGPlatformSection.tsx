import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ESGPlatformSection = () => {
  const platforms = [
    {
      id: 1,
      title: 'ESG Data Management & Reporting',
      subtitle: 'Unified Enterprise Sustainability Platform',
      description: 'Transform fragmented ESG data into structured, auditable records across your entire organization.',
      features: [
        'Centralized tracking of Scope 1, 2, and 3 emissions',
        'Automated data collection from operational systems',
        'Real-time visibility with executive dashboards',
        'Multi-framework reporting for CSRD, TCFD, GRI, and SASB',
        'Enterprise integration via API-first architecture',
        'Security and compliance (SOC 2 Type II)'
      ],
      conclusion: 'Reduce audit preparation costs by up to 60% while maintaining continuous compliance readiness.',
      icon: 'ShieldCheckIcon',
      color: 'from-emerald-500 to-green-600',
      link: '/solutions/esg-management'
    },
    {
      id: 2,
      title: 'ESG Risk Management',
      subtitle: 'Proactive Risk Identification & Mitigation',
      description: 'Identify regulatory, operational, and supply chain ESG risks before they become compliance issues or reputational liabilities.',
      features: [
        'Continuous regulatory monitoring across jurisdictions',
        'Supply chain transparency with ESG risk scoring',
        'Threshold-based alerts for compliance breaches',
        'Scenario modeling for climate-related financial risks',
        'Complete audit trails for regulatory inquiries',
        'Brand protection through supply chain visibility'
      ],
      conclusion: 'Built on the COSO ERM framework to protect enterprise value and support strategic planning.',
      icon: 'BuildingOfficeIcon',
      color: 'from-emerald-500 to-green-600',
      link: '/solutions/risk-management'
    },
    {
      id: 3,
      title: 'Life Cycle Assessment (LCA)',
      subtitle: 'Comprehensive Product Environmental Impact Analysis',
      description: 'Quantify environmental impacts across your product portfolio from raw material extraction through end-of-life disposal.',
      features: [
        'ISO-compliant methodology (14040/14044)',
        'Complete lifecycle coverage (Cradle-to-Grave)',
        'Industry-standard database integrations',
        'Automated Product Carbon Footprint (PCF)',
        'Hotspot identification for targeted improvement',
        'Automated EPD generation for market requirements'
      ],
      conclusion: 'Drive data-informed sustainability improvements and optimize supplier selection with verified data.',
      icon: 'ChartBarIcon',
      color: 'from-emerald-500 to-green-600',
      link: '/solutions/life-cycle-assessment'
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            EcoVeraZ is an evidence infrastructure platform that automates the creation of audit-ready ESG documentation.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex flex-col bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-sm hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-300 group h-full"
            >
              {/* Icon & Title Group */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={platform.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {platform.title}
                </h3>
                <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                  {platform.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                {platform.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6 flex-1 border-t border-gray-50 pt-6">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-[13px] text-gray-700">
                    <Icon name="CheckCircleIcon" size={16} className="text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Conclusion Box */}
              <div className="bg-gray-50 rounded-xl p-3.5 mb-6 border border-gray-100">
                <p className="text-[12px] text-gray-600 italic leading-relaxed">
                  &quot;{platform.conclusion}&quot;
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={platform.link}
                className="flex items-center justify-center text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors pt-5 border-t border-gray-100 group gap-2"
              >
                Explore Solution
                <Icon name="ArrowRightIcon" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGPlatformSection;
