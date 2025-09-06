import { useState, useEffect } from 'react';

const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto animate-pulse shadow-lg">
            <span className="text-white font-bold text-3xl">G</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-normal text-gray-800">Gramin Utthan Samiti</h2>
          <p className="text-gray-600">Empowering Rural Communities</p>
        </div>
        
        <div className="mt-8">
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
