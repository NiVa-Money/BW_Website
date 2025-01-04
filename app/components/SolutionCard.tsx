"use client";

import React from "react";
import Image from "next/image";

interface SolutionSectionProps {
  title: string;
  description: string;
  details: { title: string; description: string; img?: string | null }[];
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ details }) => {
  return (
    <div className="w-full bg-white text-black py-24 mb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          {details.map((item, index) => (
            <div
              key={index}
              className={`flex gap-8 items-center mb-10 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex-1 justify-center mt-24">
                <h3 className="text-3xl text-center text-black font-semibold">{item.title}</h3>
                <p className="text-black/50 mt-4 justify-center ml-4">{item.description}</p>
              </div>

              <div className="flex-1 flex  justify-center">
                {item.img && (
                  <Image
                    src={item.img} // The image src should be a valid path
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-auto max-w-lg object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
