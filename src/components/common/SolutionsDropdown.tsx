'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const SolutionsDropdown = () => {
  const industries = [
    { name: 'Pharmaceutical', icon: 'BeakerIcon' },
    { name: 'Manufacturing & Logistics', icon: 'CogIcon' },
    { name: 'Retail & E-commerce', icon: 'ShoppingBagIcon' },
    { name: 'Government', icon: 'BuildingLibraryIcon' },
    { name: 'Energy Production', icon: 'BoltIcon' },
    { name: 'Mining', icon: 'CubeIcon' },
    { name: 'Leather & Textile', icon: 'SwatchIcon' },
    { name: 'Healthcare & Life Sciences', icon: 'HeartIcon' },
    { name: 'Technology', icon: 'CpuChipIcon' },
    { name: 'Financial Services', icon: 'CurrencyDollarIcon' },
    { name: 'Agriculture', icon: 'GlobeAltIcon' },
    { name: 'Construction', icon: 'WrenchScrewdriverIcon' },
  ];

  const compliance = [
    { name: 'Energy Regulations', icon: 'BoltIcon' },
    { name: 'Manufacturing Standards', icon: 'ShieldCheckIcon' },
    { name: 'Healthcare Compliance', icon: 'DocumentCheckIcon' },
    { name: 'Retail Regulations', icon: 'ScaleIcon' },
    { name: 'Environmental Laws', icon: 'GlobeAltIcon' },
    { name: 'Data Privacy (GDPR)', icon: 'LockClosedIcon' },
  ];

  const useCases = [
    { name: 'Carbon Footprint Tracking', icon: 'CloudIcon' },
    { name: 'Supply Chain Transparency', icon: 'LinkIcon' },
    { name: 'Waste Management', icon: 'TrashIcon' },
    { name: 'Water Usage Monitoring', icon: 'BeakerIcon' },
    { name: 'Renewable Energy Transition', icon: 'SunIcon' },
    { name: 'Circular Economy', icon: 'ArrowPathIcon' },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t-2 border-green-700 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-7xl mx-auto flex min-h-[400px] p-8">
        
        {/* Column 1: Industries */}
        <div className="w-1/3 pr-8 border-r border-gray-200">
          <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2">
            Industries
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Tailored ESG solutions for your sector
          </p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
            {industries.map((item) => (
              <Link
                key={item.name}
                href="/solutions-hub"
                className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition-colors cursor-pointer group"
              >
                <Icon name={item.icon} size={18} className="text-gray-500 group-hover:text-green-700" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Compliance & Regulations */}
        <div className="w-1/3 px-8 border-r border-gray-200">
          <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2">
            Compliance & Regulations
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Stay compliant with global standards
          </p>
          <div className="space-y-3">
            {compliance.map((item) => (
              <Link
                key={item.name}
                href="/standards-and-compliance"
                className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition-colors cursor-pointer group"
              >
                <Icon name={item.icon} size={18} className="text-gray-500 group-hover:text-green-700" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Use Cases */}
        <div className="w-1/3 pl-8">
          <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2">
            Use Cases
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Common ESG implementation scenarios
          </p>
          <div className="space-y-3">
            {useCases.map((item) => (
              <Link
                key={item.name}
                href="/solutions-hub"
                className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition-colors cursor-pointer group"
              >
                <Icon name={item.icon} size={18} className="text-gray-500 group-hover:text-green-700" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-center">
          <Link href="/solutions-hub" className="text-green-700 hover:text-green-800 text-sm font-medium flex items-center gap-2 transition-colors">
            View all solutions <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
