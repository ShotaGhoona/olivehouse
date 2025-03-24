import React from 'react';
import Image from 'next/image';

const TopView = () => (
  <div className="relative w-full">
    {/* Main Image with Curved Bottom */}
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "url(#curve-clip)" }}>
        <div className="relative w-full h-full">
          <Image
            src="https://source.unsplash.com/random/1200x800/?japanese,house"
            alt="オリーブの家 外観"
            fill
            className="object-cover"
            priority
          />
          {/* Semi-transparent overlay to match the screenshot */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
      </div>

      {/* SVG for clip path */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curve-clip" clipPathUnits="objectBoundingBox">
          <path id="パス_1" data-name="パス 1" d="M48,1.249A38.484,38.484,0,1,1,19.5,65.6" transform="translate(-10.202 -0.653)" fill="none" stroke="#353f2e" strokeMiterlimit="10" strokeWidth="2.497"/>
          </clipPath>
        </defs>
      </svg>

      {/* Dotted line overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex items-center justify-center">
        <div className="w-11/12 border-b border-dashed border-[#2c5530] opacity-70"></div>
      </div>
    </div>

    {/* Tagline */}
    <div className="py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-[#2c5530]">楽しく過ごせる、時を大切に</h2>
    </div>
  </div>
);

export default TopView; 