import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import AlignmentStrip from './components/AlignmentStrip';
import LiveDashboard3D from './components/LiveDashboard3D';
import TrustStrip from './components/TrustStrip';
import RoleBasedNavigation from './components/RoleBasedNav';
import SocialProofCarousel from './components/SocialProofCarousel';
import FeaturesOverview from './components/FeaturesOverview';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'EcoVeraZ - Enterprise ESG Verification Platform | Blockchain-Anchored Proof',
  description: 'Transform environmental data verification from claims-based to proof-based through blockchain-anchored evidence. Audit-grade ESG verification trusted by 500+ enterprises globally.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AlignmentStrip />
        <LiveDashboard3D />
        <TrustStrip />
        <RoleBasedNavigation />
        <SocialProofCarousel />
        <FeaturesOverview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}