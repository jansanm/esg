'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useState } from 'react';

interface PlatformDropdownProps {
  onClose: () => void;
}

const PlatformDropdown = ({ onClose }: PlatformDropdownProps) => {
  const [showExploreMenu, setShowExploreMenu] = useState(false);

  const platform = [
    {
      title: 'Automated Data Collection',
      description: 'Seamlessly gather environmental data from IoT sensors, ERP systems, and utility bills.',
      icon: 'CloudArrowUpIcon',
      href: '/platform-overview',
    },
    {
      title: 'Carbon Footprint Tracking',
      description: 'Real-time monitoring of Scope 1, 2, and 3 emissions for net-zero goals.',
      icon: 'GlobeAltIcon',
      href: '/platform-overview',
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated reporting for CSRD, ISSB, SASB, and other global standards.',
      icon: 'DocumentTextIcon',
      href: '/standards-and-compliance',
    },
    {
      title: 'Supply Chain Visibility',
      description: 'Track sustainability performance across your entire value chain.',
      icon: 'TruckIcon',
      href: '/solutions-hub',
    },
    {
      title: 'Social Impact Monitoring',
      description: 'Measure social responsibility from labor practices to community engagement.',
      icon: 'UserGroupIcon',
      href: '/platform-overview',
    },
    {
      title: 'Governance & Risk',
      description: 'Strengthen corporate governance with transparent oversight tools.',
      icon: 'ShieldCheckIcon',
      href: '/platform-overview',
    },
    {
      title: 'AI-Powered Insights',
      description: 'Predictive analytics to identify optimization opportunities.',
      icon: 'CpuChipIcon',
      href: '/platform-overview',
    },
    {
      title: 'Resource Management',
      description: 'Optimize water, waste, and energy usage with efficiency recommendations.',
      icon: 'BeakerIcon',
      href: '/platform-overview',
    },
    {
      title: 'Audit-Ready Reporting',
      description: 'Generate reports that meet auditor requirements and regulatory standards.',
      icon: 'ClipboardDocumentCheckIcon',
      href: '/platform-overview',
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t-2 border-emerald-600 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Top Section - Main Categories */}
        <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-200">
          <Link 
            href="/platform-overview" 
            onClick={onClose}
            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group px-4 py-2 rounded-lg hover:bg-emerald-50"
          >
            <Icon name="ShieldCheckIcon" size={20} className="text-emerald-600 group-hover:text-emerald-700" />
            <span className="font-semibold">ESG Management</span>
          </Link>
          <Link 
            href="/platform-overview" 
            onClick={onClose}
            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group px-4 py-2 rounded-lg hover:bg-emerald-50"
          >
            <Icon name="BuildingOfficeIcon" size={20} className="text-emerald-600 group-hover:text-emerald-700" />
            <span className="font-semibold">Risk Management</span>
          </Link>
          <Link 
            href="/platform-overview" 
            onClick={onClose}
            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group px-4 py-2 rounded-lg hover:bg-emerald-50"
          >
            <Icon name="ChartBarIcon" size={20} className="text-emerald-600 group-hover:text-emerald-700" />
            <span className="font-semibold">Life Cycle Assessment</span>
          </Link>
        </div>

        {/* Platform Features Grid */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-6">Platform Features</h4>
          <div className="grid grid-cols-3 gap-4">
            {platform.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-emerald-100 transition-colors">
                  <Icon name={item.icon} size={20} className="text-gray-600 group-hover:text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-700">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-6 border-t border-gray-200">
          <Link 
            href="/platform-overview" 
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Platform
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformDropdown;
