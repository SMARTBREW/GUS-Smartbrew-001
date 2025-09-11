import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/sections/PageHero';
import SubsectionTitle from '../components/ui/SubsectionTitle';
import StatsCard from '../components/ui/StatsCard';
import InfoCard from '../components/ui/InfoCard';
import SEOHead from '../components/seo/SEOHead';

const About = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Gramin Utthan Samiti",
    "alternateName": "G.U.S.",
    "description": "Rural development NGO working in Uttarakhand since 1979, focusing on women empowerment, education, and sustainable village development.",
    "foundingDate": "1979",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kapkote",
      "addressLocality": "Bageshwar",
      "addressRegion": "Uttarakhand",
      "postalCode": "263679",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-5963-3043",
      "email": "contact@gusindia.org",
      "contactType": "customer service"
    },
    "url": "https://gusindia.org",
    "logo": "https://gusindia.org/logo.png",
    "sameAs": [
      "https://facebook.com/gusindia",
      "https://twitter.com/gusindia"
    ],
    "knowsAbout": ["Rural Development", "Women Empowerment", "Education", "Sustainable Development"],
    "areaServed": {
      "@type": "State",
      "name": "Uttarakhand"
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="About G.U.S - Rural Development NGO Since 1979"
        description="Learn about Gramin Utthan Samiti (G.U.S.), a trusted NGO working in Uttarakhand since 1979. We focus on rural development, women empowerment, and education in 150+ villages across Kumaon hills."
        keywords="NGO Uttarakhand, rural development, women empowerment, education NGO, Gramin Utthan Samiti, village development, Kumaon hills, Bageshwar NGO"
        canonicalUrl="/about"
        structuredData={organizationSchema}
      />
      <PageHero 
        title="About G.U.S."
        subtitle="GraminUthanSamiti was established in the year 1979 in the Kumaon hills. This Himalayan region has witnessed a high level of migration due to unavailability of the employment option. Hence in order to provide people with the employment and Livelihood, a need was felt to make community aware about the possibilities which they have around them in nature. The main focus of the organization is creating ownership among the community. We have a firm belief that by following integrated Village development plan we can create make community self-aware and self-sustain. Our main focus is to make women a leader of the village by empowering them as they can be the catalyst of change in the rural Kumaon."
      />
      
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-8 sm:mb-12">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
               <StatsCard value="1979" label="Established" />
               <StatsCard value="2407/1982-83" label="Registration" />
               <StatsCard value="150+" label="Villages Served" />
               <StatsCard value="80%" label="Women Workers" />
             </div>
           </div>

           <div className="mb-8 sm:mb-12">
             <div className="max-w-4xl mx-auto">
               <SubsectionTitle title="Our Mission & Approach" />
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                 <InfoCard
                   title="Our Mission"
                   content="G.U.S. takes a holistic approach to Development Work, focusing on the people's ecological, social, cultural and economic needs. We help the local people identify their problems and work together, mobilising local resources to achieve their goals and take control of their lives."
                   variant="highlighted"
                 />
                 <InfoCard
                   title="Our Method of Rural Awakening"
                   content="G.U.S.'s method of rural awakening is to support Village and Women's Groups. These organisations bring villagers of every sector together to discuss their problems and work collectively. We only conduct programs in villages where the women have formed Women's Groups and meet on a regular monthly basis to discuss the practical problems of their villages and lifestyles."
                   variant="highlighted"
                 />
               </div>
             </div>
           </div>

           <div className="mb-12 sm:mb-16">
             <div className="max-w-4xl mx-auto">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">Geographic Coverage</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                 <div>
                   <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800 mb-3 sm:mb-4">Location</h3>
                   <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                     The majority of the 150-odd villages are situated at a height of 2000–2500 meters in the upper reaches of the river valleys of the Northern Kumaon Himalaya.
                   </p>
                   <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                     These villages are accessible only by footpath and mule track, making them extremely remote and underserved by government services.
                   </p>
                 </div>
                 <div>
                   <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800 mb-3 sm:mb-4">Challenges</h3>
                   <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-600">
                     <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                       <span>Extreme remoteness and accessibility issues</span>
                     </li>
                     <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                       <span>Inadequate government services</span>
                     </li>
                     <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                       <span>Dependency on local natural resources</span>
                     </li>
                     <li className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                       <span>Limited access to healthcare and education</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>

          <div className="mb-12 sm:mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">Community Impact Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white font-bold text-lg sm:text-xl">1989</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800">Khatta Village Transformation</h3>
                      <p className="text-sm sm:text-base text-red-600">Historical Milestone</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic mb-3 sm:mb-4">
                      "G.U.S. in 1989 built houses in the Khatta Gram Sabha of Khatta Thok. These eight houses were constructed for the most economically disadvantaged and vulnerable sections of society. Around 40,000 people were impacted by this initiative."
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic">
                      "Before these houses, we did not have proper homes; we lived in small, makeshift huts. Under the guidance of the Gram Pradhan and G.U.S., we were provided a colony of eight houses for poor families."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-red-600">8</div>
                      <div className="text-xs sm:text-sm text-gray-600">Houses Built</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-red-600">40K</div>
                      <div className="text-xs sm:text-sm text-gray-600">People Impacted</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white font-bold text-lg sm:text-xl">UJ</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800">Mr. Umesh Joshi</h3>
                      <p className="text-sm sm:text-base text-gray-600">Founder, Secretary & Coordinator</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic mb-3 sm:mb-4">
                      "Born in 1957 in Kapkot village, Mr. Umesh Joshi founded G.U.S. in 1979 with a vision to transform rural communities through education and social development. His early work as a postman earning ₹75 per month didn't deter his commitment to social service."
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic">
                      "Under his leadership, the first modern school was established in Kapkot in 1982, providing free education to underprivileged children. Today, he continues to lead initiatives in child welfare, women empowerment, and environmental protection, earning recognition through the Bachpan Award and Dr. Bhairav Vats Medal."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-gray-600">1979</div>
                      <div className="text-xs sm:text-sm text-gray-600">Founded G.U.S.</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-gray-600">45+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Years of Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-300 to-gray-300 rounded-3xl p-6 sm:p-8 text-black mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6">Key Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-normal mb-3 sm:mb-4">Major Supporters</h3>
                <ul className="space-y-1 text-sm sm:text-base text-black">
                  <li>• Uttarkhand Neva Sivi (India)</li>
                  <li>• CAPART (India)</li>
                  <li>• Terre des Hommes (Germany)</li>
                  <li>• Oxfam (India and U.K.)</li>
                  <li>• World Bank</li>
                </ul>
              </div>
                             <div>
                <h3 className="text-base sm:text-lg md:text-xl font-normal mb-3 sm:mb-4">Core Focus Areas</h3>
                <ul className="space-y-1 text-sm sm:text-base text-black">
                  <li>• Healthcare & Nutrition</li>
                  <li>• Education & Literacy</li>
                  <li>• Women's Empowerment</li>
                  <li>• Environmental Conservation</li>
                  <li>• Livelihood Development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-3 sm:mb-4">
              Want to know more about our leadership? 
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Meet our dedicated team of leaders, including our founder Mr. Umesh Joshi, who have been driving rural development and social transformation for over four decades.
            </p>
            <a 
              href="/team" 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
            >
              Meet Our Team
            </a>
          </div>
                </div>
      </section>
    </PageLayout>
  );
};

export default About;
