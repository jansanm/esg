'use client';

import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus input when opened
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center pt-32 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="flex flex-col gap-6">
          {/* Search Input */}
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="What do you want to know?"
              className="w-full px-6 py-4 text-lg text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-700 focus:bg-white transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              Site search
            </button>
            <button className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-green-700 hover:bg-green-800 hover:shadow-lg rounded-lg transition-all">
              Ask Grot AI
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchOverlay;
