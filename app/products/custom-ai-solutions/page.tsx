import Hero from "../../components/HeroSection";
import ProductSection from "../../components/ProductCard";
import { customAISolutionsContent } from "../../data/products";

const CustomAiSolutionsPage = () => {
  return (
    <>
      <div className="mt-10">
        <Hero />
        <ProductSection data={customAISolutionsContent.content} />
      </div>
    </>
  );
};

export default CustomAiSolutionsPage;
