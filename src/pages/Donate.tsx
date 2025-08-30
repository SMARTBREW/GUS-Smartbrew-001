import React from 'react';
import { Copy, Check, Heart, Building, CreditCard, Banknote } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Donate = () => {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const bankDetails = {
    payeeName: "Gramin Utthan Samiti",
    accountNumber: "08700 10000 2395",
    ifscCode: "UCBA0000870",
    bankName: "UCO Bank",
    branch: "Kapkote, Dist Bageshwar, Uttarakhand - 263679"
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const donationMethods = [
    {
      title: "Bank Transfer (NEFT/RTGS)",
      description: "Transfer funds directly to our bank account",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cheque/DD",
      description: "Send a cheque or demand draft to our address",
      icon: <Banknote className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Online Payment",
      description: "Secure online payment gateway (Coming Soon)",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Make a </span>
              <span className="text-red-600">Difference</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Your donation helps us continue our mission of empowering rural communities through education, healthcare, and sustainable development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Ways to </span>
              <span className="text-red-600">Donate</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Choose the most convenient way to support our cause and make a lasting impact in rural communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {donationMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${method.color} text-white mb-6`}>
                  {method.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Bank Transfer </span>
              <span className="text-red-600">Details</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Use these details to transfer your donation directly to our bank account.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
              <h3 className="text-2xl sm:text-3xl font-normal text-white flex items-center space-x-3">
                <Building className="h-8 w-8" />
                <span>Account Information</span>
              </h3>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Bank Details */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Payee Name</label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                        <span className="text-gray-900 font-medium text-lg">{bankDetails.payeeName}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.payeeName, 'payeeName')}
                        className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        {copiedField === 'payeeName' ? (
                          <Check className="h-6 w-6 text-green-600" />
                        ) : (
                          <Copy className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Account Number</label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                        <span className="text-gray-900 font-mono font-medium text-lg">{bankDetails.accountNumber}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                        className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        {copiedField === 'accountNumber' ? (
                          <Check className="h-6 w-6 text-green-600" />
                        ) : (
                          <Copy className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">IFSC Code</label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                        <span className="text-gray-900 font-mono font-medium text-lg">{bankDetails.ifscCode}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.ifscCode, 'ifscCode')}
                        className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        {copiedField === 'ifscCode' ? (
                          <Check className="h-6 w-6 text-green-600" />
                        ) : (
                          <Copy className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Bank Name</label>
                    <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                      <span className="text-gray-900 font-medium text-lg">{bankDetails.bankName}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Branch</label>
                    <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                      <span className="text-gray-900 text-lg">{bankDetails.branch}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Instructions */}
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-xl font-normal text-blue-900 mb-4">How to Transfer</h3>
                    <ol className="space-y-3 text-blue-800">
                      <li className="flex items-start space-x-3">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                        <span>Open your bank's mobile app or internet banking</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                        <span>Select "Add Beneficiary" or "New Payee"</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                        <span>Enter the account details shown above</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                        <span>Verify the beneficiary details</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">5</span>
                        <span>Transfer your donation amount</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-xl font-normal text-green-900 mb-4">Important Notes</h3>
                    <ul className="space-y-3 text-green-800">
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Please mention "Donation" in the transaction remarks</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Keep the transaction receipt for your records</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>For tax exemption, please contact us after transfer</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>NEFT transfers are processed within 2 hours</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                    <h3 className="text-xl font-normal text-yellow-900 mb-4">Contact After Transfer</h3>
                    <p className="text-yellow-800 mb-4">
                      After making your donation, please contact us with your transaction details:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-yellow-600 text-lg">📧</span>
                        <span className="text-yellow-800 font-medium">contact@gusindia.org</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-yellow-600 text-lg">📞</span>
                        <span className="text-yellow-800 font-medium">(05963) 3043</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Donation Methods */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Other Ways to </span>
              <span className="text-red-600">Donate</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Explore additional donation options that suit your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Cheque/DD</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send a cheque or demand draft in favor of "Gramin Utthan Samiti" to our address.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 font-medium text-lg">Gramin Utthan Samiti</p>
                <p className="text-gray-600">Kapkote, Dist Bageshwar</p>
                <p className="text-gray-600">Uttarakhand - 263679</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-4">Online Payment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure online payment gateway is coming soon. We're working to make donations easier for you.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-500 italic text-lg">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6">
            Your Donation Makes a <span className="text-red-200">Difference</span>
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Every rupee you donate goes directly towards our programs that help rural communities thrive. 
            From education to healthcare, your support creates lasting positive change.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-normal text-white mb-2">150+</div>
              <div className="text-red-100">Villages Served</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-normal text-white mb-2">50K+</div>
              <div className="text-red-100">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-normal text-white mb-2">45+</div>
              <div className="text-red-100">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
