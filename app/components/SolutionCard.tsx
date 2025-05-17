"use client";

import React from "react";
import Image from "next/image";

interface SolutionSectionProps {
  title: string;
  description: string;
  details: {
    title: string;
    description: string;
    img?: string | null;
  }[];
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  title,
  description,
  details,
}) => {
  return (
    <div className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-12">{description}</p>
        <div className="space-y-20">
          {details.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text Section */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-black/70">{item.description}</p>
              </div>

              {/* Image Section */}
              {item.img && (
                <div className="flex-1 flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-auto max-h-[400px] object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SolutionSection;
