'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    title: 'Evidence Automation',
    description: 'Continuous generation of evidence packs without manual intervention across all facilities.',
    icon: 'CloudArrowUpIcon',
    href: '/platform-overview'
  },
  {
    title: 'Data Lineage Tracking',
    description: 'Complete audit trail from operational source to calculation to final report artifact.',
    icon: 'ChartBarIcon',
    href: '/platform-overview'
  },
  {
    title: 'Regulatory Readiness',
    description: 'Documentation structured for CSRD, SEC climate rules, and ISO 14064 verification.',
    icon: 'DocumentCheckIcon',
    href: '/standards-and-compliance'
  },
  {
    title: 'Enterprise Scalability',
    description: 'Multi-site, multi-region aggregation with custom calculation engines for industry metrics.',
    icon: 'TruckIcon',
    href: '/solutions-hub'
  },
  {
    title: 'Tamper Detection',
    description: 'Cryptographic verification and integrity monitoring for high-stakes regulatory submissions.',
    icon: 'ShieldCheckIcon',
    href: '/solutions-hub'
  },
  {
    title: 'Risk Management',
    description: 'Scenario modeling and threshold alerts to flag compliance issues before they become liabilities.',
    icon: 'ScaleIcon',
    href: '/solutions-hub'
  },
  {
    title: 'Bounded Claims',
    description: 'Clear time windows and scope boundaries to ensure defensible and accurate reporting.',
    icon: 'BoltIcon',
    href: '/platform-overview'
  },
  {
    title: 'Operational Signals',
    description: 'Capture validation from IoT sensors, utility meters, and ERP systems automatically.',
    icon: 'ArrowTrendingUpIcon',
    href: '/platform-overview'
  },
  {
    title: 'Review-Ready Packs',
    description: 'Structured documentation bundles including manifests, methodology notes, and audit trails.',
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