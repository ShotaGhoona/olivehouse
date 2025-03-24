import React from 'react';
import { Home as HomeIcon } from "lucide-react";

const RecommendedSection = () => (
  <div className="min-h-screen bg-[#f9f5e7] py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-[#2c5530]">
            <HomeIcon width={48} height={48} />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-[#2c5530] border-b-2 border-[#2c5530] pb-1">
            このような方におすすめです
          </h1>
        </div>
      </div>

      {/* Cards - First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-full flex items-center justify-center mb-4 bg-[#f5f0e0]">{/* SVG will be added here */}</div>
          <div className="bg-[#f5f0e0] rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-[#2c5530]">
              一人暮らしで
              <br />
              生活が不安な方
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-full flex items-center justify-center mb-4 bg-[#f5f0e0]">{/* SVG will be added here */}</div>
          <div className="bg-[#f5f0e0] rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-[#2c5530]">
              病院退院後
              <br />
              介護の手が少なく
              <br />
              家で寝たきりや
              <br />
              引きこもり
              <br />
              がちな方
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-full flex items-center justify-center mb-4 bg-[#f5f0e0]">{/* SVG will be added here */}</div>
          <div className="bg-[#f5f0e0] rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-[#2c5530]">
              大きな施設で
              <br />
              大人数が苦手な方
              <br />
              <br />
              集団の輪に
              <br />
              入りずらい方
            </p>
          </div>
        </div>
      </div>

      {/* Cards - Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-full flex items-center justify-center mb-4 bg-[#f5f0e0]">{/* SVG will be added here */}</div>
          <div className="bg-[#f5f0e0] rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-[#2c5530]">
              仕事の曜日や
              <br />
              時間が不規則で
              <br />
              なかなか
              <br />
              都合が合わない
              <br />
              ご家族
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-full flex items-center justify-center mb-4 bg-[#f5f0e0]">{/* SVG will be added here */}</div>
          <div className="bg-[#f5f0e0] rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-[#2c5530]">
              利用している
              <br />
              介護サービスが
              <br />
              経済的な
              <br />
              負担になっている
              <br />
              ご家族
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-full flex items-center justify-center mb-4 bg-[#f5f0e0]">{/* SVG will be added here */}</div>
          <div className="bg-[#f5f0e0] rounded-lg p-6 w-full h-64 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-[#2c5530]">
              自宅で介護
              <br />
              老々介護の状態で
              <br />
              介護疲れを
              <br />
              起こしてしている
              <br />
              ご家族
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecommendedSection; 