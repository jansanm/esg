import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProofInteractive from './components/ProofInteractive';

export const metadata: Metadata = {
  title: 'Proof & Case Studies - EcoVeraZ Platform',
  description: 'Explore verified ESG case studies with blockchain-anchored evidence. Real-world deployments across mining, manufacturing, pharmaceutical, utilities, real estate, and public sectors with measurable ROI and live proof inspection.',
};

export default function ProofAndCaseStudiesPage() {
  return (
    <>
      <Header />
      <ProofInteractive />
    </>
  );
}