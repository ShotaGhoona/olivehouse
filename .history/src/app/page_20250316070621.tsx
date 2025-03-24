import React from 'react';
import Image from "next/image";

const Header = () => <header className="bg-[#FAF5EA] p-4">Header</header>;
const TopView = () => <section className="bg-[#31572C] text-white p-8">トップビュー</section>;
const AboutSection = () => <section className="bg-[#FFE0A7] p-8">施設について</section>;
const RecommendedSection = () => <section className="bg-[#FAF5EA] p-8">このような方におすすめです</section>;
const DailyFlowSection = () => <section className="bg-[#31572C] text-white p-8">1日の流れ</section>;
const UsageFlowSection = () => <section className="bg-[#FFE0A7] p-8">ご利用までの流れ</section>;
const LocationSection = () => <section className="bg-[#FAF5EA] p-8">施設の場所</section>;
const PricingSection = () => <section className="bg-[#31572C] text-white p-8">料金体制</section>;
const Footer = () => <footer className="bg-[#FFE0A7] p-4">フッター</footer>;

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
