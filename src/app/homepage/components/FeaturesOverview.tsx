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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            ESG Features Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              href={feature.href}
              className="group relative flex flex-col p-8 bg-white border border-gray-100 rounded-2xl hover:bg-emerald-600 shadow-sm hover:shadow-2xl transition-all duration-300 py-10"
            >
              <div className="mb-6 text-emerald-600 group-hover:text-white transition-colors duration-300">
                <Icon name={feature.icon as any} size={40} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 mb-8 leading-relaxed group-hover:text-emerald-50 transition-colors duration-300">
                {feature.description}
              </p>

              <div className="mt-auto flex items-center text-sm font-semibold text-emerald-600 group-hover:text-white transition-colors duration-300">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                   <Icon name="ArrowRightIcon" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;