
import React, { useState } from 'react';
import { Search, User, ShoppingCart, ChevronDown, Menu, X, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="w-full bg-scandi-red py-2 text-center text-white text-sm">
        Demo store is hosted on readymage.com.
      </div>
      
      {/* Contact bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <span>Telephone:</span>
            <span className="font-medium">+1 (555) 234-5678</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <span>Mail:</span>
            <span className="font-medium">info@scandipwa.com</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span>USD</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile menu button */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-1" aria-label="Menu">
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link to="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                    <span className="text-gray-700">Scandi</span><span className="text-scandi-red font-bold">PWA</span>
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="p-1">
                    <X className="h-6 w-6 text-gray-700" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="relative mb-4">
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-scandi-red"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2">
                      <Search className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  
                  <div className="mb-4 flex items-center justify-between border-b pb-3">
                    <span className="font-medium">USD</span>
                    <ChevronDown size={16} />
                  </div>
                  
                  <div className="mb-4 flex items-center border-b pb-3">
                    <User className="h-5 w-5 text-gray-700 mr-2" />
                    <span>Compare products</span>
                  </div>
                </div>
                
                <div className="flex-1 overflow-auto">
                  <MobileCategoryLink title="SMARTPHONES & GADGETS" href="/category/smartphones" />
                  <MobileCategoryLink title="LAPTOPS AND COMPUTERS" href="/category/computers" />
                  <MobileCategoryLink title="HOUSEHOLD APPLIANCES" href="/category/household" />
                  <MobileCategoryLink title="TV, AUDIO, PHOTO, VIDEO" href="/category/entertainment" />
                  <MobileCategoryLink title="KITCHEN APPLIANCES" href="/category/kitchen" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
        
        <Link to="/" className="text-2xl font-bold">
          <span className="text-gray-700">Scandi</span><span className="text-scandi-red font-bold">PWA</span>
        </Link>
        
        <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-scandi-red"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hidden md:flex">
            <User className="h-6 w-6 text-gray-700" />
          </button>
          <button className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-scandi-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
      
      {/* Categories navbar - Only show on desktop */}
      <div className="hidden md:block border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between overflow-x-auto whitespace-nowrap">
            <CategoryLink title="SMARTPHONES & GADGETS" href="/category/smartphones" />
            <CategoryLink title="LAPTOPS AND COMPUTERS" href="/category/computers" />
            <CategoryLink title="HOUSEHOLD APPLIANCES" href="/category/household" />
            <CategoryLink title="TV, AUDIO, PHOTO, VIDEO" href="/category/entertainment" />
            <CategoryLink title="KITCHEN APPLIANCES" href="/category/kitchen" />
          </div>
        </div>
      </div>
      
      {/* Mobile bottom navigation bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 z-40">
          <div className="flex justify-around items-center h-14">
            <Link to="/" className="flex flex-col items-center justify-center text-gray-700 py-2">
              <Home className="h-6 w-6" />
            </Link>
            <Link to="/account" className="flex flex-col items-center justify-center text-gray-700 py-2">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="flex flex-col items-center justify-center text-gray-700 py-2">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-scandi-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

// Desktop category link
const CategoryLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link 
      to={href} 
      className="px-3 py-4 text-xs font-medium text-gray-700 hover:text-scandi-red transition-colors"
    >
      {title}
    </Link>
  );
};

// Mobile category link with right arrow
const MobileCategoryLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link 
      to={href} 
      className="flex items-center justify-between px-4 py-3 border-b border-gray-200 text-sm font-medium hover:bg-gray-50"
    >
      <span>{title}</span>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </Link>
  );
};

export default Navbar;
