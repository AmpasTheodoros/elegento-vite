
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  const { toast } = useToast();
  
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting our cookies policy."
    });
    onAccept();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 animate-scale-in">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-scandi-red">We Value Your Privacy</h2>
          <button 
            onClick={onAccept} 
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        
        <p className="mb-4">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
          By clicking "Accept All Cookies", you consent to our use of cookies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button 
            onClick={handleAccept} 
            className="flex-1 bg-scandi-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
          >
            Accept All Cookies
          </button>
          <button 
            onClick={handleAccept} 
            className="flex-1 border border-gray-300 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Accept Necessary Only
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
