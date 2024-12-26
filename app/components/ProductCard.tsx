

"use client";
import React, { useState } from "react";

// ProductCard component to render individual use cases
const ProductCard = ({
  title,
  description,
  useCases,
}: {
  title: string;
  description: string;
  useCases: { industry: string; description: string }[];
}) => (
  <div className=" shadow-lg rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
    {/* Iterate over the useCases and render each one below the description */}
    <div className="mt-4">
      {useCases.map((useCase, index) => (
        <div key={index} className="mt-2 p-4 bg-gray-100 rounded-lg">
          <h4 className="text-lg font-semibold">{useCase.industry}</h4>
          <p className="text-sm text-gray-500">{useCase.description}</p>
        </div>
      ))}
    </div>
  </div>
);

interface ProductSectionProps {
  pageId: string;
  title: string;
  description: string;
  useCases: { industry: string; description: string }[];
}

const ProductSection = ({
  title,
  description,
  useCases,
}: ProductSectionProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div>
      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Render ProductCard for each use case */}
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`transform transition-all ${
                selectedCard === index ? "scale-110" : ""
              }`}
              onMouseEnter={() => setSelectedCard(index)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              <ProductCard
                title={title}
                description={description}
                useCases={[useCase]}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
