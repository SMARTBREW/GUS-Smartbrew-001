import PageLayout from '../components/layout/PageLayout';
import SEOHead from '../components/seo/SEOHead';

const IMAGES = [
  '/img/period/period1.jpg',
  '/img/period/period2.jpg',
  '/img/period/period3.jpg',
  '/img/period/period4.jpg',
  '/img/period/period5.jpg',
];

// Per-image focal points to avoid cutting faces (x% y%)
const OBJECT_POS: string[] = [
  '50% 35%', // period1
  '50% 35%', // period2
  '50% 35%', // period3
  '50% 20%', // period4 (was cutting face) - move focus upward
  '50% 35%', // period5
];

const MyPeriodMySchoolPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="My Period, My School - Menstrual Hygiene Initiative"
        description="Awareness and support program ensuring menstrual hygiene, dignity, and school attendance for girls."
        keywords="menstrual hygiene, period awareness, girls education, hygiene initiative, NGO program"
        canonicalUrl="/my-period-my-school"
      />

      <div className="bg-white">
        {/* Hero with overlapping white strip */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-visible">
          <img 
            src={IMAGES[0]}
            alt="My Period, My School"
            className="w-full h-full object-cover object-[50%_35%] md:object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <div
              className="w-[92%] sm:w-4/5 md:w-3/4 lg:w-2/3 bg-white px-20 sm:px-8 py-5 sm:py-6 text-center translate-y-1/2"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-normal mb-2 sm:mb-3">Dreams Don't Stop</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-normal">My period won't stop my school</p>
            </div>
          </div>
        </div>
        {/* Spacer to offset the overlapping strip */}
        <div className="h-20 sm:h-24 md:h-28"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Problem Statement */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Problem Statement
            </h2>
            <div className="bg-red-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Many girls miss school due to lack of menstrual hygiene awareness, products, and safe facilities. 
                  Stigma and misinformation further reduce confidence and participation in classrooms.
                </p>
              </div>
            </div>
          </div>
          {/* Feature Stories - Alternating image/text sections using provided images */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 mb-12 sm:mb-16 lg:mb-20">
            {/* 1. From “Alag Hona” to Inclusion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img
                  src={IMAGES[0]}
                  alt="From Period Isolation to Inclusion"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover md:object-center rounded-2xl shadow-lg"
                  style={{ objectPosition: OBJECT_POS[0] }}
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-4 sm:mb-6">From 'Isolation' to 'Inclusion'</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                  In Kumaon villages, older customs around menstruation kept girls apart from daily life—missing school,
                  meals with family, and community events. With peer-led sessions and support from village leaders,
                  dignity and hygiene are now openly discussed, and attendance continues during periods.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  The shift is community-driven: informed mothers’ groups, teachers, and peers sustain the change so
                  periods never stop education.
                </p>
              </div>
            </div>

            {/* 2. Geeta’s Path to Confidence */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="lg:order-2">
                <img
                  src={IMAGES[1]}
                  alt="Geeta’s Path to Confidence"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover md:object-center rounded-2xl shadow-lg"
                  style={{ objectPosition: OBJECT_POS[1] }}
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-4 sm:mb-6">Geeta’s Path to Confidence</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                  “Before the training, I didn’t know I should use a pad or that I could bathe safely,” shares Geeta,
                  a peer educator near Bageshwar. “Now I use pads from the local shop and stay with my family during
                  my period. Girls in our school attend classes even during cycles—this is a big change.”
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Geeta and dozens of trained volunteers each support ten families—answering questions, dispelling myths,
                  and ensuring products and privacy in schools.
                </p>
              </div>
            </div>

            {/* 3. Red Dot, Real Change */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img
                  src={IMAGES[2]}
                  alt="Red Dot, Real Change"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover md:object-center rounded-2xl shadow-lg"
                  style={{ objectPosition: OBJECT_POS[2] }}
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-4 sm:mb-6">Red Dot, Real Change</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                  Building on nationwide momentum, our #RedDotChallenge activities in schools and community centers
                  normalize conversations. Students, teachers, and parents participate—making accurate information and
                  products part of everyday life.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  With reliable pad supply and clear school protocols, girls no longer miss classes, and confidence grows
                  with every informed conversation.
                </p>
              </div>
            </div>

            {/* 4. Scaling Across Valleys */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="lg:order-2">
                <img
                  src={IMAGES[3]}
                  alt="Scaling Across Valleys"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover md:object-center rounded-2xl shadow-lg"
                  style={{ objectPosition: OBJECT_POS[3] }}
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-4 sm:mb-6">Scaling Across Valleys</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                  What began in a few schools is expanding: more peer educators, more sessions, and more facilities.
                  Together with Panchayats and Block officials, we are building a network where every girl manages
                  periods safely and with dignity.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our goal: no girl in Uttarakhand is held back by a natural cycle—ever.
                </p>
              </div>
            </div>
          </div>

          

          {/* Gallery (mobile horizontal + desktop grid) */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Program Moments
            </h2>

            <div className="block md:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory mb-8">
                {IMAGES.map((src, i) => (
                  <img 
                    key={i}
                    src={src}
                    alt={`MPMS ${i+1}`}
                    className="flex-shrink-0 w-80 h-48 object-cover md:object-center rounded-2xl shadow-lg snap-center"
                    style={{ objectPosition: OBJECT_POS[i] }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {IMAGES.slice(0,3).map((src, i) => (
                <img 
                  key={i}
                  src={src}
                  alt={`MPMS grid ${i+1}`}
                  className="w-full h-64 object-cover md:object-center rounded-2xl shadow-lg"
                  style={{ objectPosition: OBJECT_POS[i] }}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {IMAGES.slice(3).map((src, i) => (
                <img 
                  key={i}
                  src={src}
                  alt={`MPMS grid 2-${i+1}`}
                  className="w-full h-64 object-cover md:object-center rounded-2xl shadow-lg"
                  style={{ objectPosition: OBJECT_POS[i+3] }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Impact stats */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
              Our Impact
            </h2>

            <div className="block lg:hidden">
              <div className="flex overflow-x-auto gap-4 pb-2 px-4 scrollbar-hide snap-x snap-mandatory">
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">1,000+</div>
                  <div className="text-sm text-gray-600">Girls Reached</div>
                </div>
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Schools Engaged</div>
                </div>
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Sessions Conducted</div>
                </div>
                <div className="flex-shrink-0 w-64 snap-center text-center bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-normal text-red-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Dignity & Inclusion</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">1,000+</div>
                <div className="text-sm sm:text-base text-gray-600">Girls Reached</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Schools Engaged</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">200+</div>
                <div className="text-sm sm:text-base text-gray-600">Sessions Conducted</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-red-600 mb-1 sm:mb-2">100%</div>
                <div className="text-sm sm:text-base text-gray-600">Dignity & Inclusion</div>
              </div>
            </div>
          </div>

          {/* Closing copy */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                "My Period, My School" ensures that menstruation is never a barrier to learning. 
                With awareness, access, and acceptance, girls participate fully—every day of the month.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We welcome partnerships with schools and communities to expand access to products and facilities, 
                and to build a culture where dreams don't stop.
              </p>
            </div>
          </div>

          {/* Removed standalone stories block; narratives merged above */}
        </div>
      </div>
    </PageLayout>
  );
};

export default MyPeriodMySchoolPage;


