import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Impact from '../components/Impact';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - White Background */}
      <section className="bg-white">
        <Hero />
      </section>
      
      {/* CTA Section - White Background */}
      <section className="bg-gray-50">
        <CTA />
      </section>
      
      {/* Impact Section - Gray Background */}
      <section className="bg-white">
        <Impact />
      </section>

      {/* Programs Section - Gray Background */}
      <Programs preview={true} />

      {/* Testimonials Section - White Background */}
      <section className="bg-white">
        <Testimonials />
      </section>

      {/* Contact Section - Gray Background */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 mb-4">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our programs or want to get involved? We'd love to hear from you.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContactForm title="Send us a Message" />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;