'use client';

import Image from 'next/image';

const DashboardPreview = () => {
  return (
    <section className="bg-[#E8F5E9] py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full flex justify-end">
          <Image
            src="/esg-dashboard-human.png"
            alt="ESG Dashboard with Live Monitoring"
            width={1200}
            height={675}
            className="w-auto h-auto max-h-[500px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
