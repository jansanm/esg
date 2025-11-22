import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ProofCTAProps {
  className?: string;
}

const ProofCTA = ({ className = '' }: ProofCTAProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-primary/90 to-secondary py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-headline font-headline-bold text-primary-foreground">
              Ready to See Your Own Proof?
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 font-body max-w-3xl mx-auto">
              Join 47+ organizations transforming ESG claims into blockchain-verified evidence. Start your proof-driven journey today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing-and-roi-calculator"
              className="px-8 py-4 bg-card text-primary text-lg font-cta-bold rounded-lg hover:bg-card/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center space-x-2"
            >
              <span>Request Live Demo</span>
              <Icon name="PlayIcon" size={20} className="text-current" variant="solid" />
            </Link>
            <Link
              href="/platform-overview"
              className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground text-lg font-cta-bold rounded-lg hover:bg-primary-foreground/10 transition-smooth flex items-center space-x-2"
            >
              <span>Explore Platform</span>
              <Icon name="ArrowRightIcon" size={20} className="text-current" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-primary-foreground/20">
            <div className="text-center space-y-2">
              <Icon name="ShieldCheckIcon" size={32} className="text-primary-foreground mx-auto" variant="solid" />
              <div className="text-2xl font-headline font-headline-bold text-primary-foreground">12,500+</div>
              <div className="text-sm text-primary-foreground/80 font-body">Blockchain Anchors</div>
            </div>
            <div className="text-center space-y-2">
              <Icon name="DocumentCheckIcon" size={32} className="text-primary-foreground mx-auto" variant="solid" />
              <div className="text-2xl font-headline font-headline-bold text-primary-foreground">47+</div>
              <div className="text-sm text-primary-foreground/80 font-body">Verified Case Studies</div>
            </div>
            <div className="text-center space-y-2">
              <Icon name="ChartBarIcon" size={32} className="text-primary-foreground mx-auto" variant="solid" />
              <div className="text-2xl font-headline font-headline-bold text-primary-foreground">340%</div>
              <div className="text-sm text-primary-foreground/80 font-body">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofCTA;