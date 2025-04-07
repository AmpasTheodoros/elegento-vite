
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gray-100 rounded-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Xbox Series X & S<br />Pre-Order Now
            </h1>
            <p className="text-gray-600 mb-6">Quantity of goods is limited!</p>
            <div>
              <Button 
                className="bg-scandi-red hover:bg-scandi-red/90 text-white uppercase text-sm px-6"
              >
                Explore more
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/90928320-911e-46ac-b0c5-517df117061d.png" 
              alt="Xbox Series X and S" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
