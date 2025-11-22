import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-white">
            Ready to Transform Your ESG Verification?
          </h2>
          <p className="text-lg text-white/90 font-body">
            Join leading enterprises using EcoVeraZ to replace sustainability claims with verifiable proof. Request a personalized demo and see the platform in action with your data.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-primary font-cta-bold rounded-lg hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth inline-flex items-center space-x-2">
              <span>Request Interactive Demo</span>
              <Icon name="PlayIcon" size={20} className="text-current" variant="solid" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-cta-bold rounded-lg hover:bg-white/10 transition-smooth inline-flex items-center space-x-2">
              <span>Talk to Solutions Team</span>
              <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-current" />
            </button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-white" variant="solid" />
              <span className="text-sm font-body">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="text-white" />
              <span className="text-sm font-body">30-minute setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={20} className="text-white" variant="solid" />
              <span className="text-sm font-body">Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;