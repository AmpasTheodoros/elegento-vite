import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-[url(https://tech-demo.scandipwa.com/media/scandiweb/slider/s/l/slider-xbox.png.webp)] rounded-sm overflow-hidden">
        <AspectRatio ratio={16/5} className="relative w-full">
          <div className="flex h-full">
            {/* Left text section */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center z-10">
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
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default HeroBanner;
