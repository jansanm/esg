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

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const footerSections: FooterSection[] = [
    {
      title: 'Platform',
      links: [
        { label: 'Overview', href: '/platform-overview' },
        { label: 'Device Integrity', href: '/platform-overview' },
        { label: 'Blockchain Anchoring', href: '/platform-overview' },
        { label: 'Certification Programs', href: '/platform-overview' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'By Industry', href: '/solutions-hub' },
        { label: 'By Role', href: '/solutions-hub' },
        { label: 'Case Studies', href: '/proof-and-case-studies' },
        { label: 'ROI Calculator', href: '/pricing-and-roi-calculator' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/platform-overview' },
        { label: 'API Reference', href: '/platform-overview' },
        { label: 'Standards', href: '/standards-and-compliance' },
        { label: 'Whitepapers', href: '/platform-overview' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/homepage' },
        { label: 'Contact', href: '/homepage' },
        { label: 'Careers', href: '/homepage' },
        { label: 'Partners', href: '/homepage' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
    { name: 'Twitter', icon: 'AtSymbolIcon', href: '#' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-foreground text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
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
              <span className="text-xl font-headline font-headline-medium">EcoVeraZ</span>
            </Link>
            <p className="text-sm text-white/70 font-body mb-6">
              Transforming ESG verification from claims to proof through blockchain-anchored evidence and enterprise-grade technology.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-headline-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-smooth font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/70 font-body">
            © {currentYear} EcoVeraZ. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-sm text-white/70 hover:text-white transition-smooth font-body">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-white transition-smooth font-body">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-white transition-smooth font-body">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;