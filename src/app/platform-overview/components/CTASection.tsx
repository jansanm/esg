import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-green-700 to-primary overflow-hidden py-20 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-headline font-headline-bold text-white mb-6 leading-tight">
            Ready to transform your ESG Monitoring, Reporting and Verification?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing-and-roi-calculator"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-lg shadow-lg hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border-2 border-white"
            >
              Request Demo
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="ClockIcon" size={24} className="text-white" />
                  <span className="text-2xl font-headline font-headline-bold text-white">5 min</span>
                </div>
                <p className="text-sm text-white/80 font-body">Setup Time</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="ShieldCheckIcon" size={24} className="text-white" variant="solid" />
                  <span className="text-2xl font-headline font-headline-bold text-white">Zero</span>
                </div>
                <p className="text-sm text-white/80 font-body">Integration Risk</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="CurrencyDollarIcon" size={24} className="text-white" />
                  <span className="text-2xl font-headline font-headline-bold text-white">80%</span>
                </div>
                <p className="text-sm text-white/80 font-body">Cost Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;