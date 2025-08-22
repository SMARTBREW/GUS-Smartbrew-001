import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LeadershipPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Leadership </span>
              <span className="text-red-600">Board</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Meet the dedicated leaders who guide our organization's mission and vision for rural development.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Board Member 1 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Chairman</h3>
                  <p className="text-gray-600 mb-4">Mr. [Name]</p>
                  <p className="text-sm text-gray-500">
                    Leading our organization with over 20 years of experience in rural development.
                  </p>
                </div>

                {/* Board Member 2 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Secretary</h3>
                  <p className="text-gray-600 mb-4">Ms. [Name]</p>
                  <p className="text-sm text-gray-500">
                    Overseeing organizational operations and community outreach programs.
                  </p>
                </div>

                {/* Board Member 3 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Treasurer</h3>
                  <p className="text-gray-600 mb-4">Mr. [Name]</p>
                  <p className="text-sm text-gray-500">
                    Managing financial resources and ensuring transparent governance.
                  </p>
                </div>

                {/* Board Member 4 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Program Director</h3>
                  <p className="text-gray-600 mb-4">Ms. [Name]</p>
                  <p className="text-sm text-gray-500">
                    Leading our intervention programs and community development initiatives.
                  </p>
                </div>

                {/* Board Member 5 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Field Coordinator</h3>
                  <p className="text-gray-600 mb-4">Mr. [Name]</p>
                  <p className="text-sm text-gray-500">
                    Coordinating field operations and village-level activities.
                  </p>
                </div>

                {/* Board Member 6 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Women's Program Lead</h3>
                  <p className="text-gray-600 mb-4">Ms. [Name]</p>
                  <p className="text-sm text-gray-500">
                    Spearheading women's empowerment and leadership development programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Our Governance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Board Structure</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Our leadership board consists of experienced professionals committed to rural development 
                      and community empowerment. Each member brings unique expertise and dedication to our mission.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Decision Making</h3>
                    <p className="text-gray-200 leading-relaxed">
                      We follow a participatory approach where community voices are central to our decision-making 
                      process, ensuring our programs truly serve the needs of rural communities.
                    </p>
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

export default LeadershipPage;
