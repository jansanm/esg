'use client';

import Icon from '@/components/ui/AppIcon';

const problems = [
  {
    title: 'Fragmented Supply Chain Intelligence',
    description:
      'Manufacturers struggle to track Scope 3 emissions across thousands of multi-tier suppliers. Without automated data pipelines, sustainability claims remain unverified and prone to error.',
    solution: 'Automated "Trust-by-Design" pipelines that ingest IoT and ERP data from suppliers directly into a cryptographically secured ledger.',
    icon: 'ShareIcon',
    stat: '80%+',
    statLabel: 'Emissions are Scope 3',
  },
  {
    title: 'The Audit Traceability Crisis',
    description:
      'Manual ESG reporting takes months of administrative effort and lacks cryptographic proof. Manufacturers risk non-compliance under new SEC and CSRD mandates.',
    solution: 'Real-time audit trails with blockchain anchoring, providing instant, verifiable reports that reduce audit time by 90%.',
    icon: 'ShieldExclamationIcon',
    stat: 'Investment-Grade',
    statLabel: 'Data is now required',
  },
  {
    title: 'Real-Time Operational Blindspots',
    description:
      'High-frequency industrial energy data is rarely reconciled with sustainability disclosures in real-time, preventing intra-day carbon adjustments.',
    solution: 'Direct sensor-to-report integration using EcoVeraZ Edge, allowing manufacturers to optimize energy consumption as it happens.',
    icon: 'BoltIcon',
    stat: '23%',
    statLabel: 'Global emissions contribution',
  },
  {
    title: 'Linear Resource Circularity',
    description:
      'Transitioning to circular business models is blocked by a lack of unit-level material tracking and Digital Product Passports.',
    solution: 'A Decentralized Material Ledger that tracks the lifecycle of every component from raw extraction to end-of-life recycling.',
    icon: 'ArrowPathIcon',
    stat: 'Digital Passport',
    statLabel: 'Future mandate',
  },
];

const ManufacturingProblems = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(21,128,61,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-[0.2em]">Industry Insight</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-headline-bold text-foreground mb-6 leading-[1.1]">
              The Manufacturing Industry's <br />
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                ESG Paradox
              </span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-body">
              While manufacturing accounts for 23% of global emissions, the gap between operational reality and verifiable data threatens market access.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-gray-950 border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden max-w-sm group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <Icon name="ChatBubbleBottomCenterTextIcon" className="text-white/10 absolute top-4 right-4" size={48} />
              <p className="text-sm text-gray-300 italic mb-4 relative z-10">
                &quot;By 2026, mandatory climate disclosure will be the standard for global manufacturing hubs, moving ESG from marketing to the balance sheet.&quot;
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                  <Icon name="GlobeAltIcon" size={16} className="text-white" />
                </div>
                <span className="text-xs font-headline-bold text-white uppercase tracking-wider">World Economic Forum</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-sm hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-300 group h-full"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Stat & Icon */}
                <div className="md:w-1/3 flex flex-col justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <div className="mb-2">
                    <div className="text-4xl font-headline font-headline-bold text-foreground">{item.stat}</div>
                    <p className="text-emerald-700 font-headline-bold text-[10px] uppercase tracking-wider">
                      {item.statLabel}
                    </p>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-headline font-headline-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-headline-bold text-red-500 uppercase tracking-widest mb-1.5 block">Industry Challenge</span>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 group-hover:bg-emerald-50 group-hover:border-emerald-500/20 transition-colors">
                      <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-widest mb-1.5 block">EcoVeraZ Solution</span>
                      <p className="text-gray-900 text-[14px] font-body-medium leading-relaxed italic">
                        &quot;{item.solution}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Link */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-body text-text-secondary">Verified by Trust infrastructure</span>
                <button className="flex items-center text-emerald-700 font-headline-bold text-sm group/btn gap-2">
                  Learn how we solve this
                  <Icon name="ArrowRightIcon" size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProblems;
