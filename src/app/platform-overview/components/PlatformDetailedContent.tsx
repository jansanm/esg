import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const PlatformDetailedContent = () => {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* <h1 className="text-4xl lg:text-5xl font-bold font-headline text-gray-900 mb-6">
                    EcoVeraZ platform
                </h1> */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Turning real-time ESG data into audit-ready evidence
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
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
                        <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                            <Icon name={item.icon} className="h-10 w-10 text-emerald-600 mb-3" />
                            <span className="font-bold text-gray-900">{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Core Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-6">
                        Trust Core
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">What EcoVeraZ produces</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        EcoVeraZ provides evidence infrastructure. Independent reviewers and authorities make all determinations.
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                        Request evaluation
                    </button>
                    
                    <div className="mt-16 grid gap-4 max-w-2xl mx-auto text-left bg-white/5 p-8 rounded-2xl border border-white/10">
                         <h3 className="text-emerald-400 font-bold mb-2">Trust Core Output Types</h3>
                         <ul className="space-y-2 text-gray-300">
                             <li>• Review-ready evidence packs</li>
                             <li>• Traceable data lineage logs</li>
                             <li>• Readiness gate reports</li>
                             <li>• Tamper-detection proof artifacts</li>
                         </ul>
                    </div>
                </div>
            </section>

            {/* What EcoVeraZ Is vs Is Not */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* YES */}
                        <div className="bg-white rounded-3xl p-10 border-2 border-emerald-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-emerald-100 text-emerald-700 font-bold px-4 py-2 rounded-lg text-xl">YES</span>
                                <h3 className="text-2xl font-bold text-gray-900">What EcoVeraZ is</h3>
                            </div>
                            <p className="text-lg text-gray-700 font-medium mb-8">
                                A system that produces review-ready evidence from real-world data.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Evidence packs with clear time windows',
                                    'Traceable lineage from source → record → file',
                                    'Readiness gates that express review posture',
                                    'Optional proof artifacts for tamper detection'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <Icon name="CheckIcon" className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* NO */}
                        <div className="bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-gray-100 text-gray-600 font-bold px-4 py-2 rounded-lg text-xl">NO</span>
                                <h3 className="text-2xl font-bold text-gray-900">What EcoVeraZ is not</h3>
                            </div>
                            <p className="text-lg text-gray-700 font-medium mb-8">
                                No compliance promises or certification claims.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'A certification or approval authority',
                                    'A consulting report or manual service',
                                    'A guarantee of compliance or credits',
                                    'Determination remains external by design.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <Icon name="XMarkIcon" className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
                    <p className="text-xl text-gray-600 mb-2">The system creates a repeatable review path — not dashboards.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-emerald-50 rounded-3xl p-12 text-center mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">The review path</h3>
                        <p className="text-gray-600 text-lg mb-12">A predictable sequence reviewers can follow every time.</p>

                        <div className="grid md:grid-cols-5 gap-8 text-left">
                           {[
                               { term: 'Measure', def: 'capture real operational signals' },
                               { term: 'Store', def: 'keep time-stamped raw records' },
                               { term: 'Pack', def: 'produce audit-ready files with manifests' },
                               { term: 'Gate', def: 'express readiness and disclosure posture' },
                               { term: 'Verify', def: 'add tamper-detection cues (optional)' }
                           ].map((step, i) => (
                               <div key={i} className="relative">
                                    {i < 4 && <div className="hidden md:block absolute top-4 right-[-16px] text-emerald-200">→</div>}
                                    <div className="font-bold text-emerald-700 text-lg mb-1">{step.term}</div>
                                    <div className="text-sm text-gray-600 leading-snug">{step.def}</div>
                               </div>
                           ))}
                        </div>
                    </div>
                    <p className="text-center text-gray-500 italic">Evidence infrastructure only. No scoring, no certification.</p>
                </div>
            </section>

             {/* What you get */}
             <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What you get</h2>
                    <p className="text-xl text-gray-600 mb-8">Tangible outputs designed for inspection — described in detail on the outputs page.</p>
                    <button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold shadow-sm transition-all">
                        View outputs
                    </button>
                </div>
             </section>

             {/* Core capabilities */}
             <section className="py-24 bg-gray-900 text-white">
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                     <div className="text-center mb-16">
                         <h2 className="text-3xl font-bold mb-4">Core capabilities</h2>
                         <p className="text-gray-400 text-lg">Expressed through outputs, not feature lists.</p>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-16">
                         <div>
                             <h3 className="text-2xl font-bold text-emerald-400 mb-6">Evidence automation</h3>
                             <ul className="space-y-4 text-lg text-gray-300">
                                 {[
                                     'Continuous generation of evidence packs',
                                     'Consistent structure across sites',
                                     'No last-minute compilation'
                                 ].map((item, i) => <li key={i} className="flex gap-3"><span className="text-emerald-500">✓</span> {item}</li>)}
                             </ul>
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-emerald-400 mb-6">Review defensibility</h3>
                             <ul className="space-y-4 text-lg text-gray-300">
                                 {[
                                     'Traceable lineage',
                                     'Integrity and drift detection',
                                     'Clear boundaries for claims'
                                 ].map((item, i) => <li key={i} className="flex gap-3"><span className="text-emerald-500">✓</span> {item}</li>)}
                             </ul>
                         </div>
                     </div>
                 </div>
             </section>

             {/* What changes in practice */}
             <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What changes in practice</h2>
                        <p className="text-xl text-gray-600">Illustrative process effects — not performance guarantees.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-emerald-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Less rework</h3>
                            <p className="text-gray-700">Reviewers receive structured packs instead of reconstructed evidence.</p>
                        </div>
                        <div className="bg-emerald-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Faster confidence checks</h3>
                            <p className="text-gray-700">Manifests and windows reduce clarification loops.</p>
                        </div>
                    </div>
                </div>
             </section>

             {/* Next Steps */}
             <section className="py-24 bg-gray-50">
                 <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Next steps</h2>
                     <p className="text-xl text-gray-600 mb-10">For evaluation, ask for a redacted evidence pack and follow the trail.</p>
                     
                     <div className="flex flex-wrap gap-4 justify-center mb-16">
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Outputs</button>
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Walkthroughs</button>
                        <button className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Request evaluation</button>
                        <button className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Disclosures</button>
                     </div>

                     <div className="grid md:grid-cols-3 gap-6 text-sm font-bold text-gray-700 uppercase tracking-wide mb-12">
                         <div>Evidence ≠ outcomes</div>
                         <div>Alignment ≠ certification</div>
                         <div>Verification ≠ regulatory approval</div>
                     </div>

                     <p className="text-gray-500">
                        EcoVeraZ provides evidence infrastructure for external review. It does not certify, approve, score, or determine compliance outcomes.
                        <br className="mb-2"/>
                        If examples or visuals are shown, they are illustrative unless explicitly stated otherwise.
                     </p>
                 </div>
             </section>
        </div>
    );
};

export default PlatformDetailedContent;
