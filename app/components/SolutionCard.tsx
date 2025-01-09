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
    <div className="w-full bg-white flex justify-center items-center text-black mb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl flex flex-col items-center mt-10 space-y-12">
        {details.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center w-full lg:space-x-8 mb-12 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-black/70">{item.description}</p>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
              {item.img && (
                <Image
                  src={item.img} // The image src should be a valid path
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-auto max-h-[300px] object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
