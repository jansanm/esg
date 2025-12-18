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
    name: 'Global Mining Corp',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1afc5b376-1763743353462.png",
    alt: 'Global Mining Corp logo with mountain peak symbol in dark blue',
    industry: 'Mining'
  },
  {
    id: 2,
    name: 'EcoManufacture Ltd',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f96b7b53-1763743353097.png",
    alt: 'EcoManufacture Ltd logo with green leaf and gear icon',
    industry: 'Manufacturing'
  },
  {
    id: 3,
    name: 'PharmaTech Solutions',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19be743c7-1763743353467.png",
    alt: 'PharmaTech Solutions logo with medical cross and molecule structure',
    industry: 'Pharmaceutical'
  },
  {
    id: 4,
    name: 'PowerGrid Utilities',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f21ad404-1763743353371.png",
    alt: 'PowerGrid Utilities logo with lightning bolt and grid pattern',
    industry: 'Utilities'
  },
  {
    id: 5,
    name: 'GreenSpace Realty',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1df6668c0-1763743354511.png",
    alt: 'GreenSpace Realty logo with building outline and tree symbol',
    industry: 'Real Estate'
  },
  {
    id: 6,
    name: 'Municipal Services',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17279aa66-1763743353971.png",
    alt: 'Municipal Services logo with city skyline and government building',
    industry: 'Public Sector'
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
            Powering ESG Verification Globally
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