import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PlatformHero from './components/PlatformHero';
import PlatformStats from './components/PlatformStats';
import SocialProofCarousel from '@/app/homepage/components/SocialProofCarousel';
import TechnicalArchitecture from './components/TechnicalArchitecture';


import TechnicalResources from './components/TechnicalResources';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';

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
      <SocialProofCarousel />
      {/* PlatformTabs removed */}
      <TechnicalArchitecture />
      {/* InteractiveDemo removed */}
      {/* IntegrationPartners removed */}
      <TechnicalResources />
      <CTASection />
      <Footer />
    </main>
  );
}