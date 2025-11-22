import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PlatformHero from './components/PlatformHero';
import PlatformStats from './components/PlatformStats';
import PlatformTabs from './components/PlatformTabs';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import InteractiveDemo from './components/InteractiveDemo';
import IntegrationPartners from './components/IntegrationPartners';
import TechnicalResources from './components/TechnicalResources';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Platform Overview - EcoVeraZ',
  description: 'Explore EcoVeraZ comprehensive ESG verification platform featuring IoT device integrity, blockchain anchoring, AI validation, and automated certification programs. Transform environmental data from claims to verifiable proof.',
};

export default function PlatformOverviewPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PlatformHero />
      <PlatformStats />
      <PlatformTabs />
      <TechnicalArchitecture />
      <InteractiveDemo />
      <IntegrationPartners />
      <TechnicalResources />
      <CTASection />
      <Footer />
    </main>
  );
}