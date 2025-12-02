'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-emerald-900 text-white py-20 lg:py-32 overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px]" />
             <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-headline font-headline-bold mb-6">
              About <span className="text-emerald-400">EcoVeraZ</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-body leading-relaxed">
              We are on a mission to bring radical transparency and trust to the world's sustainability data through patent-pending verification technology.
            </p>
          </div>
        </section>



        {/* Mission Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-headline font-headline-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <div className="space-y-6 text-lg text-text-secondary font-body leading-relaxed">
                  <p>
                    In a world where greenwashing erodes trust, EcoVeraZ stands as the standard for verifiable truth. We believe that sustainability claims should be as auditable as financial statements.
                  </p>
                  <p>
                    Our platform connects the physical reality of supply chains with the digital certainty of blockchain, creating a new layer of trust for the green economy.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">Industries Served</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">Data Points Verified</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">Audit Trail</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">Real-time Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
