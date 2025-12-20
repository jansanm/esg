'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const SolutionsContent = () => {
  return (
    <>
      {/* VSIP at a Glance Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
              VSIP at a Glance
            </h2>
            <p className="text-lg text-text-secondary font-body">
              The path from raw telemetry to public proof. Each step is verifiable, leaving a complete audit trail.
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative mb-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { step: 'Capture', sub: 'IoT / Suppliers', icon: 'SignalIcon' },
                { step: 'Chain', sub: 'Anchor & Sequence', icon: 'LinkIcon' },
                { step: 'Score', sub: 'Explainable Checks', icon: 'CalculatorIcon' },
                { step: 'Issue', sub: 'Badges & Disclosures', icon: 'CheckBadgeIcon' },
                { step: 'Publish', sub: 'TrustStrip', icon: 'GlobeAltIcon' }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group relative bg-white">
                  {/* Arrow for Desktop */}
                  {index < 4 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-muted rounded-full p-1 border border-border text-text-secondary">
                      <Icon name="ChevronRightIcon" size={16} />
                    </div>
                  )}
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={item.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-headline font-headline-bold text-foreground mb-1">
                    {item.step}
                  </h3>
                  <p className="text-sm text-text-secondary font-body">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-smooth bg-white">
              <h4 className="text-lg font-headline font-headline-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="DocumentDuplicateIcon" size={24} className="text-primary" />
                </div>
                Evidence
              </h4>
              <ul className="space-y-4">
                <li className="text-base text-text-secondary font-body flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 shrink-0" />
                  Signed data envelopes (hash, ts, origin)
                </li>
                <li className="text-base text-text-secondary font-body flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 shrink-0" />
                  Supplier attestations, field proof
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-smooth bg-white">
              <h4 className="text-lg font-headline font-headline-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="ShieldCheckIcon" size={24} className="text-primary" />
                </div>
                Controls
              </h4>
              <ul className="space-y-4">
                <li className="text-base text-text-secondary font-body flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 shrink-0" />
                  Deduplication, anomaly detection
                </li>
                <li className="text-base text-text-secondary font-body flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 shrink-0" />
                  Governance policy checks
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-smooth bg-white">
              <h4 className="text-lg font-headline font-headline-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="ArrowTopRightOnSquareIcon" size={24} className="text-primary" />
                </div>
                Outputs
              </h4>
              <ul className="space-y-4">
                <li className="text-base text-text-secondary font-body flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 shrink-0" />
                  Live badge & public page
                </li>
                <li className="text-base text-text-secondary font-body flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 shrink-0" />
                  API & procurement signals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sustainability Context Section */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
              Global Sustainability Context
            </h2>
            <p className="text-lg text-text-secondary font-body">
              How VSIP aligns with international standards and policy drivers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* UN & Global Bodies */}
            <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-smooth">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="GlobeAmericasIcon" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-headline font-headline-bold text-foreground mb-4">
                UN & Global Bodies
              </h3>
              <ul className="space-y-4">
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">UNFCCC</strong>
                  Climate policy frameworks; MRV principles for emissions.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">UNEP</strong>
                  Science‑policy interface, lifecycle & circularity initiatives.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">UN Global Compact</strong>
                  Corporate sustainability principles & reporting.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">UN SDGs</strong>
                  Shared targets; VSIP aids evidence generation & disclosure.
                </li>
              </ul>
            </div>

            {/* Reporting & Disclosure */}
            <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-smooth">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="DocumentChartBarIcon" size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-headline font-headline-bold text-foreground mb-4">
                Reporting & Disclosure
              </h3>
              <ul className="space-y-4">
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">ISSB (IFRS S1/S2)</strong>
                  Climate and sustainability disclosures.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">EU CSRD/ESRS</strong>
                  Double‑materiality and auditable evidence.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">GRI</strong>
                  Topic‑based reporting & granular metrics alignment.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">GHG Protocol</strong>
                  Scope 1/2/3 accounting and value‑chain data.
                </li>
              </ul>
            </div>

            {/* Procurement & Finance */}
            <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-smooth">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="BanknotesIcon" size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-headline font-headline-bold text-foreground mb-4">
                Procurement & Finance
              </h3>
              <ul className="space-y-4">
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">ISO 20400</strong>
                  Sustainable procurement guidance.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">Green Public Procurement</strong>
                  Policy levers for verifiable claims.
                </li>
                <li className="text-sm text-text-secondary font-body">
                  <strong className="text-foreground block mb-1">Sustainable Finance</strong>
                  Integrating ESG signals into capital flows.
                </li>
              </ul>
            </div>
          </div>

          {/* How VSIP Helps */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-lg shadow-primary/20">
                  <Icon name="CheckBadgeIcon" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-headline font-headline-bold text-foreground mb-2">
                  How VSIP Helps
                </h3>
                <p className="text-text-secondary font-body">
                  Bridging the gap between policy and practice.
                </p>
              </div>
              
              <div className="lg:w-2/3 grid sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <Icon name="DocumentCheckIcon" size={24} className="text-primary mb-3" />
                  <p className="text-sm font-medium text-foreground">
                    Generates audit‑ready evidence from IoT & supplier attestations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <Icon name="LinkIcon" size={24} className="text-primary mb-3" />
                  <p className="text-sm font-medium text-foreground">
                    Chaining & timestamps support traceability and assurance.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <Icon name="GlobeAltIcon" size={24} className="text-primary mb-3" />
                  <p className="text-sm font-medium text-foreground">
                    Live badges enable public trust & regulator‑ready disclosures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Sources Section */}
      {/* <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-headline font-headline-bold text-foreground mb-10 text-center">
            Reference Sources
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* UN & Agencies */}
            {/* <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">UN & Agencies</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://unfccc.int" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    UNFCCC — MRV
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://unep.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    UNEP
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://unglobalcompact.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    UN Global Compact
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Reporting */}
            {/* <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Reporting</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://ifrs.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    ISSB (IFRS S1/S2)
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://efrag.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    ESRS (EU CSRD)
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://globalreporting.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    GRI Standards
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Methodologies */}
            {/* <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Methodologies</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://ghgprotocol.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    GHG Protocol
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Procurement */}
            {/* <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Procurement</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://iso.org" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                    ISO 20400
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Finance */}
            {/* <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Finance</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm text-text-secondary">
                    EU Sustainable Finance
                  </span>
                </li>
              </ul>
            </div> */}
          {/* </div>
        </div>
      </section> */}

      {/* VSIP & the UN SDGs Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-4">
              VSIP & the UN SDGs
            </h2>
            <p className="text-lg text-text-secondary font-body">
              VSIP improves measurement and auditability that underpin SDG reporting across energy, industry, production, climate, and land use.
            </p>
          </div>

          <div className="bg-white border border-border rounded-3xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-center text-xl font-headline font-headline-bold text-foreground mb-10">
              SDG Alignment (primary)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {[
                { id: 'SDG 7', title: 'Affordable & Clean Energy' },
                { id: 'SDG 9', title: 'Industry, Innovation & Infrastructure' },
                { id: 'SDG 12', title: 'Responsible Consumption & Production' },
                { id: 'SDG 13', title: 'Climate Action' },
                { id: 'SDG 15', title: 'Life on Land' }
              ].map((sdg) => (
                <div key={sdg.id} className="bg-emerald-50/50 border border-emerald-400 rounded-xl p-6 flex flex-col items-center justify-center text-center h-full min-h-[140px] hover:shadow-md transition-smooth">
                  <span className="text-lg font-bold text-foreground mb-2">{sdg.id}</span>
                  <span className="text-xs font-medium text-text-secondary leading-tight">{sdg.title}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-5 h-5 border border-emerald-400 rounded bg-emerald-50/50" />
              <span className="text-sm text-text-secondary font-body">
                Primary SDGs supported by VSIP evidence & disclosure
              </span>
            </div>

            <p className="text-center text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
              VSIP helps organizations measure, verify, and disclose impact, strengthening reporting against these goals via audit-ready evidence.
            </p>
          </div>
        </div>
      </section> */}

      {/* Guides & Downloads Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Guides */}
          <div className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl font-headline font-headline-bold text-foreground mb-4">
                Start with these guides
              </h2>
              <p className="text-lg text-text-secondary font-body">
                Short reads with practical steps to evaluate and implement VSIP.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Verification 101',
                  desc: 'Evidence flow from sensors to public proof.',
                  detail: 'Map capture → chaining → scoring → issuance → public proof.',
                  icon: 'BookOpenIcon'
                },
                {
                  title: 'ESG Data Envelope Spec',
                  desc: 'Schema for signed, tamper‑evident data.',
                  detail: 'Design envelopes with hash, timestamp, and origin for auditability.',
                  icon: 'PuzzlePieceIcon'
                },
                {
                  title: 'Procurement Playbook',
                  desc: 'Rank suppliers with verifiable signals.',
                  detail: 'Use VSIP badges & evidence to weight bids beyond price.',
                  icon: 'MapIcon'
                }
              ].map((item) => (
                <div key={item.title} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={item.icon as any} size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-primary font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Open <Icon name="ArrowRightIcon" size={14} />
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-headline-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary font-body mb-4 flex-grow">
                    {item.desc}
                  </p>
                  <div className="pt-4 border-t border-border mt-auto">
                    <p className="text-sm text-text-secondary font-body">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloads */}
          {/* <div>
            <div className="mb-10">
              <h2 className="text-3xl font-headline font-headline-bold text-foreground mb-4">
                Downloads
              </h2>
              <p className="text-lg text-text-secondary font-body">
                Keep these handy references for quick sharing with stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'One‑pager (PDF)',
                  desc: 'Executive architecture overview.',
                  detail: 'Shareable snapshot: VSIP value, components, and outcomes.',
                  icon: 'DocumentTextIcon'
                },
                {
                  title: 'Badge Guidelines',
                  desc: 'Implement TrustStrip & badges.',
                  detail: 'Embed verification links and meet non‑text contrast/accessibility.',
                  icon: 'TagIcon'
                },
                {
                  title: 'Security Brief',
                  desc: 'Crypto & threat model summary.',
                  detail: 'Detailed overview of cryptographic proofs and threat mitigation strategies.',
                  icon: 'ShieldCheckIcon'
                }
              ].map((item) => (
                <div key={item.title} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon name={item.icon as any} size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-blue-600 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Download <Icon name="ArrowDownTrayIcon" size={14} />
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-headline-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary font-body mb-4 flex-grow">
                    {item.desc}
                  </p>
                  <div className="pt-4 border-t border-border mt-auto">
                    <p className="text-sm text-text-secondary font-body">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>
    </>
  );
};

export default SolutionsContent;
