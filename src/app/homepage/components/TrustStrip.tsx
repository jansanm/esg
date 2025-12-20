'use client';

import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const TrustStrip = () => {
  return (
    <section className="bg-card py-12">
      {/* <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-brand-secondary to-primary bg-300% animate-gradient">
            End-to-End Verification Workflow
          </span>
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Seamlessly orchestrating ESG data from source to immutable proof.
        </p>
      </div> */}

      {/* Full Screen Workflow Image */}
      {/* <div className="w-full max-w-5xl mx-auto mb-12">
        <Image
          src="/esg-workfloww.png"
          alt="ESG Workflow Process"
          width={1024}
          height={427}
          className="w-full h-auto"
          priority
        />
      </div> */}

      {/* <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full mb-4">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" variant="outline" />
            <span className="text-sm font-body-medium text-primary">Trust Built on Technology</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Every feature designed to deliver <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-brand-secondary to-primary bg-300% animate-gradient">
              verifiable, tamper-proof sustainability data
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:bg-success hover:border-success hover:shadow-xl flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <Icon name="ClipboardDocumentCheckIcon" size={28} className="text-success group-hover:text-white transition-colors" variant="outline" />
            </div>
            <h3 className="text-xl font-headline font-bold text-foreground mb-3 group-hover:text-white transition-colors">Audit‑ready</h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors flex-grow">
              Evidence‑first architecture ensuring every data point is traceable and ready for external verification.
            </p>
            <div className="mt-auto">
              <Icon name="ArrowRightIcon" size={24} className="text-muted-foreground group-hover:text-white transition-colors" variant="outline" />
            </div>
          </div>

          <div className="group relative p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:bg-success hover:border-success hover:shadow-xl flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <Icon name="LockClosedIcon" size={28} className="text-success group-hover:text-white transition-colors" variant="outline" />
            </div>
            <h3 className="text-xl font-headline font-bold text-foreground mb-3 group-hover:text-white transition-colors">Controlled Transparency</h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors flex-grow">
              Share safely with granular permission controls, protecting sensitive IP while proving sustainability claims.
            </p>
            <div className="mt-auto">
              <Icon name="ArrowRightIcon" size={24} className="text-muted-foreground group-hover:text-white transition-colors" variant="outline" />
            </div>
          </div>

          <div className="group relative p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:bg-success hover:border-success hover:shadow-xl flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <Icon name="SparklesIcon" size={28} className="text-success group-hover:text-white transition-colors" variant="outline" />
            </div>
            <h3 className="text-xl font-headline font-bold text-foreground mb-3 group-hover:text-white transition-colors">Patent‑pending IP</h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors flex-grow">
              Innovation‑backed technology that sets new standards for data integrity and automated verification.
            </p>
            <div className="mt-auto">
              <Icon name="ArrowRightIcon" size={24} className="text-muted-foreground group-hover:text-white transition-colors" variant="outline" />
            </div>
          </div>

          <div className="group relative p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:bg-success hover:border-success hover:shadow-xl flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <Icon name="CheckBadgeIcon" size={28} className="text-success group-hover:text-white transition-colors" variant="outline" />
            </div>
            <h3 className="text-xl font-headline font-bold text-foreground mb-3 group-hover:text-white transition-colors">Real‑time Trust</h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors flex-grow">
              Live badges and dynamic certificates that update instantly as new data is verified and anchored.
            </p>
            <div className="mt-auto">
              <Icon name="ArrowRightIcon" size={24} className="text-muted-foreground group-hover:text-white transition-colors" variant="outline" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Core Principles Section */}
        {/* <div className="mt-24 text-center">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Core Principles
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-16">
            Built on three foundational pillars that ensure data integrity and trust at every level
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card border border-border hover:border-success/50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors">
                <Icon name="LockClosedIcon" size={32} className="text-success" variant="outline" />
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-4">Integrity</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Data envelopes are chained and anchored with cryptographic verification to ensure tamper-proof records.
              </p>
            </div>

            <div className="group p-8 bg-card border border-border hover:border-success/50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors">
                <Icon name="ScaleIcon" size={32} className="text-success" variant="outline" />
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-4">Governance</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                <span className="font-semibold text-foreground">Explainable AI</span> scoring identifies gaps and provides actionable remediation plans.
              </p>
            </div>

            <div className="group p-8 bg-card border border-border hover:border-success/50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors">
                <Icon name="ShieldCheckIcon" size={32} className="text-success" variant="outline" />
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-4">Trust</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Dynamic badges link to <span className="italic text-foreground">live verification pages</span> with real-time validation and audit trails.
              </p>
            </div>
          </div>
        </div> */}

        
        {/* Why Choose EcoVeraZ Section */}
        {/* <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Why Choose EcoVeraZ?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              See how our platform compares to traditional sustainability solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-card border border-border rounded-3xl opacity-80 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-headline font-bold text-foreground mb-6">Traditional ratings</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Icon name="XMarkIcon" size={20} className="text-muted-foreground mt-1" variant="outline" />
                  <span className="text-text-secondary">Static annual/quarterly scorecards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="XMarkIcon" size={20} className="text-muted-foreground mt-1" variant="outline" />
                  <span className="text-text-secondary">Primarily disclosure-based</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="XMarkIcon" size={20} className="text-muted-foreground mt-1" variant="outline" />
                  <span className="text-text-secondary">Limited supplier/field capture</span>
                </li>
              </ul>
            </div>

            <div className="relative p-8 bg-card border-2 border-success/20 rounded-3xl shadow-2xl shadow-success/5 overflow-hidden group hover:border-success/40 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Icon name="CheckBadgeIcon" size={120} className="text-success" variant="solid" />
              </div>
              
              <h3 className="text-xl font-headline font-bold text-foreground mb-6 relative z-10">EcoVeraZ verification</h3>
              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-success/10 p-1 rounded-full">
                    <Icon name="CheckIcon" size={14} className="text-success" variant="outline" />
                  </div>
                  <span className="text-foreground font-medium">Live verification badges with QR/URL</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-success/10 p-1 rounded-full">
                    <Icon name="CheckIcon" size={14} className="text-success" variant="outline" />
                  </div>
                  <span className="text-foreground font-medium">Evidence-first data envelopes (IoT → supplier → proof)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-success/10 p-1 rounded-full">
                    <Icon name="CheckIcon" size={14} className="text-success" variant="outline" />
                  </div>
                  <span className="text-foreground font-medium">Procurement ranking + compliance anchors</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 mt-8">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/50 text-foreground font-medium transition-all duration-300">
                  Why verification
                </button>
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-success hover:bg-success/90 text-white font-medium shadow-lg shadow-success/20 hover:shadow-success/30 transition-all duration-300">
                  See a live proof
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustStrip;