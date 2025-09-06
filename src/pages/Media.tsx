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
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img 
            src="/img/media.jpeg"
            alt="Media Coverage - Gramin Utthan Samiti in News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-normal mb-4">Media Coverage</h1>
              <p className="text-xl lg:text-2xl font-light max-w-2xl mx-auto">
                Our work featured in news and media across Uttarakhand
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Featured News Coverage
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <img 
                    src="/img/media.jpeg"
                    alt="Newspaper Article about Akashganga Hostel"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
                    Akashganga Hostel: Empowering Girls Through Education
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    This newspaper article highlights the remarkable work of our Akashganga Hostel in Bageshwar district, 
                    where we provide free education and care to 51 girl students from remote areas. The article features 
                    our dedicated superintendent, Bina Pathak, and showcases the positive impact of our educational initiatives.
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-medium text-gray-800 mb-4">Key Highlights from the Article:</h4>
                    <ul className="text-left text-gray-600 space-y-2">
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
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Media Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">50+</div>
                <div className="text-gray-600">News Articles</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Media Outlets</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">25+</div>
                <div className="text-gray-600">TV Features</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">100K+</div>
                <div className="text-gray-600">Media Reach</div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Media Coverage Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-normal text-gray-800 mb-4">Education Initiatives</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our educational programs, including the Akashganga Hostel, have been featured in numerous 
                  local and regional newspapers, highlighting our commitment to girls' education in remote areas.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-normal text-gray-800 mb-4">Women Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Media coverage of our women empowerment programs showcases the transformation of rural women 
                  through skill development, leadership training, and economic independence initiatives.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-normal text-gray-800 mb-4">Community Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our community development projects, including infrastructure development and environmental 
                  initiatives, have received positive coverage in local media outlets.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-normal text-gray-800 mb-4">Emergency Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our emergency response efforts during natural disasters have been covered by regional 
                  media, highlighting our rapid response and community support capabilities.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-normal text-gray-800 mb-4">Awards & Recognition</h3>
                <p className="text-gray-600 leading-relaxed">
                  Media coverage of our awards and recognition ceremonies showcases the impact of our work 
                  and the appreciation from government and community stakeholders.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-normal text-gray-800 mb-4">Success Stories</h3>
                <p className="text-gray-600 leading-relaxed">
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
