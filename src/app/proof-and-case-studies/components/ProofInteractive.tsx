'use client';

import { useState, useEffect } from 'react';
import ProofHero from './ProofHero';
import IndustryFilter from './IndustryFilter';
import CaseStudyCard from './CaseStudyCarousel';
import TrustStripViewer from './TrustStripView';
import ROIMetrics from './ROIMetrics';
import ProofCTA from './ProofCTA';
import Icon from '@/components/ui/AppIcon';


interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  company: string;
  image: string;
  alt: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  proofBadge: string;
  anchorReceipt: string;
  verificationDate: string;
}

const ProofInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const allCaseStudies: CaseStudy[] = [
  {
    id: 'mining-emissions-001',
    title: 'Real-Time Emissions Monitoring at Scale',
    industry: 'Mining',
    company: 'Global Mining Corp (Anonymized)',
    image: "https://images.unsplash.com/photo-1559774945-138787f3a94e",
    alt: 'Large open-pit mining operation with heavy machinery and terraced excavation levels under clear blue sky',
    description: 'Deployed 150+ IoT sensors across mining operations to capture real-time emissions data with blockchain-anchored verification, reducing audit time by 68%.',
    metrics: [
    { label: 'Audit Time', value: '-68%', icon: 'ClockIcon' },
    { label: 'Cost Savings', value: '$18K', icon: 'CurrencyDollarIcon' },
    { label: 'Accuracy', value: '99.7%', icon: 'CheckCircleIcon' }],

    proofBadge: 'verified-mining-001',
    anchorReceipt: '0x7a8f9e2b4c1d3e5f',
    verificationDate: 'Nov 2025'
  },
  {
    id: 'manufacturing-supply-002',
    title: 'End-to-End Supply Chain Verification',
    industry: 'Manufacturing',
    company: 'Industrial Manufacturing Inc (Anonymized)',
    image: "https://images.unsplash.com/photo-1681981689421-214f9da55267",
    alt: 'Modern automated manufacturing assembly line with robotic arms and conveyor systems in clean industrial facility',
    description: 'Implemented comprehensive supply chain tracking with automated verification at each stage, achieving 100% traceability and 45% reduction in compliance costs.',
    metrics: [
    { label: 'Traceability', value: '100%', icon: 'LinkIcon' },
    { label: 'Cost Reduction', value: '-45%', icon: 'ArrowTrendingDownIcon' },
    { label: 'Compliance', value: '+52%', icon: 'ShieldCheckIcon' }],

    proofBadge: 'verified-manufacturing-002',
    anchorReceipt: '0x3b4c5d6e7f8a9b0c',
    verificationDate: 'Oct 2025'
  },
  {
    id: 'pharma-coldchain-003',
    title: 'Pharmaceutical Cold Chain Integrity',
    industry: 'Pharmaceutical',
    company: 'PharmaTech Solutions (Anonymized)',
    image: "https://images.unsplash.com/photo-1707944745905-1ba3ef7c0c83",
    alt: 'Pharmaceutical laboratory with scientist in white coat examining vials in temperature-controlled storage unit',
    description: 'Continuous temperature monitoring with tamper-proof verification across global distribution network, ensuring product integrity and regulatory compliance.',
    metrics: [
    { label: 'Uptime', value: '99.9%', icon: 'SignalIcon' },
    { label: 'Violations', value: '-87%', icon: 'ExclamationTriangleIcon' },
    { label: 'ROI', value: '420%', icon: 'ChartBarIcon' }],

    proofBadge: 'verified-pharma-003',
    anchorReceipt: '0x5d6e7f8a9b0c1d2e',
    verificationDate: 'Sep 2025'
  },
  {
    id: 'utilities-renewable-004',
    title: 'Renewable Energy Certification',
    industry: 'Utilities',
    company: 'Green Energy Utilities (Anonymized)',
    image: "https://images.unsplash.com/photo-1613665641266-7bb90dd86a8b",
    alt: 'Wind farm with multiple white turbines against sunset sky in rolling green hills landscape',
    description: 'Automated renewable energy credit verification with real-time generation tracking, increasing carbon credit yield by 34% through improved accuracy.',
    metrics: [
    { label: 'Credit Yield', value: '+34%', icon: 'SparklesIcon' },
    { label: 'Verification', value: 'Real-time', icon: 'BoltIcon' },
    { label: 'Accuracy', value: '99.8%', icon: 'CheckBadgeIcon' }],

    proofBadge: 'verified-utilities-004',
    anchorReceipt: '0x7f8a9b0c1d2e3f4a',
    verificationDate: 'Nov 2025'
  },
  {
    id: 'realestate-building-005',
    title: 'Smart Building Performance Verification',
    industry: 'Real Estate',
    company: 'Commercial Properties Group (Anonymized)',
    image: "https://images.unsplash.com/photo-1705691026265-2f5d78a5e629",
    alt: 'Modern glass skyscraper reflecting blue sky with geometric architectural design in urban business district',
    description: 'Comprehensive building energy monitoring with automated ESG reporting, achieving LEED Platinum certification with 40% faster verification process.',
    metrics: [
    { label: 'Energy Savings', value: '28%', icon: 'BoltIcon' },
    { label: 'Certification', value: 'LEED Platinum', icon: 'StarIcon' },
    { label: 'Time Saved', value: '-40%', icon: 'ClockIcon' }],

    proofBadge: 'verified-realestate-005',
    anchorReceipt: '0x9b0c1d2e3f4a5b6c',
    verificationDate: 'Oct 2025'
  },
  {
    id: 'public-sustainability-006',
    title: 'Municipal Sustainability Reporting',
    industry: 'Public Sector',
    company: 'City Government (Anonymized)',
    image: "https://images.unsplash.com/photo-1558218368-d3a02c076775",
    alt: 'City skyline at dusk with illuminated buildings and urban infrastructure along waterfront',
    description: 'City-wide environmental monitoring with public transparency dashboard, enabling real-time citizen access to verified sustainability metrics.',
    metrics: [
    { label: 'Transparency', value: '100%', icon: 'EyeIcon' },
    { label: 'Public Trust', value: '+65%', icon: 'HandThumbUpIcon' },
    { label: 'Compliance', value: '100%', icon: 'DocumentCheckIcon' }],

    proofBadge: 'verified-public-006',
    anchorReceipt: '0x1d2e3f4a5b6c7d8e',
    verificationDate: 'Sep 2025'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    if (selectedIndustry === 'all') {
      setFilteredCaseStudies(allCaseStudies);
    } else {
      const filtered = allCaseStudies.filter(
        (study) => study.industry.toLowerCase() === selectedIndustry.toLowerCase()
      );
      setFilteredCaseStudies(filtered);
    }
  }, [selectedIndustry, isHydrated]);

  const handleFilterChange = (industryId: string) => {
    setSelectedIndustry(industryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <ProofHero />
      <IndustryFilter onFilterChange={handleFilterChange} />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-headline font-headline-bold text-foreground">
              {isHydrated ?
              selectedIndustry === 'all' ? 'All Case Studies' :
              `${selectedIndustry.charAt(0).toUpperCase() + selectedIndustry.slice(1)} Case Studies` :
              'Loading...'}
            </h2>
            <div className="text-sm text-text-secondary font-body">
              {isHydrated ? `${filteredCaseStudies.length} results` : 'Loading...'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isHydrated ? filteredCaseStudies : allCaseStudies.slice(0, 6)).map((caseStudy) =>
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            )}
          </div>

          {isHydrated && filteredCaseStudies.length === 0 &&
          <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MagnifyingGlassIcon" size={32} className="text-text-secondary" />
              </div>
              <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
                No case studies found
              </h3>
              <p className="text-text-secondary font-body">
                Try selecting a different industry filter
              </p>
            </div>
          }
        </div>
      </section>

      <TrustStripViewer />
      <ROIMetrics />
      <ProofCTA />
    </div>);

};

export default ProofInteractive;