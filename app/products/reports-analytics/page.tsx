import React from "react";
import ProductSection from "../../components/ProductCard";
import { products } from "../../data/products";
import Hero from "../../components/HeroSection";

const ReportsAnalyticsPage = () => {
  // Filter the products data to only include the relevant section for AI Agents.
  const reportsAnalyticsContent = products.find(
    (product) => product.name === "Reports & Analytics"
  );

  return (
    <div className="mt-10">
      <Hero />
      {reportsAnalyticsContent ? (
        <ProductSection data={[reportsAnalyticsContent]} />
      ) : (
        <p className="text-center text-gray-500">Content not found.</p>
      )}
    </div>
  );
};

export default ReportsAnalyticsPage;
