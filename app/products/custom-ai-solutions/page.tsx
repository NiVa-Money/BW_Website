import React from "react";
import ProductSection from "../../components/ProductCard";
import { products } from "../../data/products";
import Hero from "../../components/HeroSection";

const CustomAiSolutionsPage = () => {
  // Filter the products data to only include the relevant section for AI Agents.
  const customAISolutionsContent = products.find(
    (product) => product.name === "Custom AI Solutions for Enterprises"
  );

  return (
    <div className="mt-10">
      <Hero />
      {customAISolutionsContent ? (
        <ProductSection data={[customAISolutionsContent]} />
      ) : (
        <p className="text-center text-gray-500">Content not found.</p>
      )}
    </div>
  );
};

export default CustomAiSolutionsPage;
