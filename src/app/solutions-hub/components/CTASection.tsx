import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-primary-foreground mb-6">
            Ready to Transform Your ESG Verification?
          </h2>
          <p className="text-lg text-primary-foreground/90 font-body mb-8 leading-relaxed">
            Join industry leaders who have replaced sustainability claims with verifiable proof. See how EcoVeraZ can deliver audit-grade verification for your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing-and-roi-calculator"
              className="w-full sm:w-auto px-8 py-4 bg-card text-primary rounded-lg font-cta-bold hover:bg-card/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center justify-center space-x-2"
            >
              <Icon name="CalculatorIcon" size={20} />
              <span>Calculate Your ROI</span>
            </Link>
            <Link
              href="/platform-overview"
              className="w-full sm:w-auto px-8 py-4 bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/20 rounded-lg font-cta-bold hover:bg-primary-foreground/20 hover:-translate-y-0.5 transition-smooth flex items-center justify-center space-x-2"
            >
              <Icon name="PlayIcon" size={20} variant="solid" />
              <span>Watch Platform Demo</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '361+', label: 'Active Deployments', icon: 'BuildingOfficeIcon' },
              { value: '89%', label: 'Faster Compliance', icon: 'ClockIcon' },
              { value: '100%', label: 'Verified Proof', icon: 'ShieldCheckIcon' },
              { value: '24/7', label: 'Enterprise Support', icon: 'ChatBubbleLeftRightIcon' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon as any} size={24} className="text-primary-foreground" />
                </div>
                <p className="text-2xl font-headline font-headline-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/80 font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;