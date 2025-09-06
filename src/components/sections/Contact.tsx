import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
            <span className="text-gray-800">Contact </span>
            <span className="text-red-600">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Get in touch with us to learn more about our programs, volunteer opportunities, or to support our mission.
          </p>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
