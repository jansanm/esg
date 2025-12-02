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
        {/* Verified by Design Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground leading-tight">
              Verified by Design
            </h1>
            <p className="text-lg text-text-secondary font-body leading-relaxed">
              Each module is patent-pending, forming a unified, verifiable sustainability ecosystem built on seven core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'P1',
                title: 'IoT Integrity',
                desc: 'Data envelopes are chained and anchored to deter tampering.',
                icon: 'SignalIcon'
              },
              {
                id: 'P2',
                title: 'Carbon Issuance',
                desc: 'Issuance flows link claims to verifiable evidence and live badges.',
                icon: 'TicketIcon'
              },
              {
                id: 'P3',
                title: 'Supply Chain',
                desc: 'Scope snapshots unify supplier data with anomaly-aware coverage.',
                icon: 'TruckIcon'
              },
              {
                id: 'P4',
                title: 'Verifier Network',
                desc: 'Field capture includes identity, time, and place with reviewer reputation.',
                icon: 'UserGroupIcon'
              },
              {
                id: 'P5',
                title: 'AI Advisor',
                desc: 'Explainable ESG scoring identifies gaps and recommended remediations.',
                icon: 'CpuChipIcon'
              },
              {
                id: 'P6',
                title: 'Smart Bidding',
                desc: 'Procurement ranking that weights verifiable ESG credentials alongside price.',
                icon: 'ChartBarIcon'
              },
              {
                id: 'P7',
                title: 'Badge Engine',
                desc: 'Dynamic seals with QR/URL link to live verification pages.',
                icon: 'ShieldCheckIcon'
              }
            ].map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary hover:bg-primary transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <Icon name={item.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 bg-primary/5 px-2 py-1 rounded group-hover:bg-white/20 group-hover:text-white transition-colors">{item.id}</span>
                </div>
                <h3 className="text-lg font-headline-bold text-foreground mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-sm text-text-secondary mb-4 min-h-[40px] group-hover:text-white/90 transition-colors">{item.desc}</p>
                <button className="text-primary text-sm font-cta-bold flex items-center gap-1 group-hover:gap-2 group-hover:text-white transition-all">
                  Learn more <Icon name="ArrowRightIcon" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>);

};

export default PlatformHero;