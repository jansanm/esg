'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface TabContent {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  route: string;
}

interface PlatformTabsProps {
  className?: string;
}

const PlatformTabs = ({ className = '' }: PlatformTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('integrity');

  const tabs: TabContent[] = [
  {
    id: 'integrity',
    title: 'Device Integrity',
    icon: 'FingerPrintIcon',
    description: 'S1 device signatures ensure data authenticity from the source. Every sensor reading is cryptographically signed, creating an immutable chain of custody from measurement to certificate.',
    features: [
    'Hardware-level cryptographic signing',
    'Tamper-evident envelope creation',
    'Real-time integrity verification',
    'Multi-sensor orchestration'],

    image: "https://images.unsplash.com/photo-1652785723146-ca1a6daf5ecc",
    imageAlt: 'Close-up of industrial IoT sensor device with blue LED indicators mounted on metallic surface in manufacturing facility',
    route: '/platform/integrity'
  },
  {
    id: 'anchoring',
    title: 'Blockchain Anchoring',
    icon: 'CubeTransparentIcon',
    description: 'Merkle tree-based proof generation anchors environmental data to public blockchains. Each data point receives a cryptographic receipt, enabling independent verification without exposing sensitive information.',
    features: [
    'Multi-chain anchor support',
    'Merkle proof generation',
    'Independent verification tools',
    'Immutable audit trails'],

    image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    imageAlt: 'Abstract visualization of blockchain network with glowing blue nodes and connecting lines representing distributed ledger technology',
    route: '/platform/anchoring'
  },
  {
    id: 'programs',
    title: 'Certification Programs',
    icon: 'DocumentCheckIcon',
    description: 'Automated carbon credit certification and badge issuance based on verified data. Our AI-powered validation engine ensures compliance with global standards while reducing certification time from months to days.',
    features: [
    'GHG Protocol compliance',
    'Automated badge generation',
    'Multi-framework support',
    'Real-time credit calculation'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7570011-1763300777467.png",
    imageAlt: 'Professional business person holding digital tablet displaying sustainability certification badge with green checkmark in modern office',
    route: '/platform/programs'
  },
  {
    id: 'disclosure',
    title: 'Privacy Controls',
    icon: 'EyeSlashIcon',
    description: 'Selective redaction technology allows sharing verified proofs while protecting competitive intelligence. Control exactly what data is visible to auditors, investors, and regulators without compromising verification integrity.',
    features: [
    'Granular access controls',
    'Zero-knowledge proofs',
    'Compliance-aware redaction',
    'Audit trail preservation'],

    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
    imageAlt: 'Digital security interface showing privacy shield icon with lock symbols and encrypted data visualization on dark blue background',
    route: '/platform/disclosure'
  }];


  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className={`bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Complete Platform Ecosystem
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Four integrated components working seamlessly to deliver audit-grade verification from sensor to certificate
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 font-body-medium transition-smooth border-b-2 ${
            activeTab === tab.id ?
            'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary hover:border-muted'}`
            }>

              <Icon name={tab.icon as any} size={20} className="text-current" />
              <span>{tab.title}</span>
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name={activeContent.icon as any} size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-body-medium text-primary">{activeContent.title}</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-headline font-headline-bold text-foreground">
              {activeContent.description}
            </h3>

            <ul className="space-y-3">
              {activeContent.features.map((feature, index) =>
              <li key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" variant="solid" />
                  <span className="text-text-primary font-body">{feature}</span>
                </li>
              )}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth">
                Explore {activeContent.title}
              </button>
              <button className="px-6 py-3 bg-card border border-border text-foreground font-cta rounded-lg hover:border-primary hover:text-primary transition-smooth flex items-center space-x-2">
                <span>Technical Specs</span>
                <Icon name="ArrowRightIcon" size={16} className="text-current" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-modal border border-border bg-card">
              <AppImage
                src={activeContent.image}
                alt={activeContent.imageAlt}
                className="w-full h-auto" />

              <div className="absolute top-4 right-4 px-3 py-1.5 bg-success text-success-foreground text-xs font-body-medium rounded-full flex items-center space-x-1">
                <Icon name="CheckBadgeIcon" size={16} className="text-current" variant="solid" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PlatformTabs;