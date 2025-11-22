import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onCategorySelect: (category: string) => void;
}

const HeroSection = ({ onCategorySelect }: HeroSectionProps) => {
  const categories = [
    {
      id: 'roles',
      icon: 'UserGroupIcon',
      title: 'Solutions by Role',
      description: 'Tailored verification workflows for every stakeholder',
      color: 'from-primary to-green-600'
    },
    {
      id: 'industries',
      icon: 'BuildingOfficeIcon',
      title: 'Solutions by Industry',
      description: 'Sector-specific ESG verification frameworks',
      color: 'from-secondary to-blue-600'
    },
    {
      id: 'case-studies',
      icon: 'DocumentCheckIcon',
      title: 'Verified Case Studies',
      description: 'Real outcomes with live proof links',
      color: 'from-accent to-orange-600'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-muted to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body-medium mb-6">
            <Icon name="CheckBadgeIcon" size={20} variant="solid" />
            <span>Proof-Driven Solutions</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-headline font-headline-bold text-foreground mb-6">
            ESG Verification Solutions for Every Stakeholder
          </h1>
          
          <p className="text-lg text-text-secondary font-body leading-relaxed">
            From sustainability officers to investors, discover how EcoVeraZ transforms environmental claims into verifiable evidence through role-specific workflows and industry-tailored frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="group relative bg-card border border-border rounded-xl p-8 text-left hover:border-primary hover:shadow-hover transition-smooth overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-smooth`} />
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Icon name={category.icon as any} size={28} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-headline font-headline-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {category.title}
                </h3>
                
                <p className="text-text-secondary font-body text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-body-medium">
                  <span>Explore Solutions</span>
                  <Icon name="ArrowRightIcon" size={16} className="ml-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;