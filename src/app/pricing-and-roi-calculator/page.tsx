import type { Metadata } from 'next';
import Header from '@/components/common/Header';

import PricingRequestSection from './components/PricingRequestSection';
import Icon from '@/components/ui/AppIcon';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Pricing & ROI Calculator - EcoVeraZ',
  description: 'Transparent pricing tiers and interactive ROI calculator for EcoVeraZ ESG verification platform. Calculate your audit-time reduction, cost savings, and carbon credit yield improvements with our enterprise-grade verification solution.',
};

export default function PricingAndROICalculatorPage() {
  const benefits = [
    {
      icon: 'ShieldCheckIcon',
      title: 'No Hidden Fees',
      description: 'All costs transparent upfront with no surprise charges',
    },
    {
      icon: 'ClockIcon',
      title: 'Flexible Contracts',
      description: 'Monthly or annual billing with no long-term lock-in',
    },
    {
      icon: 'CurrencyDollarIcon',
      title: 'Volume Discounts',
      description: 'Enterprise pricing scales with your verification needs',
    },
    {
      icon: 'ChartBarIcon',
      title: 'ROI Guarantee',
      description: 'Measurable value delivery or money-back assurance',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full">
        <PricingRequestSection />

        <section className="py-16 bg-card border-y border-border mt-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-card transition-smooth"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-headline font-headline-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-body text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-headline-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg font-body text-text-secondary max-w-3xl mx-auto">
                Common questions about EcoVeraZ pricing and ROI
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: 'What is included in the monthly pricing?',
                  answer: 'All plans include IoT sensor integration, blockchain anchoring, compliance reporting, framework alignment, API access, and technical support. Higher tiers add advanced analytics, custom mapping, and dedicated account management.',
                },
                {
                  question: 'How is ROI calculated?',
                  answer: 'ROI calculations factor in audit-time reduction (65% average), cost savings from automated verification (45% average), improved carbon credit yields (18% average), and reduced compliance risk. Industry-specific multipliers adjust for sector complexity.',
                },
                {
                  question: 'Can I switch plans after starting?',
                  answer: 'Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle. No penalties for plan changes.',
                },
                {
                  question: 'What is the pilot program guarantee?',
                  answer: 'Our 90-day pilot program includes a full refund if EcoVeraZ does not deliver measurable ROI through reduced audit times, cost savings, or improved credit yields. We stand behind our proof-first approach.',
                },
                {
                  question: 'Are there setup or implementation fees?',
                  answer: 'Pilot and Enterprise plans include standard implementation. Global Scale deployments may have custom setup fees based on complexity, but these are transparent and agreed upfront.',
                },
                {
                  question: 'How does pricing scale for large enterprises?',
                  answer: 'Global Scale pricing is customized based on site count, sensor volume, framework requirements, and support needs. Volume discounts apply, and we offer flexible payment terms for multi-year commitments.',
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-smooth group"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-headline font-headline-bold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      className="text-text-secondary group-open:rotate-180 transition-smooth flex-shrink-0"
                    />
                  </summary>
                  <p className="text-sm font-body text-text-secondary mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-br from-primary via-green-700 to-primary overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-headline font-headline-bold text-white mb-6 leading-tight">
                Ready to transform your ESG Monitoring, Reporting and Verification?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent text-white font-bold text-lg hover:bg-white/10 transition-all duration-200 border-2 border-white">
                  Request Demo
                </button>
              </div>

              <div className="mt-12 pt-12 border-t border-white/20">
                <div className="grid sm:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon name="ClockIcon" size={24} className="text-white" />
                      <span className="text-2xl font-headline font-headline-bold text-white">5 min</span>
                    </div>
                    <p className="text-sm text-white/80 font-body">Setup Time</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon name="ShieldCheckIcon" size={24} className="text-white" variant="solid" />
                      <span className="text-2xl font-headline font-headline-bold text-white">Zero</span>
                    </div>
                    <p className="text-sm text-white/80 font-body">Integration Risk</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon name="CurrencyDollarIcon" size={24} className="text-white" />
                      <span className="text-2xl font-headline font-headline-bold text-white">80%</span>
                    </div>
                    <p className="text-sm text-white/80 font-body">Cost Reduction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}