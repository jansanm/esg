import Icon from '@/components/ui/AppIcon';

interface Metric {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

interface ROIMetricsProps {
  className?: string;
}

const ROIMetrics = ({ className = '' }: ROIMetricsProps) => {
  const metrics: Metric[] = [
    {
      label: 'Average Audit Time Reduction',
      value: '73%',
      change: '+18% vs manual',
      icon: 'ClockIcon',
      color: 'text-primary'
    },
    {
      label: 'Cost Savings per Verification',
      value: '$12,400',
      change: 'Annual average',
      icon: 'CurrencyDollarIcon',
      color: 'text-success'
    },
    {
      label: 'Compliance Score Improvement',
      value: '+42%',
      change: 'Within 6 months',
      icon: 'ChartBarSquareIcon',
      color: 'text-secondary'
    },
    {
      label: 'Carbon Credit Yield Increase',
      value: '28%',
      change: 'Verified accuracy',
      icon: 'SparklesIcon',
      color: 'text-accent'
    }
  ];

  return (
    <section className={`bg-card py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
            Measurable Business Impact
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Real ROI metrics from verified deployments across industries. Every number backed by blockchain-anchored evidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-background to-muted border border-border rounded-xl p-6 hover:shadow-hover hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${metric.color}`}>
                  <Icon name={metric.icon as any} size={24} className="text-current" variant="outline" />
                </div>
                <Icon name="TrendingUpIcon" size={20} className="text-success" />
              </div>

              <div className="space-y-2">
                <div className={`text-3xl font-headline font-headline-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm font-body-medium text-foreground">
                  {metric.label}
                </div>
                <div className="text-xs text-text-secondary font-body">
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Icon name="CalculatorIcon" size={32} className="text-primary-foreground" variant="solid" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-1">
                  Calculate Your ROI
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  See how much you could save with automated verification
                </p>
              </div>
            </div>
            <button className="px-8 py-3 bg-primary text-primary-foreground font-cta-bold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-hover transition-smooth flex items-center space-x-2">
              <span>Try ROI Calculator</span>
              <Icon name="ArrowRightIcon" size={20} className="text-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIMetrics;