import DonateButton from '../ui/DonateButton';

const EmergencyAppeal = () => {


  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img 
          src="/img/emgc6.jpeg"
          alt="Emergency Response - Disaster Relief Operations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-3 sm:mb-4">Emergency Response</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Rapid response and long-term recovery for communities in crisis
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            Problem Statement
          </h2>
          <div className="bg-red-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Natural disasters and humanitarian crises in Uttarakhand leave communities devastated, 
                with families losing homes, livelihoods, and access to basic necessities. The mountainous 
                terrain and remote locations make emergency response challenging, requiring immediate 
                intervention to save lives and provide critical support.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            Rapid Response Operations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src="/img/emgc2.jpeg"
                alt="Rapid Response Team"
                className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4 sm:mb-6">Immediate Crisis Intervention</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Our emergency response teams are trained to deploy within hours of a disaster, 
                providing immediate assistance to affected communities. We coordinate with local 
                authorities, conduct rapid needs assessments, and establish emergency relief operations 
                to ensure no community is left behind.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Our rapid response includes search and rescue operations, emergency medical care, 
                immediate shelter provision, and distribution of essential supplies like food, water, 
                and emergency kits. We work around the clock to stabilize crisis situations and 
                prevent further loss of life.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                In 2024 alone, we responded to 112 emergency situations across 71 countries, 
                reaching over 23.8 million people in need. Our teams are equipped with the latest 
                emergency response technology and work in coordination with international relief networks.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            Relief Distribution and Support
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="lg:order-2">
              <img 
                src="/img/emgc1.jpeg"
                alt="Relief Distribution"
                className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4 sm:mb-6">Comprehensive Relief Operations</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Our relief operations focus on providing comprehensive support to disaster-affected 
                communities. We establish distribution centers, coordinate with local partners, and 
                ensure that relief materials reach the most vulnerable populations, including children, 
                elderly, and people with disabilities.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We provide emergency shelter materials, food and clean drinking water, medical supplies 
                and first aid, clothing and blankets, and essential hygiene kits. Our relief packages 
                are designed to meet immediate needs while supporting dignity and safety of affected families.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our relief operations have successfully supported over 500 families in recent disasters, 
                providing immediate assistance and laying the foundation for long-term recovery and rehabilitation.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            Long-term Recovery and Rehabilitation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src="/img/emgc4.jpeg"
                alt="Recovery and Rehabilitation"
                className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4 sm:mb-6">Building Resilient Communities</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Beyond immediate crisis response, we focus on long-term recovery and rehabilitation 
                to help communities rebuild stronger and more resilient. Our recovery programs include 
                infrastructure reconstruction, livelihood restoration, and community capacity building.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We work with communities to rebuild homes, restore essential services, rehabilitate 
                damaged infrastructure, and implement disaster preparedness programs. Our approach 
                emphasizes community participation and local ownership to ensure sustainable recovery.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Through our long-term recovery programs, we help communities not only rebuild what was lost, 
                but also develop better systems and infrastructure to withstand future disasters. 
                We're committed to staying with communities until they're fully recovered and resilient.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            Our Emergency Response in Action
          </h2>

          {/* Mobile: horizontal image row */}
          <div className="block md:hidden">
            <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory mb-8">
              <img 
                src="/img/emgc3.jpeg"
                alt="Search and Rescue"
                className="flex-shrink-0 w-80 h-48 object-cover rounded-2xl shadow-lg snap-center"
              />
              <img 
                src="/img/emgc5.jpeg"
                alt="Medical Assistance"
                className="flex-shrink-0 w-80 h-48 object-cover rounded-2xl shadow-lg snap-center"
              />
              <img 
                src="/img/emgc1.jpeg"
                alt="Community Support"
                className="flex-shrink-0 w-80 h-48 object-cover rounded-2xl shadow-lg snap-center"
              />
            </div>
          </div>

          {/* Desktop: grid images unchanged */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <img 
              src="/img/emgc3.jpeg"
              alt="Search and Rescue"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img 
              src="/img/emgc5.jpeg"
              alt="Medical Assistance"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img 
              src="/img/emgc1.jpeg"
              alt="Community Support"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Our emergency response programs have transformed how communities in Uttarakhand 
                prepare for and recover from disasters. From immediate crisis intervention to 
                long-term rehabilitation, we provide comprehensive support that saves lives 
                and builds resilience.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The impact goes beyond individual disaster responses - we're building a culture 
                of preparedness and resilience that will benefit communities for generations to come. 
                Our emergency response, relief distribution, and recovery programs work together 
                to create comprehensive disaster management solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            Our Impact
          </h2>

          {/* Mobile: horizontal stats */}
          <div className="block lg:hidden">
            <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory">
              <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">112</div>
                <div className="text-sm text-gray-600">Emergency Responses</div>
              </div>
              <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">23.8M</div>
                <div className="text-sm text-gray-600">People Reached</div>
              </div>
              <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">71</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
            </div>
          </div>

          {/* Desktop: grid stats unchanged */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">112</div>
              <div className="text-sm sm:text-base text-gray-600">Emergency Responses</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">23.8M</div>
              <div className="text-sm sm:text-base text-gray-600">People Reached</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">71</div>
              <div className="text-sm sm:text-base text-gray-600">Countries Served</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-red-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 mb-3 sm:mb-4">
              Support Our Emergency Response
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Your donation can help us provide immediate emergency relief, support long-term recovery, 
              and build disaster-resilient communities across Uttarakhand and beyond.
            </p>
            <DonateButton 
              text="Donate Now" 
              size="large" 
              variant="primary"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default EmergencyAppeal;
