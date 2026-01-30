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
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Management Solutions Cards - Full Screen */}
        <div className="min-h-screen flex items-center justify-center py-16">
          <div className="w-full">
            {/* <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground mb-4">
                Our Solutions
              </h2>
              <p className="text-lg text-text-secondary">
                Choose the right solution for your sustainability journey
              </p>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ESG Management Card */}
              <a
                href="/solutions/esg-management"
                className="group relative p-10 bg-white border-2 border-gray-200 rounded-3xl hover:border-emerald-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer min-h-[400px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="p-6 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Icon name="ShieldCheckIcon" size={48} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    ESG Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    Comprehensive ESG data management and reporting platform for enterprise sustainability. Track, measure, and report on all your ESG metrics in one unified platform.
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all pt-4">
                    Learn more
                    <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Risk Management Card */}
              <a
                href="/solutions/risk-management"
                className="group relative p-10 bg-white border-2 border-gray-200 rounded-3xl hover:border-emerald-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer min-h-[400px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="p-6 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Icon name="BuildingOfficeIcon" size={48} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Risk Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    Identify, assess, and mitigate ESG-related risks across your operations and supply chain. Proactive risk monitoring and compliance management.
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all pt-4">
                    Learn more
                    <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Life Cycle Assessment Card */}
              <a
                href="/solutions/life-cycle-assessment"
                className="group relative p-10 bg-white border-2 border-gray-200 rounded-3xl hover:border-emerald-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer min-h-[400px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="p-6 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Icon name="ChartBarIcon" size={48} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Life Cycle Assessment
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    Analyze environmental impacts throughout your product's entire lifecycle from cradle to grave. Comprehensive LCA reporting and optimization.
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all pt-4">
                    Learn more
                    <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Verified by Design Section */}
        {/* <div className="space-y-12 py-16">
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
        </div> */}
      </div>
    </section>);

};

export default PlatformHero;