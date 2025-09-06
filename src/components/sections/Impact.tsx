import React from 'react';
import { Users, Heart, Quote, MapPin, Globe, Award, Star, Target, CheckCircle } from 'lucide-react';

const Impact = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "45+ Years of Service",
      description: "Serving rural communities since 1979 with unwavering commitment to sustainable development"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Excellence in Rural Development",
      description: "Recognized for innovative approaches to community empowerment and women's leadership"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Holistic Approach",
      description: "Integrated development covering health, education, environment, and economic empowerment"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Proven Results",
      description: "Transformed lives in 150+ villages through community-driven development initiatives"
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-12 sm:mb-16 text-center lg:text-left">
              <span className="text-gray-800">OUR </span>
              <span className="text-red-600">IMPACT</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-gray-300 to-gray-300 rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative">
              <div className="flex justify-center mb-6 sm:mb-8">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black opacity-80" />
              </div>
              
              <blockquote className="text-center text-black mb-8 sm:mb-10">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                  "Working for the Better Future of Mother and Child"
                </p>
              </blockquote>
              
              <div className="text-center text-black">
                <div className="mb-3 sm:mb-4">
                  <svg className="w-24 h-6 sm:w-32 sm:h-8 mx-auto" viewBox="0 0 120 30" fill="none">
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
                <p className="font-normal text-lg sm:text-xl">Gramin Utthan Samity</p>
                <p className="text-sm opacity-90">Established 1979</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center lg:text-left">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Serving 150+ remote villages in the Northern Kumaon Himalaya through holistic development, 
                focusing on healthcare, education, environmental conservation, and women's empowerment 
                in communities accessible only by footpath.
              </p>
            </div>
          </div>
        </div>
                 <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start mt-16 sm:mt-20">
           <div className="text-center lg:text-left">
             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4 sm:mb-6">
               <span className="text-gray-700">OUR </span>
               <span className="text-red-600">MISSION</span>
             </h3>
             <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
               To take a holistic approach to Development Work, focusing on the people's ecological, social, cultural and economic needs. We help the local people identify their problems and work together, mobilising local resources to achieve their goals and take control of their lives. Our method of rural awakening is to support Village and Women's Groups, bringing villagers of every sector together to discuss their problems and work collectively.
             </p>
           </div>

           <div className="text-center lg:text-left">
             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4 sm:mb-6">
               <span className="text-gray-700">OUR </span>
               <span className="text-red-600">VISION</span>
             </h3>
             <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
               A future where rural Kumaoni communities are self-reliant and empowered, with women playing a central role in decision-making and community development. We envision sustainable villages with access to healthcare, education, and economic opportunities, where traditional knowledge is preserved and local resources are utilized effectively for the betterment of all community members.
             </p>
           </div>
         </div>
      </div>  
    </div>
  );
};

export default Impact;