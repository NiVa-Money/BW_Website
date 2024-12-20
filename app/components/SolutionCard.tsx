"use client";

import React from "react";
import Image from "next/image";
import { robot } from "../../public/assets"; // Ensure the robot image is correctly imported.
import { solutions } from "../data/solution"; // Ensure `solutions` is properly exported as an object or function.
import { useRouter } from "next/router";

interface FeatureCardProps {
  useCase: string;
  example: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ useCase, example }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
    <h3 className="text-sm font-medium mb-1">{useCase}</h3>
    <p className="text-sm text-gray-800">{example}</p>
  </div>
);

// const SolutionSection: React.FC = () => {
//   const router = useRouter();

//   // Find the solution data by matching the href in the solutions array to the current route
//   const solutionData = solutions.find(
//     (solution) => solution.href === router.asPath
//   );

//   if (!solutionData) {
//     return (
//       <div className="text-center py-10">No data found for this solution.</div>
//     );
//   }

const SolutionSection: React.FC<{ router: ReturnType<typeof useRouter> }> = ({
  router,
}) => {
  // Find the solution data by matching the href in the solutions array to the current route
  const solutionData = solutions.find(
    (solution) => solution.href === router.asPath
  );

  if (!solutionData) {
    return (
      <div className="text-center py-10">No data found for this solution.</div>
    );
  }

  const detail = solutionData.details[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-1/2 text-black mt-6 lg:mt-12 space-y-6 lg:space-y-8 h-full">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
              AI Workforce Built for Seamless Customer Engagement
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl">
              Simple to set up. Ready to transform your businesses with AI.
            </p>
            <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
              <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:bg-white hover:text-indigo-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-full lg:w-1/2 h-full flex justify-center lg:justify-end flex-wrap gap-6 lg:gap-0">
            <div className="relative w-full h-72 sm:h-80 lg:h-96">
              <Image
                src={robot}
                alt="robot"
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Details Section */}
      <div className="relative bg-gray-50 py-12">
        {/* Circle Background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-black opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="p-8 bg-black text-white text-center rounded-lg shadow-lg max-w-lg">
            <h2 className="text-xl font-semibold mb-2">{detail.title}</h2>
            <p className="text-sm mb-4">{detail.description}</p>
          </div>
          {solutionData.details.map((item, index) => (
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
