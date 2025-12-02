'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const AboutDropdown = () => {
  const aboutSections = [
    {
      title: 'Company',
      description: 'Learn about our mission and values',
      icon: 'BuildingOfficeIcon',
      href: '/about/company',
    },
    {
      title: 'News',
      description: 'Latest updates and announcements',
      icon: 'NewspaperIcon',
      href: '/about/news',
    },
    {
      title: 'Events',
      description: 'Upcoming webinars and conferences',
      icon: 'CalendarDaysIcon',
      href: '/about/events',
    },
    {
      title: 'Team',
      description: 'Meet the people behind EcoVeraZ',
      icon: 'UserGroupIcon',
      href: '/about/team',
    },
    {
      title: 'Partners',
      description: 'Our trusted ecosystem partners',
      icon: 'UsersIcon',
      href: '/about/partners',
    },
    {
      title: 'Careers',
      description: 'Join our growing team',
      icon: 'BriefcaseIcon',
      href: '/about/careers',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      icon: 'EnvelopeIcon',
      href: '/contact',
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t-2 border-emerald-600 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-3 gap-6">
          {aboutSections.map((item) => (
            <Link 
              key={item.title} 
              href={item.href}
              className="group p-4 rounded-xl border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-emerald-100 transition-colors">
                  <Icon 
                    name={item.icon} 
                    size={24} 
                    className="text-gray-600 group-hover:text-emerald-700 transition-colors" 
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDropdown;
