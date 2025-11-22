'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  company: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: string;
  }[];
  proofLink: string;
  image: string;
  alt: string;
  verificationDate: string;
}

interface CaseStudiesSectionProps {
  isVisible: boolean;
}

const CaseStudiesSection = ({ isVisible }: CaseStudiesSectionProps) => {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
  {
    id: 'mining-water',
    title: 'Water Usage Verification in Remote Mining Operations',
    industry: 'Mining',
    company: 'Global Mining Corp',
    challenge: 'Manual water monitoring across 8 remote extraction sites led to delayed reporting and compliance risks with local environmental regulations.',
    solution: 'Deployed IoT water sensors with blockchain anchoring at all extraction and processing points, enabling real-time verification and automated regulatory reporting.',
    results: [
    { metric: 'Reporting Time', value: '92% Reduction', icon: 'ClockIcon' },
    { metric: 'Compliance Score', value: '100% Achieved', icon: 'CheckBadgeIcon' },
    { metric: 'Water Savings', value: '18% Decrease', icon: 'BeakerIcon' }],

    proofLink: 'https://truststrip.ecoveraz.com/proof/mining-water-2024',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17684a14d-1763743355962.png",
    alt: 'Mining site with water monitoring equipment and digital sensors installed near water treatment facility',
    verificationDate: '2024-11-15'
  },
  {
    id: 'manufacturing-carbon',
    title: 'Supply Chain Carbon Footprint Verification',
    industry: 'Manufacturing',
    company: 'TechManufacture Inc',
    challenge: 'Scope 3 emissions from 200+ suppliers were self-reported without verification, creating investor credibility concerns and audit risks.',
    solution: 'Implemented supplier verification portal with automated data collection from supplier facilities and blockchain proof generation for all carbon claims.',
    results: [
    { metric: 'Supplier Compliance', value: '85% Verified', icon: 'ShieldCheckIcon' },
    { metric: 'Audit Preparation', value: '75% Faster', icon: 'DocumentCheckIcon' },
    { metric: 'Investor Confidence', value: '94% Rating', icon: 'ChartBarIcon' }],

    proofLink: 'https://truststrip.ecoveraz.com/proof/manufacturing-supply-2024',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d0107c4-1763743355947.png",
    alt: 'Manufacturing facility with digital supply chain monitoring dashboard showing verified carbon data from multiple suppliers',
    verificationDate: '2024-10-28'
  },
  {
    id: 'pharma-cold-chain',
    title: 'Cold Chain Sustainability Verification',
    industry: 'Pharmaceutical',
    company: 'BioPharma Solutions',
    challenge: 'Temperature-controlled distribution network consumed significant energy with no visibility into carbon footprint or optimization opportunities.',
    solution: 'Integrated cold chain monitoring with carbon accounting, providing real-time visibility and optimization recommendations backed by verifiable proof.',
    results: [
    { metric: 'Energy Efficiency', value: '23% Improvement', icon: 'BoltIcon' },
    { metric: 'Carbon Reduction', value: '31% Decrease', icon: 'CloudIcon' },
    { metric: 'Cost Savings', value: '$2.4M Annual', icon: 'CurrencyDollarIcon' }],

    proofLink: 'https://truststrip.ecoveraz.com/proof/pharma-cold-chain-2024',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_120a5a355-1763743355616.png",
    alt: 'Pharmaceutical cold storage facility with temperature monitoring systems and sustainability tracking displays',
    verificationDate: '2024-09-12'
  },
  {
    id: 'utilities-renewable',
    title: 'Renewable Energy Certificate Fraud Prevention',
    industry: 'Utilities',
    company: 'GreenPower Energy',
    challenge: 'REC trading market lacked transparency, with double-counting concerns and verification delays impacting market confidence.',
    solution: 'Deployed blockchain-anchored REC issuance system with real-time generation verification and tamper-proof certificate tracking.',
    results: [
    { metric: 'Fraud Prevention', value: '100% Verified', icon: 'LockClosedIcon' },
    { metric: 'Market Confidence', value: '89% Increase', icon: 'TrendingUpIcon' },
    { metric: 'Trading Volume', value: '156% Growth', icon: 'ArrowTrendingUpIcon' }],

    proofLink: 'https://truststrip.ecoveraz.com/proof/utilities-rec-2024',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100ff1448-1763743354922.png",
    alt: 'Wind and solar farm with digital monitoring station displaying real-time renewable energy certificate verification',
    verificationDate: '2024-11-01'
  },
  {
    id: 'real-estate-leed',
    title: 'LEED Certification Automation for Building Portfolio',
    industry: 'Real Estate',
    company: 'Urban Properties Group',
    challenge: 'Manual LEED certification process for 45-building portfolio required 18 months and significant consultant fees.',
    solution: 'Automated building performance monitoring with LEED criteria mapping and continuous verification, reducing certification timeline and costs.',
    results: [
    { metric: 'Certification Time', value: '67% Reduction', icon: 'ClockIcon' },
    { metric: 'Cost Savings', value: '$890K Total', icon: 'CurrencyDollarIcon' },
    { metric: 'Buildings Certified', value: '45 Properties', icon: 'BuildingOffice2Icon' }],

    proofLink: 'https://truststrip.ecoveraz.com/proof/real-estate-leed-2024',
    image: "https://images.unsplash.com/photo-1725432211961-1134f6079325",
    alt: 'Modern LEED-certified office building with green architecture and digital sustainability monitoring displays',
    verificationDate: '2024-10-05'
  },
  {
    id: 'public-sector-transparency',
    title: 'Municipal Sustainability Transparency Initiative',
    industry: 'Public Sector',
    company: 'Metro City Government',
    challenge: 'Citizens demanded transparent environmental performance data, but manual reporting was slow and lacked credibility.',
    solution: 'Implemented public-facing sustainability dashboard with blockchain-verified data from city facilities, enabling real-time citizen access.',
    results: [
    { metric: 'Citizen Engagement', value: '340% Increase', icon: 'UserGroupIcon' },
    { metric: 'Data Transparency', value: '100% Public', icon: 'EyeIcon' },
    { metric: 'Trust Rating', value: '87% Approval', icon: 'HeartIcon' }],

    proofLink: 'https://truststrip.ecoveraz.com/proof/public-sector-2024',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12672d9d9-1763743356544.png",
    alt: 'City hall building with large public display showing real-time municipal environmental performance data',
    verificationDate: '2024-08-22'
  }];


  if (!isVisible) return null;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Verified Case Studies
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Real outcomes with live proof links - explore how organizations across industries achieve measurable results with EcoVeraZ verification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study) =>
          <div
            key={study.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-card transition-smooth">

              <div className="relative aspect-[16/9] overflow-hidden">
                <AppImage
                src={study.image}
                alt={study.alt}
                className="w-full h-full object-cover" />

                <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <span className="text-xs font-body-medium text-primary">{study.industry}</span>
                </div>
                <div className="absolute top-4 right-4 bg-success/95 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center space-x-1">
                  <Icon name="CheckBadgeIcon" size={14} variant="solid" className="text-success-foreground" />
                  <span className="text-xs font-body-medium text-success-foreground">Verified</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-text-secondary font-body mb-4">{study.company}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-body-medium text-foreground mb-2 uppercase tracking-wide flex items-center">
                      <Icon name="ExclamationCircleIcon" size={14} className="text-warning mr-2" />
                      Challenge
                    </h4>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-body-medium text-foreground mb-2 uppercase tracking-wide flex items-center">
                      <Icon name="LightBulbIcon" size={14} className="text-primary mr-2" />
                      Solution
                    </h4>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-body-medium text-foreground mb-3 uppercase tracking-wide">
                    Verified Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((result, idx) =>
                  <div key={idx} className="text-center p-3 bg-muted rounded-lg">
                        <Icon name={result.icon as any} size={20} className="text-primary mx-auto mb-2" />
                        <p className="text-lg font-headline font-headline-medium text-foreground mb-1">
                          {result.value}
                        </p>
                        <p className="text-xs text-text-secondary font-body">{result.metric}</p>
                      </div>
                  )}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-text-secondary font-body">
                    <Icon name="CalendarIcon" size={14} />
                    <span>Verified: {study.verificationDate}</span>
                  </div>
                  <button
                  onClick={() => setSelectedStudy(study.id)}
                  className="flex items-center space-x-2 text-sm font-body-medium text-primary hover:text-primary/80 transition-smooth">

                    <Icon name="LinkIcon" size={16} />
                    <span>View Proof</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {selectedStudy &&
        <div className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-xl max-w-2xl w-full p-8 relative">
              <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-smooth">

                <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
              </button>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="ShieldCheckIcon" size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-headline-medium text-foreground">
                    Live Proof Verification
                  </h3>
                  <p className="text-sm text-text-secondary font-body">
                    Blockchain-anchored evidence
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-body-medium text-foreground">TrustStrip Viewer</span>
                  <span className="text-xs text-success font-body-medium flex items-center">
                    <Icon name="CheckCircleIcon" size={14} variant="solid" className="mr-1" />
                    Verified
                  </span>
                </div>
                <div className="bg-card rounded p-4 font-mono text-xs text-text-secondary break-all">
                  {caseStudies.find((s) => s.id === selectedStudy)?.proofLink}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="DocumentCheckIcon" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-body-medium text-foreground mb-1">Merkle Root Hash</p>
                    <p className="text-xs text-text-secondary font-mono">0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="ClockIcon" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-body-medium text-foreground mb-1">Anchor Timestamp</p>
                    <p className="text-xs text-text-secondary font-body">2024-11-21 16:34:34 UTC</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CubeIcon" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-body-medium text-foreground mb-1">Blockchain Network</p>
                    <p className="text-xs text-text-secondary font-body">Ethereum Mainnet (Block #18,456,789)</p>
                  </div>
                </div>
              </div>

              <button
              onClick={() => setSelectedStudy(null)}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta-bold hover:bg-primary/90 transition-smooth">

                Close Proof Viewer
              </button>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default CaseStudiesSection;