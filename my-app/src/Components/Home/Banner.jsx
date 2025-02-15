import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Logos from "./Logos";

export default function Banner() {
  return (
    <div className="relative h-auto border-none">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0 bannerColor"
        
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}

        {/* Hero Content */}
        <div className="layout pb-48">
          <div className="py-8 ">
            <div className="flex lg:flex-row flex-col  gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-white text-6xl font-bold leading-tight">
                  Smash every paid search target you've got
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                  As a Google and Bing certified PPC agency, we'll find the data
                  that makes a difference to your brand—then use it to drive
                  real, tangible growth.
                </p>
                <button className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-[#d1165f] transition-colors inline-flex items-center">
                  Get in touch
                  <ChevronDown className="ml-2 h-5 w-5" />
                </button>
              </div>

              {/* Hero Image */}
              <div className="relative ">
                <Image
                  src="/bidwise-world.png"
                  alt="Marketing Dashboard"
                  width={800}
                  height={700}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Logos />
          </div>
        </div>

        {/* diagonal bottom */}
       
          {/* Diagonal shape */}
          <div
            className="absolute bottom-0 left-0 w-full h-32 bg-white border-0 "
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
              
            }}
          />

        
      </div>
    </div>
  );
}
