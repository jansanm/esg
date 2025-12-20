import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ESGPlatformSection = () => {
  const platforms = [
    {
      id: 1,
      title: 'ESG Management',
      description: 'Comprehensive ESG data management and reporting platform for enterprise sustainability. Track, measure, and report on all your ESG metrics.',
      icon: 'ShieldCheckIcon',
      color: 'from-emerald-500 to-green-600',
      link: '/404'
    },
    {
      id: 2,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate ESG-related risks across your operations and supply chain with proactive monitoring.',
      icon: 'BuildingOfficeIcon',
      color: 'from-emerald-500 to-green-600',
      link: '/404'
    },
    {
      id: 3,
      title: 'Life Cycle Assessment',
      description: 'Analyze environmental impacts throughout your product\'s entire lifecycle from cradle to grave with comprehensive LCA reporting.',
      icon: 'ChartBarIcon',
      color: 'from-emerald-500 to-green-600',
      link: '/404'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            End-to-End ESG Platform
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Complete suite of tools to manage, monitor, and optimize your ESG performance
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <Link
              key={platform.id}
              href={platform.link}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center text-center space-y-6 flex-1">
                {/* Icon */}
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${platform.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={platform.icon as any} size={48} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {platform.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-1">
                  {platform.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all pt-4">
                  Learn more
                  <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGPlatformSection;
