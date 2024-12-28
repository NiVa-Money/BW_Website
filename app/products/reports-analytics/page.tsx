import Hero from "../../components/HeroSection";
import ProductSection from "../../components/ProductCard";
import { reportsAnalyticsContent } from "../../data/products";

const ReportsAnalyticsPage = () => {
  return (
    <>
      <div className="mt-10">
        <Hero />
        <ProductSection data={reportsAnalyticsContent.content} />
      </div>
    </>
  );
};

export default ReportsAnalyticsPage;
