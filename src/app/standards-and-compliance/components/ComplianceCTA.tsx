import Icon from '@/components/ui/AppIcon';

interface ComplianceCTAProps {
  className?: string;
}

const ComplianceCTA = ({ className = '' }: ComplianceCTAProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="RocketLaunchIcon" size={20} className="text-white" variant="solid" />
            <span className="text-sm font-body-medium text-white">Enterprise-Ready Compliance</span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-headline font-headline-bold text-white mb-6">
            Ready to Transform Your Compliance Process?
          </h2>

          <p className="text-lg lg:text-xl text-white/90 font-body mb-10 max-w-3xl mx-auto">
            Join leading enterprises using EcoVeraZ to automate framework compliance, reduce audit time by 75%, and build investor confidence with blockchain-verified evidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-cta-bold rounded-lg hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center justify-center space-x-2">
              <span>Schedule Compliance Demo</span>
              <Icon name="CalendarIcon" size={20} className="text-current" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-cta border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white transition-smooth flex items-center justify-center space-x-2">
              <span>Download Framework Guide</span>
              <Icon name="ArrowDownTrayIcon" size={20} className="text-current" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-headline font-headline-bold text-white mb-2">75%</div>
              <div className="text-sm text-white/80 font-body">Audit Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-headline-bold text-white mb-2">4+</div>
              <div className="text-sm text-white/80 font-body">Major Frameworks Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-headline-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/80 font-body">Blockchain-Verified Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCTA;