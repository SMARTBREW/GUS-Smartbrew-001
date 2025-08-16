import React from 'react';
import { ArrowRight, Users, Heart, Leaf, Target, BookOpen } from 'lucide-react';

const Internship = () => {
  return (
         <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-normal mb-8 text-black">
            Lighting up daily with their selfless acts of heroism.
          </h1>
                     <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-3 group">
            <span>Volunteering Application</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Volunteering Activities Illustrations */}
        <div className="mb-20">
                     <div className="bg-gray-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Illustration 1 - Mentorship/Care */}
              <div className="text-center">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                   <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                     <Users className="h-12 w-12 text-white" />
                   </div>
                   <h3 className="text-lg font-normal text-gray-800 mb-2">Mentorship & Care</h3>
                   <p className="text-sm text-gray-600">Supporting children and youth development</p>
                 </div>
              </div>

              {/* Illustration 2 - Environmental Work */}
              <div className="text-center">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                   <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                     <Leaf className="h-12 w-12 text-white" />
                   </div>
                   <h3 className="text-lg font-normal text-gray-800 mb-2">Environmental Conservation</h3>
                   <p className="text-sm text-gray-600">Community cleanup and sustainability</p>
                 </div>
              </div>

              {/* Illustration 3 - Food Donation */}
              <div className="text-center">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                   <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                     <Heart className="h-12 w-12 text-white" />
                   </div>
                   <h3 className="text-lg font-normal text-gray-800 mb-2">Food Distribution</h3>
                   <p className="text-sm text-gray-600">Donating and distributing essential items</p>
                 </div>
              </div>

              {/* Illustration 4 - Gardening */}
              <div className="text-center">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                   <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                     <Leaf className="h-12 w-12 text-white" />
                   </div>
                   <h3 className="text-lg font-normal text-gray-800 mb-2">Community Gardening</h3>
                   <p className="text-sm text-gray-600">Planting and nurturing green spaces</p>
                 </div>
              </div>

              {/* Illustration 5 - Fundraising */}
              <div className="text-center">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                   <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                     <Target className="h-12 w-12 text-white" />
                   </div>
                   <h3 className="text-lg font-normal text-gray-800 mb-2">Fundraising</h3>
                   <p className="text-sm text-gray-600">Coordinating donation drives and events</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Programs Section */}
        <div className="text-center">
                      <h2 className="text-4xl font-normal text-black mb-12">OUR INTERNSHIP PROGRAMS</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
            {/* In-Person Impact */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 max-w-md">
                             <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
                                 <Users className="h-10 w-10 text-white" />
              </div>
                              <h3 className="text-2xl font-normal text-gray-800 mb-4">In-Person Impact</h3>
              <p className="text-gray-600 mb-6">
                Work directly with communities, participate in field activities, and create tangible change through hands-on experience.
              </p>
                             <ul className="text-left space-y-2 mb-6">
                 <li className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                   <span className="text-sm text-gray-600">Field work and community engagement</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                   <span className="text-sm text-gray-600">Direct program implementation</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                   <span className="text-sm text-gray-600">Real-time problem solving</span>
                 </li>
               </ul>
            </div>

                         {/* Connection Arrow */}
                            <div className="hidden lg:block">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                   <ArrowRight className="h-8 w-8 text-white" />
                 </div>
               </div>

            {/* Virtual Impact */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 max-w-md">
                             <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
                 <BookOpen className="h-10 w-10 text-white" />
               </div>
                              <h3 className="text-2xl font-normal text-gray-800 mb-4">Virtual Impact</h3>
              <p className="text-gray-600 mb-6">
                Contribute remotely through digital platforms, research, content creation, and online program support.
              </p>
                             <ul className="text-left space-y-2 mb-6">
                 <li className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                   <span className="text-sm text-gray-600">Digital content creation</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                   <span className="text-sm text-gray-600">Online research and analysis</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                   <span className="text-sm text-gray-600">Remote program coordination</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Internship Application Button */}
                     <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-3 group">
             <span>Internship Application</span>
             <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Internship;
