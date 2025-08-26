import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: '12A Certificate',
      filename: '12A Certificate.pdf',
      description: 'Tax exemption certificate under Section 12A of Income Tax Act',
      isPan: false
    },
    {
      name: '80G Certificate',
      filename: '80G Certificate.pdf',
      description: 'Tax deduction certificate under Section 80G of Income Tax Act',
      isPan: false
    },
    {
      name: 'CSR Certificate',
      filename: 'CSR Certificate.PDF',
      description: 'Corporate Social Responsibility certificate',
      isPan: false
    },
    {
      name: 'FCRA Certificate',
      filename: 'FCRA Certificate.pdf',
      description: 'Foreign Contribution Regulation Act certificate',
      isPan: false
    },
    {
      name: 'GUS PAN Certificate',
      filename: 'GUS-PAN.pdf',
      description: 'Permanent Account Number certificate',
      isPan: true
    },
    {
      name: 'GUS Registration',
      filename: 'GUS-Registration.pdf',
      description: 'Organization registration certificate',
      isPan: false
    }
  ];

  const getIframeSrc = (certificate: any) => {
    const baseUrl = `/certificates/${certificate.filename}#toolbar=0&navpanes=0&scrollbar=0`;
    if (certificate.isPan) {
      return `${baseUrl}&view=FitV&page=1&zoom=100&scrollbar=1&navpanes=1`;
    }
    return baseUrl;
  };

  const getIframeStyle = (certificate: any) => {
    if (certificate.isPan) {
      return {
        transform: 'rotate(270deg) scale(1.2)',
        transformOrigin: 'center center',
        width: '100%',
        height: '100%'
      };
    }
    return {};
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Certificates
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in complete transparency. Gramin Utthan Samity (G.U.S.) holds various certifications and registrations that demonstrate our commitment to transparency, compliance, and social impact.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Display */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* First Row - 3 Certificates */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {certificates.slice(0, 3).map((certificate, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {certificate.name}
                  </h3>
                </div>
                <div className="h-96">
                  <iframe
                    src={getIframeSrc(certificate)}
                    className="w-full h-full"
                    title={certificate.name}
                    style={getIframeStyle(certificate)}
                  />
                </div>
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-sm text-gray-600 text-center">
                    {certificate.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Certificates */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certificates.slice(3, 6).map((certificate, index) => (
              <div key={index + 3} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {certificate.name}
                  </h3>
                </div>
                <div className="h-96">
                  <iframe
                    src={getIframeSrc(certificate)}
                    className="w-full h-full"
                    title={certificate.name}
                    style={getIframeStyle(certificate)}
                  />
                </div>
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-sm text-gray-600 text-center">
                    {certificate.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our organization maintains all necessary legal certifications including FCRA registration for foreign funding, 
                  tax exemption certificates (12A & 80G), and proper registration under relevant government authorities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Transparency & Trust
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  These certificates demonstrate our commitment to transparency, accountability, and compliance with 
                  all regulatory requirements, ensuring donor confidence and organizational credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Certificates;
