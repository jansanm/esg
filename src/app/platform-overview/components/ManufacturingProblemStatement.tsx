import Icon from '@/components/ui/AppIcon';

const problems = [
  {
    title: 'Decarbonization Barriers',
    description:
      'Manufacturing accounts for nearly 23% of global emissions. Tracking and reducing Scope 3 emissions across complex, multi-tiered value chains remains a significant technological and operational hurdle.',
    icon: 'CloudIcon',
    color: 'emerald',
  },
  {
    title: 'Supply Chain Accountability',
    description:
      'New regulations like CSDDD demand rigorous human rights and environmental due diligence. Manufacturers struggle to verify conditions deep within their supply chains where visibility is traditionally zero.',
    icon: 'TruckIcon',
    color: 'secondary',
  },
  {
    title: 'Data Authenticity Gap',
    description:
      'With mandatory SEC and CSRD reporting, "finance-grade" data is now a requirement. Most manufacturers lack the IoT-to-trust pipelines needed to provide auditable proof and avoid greenwashing risks.',
    icon: 'ShieldCheckIcon',
    color: 'accent',
  },
  {
    title: 'The Circular Transition',
    description:
      'Transitioning from "Take-Make-Waste" to circular models requires precise product lifecycle tracking and material passports—capabilities that legacy ERP systems were never built to handle.',
    icon: 'ArrowPathIcon',
    color: 'emerald',
  },
];

const ManufacturingProblemStatement = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Industry Context
            </h2>
            <h3 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground mb-6">
              The Manufacturing Industry's <span className="text-emerald-600">ESG Paradox</span>
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              While ESG is now a strategic imperative, manufacturers face critical gaps in execution
              and accountability that threaten their license to operate in a transparent global
              market.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-start gap-4 max-w-sm">
              <Icon name="InformationCircleIcon" className="text-emerald-600 shrink-0" size={24} />
              <p className="text-sm text-emerald-800 italic">
                "By 2026, mandatory climate disclosure will be the standard for global manufacturing
                hubs, moving ESG from marketing to the balance sheet."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-border shadow-sm rounded-3xl hover:shadow-2xl hover:border-emerald-600/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                  problem.color === 'emerald'
                    ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                    : problem.color === 'secondary'
                      ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      : 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                }`}
              >
                <Icon name={problem.icon} size={28} />
              </div>
              <h4 className="text-xl font-headline-bold text-foreground mb-4 group-hover:text-emerald-600 transition-colors">
                {problem.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-emerald-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all">
                Learn how we solve this
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.03),transparent_50%)] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </section>
  );
};

export default ManufacturingProblemStatement;
