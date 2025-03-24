import React from 'react';

const Footer = () => (
    <footer className={`bg-[#ffe4a3] py-8 px-4 text-center ${className}`}>
        {/* Logo placeholder - will be added later */}
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">{/* Logo will be added here */}</div>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl font-medium text-[#2c5530] mb-6">楽しく過ごせる、時を大切に</h2>

        {/* Service type and name */}
        <div className="mb-6">
        <p className="text-lg font-medium text-[#2c5530] mb-1">デイサービス</p>
        <p className="text-xl font-medium text-[#2c5530]">オリーブの家</p>
        </div>

        {/* Registration info */}
        <p className="text-sm text-[#2c5530]">地域密着型通所介護 介護保険事業所番号2796300560</p>
    </footer>
);

export default Footer; 