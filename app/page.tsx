import Navbar from "./sections/Navbar";
import "./globals.css";
import HeroSection from "./sections/Hero";
import Integrations from "./sections/Integrations";
import LogoTicker from "./sections/LogoTicker";
import { Benefits } from "./sections/Benefits";
import Footer from "./sections/Footer";
import Faqs from "./sections/Faqs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Benefits />
      <LogoTicker />
      <Integrations />
      <Faqs/>
      <Footer />
    </>
  );
}
