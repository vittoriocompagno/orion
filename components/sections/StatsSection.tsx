'use client';

import CountingNumber from '@/components/CountingNumber';

const stats = [
  { number: "50K+", label: "RECENSIONI GESTITE" },
  { number: "98%", label: "SENTIMENT ACCURACY" },
  { number: "2.5X", label: "RISPARMIO DI TEMPO" },
  { number: "24/7", label: "MONITORAGGIO" },
];

export default function StatsSection() {
  return (
    <section className="relative px-4 py-20 bg-surface border-b-4 border-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 backdrop-blur-xs" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 relative">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center group backdrop-blur-xs p-6 border-2 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white/50 border-gray-900" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CountingNumber 
              value={stat.number} 
              className="text-5xl md:text-6xl font-bold mb-2 font-mono block text-accent"
            />
            <div className="text-sm font-mono border-t-2 pt-2 mt-2 text-gray-700 border-gray-900">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 