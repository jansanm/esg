import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import StandardsHero from './components/StandardsHero';
import FrameworksOverview from './components/FrameworksOverview';
import ComplianceRoadmap from './components/ComplianceRoadmap';
import FrameworkMapping from './components/FrameworkMapping';
import SecurityCertifications from './components/SecurityCertifications';
import ExportCapabilities from './components/ExportCapabilities';
import ComplianceCTA from './components/ComplianceCTA';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Standards & Compliance - EcoVeraZ',
  description: 'Comprehensive framework alignment with GHG Protocol, GRI, ESRS, and SEC climate disclosure. Enterprise-grade security with SOC 2, ISO 27001, and audit-ready export capabilities.',
};

export default function StandardsAndCompliancePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <StandardsHero />
      <FrameworksOverview />
      <ComplianceRoadmap />
      <FrameworkMapping />
      <SecurityCertifications />
      <ExportCapabilities />
      <ComplianceCTA />
      <Footer />
    </main>
  );
}