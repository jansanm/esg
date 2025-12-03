'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface PlatformDropdownProps {
  onClose: () => void;
}

const PlatformDropdown = ({ onClose }: PlatformDropdownProps) => {
  const platform = [
    {
      title: 'ESG Reporting',
      description: 'Automated framework-aligned reporting.',
      icon: 'ChartBarIcon',
      href: '/platform-overview',
    },
    {
      title: 'Carbon Analytics',
      description: 'Real-time carbon footprint tracking.',
      icon: 'GlobeAltIcon',
      href: '/platform-overview',
    },
    {
      title: 'Supply Chain',
      description: 'Deep tier visibility and risk scoring.',
      icon: 'TruckIcon',
      href: '/solutions-hub',
    },
    {
      title: 'Compliance',
      description: 'Stay ahead of global regulations.',
      icon: 'DocumentTextIcon',
      href: '/standards-and-compliance',
    },
    {
      title: 'AI Insights',
      description: 'Predictive modeling for sustainability.',
      icon: 'CpuChipIcon',
      href: '/platform-overview',
    },
    {
      title: 'Integrations',
      description: 'Connect with your existing ERP data.',
      icon: 'LinkIcon',
      href: '/solutions-hub',
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t-2 border-emerald-600 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-7xl mx-auto flex min-h-[400px]">
        {/* Featured Section (Left) */}
        <div className="w-1/3 p-10 border-r border-gray-200 bg-gradient-to-b from-emerald-50 to-white">
          <div className="h-full flex flex-col justify-between">
            <div>
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">The All-in-One <br/> <span className="text-emerald-600">ESG Platform</span></h3> */}
              
              {/* Management Solutions */}
              <div className="space-y-3 mb-8">
                <Link 
                  href="/platform-overview" 
                  onClick={onClose}
                  className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <Icon name="ShieldCheckIcon" size={18} className="text-emerald-600 group-hover:text-emerald-700" />
                  <span className="font-medium">Risk Management</span>
                </Link>
                <Link 
                  href="/platform-overview" 
                  onClick={onClose}
                  className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <Icon name="BuildingOfficeIcon" size={18} className="text-emerald-600 group-hover:text-emerald-700" />
                  <span className="font-medium">Life Cycle Assessment</span>
                </Link>
                <Link 
                  href="/platform-overview" 
                  onClick={onClose}
                  className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <Icon name="ChartBarIcon" size={18} className="text-emerald-600 group-hover:text-emerald-700" />
                  <span className="font-medium">ESG Management</span>
                </Link>
              </div>
              
              <Link 
                href="/platform-overview" 
                onClick={onClose}
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 rounded-lg transition-all duration-200"
              >
                Explore Platform
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                 <Icon name="CheckCircleIcon" size={14} className="text-emerald-500" />
                 <span>SOC2 Certified</span>
              </div>
              <div className="flex items-center gap-1">
                 <Icon name="CheckCircleIcon" size={14} className="text-emerald-500" />
                 <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Grid (Right) */}
        <div className="w-2/3 p-10">
          <div className="grid grid-cols-2 gap-6">
            {platform.map((item) => (
              <Link 
                key={item.title} 
                href={item.href}
                onClick={onClose}
                className="group p-4 rounded-xl border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-emerald-100 transition-colors">
                    <Icon 
                      name={item.icon} 
                      size={24} 
                      className="text-gray-600 group-hover:text-emerald-700 transition-colors" 
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
             <div className="text-sm text-gray-500">
                Looking for something specific?
             </div>
             <Link href="/solutions-hub" onClick={onClose} className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors">
                View all solutions <Icon name="ArrowRightIcon" size={14} />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDropdown;
