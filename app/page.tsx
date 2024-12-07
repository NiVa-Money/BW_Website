import Navbar from "./sections/Navbar";
import "./globals.css";
import HeroSection from "./sections/Hero";
import Integrations from "./sections/Integrations";
import LogoTicker from "./sections/LogoTicker";
import { Benefits } from "./sections/Benefits";
import Footer from "./sections/Footer";
import Faqs from "./sections/Faqs";
import FeatureSection from "./sections/Features";
import GetStartedSection from "./sections/GetStartedSection";
import ScrollToTop from "./components/ScrollToTop";
import DetailedFeatures from "./sections/DetailedFeatures";
import TestimonialSection from "./sections/Testimonials";
// import { BentoGridThirdDemo } from "./sections/BentoGrid";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Benefits />
      {/* <BentoGridThirdDemo/> */}
      <FeatureSection/>
      <DetailedFeatures />
      <LogoTicker />
      <Integrations />
      <TestimonialSection/>
      <Faqs/>
      <GetStartedSection/>
      <Footer />
      <ScrollToTop/>
    </>
  );
}
