import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/sections/PageHero';
import ContactInfoCard from '../components/sections/ContactInfoCard';
import SectionTitle from '../components/ui/SectionTitle';
import InfoCard from '../components/ui/InfoCard';
import SEOHead from '../components/seo/SEOHead';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import LocationMap from '../components/sections/LocationMap';

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "NGO",
      "name": "Gramin Utthan Samiti",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kapkote",
        "addressLocality": "Bageshwar",
        "addressRegion": "Uttarakhand", 
        "postalCode": "263679",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-5963-3043",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint", 
          "email": "contact@gusindia.org",
          "contactType": "customer service"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "29.94006634152855",
        "longitude": "79.90247484581785"
      },
      "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00"
    }
  };

  return (
    <PageLayout className="bg-gray-50">
      <SEOHead
        title="Contact Us - Gramin Utthan Samiti NGO Uttarakhand"
        description="Contact Gramin Utthan Samiti (G.U.S.) - Leading NGO in Uttarakhand. Get in touch for donations, volunteering, or partnership opportunities. Located in Kapkote, Bageshwar."
        keywords="contact NGO Uttarakhand, Gramin Utthan Samiti contact, donate contact, volunteer contact, NGO Kapkote, Bageshwar NGO contact"
        canonicalUrl="/contact"
        structuredData={contactSchema}
      />
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with us to learn more about our programs, volunteer opportunities, or to support our mission."
      />

       <section className="py-8 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
             <ContactInfoCard
               title="Email Us"
               value="contact@gusindia.org"
               icon={<Mail />}
               link="mailto:contact@gusindia.org"
             />
             <ContactInfoCard
               title="Call Us"
               value="(05963) 3043"
               icon={<Phone />}
               link="tel:+9159633043"
             />
             <ContactInfoCard
               title="Visit Us"
               value="Gramin Utthan Samiti, Kapkote, Dist Bageshwar, Uttarakhand - 263679"
               icon={<MapPin />}
             />
             <ContactInfoCard
               title="Office Hours"
               value="Mon - Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM"
               icon={<Clock />}
             />
           </div>
         </div>
       </section>

        <section className="py-8 bg-white">
         <LocationMap />
       </section>

       <section className="py-8 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle 
             title="Get in Touch"
             subtitle="We're here to help and answer any questions you may have about our programs and initiatives."
           />

           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <InfoCard
               title="For General Inquiries"
               content={
                 <>
                   <p className="text-gray-600 mb-4">
                     Have questions about our programs, volunteer opportunities, or general information? We'd love to hear from you.
                   </p>
                   <div className="space-y-2">
                     <p className="flex items-center space-x-3">
                       <Mail className="h-5 w-5 text-red-600" />
                       <span className="text-gray-600">contact@gusindia.org</span>
                     </p>
                     <p className="flex items-center space-x-3">
                       <Phone className="h-5 w-5 text-red-600" />
                       <span className="text-gray-600">(05963) 3043</span>
                     </p>
                   </div>
                 </>
               }
             />
             <InfoCard
               title="For Donations"
               content={
                 <>
                   <p className="text-gray-600 mb-4">
                     Interested in supporting our cause? Learn about donation options and how your contribution makes a difference.
                   </p>
                   <div className="space-y-2">
                     <p className="flex items-center space-x-3">
                       <Mail className="h-5 w-5 text-red-600" />
                       <span className="text-gray-600">contact@gusindia.org</span>
                     </p>
                     <p className="text-gray-600 text-sm">
                       Visit our <a href="/donate" className="text-red-600 hover:text-red-700 underline">donation page</a> for more information.
                     </p>
                   </div>
                 </>
               }
             />
           </div>
         </div>
       </section>
     </PageLayout>
   );
 };

export default Contact;
