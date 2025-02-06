import HeroSection from "./components/HeroSection";
import LegalDocumentsList from "./components/LegalDocumentsList";
import FeatureSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LegalDocumentsList />
      <FeatureSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
