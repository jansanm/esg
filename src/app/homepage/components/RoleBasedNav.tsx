'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Role {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  benefits: string[];
}

const RoleBasedNavigation = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const roles: Role[] = [
    {
      id: 0,
      title: 'C-suite audience',
      description: 'Strategic insights on various global compliances and operational excellence.',
      icon: 'BriefcaseIcon',
      color: 'from-purple-600 to-indigo-700',
      link: '/solutions-hub',
      benefits: ['Global compliance assurance', 'Business continuity & resilience', 'Operational efficiency'],
    },
    {
      id: 1,
      title: 'Sustainability Officers',
      description: 'Audit-grade verification to replace manual ESG processes',
      icon: 'ChartBarIcon',
      color: 'from-primary to-green-600',
      link: '/solutions-hub',
      benefits: ['Automated compliance reporting', 'Real-time monitoring', 'Investor-ready documentation'],
    },
    {
      id: 2,
      title: 'Operations Teams',
      description: 'Real-time visibility into environmental performance',
      icon: 'CogIcon',
      color: 'from-brand-secondary to-blue-600',
      link: '/solutions-hub',
      benefits: ['Process optimization', 'Cost reduction insights', 'Supply chain transparency'],
    },
    {
      id: 3,
      title: 'Investors & Analysts',
      description: 'Verified data for confident investment decisions',
      icon: 'CurrencyDollarIcon',
      color: 'from-accent to-orange-600',
      link: '/solutions-hub',
      benefits: ['Risk assessment tools', 'Portfolio reporting', 'Due diligence support'],
    },
    {
      id: 4,
      title: 'Regulators',
      description: 'Scalable monitoring and enforcement frameworks',
      icon: 'ShieldCheckIcon',
      color: 'from-success to-green-700',
      link: '/solutions-hub',
      benefits: ['Compliance verification', 'Public accountability', 'Framework alignment'],
    },
    {
      id: 5,
      title: 'Customers & Partners',
      description: 'Build trust through verified sustainability commitments',
      icon: 'UserGroupIcon',
      color: 'from-pink-600 to-rose-600',
      link: '/solutions-hub',
      benefits: ['Transparent ESG credentials', 'Collaborative sustainability goals', 'Verified impact reporting'],
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Built for your role
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            EcoVeraZ adapts to your specific needs, whether you’re running business, ensuring compliance, optimizing operations, or making investment decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div
              key={role.id}
              onMouseEnter={() => isHydrated && setSelectedRole(role.id)}
              onMouseLeave={() => isHydrated && setSelectedRole(null)}
              className="group relative bg-card border border-border hover:border-primary/50 rounded-2xl p-8 transition-smooth hover:shadow-card"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center transition-smooth group-hover:scale-110`}
                >
                  <Icon name={role.icon as any} size={32} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {role.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-body">{role.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {role.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5"
                      variant="solid"
                    />
                    <span className="text-sm text-text-primary font-body">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href={role.link}
                className="inline-flex items-center space-x-2 text-sm font-cta text-primary hover:text-primary/80 transition-smooth"
              >
                <span>Explore Solutions</span>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="text-current group-hover:translate-x-1 transition-smooth"
                />
              </Link>

              {selectedRole === role.id && isHydrated && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solutions-hub"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-cta-bold text-primary-foreground bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover rounded-lg transition-smooth"
          >
            View All Solutions
            <Icon name="ArrowRightIcon" size={20} className="ml-2 text-current" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoleBasedNavigation;