"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface UseCase {
  title: string;
  description: string;
  example?: string;
  img?: string;
}

interface ProductData {
  name: string;
  subtitle: string;
  useCases: UseCase[];
}

const ProductSection: React.FC<{ data: ProductData[] }> = ({ data }) => {
  const currentProduct = data[0]; // Assuming we only have one product
  const pathname = usePathname();

  // Check the current path
  const isBotwotPage = pathname === "/products/botwot-llm";
  const imageWidth = isBotwotPage ? 350 : 2000;

  return (
    <div className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {currentProduct.useCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                {useCase.title}
              </h3>
              <p className="text-black/70">{useCase.description}</p>
              {useCase.example && (
                <p className="mt-2 text-black font-semibold italic">
                  {useCase.example}
                </p>
              )}
            </div>

            {/* Image Section */}
            {useCase.img && useCase.img !== "" && (
              <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
                <Image
                  src={useCase.img}
                  alt={useCase.title}
                  width={imageWidth}
                  height={300}
                  className="h-auto max-h-[300px] object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
