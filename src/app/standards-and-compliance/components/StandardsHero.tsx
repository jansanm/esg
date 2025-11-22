import Icon from '@/components/ui/AppIcon';

interface StandardsHeroProps {
  className?: string;
}

const StandardsHero = ({ className = '' }: StandardsHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-body-medium text-primary">Audit-Grade Compliance</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-headline-bold text-foreground mb-6">
            Global Standards Alignment & Compliance Framework
          </h1>
          
          <p className="text-lg lg:text-xl text-text-secondary font-body mb-8 max-w-3xl mx-auto">
            Native support for GHG Protocol, GRI, ESRS, and SEC climate disclosure requirements. Transform complex compliance into automated verification with blockchain-anchored evidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center justify-center space-x-2">
              <span>Download Framework Mapping</span>
              <Icon name="ArrowDownTrayIcon" size={20} className="text-current" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-card text-foreground font-cta border-2 border-border rounded-lg hover:border-primary hover:text-primary transition-smooth flex items-center justify-center space-x-2">
              <span>View Compliance Roadmap</span>
              <Icon name="ArrowRightIcon" size={20} className="text-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsHero;