import React from 'react';
import { Home } from 'lucide-react';
import { PieChart } from './pie-chart';

const DailyFlowSection = () => (
    <div id="daily-flow" className="bg-[#f9f5e7] py-20 px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-[#2c5530]">
            <Home size={48} />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-[#2c5530] border-b-2 border-[#2c5530] pb-1">
            1日の流れ
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Pie Chart */}
        <div className="w-64 h-64 relative shrink-0">
          <PieChart percentage={15} color="#ffe4a3" backgroundColor="#f5f0e0" />
        </div>

        {/* Schedule */}
        <div className="flex-1 w-full">
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">8:30~</div>
              <div className="ml-4 py-2 px-4 bg-[#f0ebe0] rounded-md flex-1">
                <span className="font-medium text-[#2c5530]">ご自宅にお迎え</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">9:00~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">体調チェック</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">9:30~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">入浴</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">12:00~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">昼食</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">13:30~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">機能訓練（個別対応）</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">15:00~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">おやつ・ティータイム</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">15:30~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">体操・レクリエーション</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-right font-medium text-[#2c5530]">16:30~</div>
              <div className="ml-4">
                <span className="font-medium text-[#2c5530]">ご自宅まで送迎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DailyFlowSection; 