'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerSections: FooterSection[] = [
    {
      title: 'Platform',
      links: [
        { label: 'Overview', href: '/platform-overview' },
        { label: 'Solutions', href: '/solutions-hub' },
        { label: 'Standards', href: '/standards-and-compliance' },
        { label: 'Case Studies', href: '/proof-and-case-studies' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/platform-overview' },
        { label: 'Pricing', href: '/pricing-and-roi-calculator' },
        { label: 'ROI Calculator', href: '/pricing-and-roi-calculator' },
        { label: 'Support', href: '/homepage' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/homepage' },
        { label: 'Careers', href: '/homepage' },
        { label: 'Partners', href: '/homepage' },
        { label: 'Contact', href: '/homepage' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/homepage' },
        { label: 'Terms of Service', href: '/homepage' },
        { label: 'Security', href: '/homepage' },
        { label: 'Compliance', href: '/standards-and-compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden bg-transparent">
                <AppImage
                  src="/assets/Logo[1].png"
                  alt="EcoVeraZ logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-headline font-headline-medium text-white">EcoVeraZ</span>
            </Link>
            <p className="text-sm text-gray-400 font-body mb-6 leading-relaxed">
              Enterprise ESG verification platform delivering blockchain-anchored proof for audit-grade environmental compliance.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} className="text-gray-400 hover:text-primary transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-headline font-headline-medium text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary font-body transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 font-body">
              {isHydrated ? `© ${currentYear}` : '© 2025'} EcoVeraZ. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={16} className="text-success" variant="solid" />
                <span className="text-xs text-gray-400 font-body">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="LockClosedIcon" size={16} className="text-brand-secondary" variant="solid" />
                <span className="text-xs text-gray-400 font-body">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="GlobeAltIcon" size={16} className="text-primary" />
                <span className="text-xs text-gray-400 font-body">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;