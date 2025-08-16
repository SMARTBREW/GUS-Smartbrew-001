import React, { useState, useEffect } from 'react';
import { Users, Heart, Quote, MapPin, Globe } from 'lucide-react';

const Impact = () => {
  const [counters, setCounters] = useState({
    villages: 0,
    beneficiaries: 0,
    healthCenters: 0,
    womenWorkers: 0
  });

  const finalNumbers = {
    villages: 150,
    beneficiaries: 50000,
    healthCenters: 5,
    womenWorkers: 80
  };

  // Counter animation effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        villages: Math.min(prev.villages + Math.ceil(finalNumbers.villages / steps), finalNumbers.villages),
        beneficiaries: Math.min(prev.beneficiaries + Math.ceil(finalNumbers.beneficiaries / steps), finalNumbers.beneficiaries),
        healthCenters: Math.min(prev.healthCenters + Math.ceil(finalNumbers.healthCenters / steps), finalNumbers.healthCenters),
        womenWorkers: Math.min(prev.womenWorkers + Math.ceil(finalNumbers.womenWorkers / steps), finalNumbers.womenWorkers)
      }));
    }, stepDuration);

    setTimeout(() => {
      clearInterval(interval);
      setCounters(finalNumbers);
    }, duration + 100);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return `${num}+`;
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Statistics */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-normal mb-16 text-center lg:text-left">
              <span className="text-gray-800">OUR </span>
              <span className="text-red-600">IMPACT</span>
            </h2>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              {/* Villages */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-normal text-gray-800 mb-2">VILLAGES</h3>
                <p className="text-4xl font-normal text-gray-800">{counters.villages}+</p>
              </div>

              {/* Beneficiaries */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-normal text-gray-800 mb-2">BENEFICIARIES</h3>
                <p className="text-4xl font-normal text-gray-800">{formatNumber(counters.beneficiaries)}</p>
              </div>

              {/* Health Centers */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-normal text-gray-800 mb-2">HEALTH CENTERS</h3>
                <p className="text-4xl font-normal text-gray-800">{counters.healthCenters}</p>
              </div>

              {/* Women Workers */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-normal text-gray-800 mb-2">WOMEN WORKERS</h3>
                <p className="text-4xl font-normal text-gray-800">{counters.womenWorkers}%</p>
              </div>
            </div>
          </div>

          {/* Right Side - Quote */}
          <div>
            {/* Founder Quote */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-300 rounded-2xl p-12 text-white relative">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <Quote className="w-12 h-12 text-black opacity-80" />
              </div>
              
              {/* Quote Text */}
              <blockquote className="text-center text-black mb-10">
                <p className="text-2xl font-medium leading-relaxed">
                  "Working for the Better Future of Mother and Child"
                </p>
              </blockquote>
              
              {/* Signature */}
              <div className="text-center text-black">
                <div className="mb-4">
                  <svg className="w-32 h-8 mx-auto" viewBox="0 0 120 30" fill="none">
                    <path 
                      d="M15 20 Q25 10 35 20 T55 20 Q65 15 75 20 T95 20" 
                      stroke="white" 
                      strokeWidth="2" 
                      fill="none"
                      opacity="0.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="font-normal text-xl">Gramin Utthan Samity</p>
                <p className="text-sm opacity-90">Established 1979</p>
              </div>
            </div>

            {/* Mission Text */}
            <div className="mt-12 text-center lg:text-left">
              <p className="text-lg text-gray-600 leading-relaxed">
                Serving 150+ remote villages in the Northern Kumaon Himalaya through holistic development, 
                focusing on healthcare, education, environmental conservation, and women's empowerment 
                in communities accessible only by footpath.
              </p>
            </div>
          </div>
        </div>
                 <div className="grid lg:grid-cols-2 gap-16 items-start mt-20">
           {/* Left Side - Our Mission */}
           <div className="text-center lg:text-left">
             <h3 className="text-4xl font-normal mb-6">
               <span className="text-gray-700">OUR </span>
               <span className="text-red-600">MISSION</span>
             </h3>
             <p className="text-lg text-gray-600 leading-relaxed mb-8">
               To take a holistic approach to Development Work, focusing on the people's ecological, social, cultural and economic needs. We help the local people identify their problems and work together, mobilising local resources to achieve their goals and take control of their lives. Our method of rural awakening is to support Village and Women's Groups, bringing villagers of every sector together to discuss their problems and work collectively.
             </p>
           </div>

           {/* Right Side - Our Vision */}
           <div className="text-center lg:text-left">
             <h3 className="text-4xl font-normal mb-6">
               <span className="text-gray-700">OUR </span>
               <span className="text-red-600">VISION</span>
             </h3>
             <p className="text-lg text-gray-600 leading-relaxed mb-8">
               A future where rural Kumaoni communities are self-reliant and empowered, with women playing a central role in decision-making and community development. We envision sustainable villages with access to healthcare, education, and economic opportunities, where traditional knowledge is preserved and local resources are utilized effectively for the betterment of all community members.
             </p>
           </div>
         </div>
      </div>  
    </div>
  );
};

export default Impact;