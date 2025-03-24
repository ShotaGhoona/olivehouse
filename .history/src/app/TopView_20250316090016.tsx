import React from 'react';
import Image from 'next/image';

const TopView = () => (
  <div className="relative w-full">
    {/* Main Image with Curved Bottom */}
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#f9f5e7]">
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "url(#curve-clip)" }}>
        <div className="relative w-full h-full">
          <Image
            src="/images/top-view.jpg"
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
            <path d="M0,0 H1 V0.95 C0.5,1 0.25,1 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Dotted line overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex items-center justify-center">
        <div className="w-11/12 border-b border-dashed border-[#2c5530] opacity-70"></div>
      </div>
    </div>

    {/* Tagline */}
    <div className="py-12 px-4 text-center bg-[#f9f5e7]">
      <h2 className="text-2xl md:text-3xl font-medium text-[#2c5530]">楽しく過ごせる、時を大切に</h2>
    </div>
  </div>
);

export default TopView; 