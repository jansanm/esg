'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  if (!isVisible && !isOpen) return null;

  // Data mirroring the desktop dropdowns
  const platformItems = [
    { title: 'ESG Reporting', icon: 'ChartBarIcon', href: '/platform-overview', desc: 'Automated reporting' },
    { title: 'Carbon Analytics', icon: 'GlobeAltIcon', href: '/platform-overview', desc: 'Real-time tracking' },
    { title: 'Supply Chain', icon: 'TruckIcon', href: '/solutions-hub', desc: 'Tier visibility' },
    { title: 'Compliance', icon: 'DocumentTextIcon', href: '/standards-and-compliance', desc: 'Global regulations' },
    { title: 'AI Insights', icon: 'CpuChipIcon', href: '/platform-overview', desc: 'Predictive modeling' },
    { title: 'Integrations', icon: 'LinkIcon', href: '/solutions-hub', desc: 'ERP connections' },
  ];

  const solutionItems = [
    { title: 'Energy Production', icon: 'BoltIcon', href: '/solutions-hub' },
    { title: 'Manufacturing', icon: 'Cog6ToothIcon', href: '/solutions-hub' },
    { title: 'Healthcare', icon: 'HeartIcon', href: '/solutions-hub' },
    { title: 'Retail & E-commerce', icon: 'ShoppingBagIcon', href: '/solutions-hub' },
    { title: 'Government', icon: 'BuildingLibraryIcon', href: '/solutions-hub' },
    { title: 'Financial Services', icon: 'CurrencyDollarIcon', href: '/solutions-hub' },
  ];

  const resourceItems = [
    { title: 'Company', icon: 'BuildingOfficeIcon', href: '/about/company' },
    { title: 'News', icon: 'NewspaperIcon', href: '/about/news' },
    { title: 'Events', icon: 'CalendarDaysIcon', href: '/about/events' },
    { title: 'Team', icon: 'UserGroupIcon', href: '/about/team' },
    { title: 'Partners', icon: 'UsersIcon', href: '/about/partners' },
    { title: 'Careers', icon: 'BriefcaseIcon', href: '/about/careers' },
  ];

  const menuItems = [
    { label: 'Platform', items: platformItems },
    { label: 'Solutions', items: solutionItems },
    { label: 'Request Quote', href: '/pricing-and-roi-calculator' },
    { label: 'Resources', items: resourceItems },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Menu Content */}
      <div 
        className={`absolute top-0 right-0 w-[85%] max-w-md h-[100dvh] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white shrink-0 z-20">
          <Link href="/homepage" onClick={onClose} className="relative w-32 h-8">
             <img
                src="/assets/ecoveraz_logo.png"
                alt="EcoVeraZ"
                className="w-full h-full object-contain object-left"
              />
          </Link>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto min-h-0 py-4 px-6 bg-white z-10">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                {item.items ? (
                  // Accordion Item
                  <div>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={`flex items-center justify-between w-full py-4 text-lg font-semibold transition-all duration-200 ${
                        expandedItem === item.label ? 'text-emerald-600' : 'text-gray-800'
                      }`}
                    >
                      {item.label}
                      <Icon 
                        name="ChevronDownIcon" 
                        size={20} 
                        className={`transition-transform duration-300 ${
                          expandedItem === item.label ? 'rotate-180 text-emerald-600' : 'text-gray-400'
                        }`} 
                      />
                    </button>
                    
                    {/* Sub-items */}
                    <div 
                      className={`grid gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItem === item.label ? 'max-h-[1000px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={onClose}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 active:bg-emerald-50 transition-colors group"
                        >
                          <div className={`p-2 rounded-lg shrink-0 ${expandedItem === item.label ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'} group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors`}>
                            <Icon name={subItem.icon as any} size={20} />
                          </div>
                          <div>
                            <span className="block font-medium text-gray-700 group-hover:text-emerald-900">
                              {subItem.title}
                            </span>
                            {/* @ts-ignore */}
                            {subItem.desc && (
                              <span className="block text-xs text-gray-400 font-normal mt-0.5">
                                {/* @ts-ignore */}
                                {subItem.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Simple Link
                  <Link
                    href={item.href!}
                    onClick={onClose}
                    className="flex items-center justify-between w-full py-4 text-lg font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
                  >
                    {item.label}
                    <Icon name="ArrowRightIcon" size={20} className="text-gray-300 -rotate-45" />
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3 shrink-0 z-20">
          {/* Contact Us button removed to match desktop view */}
          <Link
            href="/platform-overview"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 font-semibold text-base hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
