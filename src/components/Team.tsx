import React from 'react';

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0e9d3] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-black">Meet The </span>
            <span className="text-[#f5cd4c]">Team</span>
          </h1>
          <div className="w-24 h-1 bg-[#f5cd4c] mx-auto"></div>
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
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f5cd4c] rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#f5cd4c] rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
                KADIRI RAGHU VAMSI
              </h2>
              <div className="flex items-center">
                <div className="w-px h-8 bg-gray-400 mr-4"></div>
                <span className="text-2xl font-bold text-[#f5cd4c]">FOUNDER</span>
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
              <div className="bg-[#f5cd4c]/20 rounded-lg p-4">
                <h4 className="font-bold text-[#f5cd4c] mb-1">Awards & Recognition</h4>
                <p className="text-sm text-gray-600">India's Noble Chakra Award 2019</p>
              </div>
              <div className="bg-[#f5cd4c]/20 rounded-lg p-4">
                <h4 className="font-bold text-[#f5cd4c] mb-1">Leadership</h4>
                <p className="text-sm text-gray-600">Leading Social Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>

                 {/* Team Directory */}
         <div className="mt-20">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* First Row */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                   alt="Raaga Vaishnavi"
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
               <h4 className="text-xl font-bold text-gray-800 mb-1">Raaga Vaishnavi</h4>
               <p className="text-gray-600">Co-Founder</p>
             </div>
             
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                   alt="Valaboju Manas Chandra"
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
               <h4 className="text-xl font-bold text-gray-800 mb-1">Valaboju Manas Chandra</h4>
               <p className="text-gray-600">Chief Operations Officer</p>
             </div>
             
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                   alt="Srikar Samudrala"
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
               <h4 className="text-xl font-bold text-gray-800 mb-1">Srikar Samudrala</h4>
               <p className="text-gray-600">Director & Chief CSR Officer</p>
             </div>
             
             {/* Second Row */}
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                   alt="Team Member"
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
               <h4 className="text-xl font-bold text-gray-800 mb-1">Team Member</h4>
               <p className="text-gray-600">Position</p>
             </div>
             
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                   alt="Team Member"
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
               <h4 className="text-xl font-bold text-gray-800 mb-1">Team Member</h4>
               <p className="text-gray-600">Position</p>
             </div>
             
             <div className="text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                   alt="Team Member"
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
               <h4 className="text-xl font-bold text-gray-800 mb-1">Team Member</h4>
               <p className="text-gray-600">Position</p>
             </div>
           </div>
         </div>

         {/* Our Mentors */}
         <div className="mt-20">
           <div className="text-center mb-12">
                           <h3 className="text-4xl font-bold mb-4">
                <span className="text-black">OUR </span>
                <span className="text-[#f5cd4c]">MENTORS</span>
              </h3>
              <div className="w-24 h-1 bg-[#f5cd4c] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are being mentored by the presidential awardee, women activists and governmental servants
              </p>
              <button className="mt-6 text-[#f5cd4c] hover:text-[#e6c23a] font-semibold transition-colors duration-200">
                Read More
              </button>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left Image */}
             <div className="rounded-2xl overflow-hidden shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                 alt="Presidential Award Ceremony"
                 className="w-full h-64 object-cover"
               />
             </div>
             
             {/* Right Image */}
             <div className="rounded-2xl overflow-hidden shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                 alt="Women Activist in Nature"
                 className="w-full h-64 object-cover"
               />
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default Team;
