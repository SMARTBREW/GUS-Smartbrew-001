import React from 'react';
import { Heart } from 'lucide-react';

const CTA = () => {
  return (
    <>
      {/* What We Do Section - White Background */}
      <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
          <span className="text-gray-800">What </span>
          <span className="text-red-600">We Do</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          We work tirelessly to create positive change in rural communities through education, healthcare, and sustainable development programs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img 
              src="/img/gus1.jpg" 
              alt="Gramin Utthan Samity Community Event - Children and adults celebrating achievements with certificates and medals"
              className="w-full h-80 lg:h-[600px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="order-1 lg:order-2 lg:pt-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4">
                Community <span className="text-red-600">Empowerment</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our work focuses on empowering rural communities through comprehensive development programs. 
                We believe in the potential of every individual and work to create opportunities for growth and success.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4">
                Education & <span className="text-red-600">Development</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide quality education, skill development, and leadership training to children and youth. 
                Our programs help create confident, capable individuals who can lead their communities forward.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4">
                Sustainable <span className="text-red-600">Impact</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our holistic approach, we create lasting positive change in communities. 
                Our programs are designed to be sustainable and create long-term benefits for generations to come.
              </p>
            </div>
            
            <div className="pt-2">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Learn More About Our Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </>
  );
};

export default CTA;