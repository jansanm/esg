const AlignmentStrip = () => {
  const standards = [
    { name: 'UN Global Compact', code: 'UNGC' },
    { name: 'CDP', code: 'CDP' },
    { name: 'ISO', code: 'ISO' },
    { name: 'GS1', code: 'GS1' },
    { name: 'WBCSD', code: 'WBCSD' },
  ];

  return (
    <section className="bg-card py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl border border-border bg-background px-6 py-5 lg:px-8 lg:py-6 shadow-sm">
          <div className="text-center lg:text-left">
            <p className="text-xs font-body-medium uppercase tracking-[0.18em] text-primary mb-1">
              Trusted by / aligned with
            </p>
            <p className="text-sm text-text-secondary font-body">
              Built to work with leading global sustainability standards and disclosure frameworks.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {standards.map((standard) => (
              <div
                key={standard.code}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/80 border border-border/40 hover:border-primary/60 transition-smooth"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 text-primary text-[10px] font-headline font-headline-bold flex items-center justify-center">
                  {standard.code}
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs font-body-medium text-foreground leading-tight">
                    {standard.code}
                  </div>
                  <div className="text-[10px] text-text-secondary font-body leading-tight">
                    {standard.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignmentStrip;
