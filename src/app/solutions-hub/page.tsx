import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SolutionsInteractive from './components/SolutionsInteractive';

export const metadata: Metadata = {
  title: 'Solutions Hub - EcoVeraZ Platform',
  description: 'Discover role-specific ESG verification solutions and industry-tailored frameworks. From sustainability officers to investors, explore how EcoVeraZ transforms environmental claims into verifiable evidence with proven outcomes.',
};

export default function SolutionsHubPage() {
  return (
    <>
      <Header />
      <SolutionsInteractive />
    </>
  );
}