"use client"; 
import Header from './Header';
import TopView from './TopView';
import FacilityInfo from './FacilityInfo';
import RecommendedSection from './RecommendedSection';
import DailyFlowSection from './DailyFlowSection';
import UsageFlowSection from './UsageFlowSection';
import LocationSection from './LocationSection';
// import PricingSection from './PricingSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="font-[family-name:筑紫A丸ゴシック]">
      <Header />
      <TopView />
      <FacilityInfo />
      <RecommendedSection />
      <DailyFlowSection />
      <UsageFlowSection />
      <LocationSection />
      <Footer />
    </div>
  );
}