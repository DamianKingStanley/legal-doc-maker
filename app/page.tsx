import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
