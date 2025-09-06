import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Priya Sharma',
      role: 'Cause Champion',
      image: 'https://images.pexels.com/photos/8924530/pexels-photo-8924530.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Seeing the girls I supported graduate from school and start their own businesses has been the most rewarding experience of my life. The Giving Circle made it possible to witness real change.',
      organization: 'Supporting Girls Education',
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      role: 'NGO Director',
      image: 'https://images.pexels.com/photos/8924531/pexels-photo-8924531.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The transparency and documentation process has elevated our work. Champions can see exactly how their support transforms lives, creating a beautiful cycle of trust and impact.',
      organization: 'Water Warriors Foundation',
    },
    {
      id: '3',
      name: 'Anita Verma',
      role: 'Cause Champion',
      image: 'https://images.pexels.com/photos/8924532/pexels-photo-8924532.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The NFT verification gives me proof that my contributions are making a real difference. I can share my impact stories with friends and inspire them to join too.',
      organization: 'Youth Skill Development',
    },
    {
      id: '4',
      name: 'Suresh Patel',
      role: 'Community Leader',
      image: 'https://images.pexels.com/photos/8924533/pexels-photo-8924533.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working with The Giving Circle has brought our community together. The champions genuinely care about our progress and celebrate every milestone with us.',
      organization: 'Rural Development Initiative',
    },
  ];

  const changeTestimonial = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeTestimonial((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6">
            <span className="text-gray-800">Voices of </span>
            <span className="text-red-600">Change</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Hear from champions, NGO partners, and community members whose lives have been transformed
            through our circle of giving.
          </p>
        </div>

        <div className="block sm:hidden">
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                </div>
                
                <div className="text-center">
                  <blockquote className="text-base text-gray-700 italic leading-relaxed mb-4 font-light">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-normal text-gray-800 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-red-600 font-medium text-base">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:block relative">
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="h-[400px] md:h-[350px]">
              <div 
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4 flex-shrink-0 flex items-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative mx-auto max-w-3xl w-full">
                      <div className="absolute top-6 left-6 md:top-8 md:left-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex flex-row items-center space-x-8 pt-0">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-4 border-white"
                          />
                        </div>
                        
                        <div className="flex-1 text-left">
                          <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 font-light">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div className="space-y-2">
                            <div className="font-normal text-gray-800 text-lg md:text-xl">
                              {testimonial.name}
                            </div>
                            <div className="text-red-600 font-medium text-base md:text-lg">
                              {testimonial.role}
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                              {testimonial.organization}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out hover:scale-125 ${
                    index === currentIndex 
                      ? 'bg-red-600 w-8' 
                      : 'bg-gray-300 hover:bg-red-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
