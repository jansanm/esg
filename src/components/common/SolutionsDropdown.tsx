'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface SolutionsDropdownProps {
  onClose: () => void;
}

const SolutionsDropdown = ({ onClose }: SolutionsDropdownProps) => {
  const industries = [
    { name: 'Energy Production', icon: 'BoltIcon' },
    { name: 'Manufacturing & Logistics', icon: 'Cog6ToothIcon' },
    { name: 'Healthcare & Life Sciences', icon: 'HeartIcon' },
    { name: 'Retail & E-commerce', icon: 'ShoppingBagIcon' },
    { name: 'Government', icon: 'BuildingLibraryIcon' },
    { name: 'Mining', icon: 'CubeIcon' },
    { name: 'Pharmaceutical', icon: 'BeakerIcon' },
    { name: 'Leather & Textile', icon: 'SwatchIcon' },
    { name: 'Technology', icon: 'CpuChipIcon' },
    { name: 'Financial Services', icon: 'CurrencyDollarIcon' },
    { name: 'Agriculture', icon: 'GlobeAltIcon' },
    { name: 'Construction', icon: 'WrenchScrewdriverIcon' },
  ];

  const compliance = [
    { name: 'Energy Regulations', icon: 'BoltIcon' },
    { name: 'Manufacturing Standards', icon: 'ShieldCheckIcon' },
    { name: 'Healthcare Compliance', icon: 'DocumentCheckIcon' },
    { name: 'Retail & E-commerce', icon: 'ScaleIcon' },
    { name: 'Data Privacy (GDPR)', icon: 'LockClosedIcon' },
    { name: 'Environmental Laws', icon: 'GlobeAltIcon' },
  ];

// ...

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t-2 border-primary shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-7xl mx-auto flex min-h-[400px] p-8">
        
        {/* Column 1: Compliance & Regulations */}
        <div className="w-1/2 pr-8 border-r border-gray-200">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Compliance & Regulations
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Stay compliant with global standards
          </p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
            {compliance.map((item) => (
              <Link
                key={item.name}
                href="/standards-and-compliance"
                onClick={onClose}
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer group"
              >
                <Icon name={item.icon} size={18} className="text-gray-500 group-hover:text-primary" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Industries */}
        <div className="w-1/2 pl-8">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
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
                onClick={onClose}
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer group"
              >
                <Icon name={item.icon} size={18} className="text-gray-500 group-hover:text-primary" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-center">
          <Link href="/solutions-hub" onClick={onClose} className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-2 transition-colors">
            View all solutions <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
