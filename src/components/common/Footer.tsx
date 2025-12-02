'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

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
    { 
      name: 'LinkedIn', 
      href: '#',
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
    { 
      name: 'X', 
      href: '#',
      path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    },
    { 
      name: 'Facebook', 
      href: '#',
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    },
    { 
      name: 'Discord', 
      href: '#',
      path: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"
    },
  ];

  return (
    <footer className="bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-12 relative z-10">
        {/* Top Bar: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-white/10">
            <Link href="/homepage" className="flex items-center">
              <Image
                src="/assets/ecoveraz_logo.png"
                alt="EcoVeraZ logo"
                width={180}
                height={60}
                className="object-contain brightness-0 invert"
              />
            </Link>

            <div className="flex items-center gap-3 mt-6 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white text-gray-400 hover:text-black rounded-full transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 transition-colors"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-gray-400 font-body leading-relaxed max-w-sm">
              Enterprise ESG verification platform delivering blockchain-anchored proof for audit-grade environmental compliance.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.slice(0, 3).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest ESG insights and platform updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-sm text-gray-500">
              {isHydrated ? `© ${currentYear}` : '© 2025'} EcoVeraZ. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
               {footerSections[3].links.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;