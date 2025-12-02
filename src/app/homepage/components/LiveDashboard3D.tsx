'use client';

import React from 'react';
import Image from 'next/image';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import Icon from '@/components/ui/AppIcon';

const dataArea = [
  { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
];

const dataBar = [
  { name: 'A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'E', uv: 1890, pv: 4800, amt: 2181 },
];

const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

const LiveDashboard3D = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden perspective-1000">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 lg:pl-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 3D Animated Dashboard */}
          <div className="lg:col-span-7 xl:col-span-8 relative transform-style-3d lg:rotate-y-12 lg:rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out flex flex-col">
            
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 relative z-10 w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 flex-shrink-0">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ESG Performance</h3>
                  <p className="text-sm text-gray-500">Real-time sustainability metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-emerald-600">Live</span>
                </div>
              </div>

              {/* Grid Layout - Flex grow to fill space */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                
                {/* Card 1: Carbon Emission (Area Chart) */}
                <div className="col-span-2 bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col">
                  <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <h4 className="text-sm font-semibold text-gray-700">Carbon Emission</h4>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">-12%</span>
                  </div>
                  <div className="flex-grow w-full min-h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={dataArea}>
                        <defs>
                          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} />
                        <Tooltip 
                          contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', fontSize: '12px'}}
                          itemStyle={{color: '#10B981'}}
                        />
                        <Area type="monotone" dataKey="uv" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Card 2: Compliance Score (Pie Chart) */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                   <h4 className="text-sm font-semibold text-gray-700 mb-4 w-full text-left flex-shrink-0">Compliance</h4>
                   <div className="flex-grow w-full min-h-[150px] relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={dataPie}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={70}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {dataPie.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-bold text-gray-900">92</span>
                      </div>
                   </div>
                </div>

                {/* Card 3: Resource Usage (Bar Chart) */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 flex-shrink-0">Resources</h4>
                  <div className="flex-grow w-full min-h-[150px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dataBar}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9CA3AF'}} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', fontSize: '12px'}} />
                        <Bar dataKey="uv" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={24} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Elements for 3D Depth */}
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg border border-emerald-100 transform lg:translate-z-20 animate-float hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Icon name="CheckBadgeIcon" size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Status</p>
                  <p className="text-xs font-bold text-gray-900">Verified</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-blue-100 transform lg:translate-z-30 animate-float-delayed hidden lg:block">
               <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Icon name="ArrowTrendingUpIcon" size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">ROI</p>
                  <p className="text-xs font-bold text-gray-900">+24.5%</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Static Image with 3D Effect */}
          <div className="lg:col-span-5 xl:col-span-4 relative flex justify-center lg:justify-end perspective-1000 group h-full mt-12 lg:mt-0">
             <div className="relative w-full max-w-lg lg:max-w-none transform-style-3d transition-transform duration-700 ease-out group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg] lg:rotate-y-[-12deg] lg:rotate-x-[5deg] h-full flex items-center">
                
                <Image
                  src="/esg-dashboard-human.png"
                  alt="ESG Dashboard Interface"
                  width={800}
                  height={600}
                  className="w-auto h-full object-contain drop-shadow-2xl rounded-2xl border border-white/50"
                  priority
                />

                {/* Floating Badge for Image */}
                <div className="absolute bottom-10 -left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-emerald-100 transform lg:translate-z-30 animate-float-delayed hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Icon name="UserGroupIcon" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">User Engagement</p>
                      <p className="text-sm font-bold text-gray-900">High Activity</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .translate-z-20 {
          transform: translateZ(40px);
        }
        .translate-z-30 {
          transform: translateZ(60px);
        }
        .rotate-y-12 {
          transform: rotateY(-12deg) rotateX(5deg);
        }
        .rotate-x-6 {
          /* combined above */
        }
        @keyframes float {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(40px) translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateZ(60px) translateY(0); }
          50% { transform: translateZ(60px) translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default LiveDashboard3D;
