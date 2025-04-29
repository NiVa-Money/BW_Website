import "./globals.css";
import HeroSection from "./sections/Hero";
import Integrations from "./sections/Integrations";
import LogoTicker from "./sections/LogoTicker";
import { Benefits } from "./sections/Benefits";
// import Faqs from "./sections/Faqs";
import FeatureSection from "./sections/Features";
import ScrollToTop from "./components/ScrollToTop";
import DetailedFeatures from "./sections/DetailedFeatures";
import TestimonialSection from "./sections/Testimonials";
export default function Home() {
  return (
    <>
      
      <HeroSection />
      <Benefits />
      <FeatureSection />
      <DetailedFeatures />
      <LogoTicker />
      <Integrations />
      <TestimonialSection />
      {/* <Faqs /> */}

      <ScrollToTop />
    </>
  );
}
