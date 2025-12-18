'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NetZeroPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-expand after showing the bulb
      setTimeout(() => {
        setIsExpanded(true);
      }, 500);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const options = [
    { id: '1', label: 'Less than 2 years', value: 'less-than-2' },
    { id: '2', label: '3 years', value: '3-years' },
    { id: '3', label: '5 years', value: '5-years' },
    { id: '4', label: '10 years', value: '10-years' },
  ];

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    // Close popup after 2 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Popup */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80 animate-in slide-in-from-bottom-5 duration-300">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <Icon name="XMarkIcon" size={20} />
          </button>

          {/* Question */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              When do you plan to achieve your Net-Zero target?
            </h3>
            {/* <p className="text-sm text-gray-600">
              Help us understand your sustainability goals
            </p> */}
          </div>

          {/* Options */}
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedOption === option.value
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.label}</span>
                  {selectedOption === option.value && (
                    <Icon name="CheckIcon" size={20} className="text-emerald-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Thank you message */}
          {selectedOption && (
            <div className="mt-4 p-3 bg-emerald-50 rounded-lg animate-in fade-in duration-300">
              <p className="text-sm text-emerald-700 font-medium flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={18} />
                Thank you for sharing!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Lightbulb Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Net-Zero Survey"
      >
        <Icon name="LightBulbIcon" size={28} />
      </button>
    </div>
  );
};

export default NetZeroPopup;
