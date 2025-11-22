import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  company: string;
  image: string;
  alt: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  proofBadge: string;
  anchorReceipt: string;
  verificationDate: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

const CaseStudyCard = ({ caseStudy, className = '' }: CaseStudyCardProps) => {
  return (
    <article className={`bg-card border border-border rounded-xl overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-smooth ${className}`}>
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={caseStudy.image}
          alt={caseStudy.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-card/95 backdrop-blur-sm border border-border rounded-full">
          <div className="flex items-center space-x-1.5">
            <Icon name="CheckBadgeIcon" size={16} className="text-success" variant="solid" />
            <span className="text-xs font-body-medium text-foreground">Verified</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-body-medium rounded-full">
            {caseStudy.industry}
          </span>
          <span className="text-xs text-text-secondary font-body">{caseStudy.verificationDate}</span>
        </div>

        <div>
          <h3 className="text-xl font-headline font-headline-medium text-foreground mb-2">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-text-secondary font-body mb-1">{caseStudy.company}</p>
          <p className="text-sm text-text-secondary font-body leading-relaxed">
            {caseStudy.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <Icon
                name={metric.icon as any}
                size={20}
                className="text-primary mx-auto mb-1"
                variant="outline"
              />
              <div className="text-lg font-headline font-headline-bold text-foreground">
                {metric.value}
              </div>
              <div className="text-xs text-text-secondary font-body">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-3 pt-4">
          <Link
            href={`/proof-and-case-studies/${caseStudy.id}`}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-cta-bold rounded-lg hover:bg-primary/90 transition-smooth text-center"
          >
            View Full Case Study
          </Link>
          <button className="p-2.5 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-smooth">
            <Icon name="ArrowTopRightOnSquareIcon" size={20} className="text-foreground" />
          </button>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-smooth">
            <Icon name="ShieldCheckIcon" size={16} className="text-current" variant="solid" />
            <span className="font-body-medium">View Proof Badge</span>
          </button>
          <button className="flex items-center space-x-2 text-sm text-secondary hover:text-secondary/80 transition-smooth">
            <Icon name="LinkIcon" size={16} className="text-current" />
            <span className="font-body-medium">Anchor Receipt</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;