"use client"; 
import React from 'react';
import Image from 'next/image';
import { PhoneContact } from './PhoneContact';

const TopView = () => (
  <div id="top-view" className="relative w-full">
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
        <div className="absolute inset-0 bg-white/30"></div>
      </div>
    </div>

    {/* SVG for clip path */}
    <svg width="0" height="0" className="absolute">
      <defs>
        <clipPath id="curve-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.9 C0.85,1 0.15,1 0,0.9 Z" />
        </clipPath>
      </defs>
    </svg>

    <div className="absolute bottom-0 left-0 right-0 h-1 flex items-center justify-center">
      <div className="w-11/12"></div>
    </div>
  </div>

  {/* 📱 Move PhoneContact here, outside of clipped area */}
  <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-50">
    <PhoneContact
      phoneNumber="072-320-9209"
      text="お問い合わせ"
      className="text-white p-4 rounded"
    />
  </div>

  {/* Tagline */}
  <div className="pt-16 px-4 text-center bg-[#f9f5e7]">
    <h2 className="text-2xl md:text-4xl font-extrabold text-[#2c5530]">
      楽しく過ごせる、時を大切に
    </h2>
  </div>
</div>

);

export default TopView; 