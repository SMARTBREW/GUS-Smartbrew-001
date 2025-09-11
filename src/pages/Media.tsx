import PageLayout from '../components/layout/PageLayout';
import SEOHead from '../components/seo/SEOHead';

const MediaPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Media Coverage - Gramin Utthan Samiti in News"
        description="Read about Gramin Utthan Samiti's work in the media. News articles, press coverage, and media mentions highlighting our rural development and women empowerment initiatives in Uttarakhand."
        keywords="media coverage, press news, Gramin Utthan Samiti news, rural development news, women empowerment media, Uttarakhand NGO news, Bageshwar news"
        canonicalUrl="/media"
      />
      
      <div className="bg-white">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
          <img 
            src="/img/media.jpeg"
            alt="Media Coverage - Gramin Utthan Samiti in News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-3 sm:mb-4">Media Coverage</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Our work featured in news and media across Uttarakhand
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Featured News Coverage
            </h2>
            
            {/* First Press Coverage */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 sm:mb-8">
                  <img 
                    src="/img/media.jpeg"
                    alt="Newspaper Article about Akashganga Hostel"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 mb-3 sm:mb-4">
                    Akashganga Hostel: Empowering Girls Through Education
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                    This newspaper article highlights the remarkable work of our Akashganga Hostel in Bageshwar district, 
                    where we provide free education and care to 51 girl students from remote areas. The article features 
                    our dedicated superintendent, Bina Pathak, and showcases the positive impact of our educational initiatives.
                  </p>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                    <h4 className="text-lg sm:text-xl font-medium text-gray-800 mb-3 sm:mb-4">Key Highlights from the Article:</h4>
                    <ul className="text-left text-gray-600 space-y-2 text-sm sm:text-base">
                      <li>• 51 girl students from class 1 to intermediate receiving free education</li>
                      <li>• Comprehensive daily routine including studies, exercise, prayer, and vocational training</li>
                      <li>• Dedicated leadership by Superintendent Bina Pathak</li>
                      <li>• Students from remote areas finding the hostel to be a "boon" for their education</li>
                      <li>• Strong resolve: "We will read, write, and move forward"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Press Coverage */}
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 sm:mb-8">
                  <img 
                    src="/img/press3.jpg"
                    alt="Latest Press Coverage - Community Development Initiative"
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl shadow-lg object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 mb-3 sm:mb-4">
                    Community Development & Recognition
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                    Recent media coverage highlighting our community development initiatives and recognition of our work 
                    in rural Uttarakhand. This article showcases our ongoing commitment to transforming lives through 
                    education, health, and women empowerment programs.
                  </p>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                    <h4 className="text-lg sm:text-xl font-medium text-gray-800 mb-3 sm:mb-4">Coverage Highlights:</h4>
                    <ul className="text-left text-gray-600 space-y-2 text-sm sm:text-base">
                      <li>• Recognition of our comprehensive rural development approach</li>
                      <li>• Impact of our health and education programs on local communities</li>
                      <li>• Women empowerment initiatives making a difference</li>
                      <li>• Community participation and sustainable development practices</li>
                      <li>• Awards and appreciation from government and local authorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Our Media Impact
            </h2>

            {/* Mobile: horizontal stats */}
            <div className="block lg:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory">
                <div className="flex-shrink-0 w-[85vw] max-w-xs snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">News Articles</div>
                </div>
                <div className="flex-shrink-0 w-[85vw] max-w-xs snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Media Outlets</div>
                </div>
                <div className="flex-shrink-0 w-[85vw] max-w-xs snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">TV Features</div>
                </div>
                <div className="flex-shrink-0 w-[85vw] max-w-xs snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">100K+</div>
                  <div className="text-sm text-gray-600">Media Reach</div>
                </div>
              </div>
            </div>

            {/* Desktop: grid stats unchanged */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">News Articles</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-600">Media Outlets</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">25+</div>
                <div className="text-sm sm:text-base text-gray-600">TV Features</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">100K+</div>
                <div className="text-sm sm:text-base text-gray-600">Media Reach</div>
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Media Coverage Areas
            </h2>

            {/* Mobile: horizontal cards */}
            <div className="block lg:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory">
                <div className="flex-shrink-0 w-[90vw] max-w-sm snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">Education Initiatives</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our educational programs, including the Akashganga Hostel, have been featured in numerous 
                    local and regional newspapers, highlighting our commitment to girls' education in remote areas.
                  </p>
                </div>
                <div className="flex-shrink-0 w-[90vw] max-w-sm snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">Women Empowerment</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Media coverage of our women empowerment programs showcases the transformation of rural women 
                    through skill development, leadership training, and economic independence initiatives.
                  </p>
                </div>
                <div className="flex-shrink-0 w-[90vw] max-w-sm snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">Community Development</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our community development projects, including infrastructure development and environmental 
                    initiatives, have received positive coverage in local media outlets.
                  </p>
                </div>
                <div className="flex-shrink-0 w-[90vw] max-w-sm snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">Emergency Response</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our emergency response efforts during natural disasters have been covered by regional 
                    media, highlighting our rapid response and community support capabilities.
                  </p>
                </div>
                <div className="flex-shrink-0 w-[90vw] max-w-sm snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">Awards & Recognition</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Media coverage of our awards and recognition ceremonies showcases the impact of our work 
                    and the appreciation from government and community stakeholders.
                  </p>
                </div>
                <div className="flex-shrink-0 w-[90vw] max-w-sm snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">Success Stories</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Personal success stories of beneficiaries have been featured in media, demonstrating 
                    the real impact of our programs on individual lives and communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: grid cards unchanged */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 sm:mb-4">Education Initiatives</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our educational programs, including the Akashganga Hostel, have been featured in numerous 
                  local and regional newspapers, highlighting our commitment to girls' education in remote areas.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 sm:mb-4">Women Empowerment</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Media coverage of our women empowerment programs showcases the transformation of rural women 
                  through skill development, leadership training, and economic independence initiatives.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 sm:mb-4">Community Development</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our community development projects, including infrastructure development and environmental 
                  initiatives, have received positive coverage in local media outlets.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 sm:mb-4">Emergency Response</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our emergency response efforts during natural disasters have been covered by regional 
                  media, highlighting our rapid response and community support capabilities.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 sm:mb-4">Awards & Recognition</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Media coverage of our awards and recognition ceremonies showcases the impact of our work 
                  and the appreciation from government and community stakeholders.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 sm:mb-4">Success Stories</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Personal success stories of beneficiaries have been featured in media, demonstrating 
                  the real impact of our programs on individual lives and communities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
};

export default MediaPage;
