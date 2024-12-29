import React from "react";
import ProductSection from "../../components/ProductCard";
import { products } from "../../data/products";
import Hero from "../../components/HeroSection";

const AiAgentsPage = () => {
  // Filter the products data to only include the relevant section for AI Agents.
  const aiAgentsContent = products.find(
    (product) => product.name === "Ready-to-Go AI Workforce"
  );

  return (
    <div className="mt-10">
      <Hero />
      {aiAgentsContent ? (
        <ProductSection data={[aiAgentsContent]} />
      ) : (
        <p className="text-center text-gray-500">Content not found.</p>
      )}
    </div>
  );
};

export default AiAgentsPage;
