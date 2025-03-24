import React from 'react';
import Image from "next/image";
import { Home as HomeIcon, Clock } from "lucide-react";

const Header = () => <header className="bg-[#FAF5EA] p-4">Header</header>;
const TopView = () => <section className="bg-[#31572C] text-white p-8">トップビュー</section>;
const FacilityInfo = () => (
  <div className="min-h-screen bg-[#f9f5e7] py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-[#2c5530]">
            <HomeIcon width={48} height={48} />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-[#2c5530] border-b-2 border-[#2c5530] pb-1">
            施設について
          </h1>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-[#f5f0e0] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4 w-32 h-32 relative">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="古民家をリフォーム"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-medium mb-2 text-[#2c5530]">
            古民家をリフォーム
            <br />
            あったかハウス
          </h2>
          <p className="text-sm text-[#5a6b46]">
            自然の温もり、
            <br />
            柔らかさを感じる雰囲気です。
            <br />
            床暖房で冬もポカポカ
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f5f0e0] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4 w-32 h-32 relative">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="少人数だから心地いい"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-medium mb-2 text-[#2c5530]">
            少人数だから
            <br />
            心地いい
          </h2>
          <p className="text-sm text-[#5a6b46]">
            少ない人数だからこそ
            <br />
            一人一人に
            <br />
            近くで寄り添える
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f5f0e0] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4 w-32 h-32 relative flex items-center justify-center">
            <Clock width={96} height={96} className="text-[#4a90c0]" />
          </div>
          <h2 className="text-lg font-medium mb-2 text-[#2c5530]">
            年中休まず
            <br />
            365日営業
          </h2>
          <p className="text-sm text-[#5a6b46]">
            24時間365日営業します
            <br />
            ただし、夜間は
            <br />
            保険外の自費サービスです
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#f5f0e0] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4 w-32 h-32 relative">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="低価格で安心のサービス"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-medium mb-2 text-[#2c5530]">
            低価格で安心の
            <br />
            サービス
          </h2>
          <p className="text-sm text-[#5a6b46]">
            お食事は手料理を提供
            <br />
            詳細は下に記載しています
          </p>
        </div>
      </div>
    </div>
  </div>
);
const RecommendedSection = () => (
  <div className="min-h-screen bg-[#f9f5e7] py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-[#2c5530]">
            <Home size={48} />
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
          {/* SVG Placeholder - will be added later */}
          <div className="h-24 w-full flex items-center justify-center mb-4">{/* SVG will be added here */}</div>
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
          {/* SVG Placeholder - will be added later */}
          <div className="h-24 w-full flex items-center justify-center mb-4">{/* SVG will be added here */}</div>
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
          {/* SVG Placeholder - will be added later */}
          <div className="h-24 w-full flex items-center justify-center mb-4">{/* SVG will be added here */}</div>
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
          {/* SVG Placeholder - will be added later */}
          <div className="h-24 w-full flex items-center justify-center mb-4">{/* SVG will be added here */}</div>
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
          {/* SVG Placeholder - will be added later */}
          <div className="h-24 w-full flex items-center justify-center mb-4">{/* SVG will be added here */}</div>
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
          {/* SVG Placeholder - will be added later */}
          <div className="h-24 w-full flex items-center justify-center mb-4">{/* SVG will be added here */}</div>
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
const DailyFlowSection = () => <section className="bg-[#31572C] text-white p-8">1日の流れ</section>;
const UsageFlowSection = () => <section className="bg-[#FFE0A7] p-8">ご利用までの流れ</section>;
const LocationSection = () => <section className="bg-[#FAF5EA] p-8">施設の場所</section>;
const PricingSection = () => <section className="bg-[#31572C] text-white p-8">料金体制</section>;
const Footer = () => <footer className="bg-[#FFE0A7] p-4">フッター</footer>;

const AboutSection = FacilityInfo;

export default function Home() {
  return (
    <div className="font-[family-name:筑紫A丸ゴシック]">
      <Header />
      <TopView />
      <AboutSection />
      <RecommendedSection />
      <DailyFlowSection />
      <UsageFlowSection />
      <LocationSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
