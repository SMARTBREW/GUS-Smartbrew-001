import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with consistent styling */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-normal mb-8">
              <span className="text-gray-800">REFUND & CANCELLATION </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              This Refund & Cancellation Policy outlines the terms and conditions for refunds and cancellations related to donations made to Gramin Utthan Samity (G.U.S.).
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                This Refund & Cancellation Policy outlines the terms and conditions for refunds and cancellations related to donations made to Gramin Utthan Samity (G.U.S.). By making a donation through our website, you agree to comply with and be bound by the following terms.
              </p>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">1. INFORMATION ACCURACY</span>
                </h2>
                <p className="mb-4">
                  You will provide authentic, correct, and true information while completing the process for online donation. GUS reserves the right to confirm and validate the information and other details provided by you at any point of time. If upon confirmation your details are found not to be true (wholly or partly), GUS has the right in its sole discretion to reject the donation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">2. ERROR CORRECTION & REFUND REQUESTS</span>
                </h2>
                <p className="mb-4">
                  If donor feels that, he/she made an error in donation amount/purpose or any other parameter, kindly let GUS know about such error within 2 working days by email to contact@gusindia.org, we shall address any such request in 7-10 working days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">3. TRANSACTION CONFIRMATION</span>
                </h2>
                <p className="mb-4">
                  You will receive a confirmation on successful / failed transaction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">4. REGULAR DONATION CANCELLATION</span>
                </h2>
                <p className="mb-4">
                  In case a donation is registered under regular donation program the donor may intimate us at contact@gusindia.org to stop the donation from the next debit cycle. GUS on a best effort basis will execute the request and intimate the donor about the same.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">5. TAX EXEMPTION CERTIFICATES</span>
                </h2>
                <p className="mb-4">
                  Only Indian donors who have provided the required details alongwith PAN and/or Aadhar details are eligible for a Tax exemption certificate under section 80G of the Income Tax Act and would be sent to the registered email & postal address provided during the process of online donation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">6. CONTACT INFORMATION</span>
                </h2>
                <p className="mb-4">
                  For any other information on online donations kindly write to contact@gusindia.org or call us on +91 [Phone Number].
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">7. GENERAL REFUND POLICY</span>
                </h2>
                <p className="mb-4">
                  GUS does not accept returns or refund amounts for any donations made either one time or regular, except in the circumstances outlined above. All donations are used for charitable purposes and are non-refundable by default.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">8. PROCESSING TIME</span>
                </h2>
                <p className="mb-4">
                  Refund requests will be processed within 7-10 working days from the date of receipt of the request. The actual credit to your account may take additional time depending on your bank's processing time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">9. REFUND METHODS</span>
                </h2>
                <p className="mb-4">
                  Refunds will be processed using the same method as the original payment:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Credit/Debit Cards:</strong> Refunded to the original card (3-5 business days)</li>
                  <li><strong>Bank Transfers:</strong> Refunded to the original bank account (5-7 business days)</li>
                  <li><strong>Digital Wallets:</strong> Refunded to the original wallet (1-3 business days)</li>
                  <li><strong>UPI:</strong> Refunded to the original UPI ID (1-2 business days)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">10. POLICY UPDATES</span>
                </h2>
                <p className="mb-4">
                  This Refund & Cancellation Policy may be updated from time to time. We will notify donors of any significant changes through our website and email communications. Continued use of our services after policy changes constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">11. DISPUTE RESOLUTION</span>
                </h2>
                <p className="mb-4">
                  In case of any disputes regarding refunds or cancellations, the decision of GUS management will be final and binding. All disputes shall be subject to the jurisdiction of courts in Uttarakhand, India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
