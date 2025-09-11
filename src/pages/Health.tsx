import PageLayout from '../components/layout/PageLayout';
import SEOHead from '../components/seo/SEOHead';
import DonateButton from '../components/ui/DonateButton';

const HealthPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Health Programs - Rural Healthcare & Medical Services"
        description="Discover Gramin Utthan Samiti's comprehensive healthcare programs in Uttarakhand. Mobile health clinics, mental health support, and community health awareness initiatives."
        keywords="healthcare programs, mobile health clinics, rural healthcare, mental health support, health awareness, Gramin Utthan Samiti health, Uttarakhand healthcare"
        canonicalUrl="/health"
      />

      
      <div className="bg-white">
        {/* Hero */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
          <img 
            src="/img/health24.jpg"
            alt="Health Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-3 sm:mb-4">Health</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Bringing quality healthcare services to remote villages and communities
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Problem Statement */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Problem Statement
            </h2>
            <div className="bg-red-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Rural communities in Uttarakhand face severe healthcare challenges including limited access to medical facilities, 
                  lack of qualified healthcare professionals, inadequate maternal and child care, and poor health awareness. 
                  Many villagers have to travel long distances for basic medical care, leading to delayed treatment and preventable health issues.
                </p>
              </div>
            </div>
          </div>

          {/* National Health Mission Programs */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              National Health Mission Programs
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img 
                  src="/img/health23.jpg"
                  alt="National Health Mission Training"
                  className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4 sm:mb-6">Training Healthcare Workers & Community Leaders</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  In partnership with the National Health Mission, District Nainital, we conduct comprehensive training 
                  programs for ASHA workers (Accredited Social Health Activists) and community health coordinators. 
                  These programs focus on building local healthcare capacity and improving health service delivery in rural areas.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Our training sessions cover essential topics including maternal and child health, nutrition awareness, 
                  disease prevention, first aid, and community health promotion. We work closely with government health 
                  officials to ensure standardized and effective healthcare practices across all participating villages.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Through these capacity building programs, we have trained over 200 community health workers who now 
                  serve as the backbone of healthcare delivery in their respective communities, reaching thousands of families.
                </p>
              </div>
            </div>
          </div>

          {/* Women's Health */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Women's Health & Community Training
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="lg:order-2">
                <img 
                  src="/img/help1.jpg"
                  alt="Women's Health Training Session"
                  className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4 sm:mb-6">Empowering Women Through Health Education</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Our women's health programs focus on empowering women with knowledge and skills to improve their own 
                  and their families' health outcomes. We conduct regular training sessions covering maternal health, 
                  child nutrition, family planning, and preventive healthcare practices.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Working closely with Self Help Groups (SHGs) and women's collectives, we create safe spaces for women 
                  to discuss health concerns, learn from each other, and access quality healthcare information. 
                  Our approach emphasizes community participation and peer-to-peer learning.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Through these programs, we have reached over 1,500 women across multiple districts, creating a network 
                  of informed health advocates who continue to spread awareness in their communities and support other 
                  women in accessing healthcare services.
                </p>
              </div>
            </div>
          </div>

          {/* Community Health Camps */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Community Health Camps & Outreach
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img 
                  src="/img/health24.jpg"
                  alt="Community Health Camp"
                  className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4 sm:mb-6">Celebrating Health Achievements Together</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Our community health camps bring together participants from multiple villages to celebrate health 
                  achievements, share best practices, and strengthen the network of health advocates. These gatherings 
                  create opportunities for peer learning and community bonding around health initiatives.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  During these events, we recognize outstanding contributions from community health workers, present 
                  health education materials, and provide platforms for participants to share their success stories. 
                  The camps also serve as venues for distributing health supplies and conducting group health screenings.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  These community gatherings have become powerful tools for motivation and sustained engagement, 
                  helping to build a strong culture of health consciousness across all participating villages 
                  in the mountainous regions of Uttarakhand.
                </p>
              </div>
            </div>
          </div>

          {/* Galleries */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Health Programs & Community Engagement
            </h2>

            {/* Mobile: horizontal image row */}
            <div className="block md:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory mb-8">
                <img 
                  src="/img/health20.jpg"
                  alt="Vaccination Drive"
                  className="flex-shrink-0 w-80 h-48 object-cover rounded-2xl shadow-lg snap-center"
                />
                <img 
                  src="/img/health21.jpg"
                  alt="Health Check-up"
                  className="flex-shrink-0 w-80 h-48 object-cover rounded-2xl shadow-lg snap-center"
                />
                <img 
                  src="/img/helth22.jpg"
                  alt="Community Workshop"
                  className="flex-shrink-0 w-80 h-48 object-cover rounded-2xl shadow-lg snap-center"
                />
              </div>
            </div>

            {/* Desktop: grids unchanged */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <img 
                src="/img/health20.jpg"
                alt="Vaccination Drive"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="/img/health21.jpg"
                alt="Health Check-up"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="/img/helth22.jpg"
                alt="Community Workshop"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Second row */}
            <div className="block md:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory">
                <img 
                  src="/img/health23.jpg"
                  alt="Medical Support"
                  className="flex-shrink-0 w-72 h-44 object-cover rounded-xl shadow-lg snap-center"
                />
                <img 
                  src="/img/health24.jpg"
                  alt="Healthcare Team"
                  className="flex-shrink-0 w-72 h-44 object-cover rounded-xl shadow-lg snap-center"
                />
                <img 
                  src="/img/help1.jpg"
                  alt="Health Education"
                  className="flex-shrink-0 w-72 h-44 object-cover rounded-xl shadow-lg snap-center"
                />
                <img 
                  src="/img/healp2.jpg"
                  alt="Medical Camp"
                  className="flex-shrink-0 w-72 h-44 object-cover rounded-xl shadow-lg snap-center"
                />
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <img 
                src="/img/health23.jpg"
                alt="Medical Support"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="/img/health24.jpg"
                alt="Healthcare Team"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="/img/help1.jpg"
                alt="Health Education"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="/img/healp2.jpg"
                alt="Medical Camp"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Through our partnership with the National Health Mission and collaborative efforts with local communities, 
                  we have successfully established a robust network of trained health workers and informed community leaders. 
                  Our programs focus on capacity building, women's health empowerment, and creating sustainable health practices.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The true impact lies in the empowered communities where women have become health advocates, trained ASHA workers 
                  provide essential services, and regular health camps strengthen community bonds. Together, we're building 
                  a foundation for long-term health improvement across the mountainous regions of Uttarakhand.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Our Impact
            </h2>

            {/* Mobile: horizontal stats */}
            <div className="block lg:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory">
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">ASHA Workers Trained</div>
                </div>
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">1,500+</div>
                  <div className="text-sm text-gray-600">Women Empowered</div>
                </div>
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Health Camps Organized</div>
                </div>
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Training Sessions</div>
                </div>
              </div>
            </div>

            {/* Desktop: grid stats unchanged */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">200+</div>
                <div className="text-sm sm:text-base text-gray-600">ASHA Workers Trained</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">1,500+</div>
                <div className="text-sm sm:text-base text-gray-600">Women Empowered</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">25+</div>
                <div className="text-sm sm:text-base text-gray-600">Health Camps Organized</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Training Sessions</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 mb-3 sm:mb-4">
                Support Community Health Empowerment
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
                Your support enables us to train more ASHA workers, empower women with health knowledge, and organize community health camps that strengthen the healthcare network in rural Uttarakhand.
              </p>
              <DonateButton text="Donate Now" size="large" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HealthPage;
