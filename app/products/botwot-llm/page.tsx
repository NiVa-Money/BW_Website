import ProductSection from "../../components/ProductCard";
import { botwotLLMContent } from "../../data/products";
import Hero from "../../components/HeroSection";

const BotwotLlmPage = () => {
  return (
    <div className="mt-10">
      <Hero />
      <ProductSection data={(botwotLLMContent.content)} />
    </div>
  );
};

export default BotwotLlmPage;
