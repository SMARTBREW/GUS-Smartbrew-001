import React from 'react';

const Team = () => {
  return (
         <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-4">
            <span className="text-black">Meet The </span>
                         <span className="text-red-600">Team</span>
          </h1>
                     <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Founder Profile */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Kadiri Raghu Vamsi - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
                             <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rounded-full opacity-50"></div>
               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-600 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
                             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mb-2">
                KADIRI RAGHU VAMSI
              </h2>
              <div className="flex items-center">
                <div className="w-px h-8 bg-gray-400 mr-4"></div>
                                 <span className="text-xl sm:text-2xl font-normal text-red-600">FOUNDER</span>
              </div>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                Kadiri Raghu Vamsi, popularly known as the Environment Man, is the Founder of the Marpu Foundation. 
                One of India's leading social entrepreneurs, Raghu brings the ideology to create new solutions, 
                because he says, 'if existing solutions are already successful, then the problem must have been solved, 
                and it's not, so we need more new ideas into reality'.
              </p>
              
              <p className="mb-6">
                India's Noble, the prestigious chakra award 2019, conferred on him credited him for his creative 
                vision towards empowering citizens to be socially responsible, his enterprising leadership in 
                environmental protection, sustainable development research and social related initiatives.
              </p>
              
              <p>
                Under his leadership, Marpu Foundation has grown to become one of the most impactful NGOs in India, 
                working across multiple states and touching millions of lives through innovative community-driven solutions.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="bg-red-600/20 rounded-lg p-4">
                 <h4 className="font-normal text-red-600 mb-1">Awards & Recognition</h4>
                <p className="text-sm text-gray-600">India's Noble Chakra Award 2019</p>
              </div>
                             <div className="bg-red-600/20 rounded-lg p-4">
                 <h4 className="font-normal text-red-600 mb-1">Leadership</h4>
                <p className="text-sm text-gray-600">Leading Social Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>

                 {/* Team Directory */}
         <div className="mt-20">
           <div className="text-center mb-12">
             <h3 className="text-3xl sm:text-4xl font-normal mb-4">
               <span className="text-black">OFFICE BEARERS & </span>
               <span className="text-red-600">MANAGING COMMITTEE</span>
             </h3>
             <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Our dedicated team of office bearers and committee members working together for community development
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {/* President */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">DS</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Darwan Singh Kapkoti</h4>
               <p className="text-red-600 font-medium mb-1">President</p>
               <p className="text-sm text-gray-600">Retired Teacher</p>
             </div>

             {/* Vice President */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">MS</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Mohan Singh Kapkoti</h4>
               <p className="text-red-600 font-medium mb-1">Vice President</p>
               <p className="text-sm text-gray-600">Retired Army</p>
             </div>

             {/* Secretary/Coordinator */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">UJ</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Umesh Joshi</h4>
               <p className="text-red-600 font-medium mb-1">Secretary / Coordinator</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             {/* Treasurer */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">DS</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Diwan Singh Kapkoti</h4>
               <p className="text-red-600 font-medium mb-1">Treasurer</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             {/* Members */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">PS</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Puran Singh Kapkoti</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">DD</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Dan Singh Danu</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">TD</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Tara Danu</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">BK</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Smt. Basanti Kapkoti</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">KC</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Kaushtub Chandra Joshi</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">AS</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Anand Singh Kapkoti</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Social Worker</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">TA</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Smt. Tulsi Arya</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Agriculture</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">NT</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Narendra Singh Takuli</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">-</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">MT</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Shri Mohan Singh Takuli</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">Agriculture</p>
             </div>

             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-red-100 flex items-center justify-center">
                 <span className="text-3xl text-red-600 font-bold">AP</span>
               </div>
               <h4 className="text-lg sm:text-xl font-normal text-gray-800 mb-1">Anand Ballam Pandey</h4>
               <p className="text-red-600 font-medium mb-1">Member</p>
               <p className="text-sm text-gray-600">-</p>
             </div>
           </div>
         </div>

         {/* Our Awards */}
         <div className="mt-20">
           <div className="text-center mb-12">
                           <h3 className="text-3xl sm:text-4xl font-normal mb-4">
                <span className="text-black">OUR </span>
                                 <span className="text-red-600">AWARDS</span>
              </h3>
                             <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our founder has been recognized with prestigious national and international awards for outstanding contributions to social entrepreneurship and environmental protection
              </p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left Award - Nelson Mandela Global Brilliance Award (Confirmation Letter) */}
             <div className="text-center">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-6 bg-white">
                 <img 
                   src="/awards/Award1.jpg"
                   alt="Nelson Mandela Global Brilliance Award - Confirmation Letter"
                   className="w-full max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-xl font-normal text-gray-800 mb-2">Nelson Mandela Global Brilliance Award</h4>
               <p className="text-gray-600">Confirmation and Selection Letter recognizing exceptional leadership and innovation in social entrepreneurship</p>
             </div>
             
             {/* Right Award - Nelson Mandela Global Brilliance Award (Actual Award) */}
             <div className="text-center">
               <div className="rounded-2xl overflow-hidden shadow-lg mb-6 bg-white">
                 <img 
                   src="/awards/Award2.jpg"
                   alt="Nelson Mandela Global Brilliance Award"
                   className="w-full max-h-96 object-contain"
                 />
               </div>
               <h4 className="text-xl font-normal text-gray-800 mb-2">Nelson Mandela Global Brilliance Award</h4>
               <p className="text-gray-600">Prestigious international recognition for outstanding contributions to social entrepreneurship and environmental protection</p>
             </div>
           </div>

           {/* Additional Award */}
           <div className="mt-12 text-center">
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
           </div>
         </div>
      </div>
    </section>
  );
};

export default Team;
