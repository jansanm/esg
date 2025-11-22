import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface RoleSolution {
  id: string;
  role: string;
  icon: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  useCases: string[];
  image: string;
  alt: string;
  proofMetric: string;
}

interface RoleSolutionsSectionProps {
  isVisible: boolean;
}

const RoleSolutionsSection = ({ isVisible }: RoleSolutionsSectionProps) => {
  const roleSolutions: RoleSolution[] = [
  {
    id: 'sustainability',
    role: 'Sustainability Officers',
    icon: 'SparklesIcon',
    tagline: 'Audit-Grade Verification at Scale',
    description: 'Replace manual ESG reporting with automated, blockchain-anchored verification that meets investor and regulatory scrutiny.',
    keyBenefits: [
    'Reduce audit preparation time by 75%',
    'Eliminate greenwashing risk with verifiable proof',
    'Native GHG Protocol and GRI compliance',
    'Real-time dashboard for stakeholder reporting'],

    useCases: [
    'Scope 1, 2, 3 emissions verification',
    'Renewable energy certificate validation',
    'Supply chain sustainability tracking',
    'ESG disclosure automation'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7570011-1763300777467.png",
    alt: 'Professional woman in business attire reviewing sustainability data on tablet in modern office with green plants',
    proofMetric: '89% faster compliance reporting'
  },
  {
    id: 'operations',
    role: 'Operations & Procurement',
    icon: 'CogIcon',
    tagline: 'Real-Time Environmental Intelligence',
    description: 'Gain instant visibility into operational environmental performance with IoT-powered monitoring and automated verification.',
    keyBenefits: [
    'Live monitoring of energy and emissions',
    'Automated supplier verification workflows',
    'Cost reduction through efficiency insights',
    'Integration with existing ERP systems'],

    useCases: [
    'Facility energy optimization',
    'Supplier environmental compliance',
    'Carbon footprint reduction tracking',
    'Waste management verification'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f433071a-1763743355902.png",
    alt: 'Industrial facility manager with hard hat examining digital monitoring dashboard showing environmental metrics',
    proofMetric: '62% reduction in verification costs'
  },
  {
    id: 'investors',
    role: 'Investors & Financial Institutions',
    icon: 'ChartBarIcon',
    tagline: 'Investment-Grade ESG Data',
    description: 'Make confident investment decisions with verified environmental data backed by blockchain proof and audit trails.',
    keyBenefits: [
    'Verified ESG metrics for portfolio analysis',
    'Risk assessment with tamper-proof evidence',
    'Standardized reporting across investments',
    'Regulatory compliance for sustainable finance'],

    useCases: [
    'ESG due diligence for acquisitions',
    'Green bond verification',
    'Portfolio carbon accounting',
    'Impact investment validation'],

    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    alt: 'Financial analyst in suit reviewing ESG investment data on multiple computer screens in modern trading floor',
    proofMetric: '94% investor confidence increase'
  },
  {
    id: 'regulators',
    role: 'Regulators & Standard Bodies',
    icon: 'ShieldCheckIcon',
    tagline: 'Scalable Compliance Monitoring',
    description: 'Enable transparent, efficient oversight with automated verification frameworks and public accountability systems.',
    keyBenefits: [
    'Real-time compliance monitoring',
    'Transparent audit trails for enforcement',
    'Standardized verification protocols',
    'Public disclosure with privacy controls'],

    useCases: [
    'Environmental permit compliance',
    'Carbon credit registry management',
    'Public sector sustainability tracking',
    'Industry benchmark establishment'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105d46d62-1763743367114.png",
    alt: 'Government official in formal attire reviewing compliance documents with digital verification stamps in office',
    proofMetric: '78% faster violation detection'
  },
  {
    id: 'procurement',
    role: 'Procurement Teams',
    icon: 'ShoppingCartIcon',
    tagline: 'Verified Supplier Networks',
    description: 'Build sustainable supply chains with automated vendor verification and continuous environmental monitoring.',
    keyBenefits: [
    'Automated supplier ESG scoring',
    'Real-time supply chain visibility',
    'Risk mitigation through verification',
    'Procurement policy enforcement'],

    useCases: [
    'Supplier environmental audits',
    'Sustainable sourcing verification',
    'Carbon footprint tracking by vendor',
    'Circular economy material validation'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113c0d146-1763743357018.png",
    alt: 'Procurement manager reviewing supplier sustainability certifications on laptop in warehouse with inventory',
    proofMetric: '85% supplier compliance improvement'
  },
  {
    id: 'developers',
    role: 'Developers & Integrators',
    icon: 'CodeBracketIcon',
    tagline: 'API-First Verification Platform',
    description: 'Build custom ESG solutions with comprehensive APIs, SDKs, and developer tools for seamless integration.',
    keyBenefits: [
    'RESTful API with comprehensive documentation',
    'Webhook support for real-time updates',
    'Sample code and integration guides',
    'Sandbox environment for testing'],

    useCases: [
    'Custom dashboard development',
    'ERP system integration',
    'Mobile app connectivity',
    'Third-party platform extensions'],

    image: "https://images.unsplash.com/photo-1681583484651-281ae2defb17",
    alt: 'Software developer working on dual monitors showing API documentation and code editor in modern tech office',
    proofMetric: '3-day average integration time'
  }];


  if (!isVisible) return null;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Solutions by Role
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Tailored verification workflows designed for the unique needs of every stakeholder in the ESG ecosystem.
          </p>
        </div>

        <div className="space-y-12">
          {roleSolutions.map((solution, index) =>
          <div
            key={solution.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-card border border-border rounded-2xl p-8 lg:p-12 hover:border-primary hover:shadow-card transition-smooth`}>

              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <AppImage
                  src={solution.image}
                  alt={solution.alt}
                  className="w-full h-full object-cover" />

                  <div className="absolute top-4 right-4 bg-success text-success-foreground px-4 py-2 rounded-lg text-sm font-body-medium shadow-lg">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="inline mr-2" />
                    {solution.proofMetric}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={solution.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-headline-medium text-foreground">
                      {solution.role}
                    </h3>
                    <p className="text-primary text-sm font-body-medium">{solution.tagline}</p>
                  </div>
                </div>

                <p className="text-text-secondary font-body mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-body-medium text-foreground mb-3 uppercase tracking-wide">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {solution.keyBenefits.map((benefit, idx) =>
                  <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary font-body">
                        <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-body-medium text-foreground mb-3 uppercase tracking-wide">
                    Common Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.useCases.map((useCase, idx) =>
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-muted text-text-primary text-xs font-body rounded-full">

                        {useCase}
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

export default RoleSolutionsSection;