'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const AlignmentStrip = () => {
  const standards = [
    { name: 'UN Global Compact', code: 'UNGC', description: 'Implementing universal sustainability principles.' },
    { name: 'Carbon Disclosure Project', code: 'CDP', description: 'Global disclosure system for environmental impact.' },
    { name: 'International Organization for Standardization', code: 'ISO', description: 'World-class standards for quality and safety.' },
    { name: 'Global Standards 1', code: 'GS1', description: 'Global language of business for supply chain.' },
    { name: 'World Business Council for Sustainable Development', code: 'WBCSD', description: 'CEO-led community of sustainable businesses.' },
    { name: 'EU Corporate Sustainability Reporting', code: 'CSRD', description: 'Comprehensive ESG disclosure requirements for EU companies.' },
    { name: 'Sustainable Finance Disclosure', code: 'SFDR', description: 'EU regulation on sustainability-related disclosures.' },
    { name: 'Climate Disclosure Rules', code: 'SEC', description: 'US Securities and Exchange Commission climate rules.' },
    { name: 'Global Reporting Initiative', code: 'GRI', description: 'World\'s most widely used sustainability reporting standards.' },
    { name: 'Sustainability Accounting Board', code: 'SASB', description: 'Industry-specific sustainability accounting standards.' },
    { name: 'Climate-related Financial Disclosure', code: 'TCFD', description: 'Framework for climate-related financial risk disclosure.' },
    { name: 'Business Responsibility Reporting', code: 'BRSR', description: 'Indian ESG reporting framework for listed companies.' },
    { name: 'Carbon Accounting Standard', code: 'ISO 14064', description: 'International standard for greenhouse gas accounting.' },
  ];

  return (
    <section className="relative pt-0 pb-8 overflow-hidden bg-slate-50/50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-6">

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Trusted by & Aligned with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <div
              key={standard.code}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative gradient blob on hover */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-emerald-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-bold text-2xl text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {standard.code}
                  </div>
                  <div className="text-gray-300 group-hover:text-emerald-500 transition-colors">
                    <Icon name="CheckBadgeIcon" size={20} />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-emerald-600/70 transition-colors">
                    {standard.name.split(' ').slice(0, 2).join(' ')}...
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {standard.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-medium flex items-center justify-center gap-2">
            <Icon name="ShieldCheckIcon" size={16} className="text-emerald-500" />
            Seamlessly integrate with all major sustainability standards and regulatory requirements
          </p>
        </div>

      </div>
    </section>
  );
};

export default AlignmentStrip;
