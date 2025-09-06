import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import CTA from '../components/sections/CTA';
import Impact from '../components/sections/Impact';
import Testimonials from '../components/sections/Testimonials';
import LocationMap from '../components/sections/LocationMap';
import SEOHead from '../components/seo/SEOHead';
import Footer from '../components/layout/Footer';
import ImpactStrip from '../components/sections/ImpactStrip';

const Home = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Gramin Utthan Samiti",
    "alternateName": "G.U.S.",
    "description": "Leading rural development NGO in Uttarakhand since 1979. Empowering women, transforming villages, and creating sustainable livelihoods in 150+ communities across Kumaon hills.",
    "foundingDate": "1979",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kapkote",
      "addressLocality": "Bageshwar", 
      "addressRegion": "Uttarakhand",
      "postalCode": "263679",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-5963-3043",
      "email": "contact@gusindia.org",
      "contactType": "customer service"
    },
    "url": "https://gusindia.org",
    "logo": "https://gusindia.org/logo.png",
    "mission": "To create self-sustaining rural communities through women empowerment, education, and integrated village development.",
    "keywords": ["Rural Development", "Women Empowerment", "NGO Uttarakhand", "Village Development", "Education", "Sustainable Development"],
    "areaServed": ["Uttarakhand", "Kumaon", "Bageshwar", "Chamoli"],
    "knowsAbout": ["Rural Development", "Women Empowerment", "Education", "Healthcare", "Sustainable Agriculture", "Community Development"]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Gramin Utthan Samiti - Rural Development NGO Uttarakhand"
        description="Leading rural development NGO in Uttarakhand since 1979. Empowering women, transforming villages, and creating sustainable livelihoods. Donate to support 150+ communities in Kumaon hills."
        keywords="NGO Uttarakhand, rural development, women empowerment, donate NGO, village development, Gramin Utthan Samiti, Kumaon hills, Bageshwar NGO"
        canonicalUrl="/"
        structuredData={homePageSchema}
      />
      <Header />
      
      <section className="bg-white">
        <Hero />
      </section>

      <ImpactStrip />
      
      <section className="bg-gray-50">
        <CTA />
      </section>
      
      <section className="bg-gray-50">
        <Impact />
      </section>
      
      
      <section className="bg-white">
        <Testimonials />
      </section>

      <section className="py-16 bg-gray-50">
        <LocationMap />
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;