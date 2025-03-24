"use client";
import React, { useEffect, useState } from 'react';
import { Home } from 'lucide-react';
import { PieChart } from './pie-chart';
import { gsap } from 'gsap';
import Image from 'next/image';

const DailyFlowSection = () => {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    gsap.from("#daily-flow", { duration: 1, opacity: 0, y: -50 });
  }, []);

  return (
    <div id="daily-flow" className="bg-[#f9f5e7] py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-[#2c5530]">
              <Home size={48} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2c5530] border-b-2 border-[#2c5530] pb-1">
              1日の流れ
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* picture */}
          <div className="w-64 h-64 relative shrink-0">
            <Image src={`/images/dailyflow-0${imageIndex}.png`} alt="daily-flow" fill />
          </div>

          {/* Schedule */}
          <div className="flex-1 w-full">
            <div className="space-y-3">
              {['8:30~ ご自宅にお迎え', '9:00~ 体調チェック', '9:30~ 入浴', '12:00~ 昼食', '13:30~ 機能訓練（個別対応）', '15:00~ おやつ・ティータイム', '15:30~ 体操・レクリエーション', '16:30~ ご自宅まで送迎'].map((text, index) => (
                <div key={index} className="flex items-center" onClick={() => setImageIndex(index + 1)}>
                  <div className="w-full py-2 px-4 bg-[#f0ebe0] rounded-md">
                    <span className="font-medium text-[#2c5530]">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyFlowSection; 