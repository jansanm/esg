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
  bgGradient: string;
}

const cards: HeroCard[] = [
  {
    id: 1,
    slug: 'intelligence',
    headline: 'Real-Time ESG Intelligence for Enterprise.',
    subheadline: 'Real-time ESG dashboards  |  No spreadsheets. No drama.',
    ctaLabel: 'Explore ESG Intelligence',
    ctaHref: '/platform-overview',
    imageSrc: '/esg.png',
    bgGradient: 'from-[#10B981] to-[#059669]',
  },
  {
    id: 2,
    slug: 'netzero',
    headline: 'SDG Goals & Net-Zero Tracking.',
    subheadline: 'Automated data collection  |  Audit-ready reports.',
    ctaLabel: 'Start Your Net-Zero Journey',
    ctaHref: '/standards-and-compliance',
    imageSrc: '/sdg.png',
    bgGradient: 'from-orange-400 to-red-500',
  },
  {
    id: 3,
    slug: 'end-to-end',
    headline: 'End to End ESG in One Place.',
    subheadline: 'Real-time ESG dashboards  |  No spreadsheets. No drama.',
    ctaLabel: 'Launch Demo',
    ctaHref: '/contact',
    imageSrc: '/end-to-end-esg.png',
    bgGradient: 'from-cyan-400 to-blue-600',
  },
];

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const card = cards[activeCard];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      const startTime = Date.now();
      const duration = 5000;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
        
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };
      
      // Reset progress when card changes
      setProgress(0);
      
      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % cards.length);
        setProgress(0);
      }, duration);
    }

    return () => {
      clearInterval(interval);
      setProgress(0); // Reset on cleanup
    };
  }, [isPlaying, activeCard]); // Re-run when activeCard changes to reset timer

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
    setIsPlaying(false); // Pause on manual interaction
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
    setIsPlaying(false); // Pause on manual interaction
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-emerald-50/30 py-6 lg:py-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden min-h-[500px] lg:h-[420px] flex items-center transition-all duration-700 ease-in-out">
            {/* Background Gradient/Pattern */}
            <div className={`absolute inset-0 bg-gradient-to-r ${card.bgGradient} transition-all duration-700 ease-in-out`} />
            
            {/* Content Container */}
            <div className="relative w-full h-full px-6 py-8 md:px-12 md:py-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
                
                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8 text-white z-10 w-full text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight min-h-[1.2em]">
                        {card.headline}
                    </h1>
                    
                    <div>
                        <Link
                            href={card.ctaHref}
                            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-lg bg-white text-emerald-700 font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-auto"
                        >
                            {card.ctaLabel}
                            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                        </Link>
                    </div>

                    <div className="flex items-center justify-start gap-3 text-sm md:text-base font-medium text-white/90">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <p>{card.subheadline}</p>
                    </div>
                </div>

                {/* Right Content - Image & Controls */}
                <div className="relative h-full flex flex-col items-center lg:items-start justify-center gap-6 w-full mt-4 lg:mt-0">
                     <div className="relative w-full max-w-[300px] h-[200px] sm:max-w-[400px] sm:h-[250px] lg:w-[550px] lg:h-[300px] shrink-0">
                        <Image
                            src={card.imageSrc}
                            alt={card.headline}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                     </div>
                     
                     {/* Carousel Controls - Moved Here */}
                     <div className="flex items-center gap-4 z-20 scale-90 sm:scale-100">
                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
                            aria-label="Previous slide"
                        >
                            <Icon name="ChevronLeftIcon" size={24} className="text-white" />
                        </button>
                        
                        {/* Center Control Pill */}
                        <div className="flex items-center gap-4 bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-xl backdrop-blur-md border border-white/10 h-10 sm:h-12">
                             {/* Play/Pause */}
                             <button 
                                onClick={togglePlay}
                                className="text-white hover:text-white/80 transition-colors"
                             >
                                {isPlaying ? (
                                    <Icon name="PauseIcon" size={20} />
                                ) : (
                                    <Icon name="PlayIcon" size={20} />
                                )}
                             </button>

                             {/* Dots */}
                             <div className="flex items-center gap-2">
                                {cards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveCard(index);
                                            setIsPlaying(false);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === activeCard ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                             </div>

                             {/* Progress Bar */}
                             <div className="w-12 sm:w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                                    style={{ width: `${isPlaying ? progress : 0}%` }}
                                />
                             </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
                            aria-label="Next slide"
                        >
                            <Icon name="ChevronRightIcon" size={24} className="text-white" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;