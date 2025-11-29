'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const PlatformDropdown = () => {
  const Platform = [
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
    <div className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-t border-white/5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-7xl mx-auto flex min-h-[400px]">
        {/* Featured Section (Left) */}
        <div className="w-1/3 p-10 border-r border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The All-in-One <br/> <span className="text-blue-500">ESG Platform</span></h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Empower your organization with data-driven sustainability. Measure, report, and improve your ESG performance with our comprehensive suite of tools.
              </p>
              <Link 
                href="/platform-overview" 
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-900/20"
              >
                Explore Platform
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-1">
                 <Icon name="CheckCircleIcon" size={14} className="text-green-500" />
                 <span>SOC2 Certified</span>
              </div>
              <div className="flex items-center gap-1">
                 <Icon name="CheckCircleIcon" size={14} className="text-green-500" />
                 <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid (Right) */}
        <div className="w-2/3 p-10">
          <div className="grid grid-cols-2 gap-6">
            {Platform.map((product) => (
              <Link 
                key={product.title} 
                href={product.href}
                className="group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-blue-500/10 transition-colors">
                    <Icon 
                      name={product.icon} 
                      size={24} 
                      className="text-zinc-400 group-hover:text-blue-400 transition-colors" 
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 mt-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
             <div className="text-sm text-zinc-500">
                Looking for something specific?
             </div>
             <Link href="/solutions-hub" className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                View all solutions <Icon name="ArrowRightIcon" size={14} />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDropdown;
