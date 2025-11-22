import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface IndustrySolution {
  id: string;
  industry: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
  frameworks: string[];
  image: string;
  alt: string;
  deployments: string;
}

interface IndustrySolutionsSectionProps {
  isVisible: boolean;
}

const IndustrySolutionsSection = ({ isVisible }: IndustrySolutionsSectionProps) => {
  const industrySolutions: IndustrySolution[] = [
  {
    id: 'mining',
    industry: 'Mining & Extraction',
    icon: 'CubeIcon',
    description: 'Verify environmental compliance across extraction sites with IoT-powered monitoring and blockchain-anchored proof.',
    challenges: [
    'Remote site monitoring complexity',
    'Water usage and contamination tracking',
    'Rehabilitation verification requirements',
    'Multi-jurisdictional compliance'],

    solutions: [
    'Real-time emissions monitoring at extraction points',
    'Water quality verification with IoT sensors',
    'Land rehabilitation progress tracking',
    'Automated regulatory reporting'],

    frameworks: ['GRI 303', 'GRI 304', 'ICMM Standards', 'EITI Compliance'],
    image: "https://images.unsplash.com/photo-1524229433710-1c59ace344c7",
    alt: 'Large open-pit mining operation with heavy machinery and environmental monitoring equipment visible',
    deployments: '12 active mining sites'
  },
  {
    id: 'manufacturing',
    industry: 'Manufacturing',
    icon: 'WrenchScrewdriverIcon',
    description: 'Optimize production efficiency while maintaining verifiable environmental standards across global facilities.',
    challenges: [
    'Energy-intensive production processes',
    'Complex supply chain emissions',
    'Waste stream management',
    'Multi-facility coordination'],

    solutions: [
    'Production line energy optimization',
    'Supplier carbon footprint verification',
    'Circular economy material tracking',
    'Facility-level ESG dashboards'],

    frameworks: ['ISO 14001', 'GHG Protocol', 'SASB Standards', 'CDP Reporting'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4bf99c9-1763743368399.png",
    alt: 'Modern manufacturing facility floor with automated production lines and digital monitoring systems',
    deployments: '47 manufacturing plants'
  },
  {
    id: 'pharma',
    industry: 'Pharmaceutical',
    icon: 'BeakerIcon',
    description: 'Ensure regulatory compliance and sustainability across R&D, production, and distribution with audit-grade verification.',
    challenges: [
    'Strict regulatory requirements',
    'Cold chain environmental impact',
    'Clinical trial sustainability',
    'Hazardous waste management'],

    solutions: [
    'GMP-compliant environmental monitoring',
    'Cold chain carbon footprint tracking',
    'Lab sustainability verification',
    'Pharmaceutical waste stream validation'],

    frameworks: ['FDA Guidelines', 'EMA Standards', 'GRI 306', 'SASB HC'],
    image: "https://images.unsplash.com/photo-1707944745905-1ba3ef7c0c83",
    alt: 'Pharmaceutical research laboratory with scientists in white coats working with advanced equipment and sustainability monitoring',
    deployments: '23 pharma facilities'
  },
  {
    id: 'utilities',
    industry: 'Utilities & Energy',
    icon: 'BoltIcon',
    description: 'Verify renewable energy generation and grid sustainability with real-time monitoring and blockchain proof.',
    challenges: [
    'Renewable energy certificate fraud',
    'Grid emissions attribution',
    'Distributed generation tracking',
    'Energy storage verification'],

    solutions: [
    'Real-time renewable energy verification',
    'Smart meter integration for emissions tracking',
    'Battery storage sustainability monitoring',
    'Grid carbon intensity calculation'],

    frameworks: ['RE100', 'SBTi', 'TCFD', 'GHG Protocol Scope 2'],
    image: "https://images.unsplash.com/photo-1728073236144-92ad07b90545",
    alt: 'Wind turbine farm with solar panels in foreground and digital monitoring station showing real-time energy data',
    deployments: '156 renewable sites'
  },
  {
    id: 'real-estate',
    industry: 'Real Estate & Construction',
    icon: 'BuildingOffice2Icon',
    description: 'Track building sustainability from construction through operations with comprehensive environmental verification.',
    challenges: [
    'Construction emissions tracking',
    'Building operations optimization',
    'Tenant sustainability engagement',
    'Green building certification'],

    solutions: [
    'Construction phase carbon accounting',
    'Smart building energy monitoring',
    'Tenant utility verification',
    'LEED/BREEAM compliance automation'],

    frameworks: ['LEED', 'BREEAM', 'GRESB', 'WELL Building Standard'],
    image: "https://images.unsplash.com/photo-1725432211961-1134f6079325",
    alt: 'Modern sustainable office building with green architecture features and digital environmental monitoring displays',
    deployments: '89 building portfolios'
  },
  {
    id: 'public-sector',
    industry: 'Public Sector',
    icon: 'BuildingLibraryIcon',
    description: 'Enable transparent government sustainability tracking with public accountability and citizen engagement tools.',
    challenges: [
    'Public accountability requirements',
    'Multi-agency coordination',
    'Citizen transparency demands',
    'Budget constraints'],

    solutions: [
    'Public-facing sustainability dashboards',
    'Inter-agency data sharing protocols',
    'Citizen reporting integration',
    'Cost-effective verification workflows'],

    frameworks: ['GRI Public Sector', 'UN SDGs', 'ICLEI Standards', 'C40 Cities'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_195e74612-1763743355374.png",
    alt: 'Government building with digital sustainability display showing public environmental performance metrics',
    deployments: '34 government agencies'
  }];


  if (!isVisible) return null;

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Solutions by Industry
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Sector-specific ESG verification frameworks addressing unique environmental challenges and regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industrySolutions.map((solution) =>
          <div
            key={solution.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-card transition-smooth group">

              <div className="relative aspect-[16/9] overflow-hidden">
                <AppImage
                src={solution.image}
                alt={solution.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name={solution.icon as any} size={20} className="text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-headline font-headline-medium text-white">
                        {solution.industry}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-text-secondary font-body text-sm mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-body-medium text-foreground mb-3 uppercase tracking-wide flex items-center">
                    <Icon name="ExclamationTriangleIcon" size={14} className="text-warning mr-2" />
                    Key Challenges
                  </h4>
                  <ul className="space-y-2">
                    {solution.challenges.slice(0, 3).map((challenge, idx) =>
                  <li key={idx} className="flex items-start space-x-2 text-xs text-text-secondary font-body">
                        <span className="text-warning mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-body-medium text-foreground mb-3 uppercase tracking-wide flex items-center">
                    <Icon name="CheckCircleIcon" size={14} className="text-success mr-2" />
                    Our Solutions
                  </h4>
                  <ul className="space-y-2">
                    {solution.solutions.slice(0, 3).map((sol, idx) =>
                  <li key={idx} className="flex items-start space-x-2 text-xs text-text-secondary font-body">
                        <Icon name="CheckIcon" size={12} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{sol}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-body-medium text-foreground uppercase tracking-wide">
                      Supported Frameworks
                    </span>
                    <span className="text-xs text-primary font-body-medium">
                      {solution.deployments}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {solution.frameworks.map((framework, idx) =>
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-body rounded">

                        {framework}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default IndustrySolutionsSection;