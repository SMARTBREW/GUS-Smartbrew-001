import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/img/Screenshot (274).png"
    },
    {
      id: 2,
      image: "/img/Screenshot (276).png"
    },
    {
      id: 3,
      image: "/img/Screenshot (278).png"
    },
    {
      id: 4,
      image: "/6.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[80vh] bg-white overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-full h-full relative">
              <img 
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content overlaid on the image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight drop-shadow-lg">
              <span className="block">Working for the Better</span>
              <span className="block">Future of Mother</span>
              <span className="block">and Child</span>
            </h1>
            
            <div className="mb-6">
              <p className="text-lg sm:text-xl text-white leading-relaxed drop-shadow-lg font-light">
                SERVING RURAL COMMUNITIES SINCE 1979 | 150+ VILLAGES | HOLISTIC DEVELOPMENT
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition-all duration-200 inline-flex items-center space-x-2">
                <span className="text-lg">♥︎</span>
                <span>Donate</span>
              </button>
            </div>
          </div>

          {/* Right side - Impact Statistics */}
          {/* <div className="relative">
            <div className="bg-white bg-opacity-95 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-normal text-gray-800 mb-4 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">40K+</div>
                  <div className="text-sm text-gray-600">People Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">58</div>
                  <div className="text-sm text-gray-600">Families Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">8</div>
                  <div className="text-sm text-gray-600">Houses Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">44</div>
                  <div className="text-sm text-gray-600">Years Service</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-700 italic text-center">
                  "G.U.S. in 1989 built houses for the most economically disadvantaged and vulnerable sections of society. Around 40,000 people were impacted by this initiative."
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;