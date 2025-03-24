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
            <div className="w-full bg-[#f5f0e0] rounded-lg mb-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370.4509900405291!2d135.47961609346942!3d34.5426762447754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000db003596e20f%3A0xb55584965f5e8f0!2z44OH44Kk44K144O844OT44K5IOOCquODquODvOODluOBruOBhOOBiA!5e0!3m2!1sja!2sjp!4v1742093706765!5m2!1sja!2sjp"  style={{ border: 0 } as React.CSSProperties} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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