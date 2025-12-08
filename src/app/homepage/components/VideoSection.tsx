'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const VideoSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Container */}
        <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 group">
            
            {/* Background Placeholder Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            
            {/* Play Button / Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 cursor-pointer border border-white/20">
                    <Icon name="PlayIcon" size={32} className="text-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold tracking-wide">Brand Video</h3>
                <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
            </div>

            {/* Optional: Overlay Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
