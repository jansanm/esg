import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

type SolutionData = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: { title: string; description: string }[];
  cta: string;
};

const solutions: Record<string, SolutionData> = {
  'esg-management': {
    title: 'ESG Management',
    description: 'Comprehensive ESG data management and reporting platform for enterprise sustainability. Track, measure, and report on all your ESG metrics in one unified platform.',
    icon: 'ShieldCheckIcon',
    features: [
      'Real-time Data Collection',
      'Automated Reporting Frameworks (GRI, SASB, TCFD)',
      'Multi-stakeholder Collaboration',
      'Audit Trail & Data Lineage'
    ],
    benefits: [
      { title: 'Centralized Data', description: 'Eliminate silos by unifying all ESG data points into a single source of truth.' },
      { title: 'Regulatory Compliance', description: 'Stay ahead of evolving regulations with automatically updated reporting standards.' },
      { title: 'Investor Confidence', description: 'Provide transparent, verifiable data that builds trust with stakeholders.' }
    ],
    cta: 'Start Managing ESG'
  },
  'risk-management': {
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate ESG-related risks across your operations and supply chain. Proactive risk monitoring and compliance management.',
    icon: 'BuildingOfficeIcon',
    features: [
      'Supply Chain Risk Scanning',
      'Climate Risk Modeling',
      'Regulatory Gap Analysis',
      'Incident Management & Resolution'
    ],
    benefits: [
      { title: 'Proactive Mitigation', description: 'Identify potential vulnerabilities before they become critical issues.' },
      { title: 'Resilient Operations', description: 'Build operational resilience against climate and social disruptions.' },
      { title: 'Brand Protection', description: 'Safeguard your reputation by maintaining high compliance standards.' }
    ],
    cta: 'Assess Your Risks'
  },
  'life-cycle-assessment': {
    title: 'Life Cycle Assessment',
    description: "Analyze environmental impacts throughout your product's entire lifecycle from cradle to grave. Comprehensive LCA reporting and optimization.",
    icon: 'ChartBarIcon',
    features: [
      'Cradle-to-Grave Analysis',
      'Carbon Footprint Calculation',
      'Impact Simulation',
      'Circular Economy Metrics'
    ],
    benefits: [
      { title: 'Product optimization', description: 'Identify hotspots for improvement in your product design and manufacturing.' },
      { title: 'Environmental Labels', description: 'Generate data required for EPDs and eco-labels.' },
      { title: 'Cost Reduction', description: 'Find efficiencies that reduce both environmental impact and operational costs.' }
    ],
    cta: 'Optimize Lifecycle'
  }
};

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    slug,
  }));
}

export default function SolutionPage({ params }: PageProps) {
  const { slug } = params;
  const data = solutions[slug];

  if (!data) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-gray-900 to-gray-900 z-0"></div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl mb-8 border border-white/10 backdrop-blur-sm">
            <Icon name={data.icon} className="h-10 w-10 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-900/20">
              {data.cta}
            </button>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">01</span>
                Key Capabilities
              </h2>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <ul className="space-y-6">
                  {data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-white p-1 rounded-full border border-emerald-100 shadow-sm">
                        <Icon name="CheckIcon" className="h-5 w-5 text-emerald-500" />
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm">02</span>
                Business Impact
              </h2>
              <div className="space-y-6">
                {data.benefits.map((benefit, idx) => (
                  <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your {data.title.toLowerCase()}?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join leading enterprises using EcoVeraZ to insure their data integrity.
            </p>
            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                Get Started Now
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
