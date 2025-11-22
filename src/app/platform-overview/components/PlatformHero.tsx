import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PlatformHeroProps {
  className?: string;
}

const PlatformHero = ({ className = '' }: PlatformHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="ShieldCheckIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-body-medium text-primary">Patent-Backed Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground leading-tight">
              From Sensor to Certificate:<br />
              <span className="text-primary">Verified ESG Evidence</span>
            </h1>
            
            <p className="text-lg text-text-secondary font-body leading-relaxed">
              Transform environmental data verification from claims-based to proof-based through blockchain-anchored evidence. Our comprehensive platform bridges IoT sensors, AI validation, and investor-grade certification in one seamless pipeline.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center space-x-2">
                <span>Explore Interactive Demo</span>
                <Icon name="PlayIcon" size={20} className="text-current" variant="solid" />
              </button>
              <button className="px-6 py-3 bg-card border-2 border-border text-foreground font-cta rounded-lg hover:border-primary hover:text-primary transition-smooth flex items-center space-x-2">
                <span>View Technical Docs</span>
                <Icon name="DocumentTextIcon" size={20} className="text-current" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-modal border border-border bg-card">
              <AppImage
                src="https://images.unsplash.com/photo-1717037536218-abb38d2305a9"
                alt="Modern data visualization dashboard showing real-time environmental monitoring graphs with green and blue color scheme on multiple screens"
                className="w-full h-auto" />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="flex items-center space-x-2 text-white">
                  <Icon name="CheckCircleIcon" size={24} className="text-success" variant="solid" />
                  <span className="font-body-medium">Real-Time Verification Active</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="CubeTransparentIcon" size={20} className="text-secondary" />
                  <span className="text-sm font-body">Blockchain Anchored: 2,847 Proofs Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PlatformHero;