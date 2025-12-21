'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header className="!sticky !top-0 z-50" />
      
      <main className="flex-grow flex flex-col lg:flex-row lg:h-screen">
        {/* Left Panel: Brand & Visuals (40%) */}
        <div className="lg:w-[40%] bg-emerald-900 relative overflow-hidden flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16 text-white min-h-[200px] sm:min-h-[250px] lg:min-h-0 lg:h-full">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px]" />
             <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let's build the future of <span className="text-emerald-400">sustainability</span> together.
            </h1>
            {/* <p className="text-emerald-100/80 text-lg leading-relaxed max-w-md">
              Partner with EcoVeraZ to transform your ESG data into actionable insights and verified impact.
            </p> */}
          </div>


        </div>

        {/* Right Panel: Form (60%) */}
        <div className="lg:w-[60%] bg-white p-6 sm:p-8 lg:p-20 flex items-center justify-center lg:h-full lg:overflow-y-auto">
          <div className="w-full max-w-xl py-6 sm:py-10">
            <div className="mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get in touch</h2>
              <p className="text-gray-500">We'd love to hear from you. Please fill out this form.</p>
            </div>

            <form className="space-y-5 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors">First name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                      <Icon name="UserIcon" size={20} />
                    </div>
                    <input 
                      type="text" 
                      className="w-full pl-8 pr-4 py-3 border-b border-gray-300 focus:border-emerald-600 outline-none transition-all bg-transparent placeholder:text-gray-400 rounded-none"
                      placeholder="Jane"
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors">Last name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                      <Icon name="UserIcon" size={20} />
                    </div>
                    <input 
                      type="text" 
                      className="w-full pl-8 pr-4 py-3 border-b border-gray-300 focus:border-emerald-600 outline-none transition-all bg-transparent placeholder:text-gray-400 rounded-none"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors">Mobile Number</label>
                <div className="flex gap-3">
                  <div className="relative w-32">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                      <Icon name="GlobeAltIcon" size={20} />
                    </div>
                    <select 
                      className="w-full pl-8 pr-2 py-3 border-b border-gray-300 focus:border-emerald-600 outline-none transition-all bg-transparent text-gray-700 rounded-none appearance-none cursor-pointer"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                      <Icon name="PhoneIcon" size={20} />
                    </div>
                    <input 
                      type="tel" 
                      className="w-full pl-8 pr-4 py-3 border-b border-gray-300 focus:border-emerald-600 outline-none transition-all bg-transparent placeholder:text-gray-400 rounded-none"
                      placeholder="123 456 7890"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-emerald-600 outline-none transition-all bg-transparent placeholder:text-gray-400 rounded-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="privacy" className="font-medium text-gray-700">
                    Privacy Policy
                  </label>
                  <p className="text-gray-500">You agree to our friendly <a href="#" className="underline hover:text-emerald-600">privacy policy</a>.</p>
                </div>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                Send message
                <Icon name="PaperAirplaneIcon" size={18} />
              </button>
            </form>
            
            <div className="mt-10 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={16} className="text-emerald-600" />
                <span>contact@ecoveraz.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={16} className="text-emerald-600" />
                <span>+1 (555) 000-0000</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer removed for full screen layout */}
    </div>
  );
}
