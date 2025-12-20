'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Company {
  id: number;
  name: string;
  logo: string;
  alt: string;
  industry: string;
}

const SocialProofCarousel = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const companies: Company[] = [
  {
    id: 1,
    name: 'Energy Production',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f21ad404-1763743353371.png",
    alt: 'Energy Production logo with lightning bolt and power symbol',
    industry: 'Energy Production'
  },
  {
    id: 2,
    name: 'Manufacturing & Logistics',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f96b7b53-1763743353097.png",
    alt: 'Manufacturing & Logistics logo with gear and truck icon',
    industry: 'Manufacturing & Logistics'
  },
  {
    id: 3,
    name: 'Healthcare & Life Sciences',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19be743c7-1763743353467.png",
    alt: 'Healthcare & Life Sciences logo with medical cross and molecule',
    industry: 'Healthcare & Life Sciences'
  },
  {
    id: 4,
    name: 'Retail & E-commerce',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1df6668c0-1763743354511.png",
    alt: 'Retail & E-commerce logo with shopping cart and storefront',
    industry: 'Retail & E-commerce'
  },
  {
    id: 5,
    name: 'Government',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17279aa66-1763743353971.png",
    alt: 'Government logo with government building and flag',
    industry: 'Government'
  },
  {
    id: 6,
    name: 'Mining',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1afc5b376-1763743353462.png",
    alt: 'Mining logo with mountain peak and excavator symbol',
    industry: 'Mining'
  },
  {
    id: 7,
    name: 'Pharmaceutical',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19be743c7-1763743353467.png",
    alt: 'Pharmaceutical logo with pill and medical symbol',
    industry: 'Pharmaceutical'
  },
  {
    id: 8,
    name: 'Leather & Textile',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f96b7b53-1763743353097.png",
    alt: 'Leather & Textile logo with fabric and thread icon',
    industry: 'Leather & Textile'
  },
  {
    id: 9,
    name: 'Technology',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f21ad404-1763743353371.png",
    alt: 'Technology logo with circuit board and chip icon',
    industry: 'Technology'
  },
  {
    id: 10,
    name: 'Financial Services',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1df6668c0-1763743354511.png",
    alt: 'Financial Services logo with bank building and dollar sign',
    industry: 'Financial Services'
  },
  {
    id: 11,
    name: 'Agriculture',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1afc5b376-1763743353462.png",
    alt: 'Agriculture logo with wheat and tractor symbol',
    industry: 'Agriculture'
  },
  {
    id: 12,
    name: 'Construction',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17279aa66-1763743353971.png",
    alt: 'Construction logo with crane and building icon',
    industry: 'Construction'
  }];


  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
            <span className="text-sm font-body-medium text-primary">Trusted by Industry Leaders</span>
          </div> */}
          <h2 className="text-2xl lg:text-3xl font-headline font-headline-bold text-foreground mb-3">
            Powering ESG for industries
          </h2>
          {/* <p className="text-base text-text-secondary font-body max-w-2xl mx-auto">
            From mining operations to pharmaceutical manufacturing, enterprises trust EcoVeraZ for audit-grade environmental verification.
          </p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) =>
          <div
            key={company.id}
            className="group bg-card border border-border hover:border-primary/30 rounded-xl p-6 transition-smooth hover:shadow-card flex flex-col items-center justify-center">

              <div className="relative w-full h-16 mb-3 overflow-hidden rounded-lg">
                <AppImage
                src={company.logo}
                alt={company.alt}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-smooth" />

              </div>
              <span className="text-xs text-muted-foreground font-body text-center">{company.industry}</span>
            </div>
          )}
        </div>

        {/* <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-headline font-headline-bold text-primary mb-2">500+</div>
            <p className="text-sm text-text-secondary font-body">Enterprise Deployments</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-headline-bold text-brand-secondary mb-2">2.5M+</div>
            <p className="text-sm text-text-secondary font-body">Verifications Anchored</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-headline-bold text-success mb-2">99.9%</div>
            <p className="text-sm text-text-secondary font-body">Audit Success Rate</p>
          </div>
        </div> */}
      </div>
    </section>);

};

export default SocialProofCarousel;