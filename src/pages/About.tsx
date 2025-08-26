import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Users, Leaf, BookOpen, Target, MapPin, Phone, Mail, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">About </span>
              <span className="text-red-600">G.U.S.</span>
            </h1>
                          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            GraminUthanSamiti was established in the year 1979 in the Kumaon hills. This Himalayan region 
            has witnessed a high level of migration due to unavailability of the employment option. Hence in 
            order to provide people with the employment and Livelihood, a need was felt to make community 
            aware about the possibilities which they have around them in nature. The main focus of the 
            organization is creating ownership among the community. We have a firm belief that by following 
            integrated Village development plan we can create make community self-aware and self-sustain. 
            Our main focus is to make women a leader of the village by empowering them as they can be the 
            catalyst of change in the rural Kumaon. 
            </p>
          </div>

                     {/* Organization Details */}
           <div className="mb-16">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div>
                                   <div className="text-2xl sm:text-3xl font-normal text-gray-800 mb-2">1979</div>
                 <div className="text-gray-600">Established</div>
               </div>
               <div>
                                   <div className="text-2xl sm:text-3xl font-normal text-gray-800 mb-2">2407/1982-83</div>
                 <div className="text-gray-600">Registration</div>
               </div>
               <div>
                                   <div className="text-2xl sm:text-3xl font-normal text-gray-800 mb-2">150+</div>
                 <div className="text-gray-600">Villages Served</div>
               </div>
               <div>
                                   <div className="text-2xl sm:text-3xl font-normal text-gray-800 mb-2">80%</div>
                 <div className="text-gray-600">Women Workers</div>
               </div>
             </div>
           </div>

                     {/* Mission and Vision */}
			<div className="mb-16">
				<div className="max-w-4xl mx-auto">
					            <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Our Mission & Approach</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="bg-gray-50 rounded-2xl p-8 shadow">
							            <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Our Mission</h3>
							<p className="text-lg text-gray-600 leading-relaxed">
								G.U.S. takes a holistic approach to Development Work, focusing on the people's ecological, social, cultural and economic needs. We help the local people identify their problems and work together, mobilising local resources to achieve their goals and take control of their lives.
							</p>
						</div>
						<div className="bg-gray-50 rounded-2xl p-8 shadow">
							            <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Our Method of Rural Awakening</h3>
							<p className="text-lg text-gray-600 leading-relaxed">
								G.U.S.'s method of rural awakening is to support Village and Women's Groups. These organisations bring villagers of every sector together to discuss their problems and work collectively. We only conduct programs in villages where the women have formed Women's Groups and meet on a regular monthly basis to discuss the practical problems of their villages and lifestyles.
							</p>
						</div>
					</div>
				</div>
			</div>

                     {/* Geographic Coverage */}
           <div className="mb-16">
             <div className="max-w-4xl mx-auto">
               <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Geographic Coverage</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                   <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Location</h3>
                   <p className="text-lg text-gray-600 leading-relaxed mb-4">
                     The majority of the 150-odd villages are situated at a height of 2000–2500 meters in the upper reaches of the river valleys of the Northern Kumaon Himalaya.
                   </p>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     These villages are accessible only by footpath and mule track, making them extremely remote and underserved by government services.
                   </p>
                 </div>
                 <div>
                   <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Challenges</h3>
                   <ul className="space-y-3 text-lg text-gray-600">
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

          {/* Community Testimonials */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Community Impact Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Historical Impact Story */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">1989</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-gray-800">Khatta Village Transformation</h3>
                      <p className="text-red-600">Historical Milestone</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                      "G.U.S. in 1989 built houses in the Khatta Gram Sabha of Khatta Thok. These eight houses were constructed for the most economically disadvantaged and vulnerable sections of society. Around 40,000 people were impacted by this initiative."
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                      "Before these houses, we did not have proper homes; we lived in small, makeshift huts. Under the guidance of the Gram Pradhan and G.U.S., we were provided a colony of eight houses for poor families."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">8</div>
                      <div className="text-sm text-gray-600">Houses Built</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">40K</div>
                      <div className="text-sm text-gray-600">People Impacted</div>
                    </div>
                  </div>
                </div>

                {/* Leadership Recognition */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">UJ</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-gray-800">Umesh Joshi</h3>
                      <p className="text-gray-600">Secretary & Coordinator</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                      "The president of G.U.S., Umesh Joshi, personally visited the shop and distributed ration to the local people. All the attendees expressed their gratitude to the founder and secretary of the Gramin Utthan Samity (G.U.S.), Umesh Joshi, for acting like a friend and continuously helping for the last 10–15 days."
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                      "Under his guidance, relief materials were delivered across not only the Kapkot constituency but also various places in the Bageshwar district, with the involvement of Nagar Panchayat presidents, former MLAs, workers of different political parties, and local residents."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-gray-600">58</div>
                      <div className="text-sm text-gray-600">Families Helped</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-gray-600">15</div>
                      <div className="text-sm text-gray-600">Days Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-gradient-to-br from-gray-300 to-gray-300 rounded-3xl p-8 text-black mb-16">
            <h2 className="text-2xl sm:text-3xl font-normal mb-6">Key Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-normal mb-4">Major Supporters</h3>
                <ul className="space-y-1 text-black">
                  <li>• Uttarkhand Neva Sivi (India)</li>
                  <li>• CAPART (India)</li>
                  <li>• Terre des Hommes (Germany)</li>
                  <li>• Oxfam (India and U.K.)</li>
                  <li>• World Bank</li>
                </ul>
              </div>
                             <div>
                 <h3 className="text-lg sm:text-xl font-normal mb-4">Core Focus Areas</h3>
                 <ul className="space-y-1 text-black">
                   <li>• Healthcare & Nutrition</li>
                   <li>• Education & Literacy</li>
                   <li>• Women's Empowerment</li>
                   <li>• Environmental Conservation</li>
                   <li>• Livelihood Development</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
