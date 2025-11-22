import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  icon: string;
  value: string;
  label: string;
  trend: string;
}

interface PlatformStatsProps {
  className?: string;
}

const PlatformStats = ({ className = '' }: PlatformStatsProps) => {
  const stats: Stat[] = [
    {
      id: 1,
      icon: "ClockIcon",
      value: "87%",
      label: "Audit Time Reduction",
      trend: "+12% vs Q3 2025"
    },
    {
      id: 2,
      icon: "ShieldCheckIcon",
      value: "99.97%",
      label: "Data Integrity Score",
      trend: "Industry Leading"
    },
    {
      id: 3,
      icon: "CubeTransparentIcon",
      value: "2.4M+",
      label: "Blockchain Anchors",
      trend: "+340K this month"
    },
    {
      id: 4,
      icon: "DocumentCheckIcon",
      value: "15K+",
      label: "Certificates Issued",
      trend: "Across 47 countries"
    }
  ];

  return (
    <section className={`bg-card border-y border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <Icon name={stat.icon as any} size={24} className="text-primary" variant="solid" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-headline font-headline-bold text-foreground">{stat.value}</div>
                <div className="text-sm font-body-medium text-text-primary">{stat.label}</div>
                <div className="text-xs font-body text-text-secondary">{stat.trend}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;