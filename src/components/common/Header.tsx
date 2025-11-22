'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryNavigation: NavigationItem[] = [
    { label: 'Platform', href: '/platform-overview' },
    { label: 'Solutions', href: '/solutions-hub' },
    { label: 'Standards', href: '/standards-and-compliance' },
  ];

  const secondaryNavigation: NavigationItem[] = [
    { label: 'Case Studies', href: '/proof-and-case-studies' },
    { label: 'Pricing', href: '/pricing-and-roi-calculator' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 ${className}`}>
      <div className="w-full px-3 sm:px-4 lg:px-6 pt-3 pb-2">
        <div className="flex items-center justify-between h-20 sm:h-22 lg:h-24 px-4 sm:px-6 lg:px-8 bg-card border border-border rounded-2xl shadow-md shadow-black/5">
          <nav className="hidden lg:flex items-center space-x-1 flex-1">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-body-medium text-text-primary hover:text-primary hover:bg-muted rounded-md transition-smooth"
              >
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-body-medium text-text-primary hover:text-primary hover:bg-muted rounded-md transition-smooth flex items-center space-x-1">
                <span>More</span>
                <Icon name="ChevronDownIcon" size={16} className="text-current" />
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-modal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-body text-popover-foreground hover:bg-muted hover:text-primary transition-smooth first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <Link
            href="/homepage"
            className="flex-1 flex justify-center hover:opacity-90 transition-smooth"
          >
            <div className="flex items-center justify-center w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full bg-primary/8 shadow-md overflow-hidden">
              <AppImage
                src="/assets/Logo[1].png"
                alt="EcoVeraZ logo"
                width={220}
                height={220}
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center justify-end flex-1 space-x-3">
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/platform-overview"
                className="px-4 py-2 text-sm font-cta text-text-primary hover:text-primary transition-smooth"
              >
                See Live Proof
              </Link>
              <Link
                href="/pricing-and-roi-calculator"
                className="px-6 py-2.5 text-sm font-cta-bold text-primary-foreground bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover rounded-lg transition-smooth"
              >
                Request Demo
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                className="text-current"
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-slide-in-right">
            <nav className="px-6 py-4 space-y-1">
              {[...primaryNavigation, ...secondaryNavigation].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-body-medium text-text-primary hover:text-primary hover:bg-muted rounded-md transition-smooth"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2 border-t border-border mt-4">
                <Link
                  href="/platform-overview"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-sm font-cta text-center text-text-primary hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                >
                  See Live Proof
                </Link>
                <Link
                  href="/pricing-and-roi-calculator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-sm font-cta-bold text-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-smooth"
                >
                  Request Demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;