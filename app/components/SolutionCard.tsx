"use client";

import React from "react";

interface FeatureCardProps {
  useCase: string;
  example: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ useCase, example }) => (
  <div className="p-6 shadow-lg rounded-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-lg font-semibold mb-2 text-gray-900">{useCase}</h3>
    <p className="text-base text-gray-700">{example}</p>
  </div>
);

interface SolutionSectionProps {
  title: string;
  description: string;
  details: { title: string; description: string }[];
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ details }) => {
  return (
    <div>
      {/* Solution Details Section */}
      <div className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {details.map((item, index) => (
            <FeatureCard
              key={index}
              useCase={item.title}
              example={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
