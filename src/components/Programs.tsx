import React, { useState } from 'react';
import { BookOpen, Heart, Leaf, Users, Target, ArrowRight, Calendar, MapPin, Users2, X, DollarSign } from 'lucide-react';
import GetInvolved from './GetInvolved';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      id: 1,
      title: "Digital Literacy for Rural Youth",
      category: "Education",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      shortDescription: "Empowering rural youth with digital skills for better opportunities.",
      fullDescription: "This comprehensive program focuses on providing digital literacy training to rural youth, enabling them to access better educational and employment opportunities. We provide computer training, internet skills, and digital tools education.",
      features: [
        "Computer training workshops",
        "Internet and social media skills",
        "Digital tools and applications",
        "Online safety and cybersecurity",
        "Career guidance and placement support"
      ],
      stats: {
        beneficiaries: "5,000+",
        duration: "6 months",
        success: "92%"
      },
      budget: "₹25,00,000",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Mobile Health Clinics",
      category: "Healthcare",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      shortDescription: "Bringing healthcare services to remote villages and communities.",
      fullDescription: "Our mobile health clinics travel to remote villages providing essential healthcare services including basic check-ups, vaccinations, maternal care, and health awareness programs.",
      features: [
        "Basic health check-ups",
        "Vaccination drives",
        "Maternal and child care",
        "Health awareness campaigns",
        "Emergency medical support"
      ],
      stats: {
        beneficiaries: "15,000+",
        villages: "50+",
        clinics: "10"
      },
      budget: "₹45,00,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Tree Plantation Drive",
      category: "Environment",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      shortDescription: "Creating green cover and promoting environmental awareness.",
      fullDescription: "Large-scale tree plantation initiative across multiple districts to increase green cover, combat climate change, and create environmental awareness among communities.",
      features: [
        "Tree plantation in schools and public spaces",
        "Environmental education workshops",
        "Community participation programs",
        "Maintenance and monitoring",
        "Carbon footprint reduction"
      ],
      stats: {
        trees: "100,000+",
        locations: "200+",
        volunteers: "2,000+"
      },
      budget: "₹15,00,000",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Women Empowerment Training",
      category: "Livelihood",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      shortDescription: "Empowering women with skills for economic independence.",
      fullDescription: "Comprehensive training program for women focusing on skill development, entrepreneurship, and financial literacy to promote economic independence and social empowerment.",
      features: [
        "Skill development training",
        "Entrepreneurship workshops",
        "Financial literacy programs",
        "Micro-enterprise support",
        "Market linkage assistance"
      ],
      stats: {
        beneficiaries: "3,000+",
        enterprises: "500+",
        success: "78%"
      },
      budget: "₹35,00,000",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "School Infrastructure Development",
      category: "Education",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      shortDescription: "Building and renovating schools in underserved areas.",
      fullDescription: "Infrastructure development program focusing on building new schools, renovating existing facilities, and providing essential amenities to create better learning environments.",
      features: [
        "School building construction",
        "Classroom renovation",
        "Library and computer lab setup",
        "Sanitation facilities",
        "Playground development"
      ],
      stats: {
        schools: "25+",
        students: "10,000+",
        completion: "85%"
      },
      budget: "₹75,00,000",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Mental Health Support Program",
      category: "Healthcare",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      shortDescription: "Providing mental health support and counseling services.",
      fullDescription: "Comprehensive mental health program offering counseling, therapy, and support services to individuals and families dealing with mental health challenges.",
      features: [
        "Individual counseling sessions",
        "Group therapy programs",
        "Family support services",
        "Mental health awareness",
        "Crisis intervention"
      ],
      stats: {
        beneficiaries: "2,000+",
        sessions: "5,000+",
        counselors: "15"
      },
      budget: "₹30,00,000",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Clean Water Initiative",
      category: "Environment",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      shortDescription: "Providing clean drinking water to rural communities.",
      fullDescription: "Comprehensive water purification and distribution program to ensure access to clean drinking water in rural areas, including installation of water purification systems and community awareness programs.",
      features: [
        "Water purification system installation",
        "Community water tank construction",
        "Water quality monitoring",
        "Hygiene awareness programs",
        "Maintenance training"
      ],
      stats: {
        villages: "100+",
        beneficiaries: "50,000+",
        systems: "200+"
      },
      budget: "₹60,00,000",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Youth Leadership Development",
      category: "Education",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      shortDescription: "Developing leadership skills among young people.",
      fullDescription: "Leadership development program for youth focusing on communication skills, problem-solving, community service, and civic engagement to create future community leaders.",
      features: [
        "Leadership workshops",
        "Public speaking training",
        "Community project planning",
        "Mentorship programs",
        "Leadership camps"
      ],
      stats: {
        participants: "1,500+",
        projects: "100+",
        mentors: "50"
      },
      budget: "₹20,00,000",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "Agricultural Training Program",
      category: "Livelihood",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      shortDescription: "Modern farming techniques for sustainable agriculture.",
      fullDescription: "Comprehensive agricultural training program teaching modern farming techniques, sustainable practices, and market linkage to improve farmers' income and productivity.",
      features: [
        "Modern farming techniques",
        "Organic farming methods",
        "Market linkage support",
        "Equipment training",
        "Crop diversification"
      ],
      stats: {
        farmers: "5,000+",
        villages: "150+",
        income: "40%"
      },
      budget: "₹40,00,000",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const openModal = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
            <span className="text-gray-800">Our </span>
            <span className="text-red-600">Programs</span>
          </h1>
                      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our comprehensive programs designed to transform communities across India. 
              Click on any program to learn more and support our initiatives.
            </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              onClick={() => openModal(program)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm">
                    {program.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-200">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.shortDescription}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    Budget: <span className="font-medium text-gray-700">{program.budget}</span>
                  </div>
                                  <button className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200">
                  Learn More →
                </button>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center space-x-2 group-hover:shadow-lg text-sm">
                  <DollarSign className="h-3 w-3" />
                  <span>Donate Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {isModalOpen && selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                  {selectedProgram.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="inline-flex p-4 rounded-xl bg-red-600 text-white mb-6">
                {selectedProgram.icon}
              </div>
              
                              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4">
                {selectedProgram.title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {selectedProgram.fullDescription}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(selectedProgram.stats).map(([key, value]: [string, any]) => (
                  <div key={key} className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-xl sm:text-2xl font-normal text-red-600">
                      {value}
                    </div>
                    <div className="text-sm text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {selectedProgram.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Budget */}
              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-normal text-gray-800 mb-1">Program Budget</h4>
                    <p className="text-gray-600">Total funding required for this program</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-normal text-red-600">
                      {selectedProgram.budget}
                    </div>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-medium text-lg transition-all duration-200 inline-flex items-center space-x-3 group shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <DollarSign className="h-6 w-6" />
                  <span>Donate to This Program</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
