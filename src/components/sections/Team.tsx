import React from 'react';
import FounderProfile from './FounderProfile';

const Team = () => {
  return (
    <>
      <FounderProfile />

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
           <div className="text-center mb-8 sm:mb-12">
             <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-3 sm:mb-4">
               <span className="text-black">OFFICE BEARERS & </span>
               <span className="text-red-600">MANAGING COMMITTEE</span>
             </h3>
             <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
             <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
               Our dedicated team of office bearers and committee members working together for community development
             </p>
           </div>

           {/* Mobile: Horizontal Scroll */}
           <div className="block sm:hidden">
             <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">DS</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Darwan Singh Kapkoti</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">President</p>
                   <p className="text-xs text-gray-600">Retired Teacher</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">MS</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Mohan Singh Kapkoti</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Vice President</p>
                   <p className="text-xs text-gray-600">Retired Army</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">UJ</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Umesh Joshi</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Secretary / Coordinator</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">DS</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Diwan Singh Kapkoti</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Treasurer</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">PS</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Puran Singh Kapkoti</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">DD</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Dan Singh Danu</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">TD</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Tara Danu</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">BK</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Smt. Basanti Kapkoti</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">KC</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Kaushtub Chandra Joshi</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">AS</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Anand Singh Kapkoti</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Social Worker</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">TA</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Smt. Tulsi Arya</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Agriculture</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">NT</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Narendra Singh Takuli</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">-</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">MT</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Shri Mohan Singh Takuli</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">Agriculture</p>
                 </div>
               </div>
               
               <div className="flex-shrink-0 w-48">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 shadow-lg bg-red-100 flex items-center justify-center">
                     <span className="text-xl text-red-600 font-bold">AP</span>
                   </div>
                   <h4 className="text-sm font-normal text-gray-800 mb-1 leading-tight px-2">Anand Ballam Pandey</h4>
                   <p className="text-xs text-red-600 font-medium mb-1">Member</p>
                   <p className="text-xs text-gray-600">-</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Desktop: Grid Layout */}
           <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">DS</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Darwan Singh Kapkoti</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">President</p>
               <p className="text-xs sm:text-sm text-gray-600">Retired Teacher</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">MS</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Mohan Singh Kapkoti</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Vice President</p>
               <p className="text-xs sm:text-sm text-gray-600">Retired Army</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">UJ</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Umesh Joshi</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Secretary / Coordinator</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">DS</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Diwan Singh Kapkoti</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Treasurer</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">PS</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Puran Singh Kapkoti</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">DD</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Dan Singh Danu</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">TD</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Tara Danu</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">BK</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Smt. Basanti Kapkoti</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">KC</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Kaushtub Chandra Joshi</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">AS</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Anand Singh Kapkoti</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">TA</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Smt. Tulsi Arya</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Agriculture</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">NT</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Narendra Singh Takuli</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">-</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">MT</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Shri Mohan Singh Takuli</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">Agriculture</p>
             </div>

             <div className="text-center">
               <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-2xl sm:text-3xl text-red-600 font-bold">AP</span>
               </div>
               <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-800 mb-1 leading-tight px-2">Anand Ballam Pandey</h4>
               <p className="text-xs sm:text-sm md:text-base text-red-600 font-medium mb-1">Member</p>
               <p className="text-xs sm:text-sm text-gray-600">-</p>
             </div>
           </div>
         </div>

         <div className="mt-12 sm:mt-16 md:mt-20">
           <div className="text-center mb-8 sm:mb-12">
                           <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-3 sm:mb-4">
                <span className="text-black">OUR </span>
                                 <span className="text-red-600">AWARDS</span>
              </h3>
                             <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                Our founder has been recognized with prestigious national and international awards for outstanding contributions to social entrepreneurship and environmental protection
              </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
             <div className="text-center">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-4 sm:mb-6 bg-white">
                 <img 
                   src="/awards/Award1.jpg"
                   alt="Nelson Mandela Global Brilliance Award - Confirmation Letter"
                   className="w-full max-h-80 sm:max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-2">Nelson Mandela Global Brilliance Award</h4>
               <p className="text-sm sm:text-base text-gray-600">Confirmation and Selection Letter recognizing exceptional leadership and innovation in social entrepreneurship</p>
             </div>
             
             <div className="text-center">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-4 sm:mb-6 bg-white">
                 <img 
                   src="/awards/Award2.jpg"
                   alt="Nelson Mandela Global Brilliance Award"
                   className="w-full max-h-80 sm:max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-2">Nelson Mandela Global Brilliance Award</h4>
               <p className="text-sm sm:text-base text-gray-600">Prestigious international recognition for outstanding contributions to social entrepreneurship and environmental protection</p>
             </div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mt-8 sm:mt-12">
             <div className="text-center">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-4 sm:mb-6 bg-white">
                 <img 
                   src="/awards/award4.jpg"
                   alt="Nelson Mandela Global Brilliance Award - Confirmation Letter"
                   className="w-full max-h-80 sm:max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-2">Nelson Mandela Global Brilliance Award</h4>
               <p className="text-sm sm:text-base text-gray-600">Confirmation and Selection Letter recognizing exceptional leadership and innovation in social entrepreneurship</p>
             </div>
             
             <div className="text-center">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-4 sm:mb-6 bg-white">
                 <img 
                   src="/awards/Award3.jpg"
                   alt="Rashtriya Pratishtha Puraskar"
                   className="w-full max-h-80 sm:max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-2">Rashtriya Pratishtha Puraskar</h4>
               <p className="text-sm sm:text-base text-gray-600">National recognition for outstanding contributions to environmental protection and sustainable development</p>
             </div>
           </div>

           {/* <div className="mt-12 text-center">
             <div className="max-w-md mx-auto">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-6 bg-white">
                 <img 
                   src="/awards/Award3.jpg"
                   alt="Rashtriya Pratishtha Puraskar"
                   className="w-full max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-xl font-normal text-gray-800 mb-2">Rashtriya Pratishtha Puraskar</h4>
               <p className="text-gray-600">National recognition for outstanding contributions to environmental protection and sustainable development</p>
             </div>
           </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
