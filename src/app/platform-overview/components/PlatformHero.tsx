import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PlatformHeroProps {
  className?: string;
}

const PlatformHero = ({ className = '' }: PlatformHeroProps) => {
  return (
    <section className={`relative bg-background overflow-hidden ${className}`}>
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-emerald-700 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Management Solutions Cards - Full Screen */}
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-[0.2em]">Select Your Path</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-headline font-headline-bold text-foreground mb-6">
                Enterprise ESG <br />
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Verification Ecosystem</span>
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ESG Management Card */}
              <a
                href="/solutions/esg-management"
                className="group relative p-10 bg-white border-2 border-gray-100 rounded-[2.5rem] hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer min-h-[480px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center space-y-8 flex-1">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="ShieldCheckIcon" size={40} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-headline-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      ESG Management
                    </h3>
                    <p className="text-emerald-700 font-headline-bold text-[10px] uppercase tracking-widest">Enterprise Platform</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-body flex-1 text-sm">
                    Comprehensive ESG data management and reporting platform for enterprise sustainability. Track, measure, and report on all your ESG metrics in one unified platform.
                  </p>
                  <div className="flex items-center text-emerald-700 font-headline-bold group-hover:gap-3 transition-all pt-6 border-t border-gray-50 w-full justify-center">
                    Explore Solution
                    <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Risk Management Card */}
              <a
                href="/solutions/risk-management"
                className="group relative p-10 bg-white border-2 border-gray-100 rounded-[2.5rem] hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer min-h-[480px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center space-y-8 flex-1">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="BuildingOfficeIcon" size={40} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-headline-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      Risk Management
                    </h3>
                    <p className="text-emerald-700 font-headline-bold text-[10px] uppercase tracking-widest">Risk Analytics</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-body flex-1 text-sm">
                    Identify, assess, and mitigate ESG-related risks across your operations and supply chain. Proactive risk monitoring and compliance management.
                  </p>
                  <div className="flex items-center text-emerald-700 font-headline-bold group-hover:gap-3 transition-all pt-6 border-t border-gray-50 w-full justify-center">
                    Explore Solution
                    <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Life Cycle Assessment Card */}
              <a
                href="/solutions/life-cycle-assessment"
                className="group relative p-10 bg-white border-2 border-gray-100 rounded-[2.5rem] hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer min-h-[480px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center space-y-8 flex-1">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="ChartBarIcon" size={40} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-headline-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      Life Cycle Assessment
                    </h3>
                    <p className="text-emerald-700 font-headline-bold text-[10px] uppercase tracking-widest">Product Analysis</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-body flex-1 text-sm">
                    Analyze environmental impacts throughout your product's entire lifecycle from cradle to grave. Comprehensive LCA reporting and optimization.
                  </p>
                  <div className="flex items-center text-emerald-700 font-headline-bold group-hover:gap-3 transition-all pt-6 border-t border-gray-50 w-full justify-center">
                    Explore Solution
                    <Icon name="ArrowRightIcon" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;