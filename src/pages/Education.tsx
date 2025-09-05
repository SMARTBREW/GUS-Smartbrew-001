import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import DonateButton from '../components/DonateButton';
import OptimizedImage from '../components/OptimizedImage';

const EducationPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Education Programs - Rural Development & Youth Empowerment"
        description="Discover Gramin Utthan Samiti's comprehensive education programs in Uttarakhand. Digital literacy, school infrastructure, and youth leadership development initiatives."
        keywords="education programs, digital literacy, rural education, youth empowerment, school infrastructure, Gramin Utthan Samiti education, Uttarakhand education"
        canonicalUrl="/education"
      />
      
      <div className="bg-white">
        {/* Hero Image */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <OptimizedImage 
            src="/img/ed1.jpeg"
            alt="Education Programs"
            className="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-normal mb-4">Education</h1>
              <p className="text-xl lg:text-2xl font-light max-w-2xl mx-auto">
                Empowering rural youth through quality education and digital literacy
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Problem Statement */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Problem Statement
            </h2>
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Rural areas in Uttarakhand face significant educational challenges including limited access to quality education, 
                  lack of digital literacy skills, inadequate school infrastructure, and limited opportunities for youth development. 
                  Many students drop out due to these barriers, limiting their future prospects and perpetuating the cycle of poverty.
                </p>
              </div>
            </div>
          </div>

          {/* How We're Solving - Creative Learning */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Creative Learning and Classroom Activities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <OptimizedImage 
                  src="/img/ed2.jpeg"
                  alt="Creative Learning Activities"
                  className="w-full h-80 rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Engaging Students Through Creative Education</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our creative learning approach focuses on making education engaging and interactive for rural students. 
                  We incorporate art, coloring activities, storytelling, and hands-on learning methods to help students 
                  develop their creativity while mastering academic concepts.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The program includes art and craft activities, interactive storytelling sessions, 
                  creative writing workshops, visual learning tools, and collaborative classroom projects. 
                  We believe that creative expression enhances learning and helps students retain information better.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through these creative learning methods, we've seen improved student engagement and academic performance. 
                  Students develop both artistic skills and critical thinking abilities, making learning a joyful experience 
                  that they look forward to every day.
                </p>
              </div>
            </div>
          </div>

          {/* School Infrastructure Development */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              School Infrastructure Development
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <OptimizedImage 
                  src="/img/ed20.jpeg"
                  alt="School Infrastructure"
                  className="w-full h-80 rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Building Better Learning Environments</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our infrastructure development program focuses on creating conducive learning environments in underserved areas. 
                  We've built and renovated over 25 schools, ensuring that students have access to proper classrooms, 
                  libraries, computer labs, and essential amenities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The program includes school building construction, classroom renovation, library and computer lab setup, 
                  sanitation facilities development, and playground creation. We believe that quality infrastructure is 
                  fundamental to providing quality education.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  These improvements have directly benefited over 10,000 students, with 85% of our infrastructure projects 
                  completed successfully. The enhanced facilities have led to improved attendance rates and better learning outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Environmental Education */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Environmental Education and Tree Planting
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/ed4.jpeg"
                  alt="Environmental Education"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Teaching Environmental Stewardship</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our environmental education program teaches students the importance of environmental conservation and 
                  sustainable practices. Through hands-on tree planting activities and nature-based learning, we help 
                  students develop a deep connection with their natural environment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The program includes tree planting initiatives, environmental awareness workshops, 
                  nature conservation projects, sustainable living education, and community green initiatives. 
                  Students learn about local ecosystems, climate change, and their role in protecting the environment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over 2,000 students have participated in our environmental programs, planting more than 5,000 trees 
                  across rural Uttarakhand. These young environmental stewards are now leading community efforts 
                  to protect and preserve their natural heritage for future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Images and Content */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Educational Impact in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <img 
                src="/img/ed5.jpeg"
                alt="Students in Computer Lab"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="/img/ed6.jpeg"
                alt="Library Setup"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="/img/ed7.jpeg"
                alt="Leadership Workshop"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our education programs have created a ripple effect across rural Uttarakhand. Students who once 
                  struggled with basic literacy are now confidently using computers, accessing online resources, 
                  and developing leadership skills that will serve them throughout their lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The transformation goes beyond individual students - entire communities are benefiting from the 
                  improved educational infrastructure and the leadership skills our youth bring back to their villages. 
                  We're building a foundation for sustainable development that will impact generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Our Impact */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">3,000+</div>
                <div className="text-gray-600">Students in Creative Learning</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Schools Built/Renovated</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">2,000+</div>
                <div className="text-gray-600">Environmental Program Participants</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">5,000+</div>
                <div className="text-gray-600">Trees Planted</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
                Support Our Education Programs
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Your donation can help us provide quality education, creative learning activities, and environmental education programs to more rural youth in Uttarakhand.
              </p>
              <DonateButton text="Donate Now" size="large" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EducationPage;
