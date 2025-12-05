'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import PlatformDropdown from './PlatformDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import ResourcesDropdown from './ResourcesDropdown';
import SearchOverlay from './SearchOverlay';
import MobileMenu from './MobileMenu';

interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavigation: NavigationItem[] = [
    { label: 'Platform', href: '/platform-overview', hasDropdown: true },
    { label: 'Solutions', href: '/solutions-hub', hasDropdown: true },
    { label: 'Pricing', href: '/pricing-and-roi-calculator' },
    { label: 'Resources', href: '/standards-and-compliance', hasDropdown: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (label === 'Platform' || label === 'Solutions' || label === 'Resources') {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white backdrop-blur-md text-gray-800 border-b border-gray-100 shadow-sm h-20 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-8">
              <Link href="/homepage" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="relative w-44 h-11 sm:w-52 sm:h-14">
                  <img
                    src="/assets/ecoveraz_logo.png"
                    alt="EcoVeraZ"
                    className="w-full h-full object-contain object-left"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6 h-full">
                {primaryNavigation.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href);
                  const isActiveItem = activeDropdown ? activeDropdown === item.label : isActive;
                  
                  return (
                    <div 
                      key={item.href} 
                      className="relative h-full flex items-center group"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.hasDropdown ? (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className={`text-base font-medium transition-all duration-200 flex items-center gap-1.5 relative ${
                            isActiveItem ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                          }`}
                        >
                          {item.label}
                          {/* Animated underline - expands from center */}
                          <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 h-0.5 bg-emerald-600 transition-all duration-300 origin-center ${
                            isActiveItem ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                          }`} />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`text-base font-medium hover:scale-105 transition-all duration-200 relative ${
                            isActiveItem ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
                          }`}
                        >
                          {item.label}
                          {/* Animated underline - expands from center */}
                          <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-full h-0.5 bg-emerald-600 transition-all duration-300 origin-center ${
                            isActiveItem ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`} />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center gap-6">
              <div 
                className="hidden lg:flex items-center w-64 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full hover:border-emerald-500 hover:ring-4 hover:ring-emerald-50/50 transition-all duration-300 group focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-50/50"
              >
                <Icon name="MagnifyingGlassIcon" size={18} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                <input 
                  type="text"
                  placeholder="Search..."
                  className="ml-3 text-sm text-gray-600 font-medium bg-transparent border-none outline-none w-full placeholder:text-gray-400"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsSearchOpen(true);
                    }
                  }}
                />
              </div>

              <Link
                href="/platform-overview"
                className="px-6 py-2.5 text-base font-bold text-gray-900 bg-gray-100 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5 rounded-full transition-all duration-200"
              >
                Sign in
              </Link>

              {/* <Link
                href="/contact"
                className="px-8 py-3 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 rounded-md transition-all duration-200 uppercase tracking-wide"
              >
                CONTACT
              </Link> */}
            </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
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
        </div>

        {/* Mega Menu Dropdown */}
        {activeDropdown === 'Platform' && (
          <div 
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
             <PlatformDropdown onClose={() => setActiveDropdown(null)} />
          </div>
        )}
        {activeDropdown === 'Solutions' && (
          <div 
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
             <SolutionsDropdown onClose={() => setActiveDropdown(null)} />
          </div>
        )}
        {activeDropdown === 'Resources' && (
          <div 
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
             <ResourcesDropdown onClose={() => setActiveDropdown(null)} />
          </div>
        )}

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;