import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: 'Platform Overview', href: '/platform-overview' },
      { label: 'Solutions Hub', href: '/solutions-hub' },
      { label: 'Pricing', href: '/pricing-and-roi-calculator' }
    ],
    resources: [
      { label: 'Standards & Compliance', href: '/standards-and-compliance' },
      { label: 'Case Studies', href: '/proof-and-case-studies' },
      { label: 'Documentation', href: '/platform-overview' }
    ],
    company: [
      { label: 'About Us', href: '/homepage' },
      { label: 'Contact', href: '/homepage' },
      { label: 'Careers', href: '/homepage' }
    ]
  };

  return (
    <footer className={`bg-card border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
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
              <span className="text-xl font-headline font-headline-medium text-foreground">EcoVeraZ</span>
            </Link>
            <p className="text-sm text-text-secondary font-body mb-6 max-w-sm">
              Transforming ESG verification from claims to proof through blockchain-anchored evidence and IoT integrity.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Icon name="LinkIcon" size={20} className="text-current" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Icon name="AtSymbolIcon" size={20} className="text-current" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                aria-label="GitHub"
              >
                <Icon name="CodeBracketIcon" size={20} className="text-current" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-headline font-headline-medium text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary font-body transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-headline font-headline-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary font-body transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-headline font-headline-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary font-body transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary font-body">
            &copy; {currentYear} EcoVeraZ. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-sm text-text-secondary hover:text-primary font-body transition-smooth">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-primary font-body transition-smooth">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-primary font-body transition-smooth">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;