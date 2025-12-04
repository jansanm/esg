'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface HeroCard {
  id: number;
  slug: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
}

const cards: HeroCard[] = [
  {
    id: 1,
    slug: 'intelligence',
    headline: 'Real-Time ESG Intelligence for Enterprise.',
    subheadline: 'Real-time ESG dashboards  |  No spreadsheets. No drama.',
    ctaLabel: 'Request Demo',
    ctaHref: '/platform-overview',
    imageSrc: '/esg-updated.png',
  },
  {
    id: 2,
    slug: 'netzero',
    headline: 'SDG Goals & Net-Zero Tracking.',
    subheadline: 'Automated data collection  |  Audit-ready reports.',
    ctaLabel: 'Request Demo',
    ctaHref: '/standards-and-compliance',
    imageSrc: '/ask.png',
  },
  {
    id: 3,
    slug: 'end-to-end',
    headline: 'End-to-End ESG Management in One Place.',
    subheadline: 'Real-time ESG dashboards  |  No spreadsheets. No drama.',
    ctaLabel: 'Request Demo',
    ctaHref: '/contact',
    imageSrc: '/end-to-end-esg.png',
  },
];

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const card = cards[activeCard];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      const duration = 5000;

      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % cards.length);
      }, duration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-white pt-0 pb-0 lg:pt-0 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="space-y-8 z-10 w-full text-left">
            <div className="transition-all duration-500 ease-in-out">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
                {card.headline}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
                {card.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  href={card.ctaHref}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-lg shadow-lg hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  {card.ctaLabel}
                </Link>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3">
                  {cards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveCard(index);
                        setIsPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 border border-emerald-600 ${
                        index === activeCard
                          ? 'bg-emerald-600 scale-125'
                          : 'bg-transparent hover:bg-emerald-100'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                  <button
                    onClick={togglePlay}
                    className="ml-2 text-emerald-600 hover:text-emerald-800 transition-colors"
                  >
                    {isPlaying ? (
                      <Icon name="PauseIcon" size={20} />
                    ) : (
                      <Icon name="PlayIcon" size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full flex justify-center lg:justify-end h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full">
              {/* Decorative background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50/50 rounded-full blur-3xl -z-10"></div>

              <div className="relative w-full h-full transition-opacity duration-500 ease-in-out">
                <Image
                  key={card.imageSrc} // Force re-render on image change for animation
                  src={card.imageSrc}
                  alt={card.headline}
                  fill
                  className="object-contain animate-in fade-in zoom-in-95 duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
