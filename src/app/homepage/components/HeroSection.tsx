'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

type Mode = 'fun' | 'serious';

interface HeroCard {
  id: number;
  slug: 'intelligence' | 'platform' | 'netzero';
  eyebrow: string;
  headline: string;
  subheadlineFun: string;
  subheadlineSerious: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundClass: string;
  accentClass: string;
}

const cards: HeroCard[] = [
  {
    id: 1,
    slug: 'intelligence',
    headline: 'Real-Time ESG Intelligence for Enterprice.',
    ctaLabel: 'Explore ESG Intelligence →',
    ctaHref: '/platform-overview',
    backgroundClass: 'from-emerald-400 via-emerald-500 to-emerald-600',
    accentClass: 'bg-emerald-300/20',
    subheadlineFun: '',
    subheadlineSerious: '',
    eyebrow: ''
  },
  {
    id: 2,
    slug: 'platform',
    headline: 'End to End ESG in One Place.',
    ctaHref: '/platform-overview',
    backgroundClass: 'from-sky-400 via-sky-500 to-indigo-500',
    accentClass: 'bg-sky-300/20',
    subheadlineFun: '',
    subheadlineSerious: '',
    ctaLabel: '',
    eyebrow: ''
  },
  {
    id: 3,
    slug: 'netzero',
    headline: 'SDG Goals Sustainable Development Goals.',
    ctaLabel: 'Start Your Net-Zero Journey →',
    ctaHref: '/standards-and-compliance',
    backgroundClass: 'from-orange-400 via-amber-400 to-rose-500',
    accentClass: 'bg-orange-300/20',
    subheadlineFun: '',
    subheadlineSerious: '',
    eyebrow: ''
  },
];

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [mode, setMode] = useState<Mode>('fun');

  const card = cards[activeCard];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 min-h-screen flex items-center py-10 lg:py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-[2.5rem] bg-gradient-to-br ${card.backgroundClass} text-white shadow-2xl border border-white/10 px-6 py-10 sm:px-10 lg:px-14 lg:py-12 overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-40 w-40 h-40 rounded-3xl border border-white/20" />
            <div className="absolute bottom-12 right-10 w-52 h-32 rounded-3xl bg-black/10" />
            <div className="absolute top-1/2 right-6 w-28 h-28 rounded-2xl border border-white/20" />
          </div>

          <div className="relative grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur">
                <Icon name="SparklesIcon" size={18} className="text-yellow-300" />
                <span className="text-xs sm:text-sm font-body-medium tracking-wide uppercase">{card.eyebrow}</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-headline font-headline-bold leading-tight">
                  {card.headline}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-body leading-relaxed text-white/85 max-w-xl">
                  {mode === 'fun' ? card.subheadlineFun : card.subheadlineSerious}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link
                  href={card.ctaHref}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl bg-white text-gray-900 font-cta-bold text-sm sm:text-base shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-smooth"
                >
                  {card.ctaLabel}
                  <Icon name="ArrowRightIcon" size={18} className="ml-2" />
                </Link>

                <div className="flex items-center gap-3 bg-black/20 rounded-full px-2 py-1.5 backdrop-blur text-xs sm:text-sm">
                  <button
                    type="button"
                    onClick={() => setMode('fun')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-smooth ${
                      mode === 'fun' ? 'bg-white text-gray-900' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>🥳</span>
                    <span>Fun</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('serious')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-smooth ${
                      mode === 'serious' ? 'bg-white text-gray-900' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>😐</span>
                    <span>Serious</span>
                  </button>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs text-white/80 pt-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
                  <span className="font-body-medium">Real-time ESG dashboards</span>
                </div>
                <span className="h-4 w-px bg-white/30" />
                <span className="font-body">No spreadsheets. No drama.</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] xl:min-h-[320px] rounded-3xl bg-black/20 border border-white/20 shadow-[0_32px_80px_rgba(0,0,0,0.45)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />

                <div className="relative h-full p-5 sm:p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.accentClass}`}>
                        <Icon name={card.slug === 'netzero' ? 'GlobeAltIcon' : 'ChartBarSquareIcon'} size={22} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-white/60 font-body-medium">
                          {card.slug === 'netzero' ? 'Net-Zero Board' : 'Live ESG Board'}
                        </p>
                        <p className="text-sm font-body-medium">{card.slug === 'netzero' ? 'SDG Goals & Net-Zero' : card.eyebrow}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>Streaming</span>
                    </div>
                  </div>

                  {card.slug === 'netzero' ? (
                    <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/20 bg-black/40 flex items-center justify-center">
                      <img
                        src="/assets/ask-removebg-preview.png"
                        alt="Net-Zero dashboard illustration"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-3 mt-1">
                      <div className="col-span-2 space-y-2">
                        <div className="h-20 sm:h-24 rounded-2xl bg-black/30 border border-white/15 flex items-end p-3">
                          <div className="w-full flex items-end justify-between gap-1">
                            <div className="h-4 w-2 rounded-full bg-emerald-300/70" />
                            <div className="h-8 w-2 rounded-full bg-emerald-200/80" />
                            <div className="h-10 w-2 rounded-full bg-emerald-100" />
                            <div className="h-16 w-2 rounded-full bg-emerald-300" />
                            <div className="h-10 w-2 rounded-full bg-emerald-100/80" />
                            <div className="h-7 w-2 rounded-full bg-emerald-200/80" />
                            <div className="h-12 w-2 rounded-full bg-emerald-300/90" />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-10 rounded-xl bg-black/25 border border-white/10" />
                          <div className="flex-1 h-10 rounded-xl bg-black/25 border border-white/10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-10 rounded-xl bg-black/25 border border-white/10" />
                        <div className="h-10 rounded-xl bg-black/25 border border-white/10" />
                        <div className="h-10 rounded-xl bg-black/25 border border-white/10" />
                      </div>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-8 rounded-full bg-white/30" />
                      <span>
                        {card.slug === 'netzero'
                          ? 'Track SDGs, milestones, and Net-Zero roadmap'
                          : 'Risk alerts, emissions, SDG impact'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-6 rounded-full bg-white/30" />
                      <span className="h-1 w-3 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex items-center justify-between gap-4 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 border border-white/15 hover:bg-black/60 transition-smooth"
                aria-label="Previous ESG card"
              >
                <Icon name="ChevronLeftIcon" size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 border border-white/15 hover:bg-black/60 transition-smooth"
                aria-label="Next ESG card"
              >
                <Icon name="ChevronRightIcon" size={18} />
              </button>
              <div className="hidden sm:flex items-center gap-2">
                {cards.map((c, index) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCard(index)}
                    className={`h-2.5 rounded-full transition-smooth ${
                      index === activeCard ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={c.eyebrow}
                  />
                ))}
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex h-2 w-6 rounded-full bg-white/40" />
              <span className="inline-flex h-2 w-10 rounded-full bg-white/30" />
              <span className="inline-flex h-2 w-4 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;