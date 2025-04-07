
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellers from '@/components/BestSellers';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true';
    
    // If not, show the cookie consent dialog after a short delay
    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 1000); // 1 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieAccept = () => {
    setShowCookieConsent(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroBanner />
        <CategoryGrid />
        <BestSellers />
      </div>
      <Footer />
      {/* Add bottom padding on mobile to account for the fixed bottom navigation */}
      {isMobile && <div className="h-14"></div>}
      
      {/* Cookie Consent Modal */}
      {showCookieConsent && <CookieConsent onAccept={handleCookieAccept} />}
    </div>
  );
};

export default Index;
