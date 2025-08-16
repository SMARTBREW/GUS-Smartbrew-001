import React from 'react';
import { Heart } from 'lucide-react';

const CTA = () => {
  return (
    <div className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - What We Do content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-normal text-gray-900 mb-8 leading-tight">
              What We Do
            </h2>
            
            <div className="max-w-lg mb-10">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Educate Girls works with the government, community and village-based volunteers and mentors to ensure every girl in the remotest parts of India is included, educated and empowered with choices and voices.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition-all duration-200 inline-flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Donate</span>
              </button>
            </div>
          </div>

          {/* Right side - Image with minimal red accent like original */}
          <div className="relative">
            {/* Small red accent - positioned to peek from behind image like original */}
           
            
            {/* Image container */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Children learning together"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;