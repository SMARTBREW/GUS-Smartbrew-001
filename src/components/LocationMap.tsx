import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface LocationMapProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}

const LocationMap: React.FC<LocationMapProps> = ({
  title = "Find Us",
  subtitle = "Visit our office in Kapkote, Bageshwar district, Uttarakhand. We're located in the heart of the community we serve.",
  showTitle = true
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
            <span className="text-gray-800">{title.split(' ')[0]} </span>
            <span className="text-red-600">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Google Map */}
        <div className="w-full h-96 lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27657.40275961529!2d79.8746392569581!3d29.94563463488979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a730754db28963%3A0x300907237f65076c!2sKapkot%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1756543073964!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gramin Utthan Samiti Location"
          ></iframe>
        </div>

        {/* Location Details */}
        <div className="p-8 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-4">Our Location</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Gramin Utthan Samiti</strong><br />
                    Kapkote, Dist Bageshwar<br />
                    Uttarakhand - 263679<br />
                    India
                  </span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span>(05963) 3043</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span>contact@gusindia.org</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-4">How to Reach</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">By Road:</h4>
                  <p>Kapkote is well-connected by road. You can reach us via NH 87 or state highways from major cities in Uttarakhand.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">By Bus:</h4>
                  <p>Regular bus services are available from Bageshwar, Almora, and other nearby cities to Kapkote.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">By Train:</h4>
                  <p>The nearest railway station is Kathgodam (KGM), approximately 120 km away. From there, you can take a bus or taxi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
