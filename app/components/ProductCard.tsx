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
    <div className="w-full bg-white text-black py-24 mb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          {currentProduct.useCases.map((useCase, index) => (
            <div
              key={index}
              className={`flex gap-8 items-start mb-10 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="max-w-5xl flex-1">
                <div className="space-y-6">
                  <div className="p-6">
                    <div className="flex justify-center mb-6">
                      <h3 className="text-3xl text-center font-semibold">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-black/50 ml-3 ">{useCase.description}</p>
                    {useCase.example && (
                      <p className="mt-4 ml-3 text-black font-semibold italic">
                        {useCase.example}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {useCase.img && useCase.img !== "" ? (
                <div className="flex-1 mt-12">
                  <Image
                    src={useCase.img}
                    alt={useCase.title}
                    width={imageWidth}
                    height={300}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
