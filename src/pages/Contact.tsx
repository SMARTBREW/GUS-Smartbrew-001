import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Contact </span>
              <span className="text-red-600">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Get in touch with us to learn more about our programs, volunteer opportunities, or to support our mission.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main Office */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Main Office</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>Gramin Utthan Samity</p>
                    <p>Kumaon Hills, Uttarakhand</p>
                    <p>India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Phone</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>+91 [Phone Number]</p>
                    <p>+91 [Mobile Number]</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Email</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>info@gus.org.in</p>
                    <p>contact@gus.org.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Information</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="programs">Program Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Office Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Weekdays</h3>
                    <p className="text-gray-200">Monday - Friday</p>
                    <p className="text-gray-200">9:00 AM - 6:00 PM IST</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Weekends</h3>
                    <p className="text-gray-200">Saturday</p>
                    <p className="text-gray-200">9:00 AM - 2:00 PM IST</p>
                    <p className="text-gray-200">Sunday - Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-6 text-center">Emergency Contact</h2>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-4">
                    For urgent matters or emergencies, please contact:
                  </p>
                  <div className="text-2xl font-normal text-red-600">+91 [Emergency Number]</div>
                  <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
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

export default ContactPage;
