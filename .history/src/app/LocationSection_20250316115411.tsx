import React from 'react';
import { Home } from 'lucide-react';

const LocationSection = () => (
    <div id="location" className="min-h-screen bg-[#f9f5e7] py-12 px-4 md:px-8">
        <div className={`w-full max-w-4xl mx-auto py-12 px-4`}>
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-4 mb-2">
                <div className="text-[#2c5530]">
                <Home size={48} />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium text-[#2c5530] border-b-2 border-[#2c5530] pb-1">
                施設の場所
                </h2>
            </div>
            </div>
            
            {/* Map placeholder */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#f5f0e0] rounded-lg mb-8">
            {/* Map will be added here */}
            </div>
            
            {/* Contact information */}
            <div className="text-center">
            <p className="text-lg font-medium text-[#2c5530] mb-2">
                〒593-8303
            </p>
            <p className="text-lg font-medium text-[#2c5530] mb-4">
                堺市西区上野芝向ヶ丘町5-5-5
            </p>
            <p className="text-base text-[#2c5530] mb-1">
                TEL：072-320-9209
            </p>
            <p className="text-base text-[#2c5530] mb-1">
                FAX：072-320-9208
            </p>
            <p className="text-base text-[#2c5530]">
                携帯：070-6981-5599
            </p>
            </div>
        </div>
    </div>
);

export default LocationSection; 