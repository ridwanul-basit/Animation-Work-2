import React from "react";
import Video from "../assets/ax-ca-hero-video.gif";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-32 px-32">
      <div className="flex flex-wrap">
        {/* First Column - 8/12 */}
        <div className="w-full lg:w-8/12">
          <h1 className="text-9xl font-bold text-black leading-[0.9]">
            DESIGN
            <br />
            EDGE
            <br />
            <img src={Video} alt="Hero" className="inline-block w-auto h-20" /> CREATIVE
            <br />
            AGENCY
          </h1>
        </div>

        {/* Second Column - 4/12 */}
        <div className="w-full lg:w-4/12 flex items-center">
          <p className="text-xl text-gray-600 leading-relaxed px-18 pt-28">
            An award winning <br /> creative agency, <br /> working based in <br /> Germany
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
