import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const PlatformDetailedContent = () => {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 mb-6 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                    <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-[0.2em]">Platform Logic</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-headline font-headline-bold text-gray-900 mb-8 leading-tight">
                    Turning real-time ESG data into <br />
                    <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent italic">audit-ready evidence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16 font-body">
                    EcoVeraZ turns operational and environmental data into review-ready evidence with traceable lineage.
                    It is built for inspection and governance — not scoring, certification, or outcomes.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                    {[
                        { title: 'Evidence-first', icon: 'DocumentCheckIcon' },
                        { title: 'Audit-ready outputs', icon: 'ClipboardDocumentCheckIcon' },
                        { title: 'Bounded claims', icon: 'ShieldExclamationIcon' },
                        { title: 'Optional verification', icon: 'CheckBadgeIcon' },
                    ].map((item, index) => (
                        <div key={index} className="p-8 bg-white rounded-3xl border-2 border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                                <Icon name={item.icon} className="h-8 w-8 text-white" />
                            </div>
                            <span className="font-headline-bold text-gray-900 group-hover:text-emerald-700 transition-colors uppercase text-[12px] tracking-wider">{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Core Section */}
            <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
                        <span className="text-[10px] font-headline-bold text-emerald-400 uppercase tracking-[0.2em]">Trust Core Engine</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-headline font-headline-bold mb-8">What EcoVeraZ produces</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-body">
                        EcoVeraZ provides evidence infrastructure. Independent reviewers and authorities make all determinations based on cryptographic truth.
                    </p>
                    <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-10 py-4 rounded-xl font-headline-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-1">
                        Request System Evaluation
                    </button>
                    
                    <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                         <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 group hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-emerald-400 font-headline-bold mb-6 flex items-center gap-3 uppercase text-xs tracking-widest">
                                <Icon name="CubeIcon" size={20} />
                                Data Artifacts
                            </h3>
                            <ul className="space-y-4 text-gray-300 font-body">
                                <li className="flex items-center gap-3">
                                    <span className="text-emerald-500">→</span> Review-ready evidence packs
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-emerald-500">→</span> Traceable data lineage logs
                                </li>
                            </ul>
                         </div>
                         <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 group hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-emerald-400 font-headline-bold mb-6 flex items-center gap-3 uppercase text-xs tracking-widest">
                                <Icon name="ShieldCheckIcon" size={20} />
                                Security Output
                            </h3>
                            <ul className="space-y-4 text-gray-300 font-body">
                                <li className="flex items-center gap-3">
                                    <span className="text-emerald-500">→</span> Readiness gate reports
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-emerald-500">→</span> Tamper-detection proof artifacts
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </section>

            {/* What EcoVeraZ Is vs Is Not */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* YES */}
                        <div className="bg-white rounded-[2.5rem] p-12 border-2 border-emerald-500/10 shadow-sm group hover:border-emerald-500/30 transition-all">
                            <div className="flex items-center gap-6 mb-10">
                                <span className="bg-emerald-500 text-white font-headline-bold px-5 py-2 rounded-2xl text-xl shadow-lg shadow-emerald-500/20">YES</span>
                                <h3 className="text-2xl font-headline-bold text-gray-900 uppercase tracking-tight">What EcoVeraZ is</h3>
                            </div>
                            <p className="text-xl text-gray-700 font-headline-medium mb-10 leading-relaxed">
                                A system that produces review-ready evidence from real-world data.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    'Evidence packs with clear time windows',
                                    'Traceable lineage from source → record → file',
                                    'Readiness gates that express review posture',
                                    'Optional proof artifacts for tamper detection'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-600 font-body">
                                        <div className="mt-1 p-1 bg-emerald-50 rounded-full">
                                            <Icon name="CheckIcon" className="h-4 w-4 text-emerald-600 shrink-0" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* NO */}
                        <div className="bg-white rounded-[2.5rem] p-12 border-2 border-gray-100 shadow-sm group hover:border-red-100 transition-all">
                            <div className="flex items-center gap-6 mb-10">
                                <span className="bg-gray-100 text-gray-600 font-headline-bold px-5 py-2 rounded-2xl text-xl">NO</span>
                                <h3 className="text-2xl font-headline-bold text-gray-950 uppercase tracking-tight">What EcoVeraZ is not</h3>
                            </div>
                            <p className="text-xl text-gray-700 font-headline-medium mb-10 leading-relaxed">
                                No compliance promises or certification claims.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    'A certification or approval authority',
                                    'A consulting report or manual service',
                                    'A guarantee of compliance or credits',
                                    'Determination remains external by design.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-500 font-body">
                                        <div className="mt-1 p-1 bg-gray-50 rounded-full">
                                            <Icon name="XMarkIcon" className="h-4 w-4 text-gray-400 shrink-0" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-headline font-headline-bold text-gray-900 mb-6">How it works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">The system creates a repeatable review path — not dashboards.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-emerald-50/50 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden border border-emerald-500/10">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
                        
                        <h3 className="text-3xl font-headline-bold text-gray-900 mb-4">The Review Path</h3>
                        <p className="text-emerald-700 font-headline-medium text-lg mb-16">A predictable sequence reviewers can follow every time.</p>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-center">
                           {[
                               { term: 'Measure', def: 'capture real operational signals', icon: 'SignalIcon' },
                               { term: 'Store', def: 'keep time-stamped raw records', icon: 'FolderIcon' },
                               { term: 'Pack', def: 'produce audit-ready files', icon: 'BriefcaseIcon' },
                               { term: 'Gate', def: 'express readiness posture', icon: 'LockClosedIcon' },
                               { term: 'Verify', def: 'add tamper-detection (optional)', icon: 'ShieldCheckIcon' }
                           ].map((step, i) => (
                               <div key={i} className="relative group">
                                    {i < 4 && <div className="hidden md:block absolute top-[40px] right-[-24px] text-emerald-200 text-3xl font-light">→</div>}
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-emerald-500/20 shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                        <Icon name={step.icon} size={28} className="text-emerald-600 group-hover:text-white" />
                                    </div>
                                    <div className="font-headline-bold text-gray-900 text-lg mb-2 uppercase tracking-wide">{step.term}</div>
                                    <div className="text-sm text-gray-500 leading-snug font-body">{step.def}</div>
                               </div>
                           ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Next Steps */}
             <section className="py-32 bg-background relative">
                 <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 mb-8">
                        <span className="text-[10px] font-headline-bold text-emerald-700 uppercase tracking-[0.2em]">Next Steps</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-headline font-headline-bold text-gray-900 mb-10">Ready to evaluate?</h2>
                    <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto font-body">Ask for a redacted evidence pack and follow the trail from source to record.</p>
                     
                    <div className="flex flex-wrap gap-6 justify-center">
                        <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-10 py-5 rounded-2xl font-headline-bold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-1">
                            Request Evaluation
                        </button>
                        <button className="bg-white border-2 border-gray-100 text-gray-900 px-10 py-5 rounded-2xl font-headline-bold hover:bg-gray-50 transition-all">
                            View Live Outputs
                        </button>
                    </div>

                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
                        {[
                            { label: 'Evidence ≠ Outcomes', desc: 'infrastructure for truth, not a guarantee of result' },
                            { label: 'Alignment ≠ Certification', desc: 'policy mapping, not an official seal' },
                            { label: 'Verification ≠ Approval', desc: 'traceability, not a regulatory pass' }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="font-headline-bold text-emerald-700 uppercase tracking-widest text-[13px]">{item.label}</div>
                                <p className="text-gray-500 text-sm font-body italic leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-20 text-xs text-gray-400 font-body leading-relaxed max-w-3xl mx-auto">
                        EcoVeraZ provides evidence infrastructure for external review. It does not certify, approve, score, or determine compliance outcomes. All determinations are external.
                    </p>
                 </div>
             </section>
        </div>
    );
};

export default PlatformDetailedContent;
