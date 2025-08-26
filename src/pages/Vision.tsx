import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisionPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Vision, Mission & </span>
              <span className="text-red-600">Goals</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Our guiding principles that drive our work in rural development and community empowerment.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Our Vision</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 shadow">
                  <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Future We Envision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To create self-sustaining, empowered rural communities where every individual has access to 
                    opportunities for growth, education, and dignified livelihoods while preserving the rich 
                    cultural heritage and natural resources of the Kumaon region.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 shadow">
                  <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Community Empowerment</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We envision empowered communities where every individual has access to opportunities for growth, education, and dignified livelihoods while preserving the rich cultural heritage and natural resources of the Kumaon region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  G.U.S. takes a holistic approach to development work, focusing on the people's ecological, 
                  social, cultural and economic needs. We help local communities identify their problems and 
                  work together, mobilizing local resources to achieve their goals and take control of their lives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-normal text-gray-800 mb-3">Community Empowerment</h3>
                    <p className="text-gray-600">
                      Supporting Village and Women's Groups to bring villagers together to discuss problems 
                      and work collectively.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-normal text-gray-800 mb-3">Sustainable Development</h3>
                    <p className="text-gray-600">
                      Creating integrated village development plans that make communities self-aware and self-sustaining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Our Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Women Leadership</h3>
                  <p className="text-gray-600">
                    Empower women as leaders of their villages and catalysts of change in rural Kumaon.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Livelihood Creation</h3>
                  <p className="text-gray-600">
                    Provide employment opportunities and sustainable livelihoods for rural communities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏔️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Resource Conservation</h3>
                  <p className="text-gray-600">
                    Preserve and sustainably manage natural resources and cultural heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Our Journey</h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[42%] transform -translate-x-1/2 w-1 bg-red-200 top-0 bottom-0 z-0"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12 relative">
                  {/* 1979 - Foundation */}
                  <div className="relative flex items-center">
                    <div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-5/12 pr-8 text-right relative z-20">
                      <h3 className="text-xl font-normal text-gray-800 mb-2">1979</h3>
                      <h4 className="text-lg font-normal text-red-600 mb-2">Foundation Established</h4>
                      <p className="text-gray-600">
                        Gramin Utthan Samity (G.U.S.) was established in the Kumaon hills to address high migration due to lack of employment opportunities.
                      </p>
                    </div>
                    <div className="w-5/12 pl-8 relative z-20">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">1979</div>
                        <div className="text-sm text-gray-600">Year of Establishment</div>
                      </div>
                    </div>
                  </div>

                  {/* 1982-83 - Registration */}
                  <div className="relative flex items-center">
                    <div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-5/12 pr-8 text-right relative z-20">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">2407/1982-83</div>
                        <div className="text-sm text-gray-600">Registration Number</div>
                      </div>
                    </div>
                    <div className="w-5/12 pl-8 relative z-20">
                      <h3 className="text-xl font-normal text-gray-800 mb-2">1982-83</h3>
                      <h4 className="text-lg font-normal text-red-600 mb-2">Official Registration</h4>
                      <p className="text-gray-600">
                        G.U.S. received official registration as a Not-for-Profit organization, marking the beginning of structured community development work.
                      </p>
                    </div>
                  </div>

                  {/* 1989 - Housing Project */}
                  <div className="relative flex items-center">
                    <div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-5/12 pr-8 text-right relative z-20">
                      <h3 className="text-xl font-normal text-gray-800 mb-2">1989</h3>
                      <h4 className="text-lg font-normal text-red-600 mb-2">Khatta Village Housing Project</h4>
                      <p className="text-gray-600">
                        Construction of eight houses in Khatta Gram Sabha for economically disadvantaged families, impacting 40,000 people and establishing a sustainable development model.
                      </p>
                    </div>
                    <div className="w-5/12 pl-8 relative z-20">
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">8 Houses</div>
                        <div className="text-sm text-gray-600">Built for Vulnerable Families</div>
                        <div className="text-lg font-bold text-red-600 mt-2">40K+</div>
                        <div className="text-sm text-gray-600">People Impacted</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent - Emergency Relief */}
                  <div className="relative flex items-center">
                    <div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-5/12 pr-8 text-right relative z-20">
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">58 Families</div>
                        <div className="text-sm text-gray-600">Emergency Relief Provided</div>
                        <div className="text-lg font-bold text-red-600 mt-2">Kapkot</div>
                        <div className="text-sm text-gray-600">Constituency Served</div>
                      </div>
                    </div>
                    <div className="w-5/12 pl-8 relative z-20">
                      <h3 className="text-xl font-normal text-gray-800 mb-2">Recent</h3>
                      <h4 className="text-lg font-normal text-red-600 mb-2">Emergency Relief Distribution</h4>
                      <p className="text-gray-600">
                        Under the leadership of Umesh Joshi, G.U.S. successfully conducted emergency relief programs, distributing ration to 58 families in the Kapkot constituency and Bageshwar district.
                      </p>
                    </div>
                  </div>

                  {/* Present - Ongoing Impact */}
                  <div className="relative flex items-center">
                    <div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-5/12 pr-8 text-right relative z-20">
                      <h3 className="text-xl font-normal text-gray-800 mb-2">Present</h3>
                      <h4 className="text-lg font-normal text-red-600 mb-2">Ongoing Community Development</h4>
                      <p className="text-gray-600">
                        Serving 150+ remote villages in the Northern Kumaon Himalaya through holistic development programs, with 80% women workers leading community transformation.
                      </p>
                    </div>
                    <div className="w-5/12 pl-8 relative z-20">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">150+</div>
                        <div className="text-sm text-gray-600">Villages Served</div>
                        <div className="text-lg font-bold text-red-600 mt-2">80%</div>
                        <div className="text-sm text-gray-600">Women Workers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VisionPage;
