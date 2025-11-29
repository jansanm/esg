'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import PlatformDropdown from './PlatformDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import AboutDropdown from './AboutDropdown';
import SearchOverlay from './SearchOverlay';

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
    { label: 'Resources', href: '/standards-and-compliance' },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Pricing', href: '/pricing-and-roi-calculator' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (label: string) => {
    if (label === 'Platform' || label === 'Solutions' || label === 'About') {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white text-gray-800 border-b border-gray-200 shadow-sm h-20 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-8">
              <Link href="/homepage" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="relative w-36 h-9 sm:w-40 sm:h-10">
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
                  
                  return (
                    <div 
                      key={item.href} 
                      className="relative h-full flex items-center group"
                    >
                      {item.hasDropdown ? (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className={`text-base font-medium transition-all duration-200 flex items-center gap-1 hover:scale-105 relative ${
                            activeDropdown === item.label || isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                          }`}
                        >
                          {item.label}
                          <Icon 
                            name="ChevronDownIcon" 
                            size={12} 
                            className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                          />
                          {/* Animated underline - expands from center */}
                          <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 h-0.5 bg-green-700 transition-all duration-300 origin-center ${
                            activeDropdown === item.label || isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                          }`} />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`text-base font-medium hover:scale-105 transition-all duration-200 relative ${
                            isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                          }`}
                        >
                          {item.label}
                          {/* Animated underline - expands from center */}
                          <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-full h-0.5 bg-green-700 transition-all duration-300 origin-center ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
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
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                <Icon name="MagnifyingGlassIcon" size={20} />
              </button>

              <Link
                href="/platform-overview"
                className="text-lg font-medium text-gray-800 hover:text-green-700 hover:scale-105 transition-all duration-200"
              >
                Log in
              </Link>

              <Link
                href="/pricing-and-roi-calculator"
                className="px-8 py-3 text-base font-bold text-white bg-green-700 hover:bg-green-800 hover:shadow-lg hover:-translate-y-0.5 rounded-md transition-all duration-200 uppercase tracking-wide"
              >
                CONTACT
              </Link>
            </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
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
          <div className="relative">
             <PlatformDropdown />
          </div>
        )}
        {activeDropdown === 'Solutions' && (
          <div className="relative">
             <SolutionsDropdown />
          </div>
        )}
        {activeDropdown === 'About' && (
          <div className="relative">
             <AboutDropdown />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5">
            <nav className="px-4 py-4 space-y-2">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/pricing-and-roi-calculator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-base font-medium text-center text-white bg-green-700 hover:bg-green-800 rounded-lg transition-colors"
                >
                  Contact us
                </Link>
                <Link
                  href="/platform-overview"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-base font-medium text-center text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;