'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    title: 'Automated Data Collection',
    description: 'Seamlessly gather environmental data from IoT sensors, ERP systems, and utility bills without manual entry.',
    icon: 'CloudArrowUpIcon',
    href: '/platform-overview'
  },
  {
    title: 'Carbon Footprint Tracking',
    description: 'Real-time monitoring of Scope 1, 2, and 3 emissions to ensure you stay on track with net-zero goals.',
    icon: 'ChartBarIcon',
    href: '/platform-overview'
  },
  {
    title: 'Regulatory Compliance',
    description: 'Stay audit-ready with automated reporting for CSRD, ISSB, SASB, and other global standards.',
    icon: 'DocumentCheckIcon',
    href: '/standards-and-compliance'
  },
  {
    title: 'Supply Chain Visibility',
    description: 'Track sustainability performance across your entire value chain and engage suppliers effectively.',
    icon: 'TruckIcon',
    href: '/solutions-hub'
  },
  {
    title: 'Social Impact Monitoring',
    description: 'Measure and manage your social responsibility initiatives, from labor practices to community engagement.',
    icon: 'UserGroupIcon',
    href: '/solutions-hub'
  },
  {
    title: 'Governance & Risk',
    description: 'Strengthen corporate governance with transparent oversight and risk management tools.',
    icon: 'ScaleIcon',
    href: '/solutions-hub'
  },
  {
    title: 'AI-Powered Insights',
    description: 'Leverage predictive analytics to identify optimization opportunities and reduce resource consumption.',
    icon: 'BoltIcon',
    href: '/platform-overview'
  },
  {
    title: 'Resource Management',
    description: 'Optimize water, waste, and energy usage with granular tracking and efficiency recommendations.',
    icon: 'ArrowTrendingUpIcon',
    href: '/platform-overview'
  },
   {
    title: 'Audit-Ready Reporting',
    description: 'Generate comprehensive, verifiable reports that build trust with investors and stakeholders.',
    icon: 'ClipboardDocumentCheckIcon',
    href: '/standards-and-compliance'
  },
];

const FeaturesOverview = () => {
  return (
    <section className="relative h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col py-20">
        {/* Fixed Heading */}
        <div className="text-center mb-12 flex-shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            ESG Features Overview
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Scrollable Content with Gradient Overlays */}
        <div className="relative flex-1 overflow-hidden">
          {/* Top Gradient Fade */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable Grid */}
          <div className="h-full overflow-y-auto px-2 scrollbar-hide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
              {features.map((feature, index) => (
                <Link 
                  key={index} 
                  href={feature.href}
                  className="group relative flex flex-col p-8 bg-white border border-gray-100 rounded-2xl hover:bg-emerald-600 shadow-sm hover:shadow-2xl transition-all duration-300 h-fit"
                >
                  <div className="mb-6 text-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Icon name={feature.icon as any} size={40} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed group-hover:text-emerald-50 transition-colors duration-300">
                    {feature.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;