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
    <div className="w-full bg-white flex justify-center items-center text-black mb-10">
      <div className="max-w-6xl flex flex-col items-center mt-10">
        {details.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-12 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex-1 flex flex-col justify-center items-center">
              <h3 className="text-3xl text-center mb-4 text-black font-semibold">
                {item.title}
              </h3>
              <p className="text-black/50 text-center">{item.description}</p>
            </div>

            <div className="flex-1 flex justify-center items-center">
              {item.img && (
                <Image
                  src={item.img} // The image src should be a valid path
                  alt={item.title}
                  width={300}
                  height={100}
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
