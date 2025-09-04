import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Heart, Stethoscope, Users } from 'lucide-react';

const ImpactStrip = () => {
  const targets = {
    villages: 150,
    beneficiaries: 50000,
    healthCenters: 5,
    womenWorkers: 80,
  };

  const [counters, setCounters] = useState({
    villages: 0,
    beneficiaries: 0,
    healthCenters: 0,
    womenWorkers: 0,
  });

  const durationMs = 1600; // total animation time
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1); // 0..1 shared progress

      setCounters({
        villages: Math.floor(targets.villages * progress),
        beneficiaries: Math.floor(targets.beneficiaries * progress),
        healthCenters: Math.floor(targets.healthCenters * progress),
        womenWorkers: Math.floor(targets.womenWorkers * progress),
      });

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCounters(targets); // snap to exact targets at end
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return `${num}+`;
  };

  const items = [
    { label: 'Villages', value: `${counters.villages}+`, icon: <MapPin className="w-5 h-5" /> },
    { label: 'Beneficiaries', value: formatNumber(counters.beneficiaries), icon: <Heart className="w-5 h-5" /> },
    { label: 'Health Centers', value: `${counters.healthCenters}`, icon: <Stethoscope className="w-5 h-5" /> },
    { label: 'Women Workers', value: `${counters.womenWorkers}%`, icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch justify-between divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {items.map((it) => (
            <div key={it.label} className="flex-1 py-5 md:py-6">
              <div className="flex items-center justify-between md:justify-center md:space-x-3">
                <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white">
                  {it.icon}
                </div>
                <div className="text-right md:text-left">
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900 leading-none">{it.value}</div>
                  <div className="text-xs md:text-sm uppercase tracking-wide text-gray-600">{it.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStrip;
