import React from 'react';
import { Home as HomeIcon } from "lucide-react";

const UsageFlowSection = () => (
    <div className="min-h-screen bg-[#f9f5e7] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-[#2c5530]">
              <HomeIcon width={48} height={48} />
            </div>
            <h1 className="text-2xl md:text-3xl font-medium text-[#2c5530] border-b-2 border-[#2c5530] pb-1">
              ご利用までの流れ
            </h1>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e0] flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-[#2c5530]">1</span>
              </div>
            </div>
            <div className="bg-[#f5f0e0] rounded-lg p-6 w-full aspect-square flex items-center justify-center">
              {/* SVG Placeholder - will be added later */}
              <div className="w-full h-full flex items-center justify-center">{/* SVG will be added here */}</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-[#2c5530]">まずはお電話ください</p>
              <p className="text-xl font-bold text-[#2c5530]">072-320-9209</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e0] flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-[#2c5530]">2</span>
              </div>
            </div>
            <div className="bg-[#f5f0e0] rounded-lg p-6 w-full aspect-square flex items-center justify-center">
              {/* SVG Placeholder - will be added later */}
              <div className="w-full h-full flex items-center justify-center">{/* SVG will be added here */}</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-[#2c5530]">見学</p>
              <p className="text-lg font-medium text-[#2c5530]">体験利用</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e0] flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-[#2c5530]">3</span>
              </div>
            </div>
            <div className="bg-[#f5f0e0] rounded-lg p-6 w-full aspect-square flex items-center justify-center">
              {/* SVG Placeholder - will be added later */}
              <div className="w-full h-full flex items-center justify-center">{/* SVG will be added here */}</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-[#2c5530]">利用申し込み</p>
              <p className="text-lg font-medium text-[#2c5530]">ご契約</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e0] flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-[#2c5530]">4</span>
              </div>
            </div>
            <div className="bg-[#f5f0e0] rounded-lg p-6 w-full aspect-square flex items-center justify-center">
              {/* SVG Placeholder - will be added later */}
              <div className="w-full h-full flex items-center justify-center">{/* SVG will be added here */}</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-[#2c5530]">ご利用開始</p>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default UsageFlowSection; 