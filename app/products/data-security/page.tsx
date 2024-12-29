import Hero from "../../components/HeroSection";
import ProductSection from "../../components/ProductCard";
import { dataSecurityContent } from "../../data/products";

const DataSecurityPage = () => {
  return (
    <>
      <div className="mt-10">
        <Hero />
        <ProductSection data={dataSecurityContent.content} />
      </div>
    </>
  );
};

export default DataSecurityPage;
