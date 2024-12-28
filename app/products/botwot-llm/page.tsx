import React from "react";
import ProductSection from "../../components/ProductCard";
import { products } from "../../data/products";
import Hero from "../../components/HeroSection";

const BotwotLlmPage = () => {
  // Filter the products data to only include the relevant section for AI Agents.
  const botwotLLMContent = products.find(
    (product) => product.name === "BotWot Proprietary LLM"
  );

  return (
    <div className="mt-10">
      <Hero />
      {botwotLLMContent ? (
        <ProductSection data={[botwotLLMContent]} />
      ) : (
        <p className="text-center text-gray-500">Content not found.</p>
      )}
    </div>
  );
};

export default BotwotLlmPage;
