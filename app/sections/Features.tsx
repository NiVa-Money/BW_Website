import React from "react";
import Image from "next/image";
import {
  PFeatures1,
  PFeatures2,
  PFeatures3,
  PFeatures4,
  PFeatures5,
} from "../../public/assets";

const features = [
  {
    title: "Real-Time Sentiment Insights",
    description:
      "Gain actionable insights into customer emotions, enabling adaptive, empathetic interactions in real time.",
    bgColor: "bg-[#77C9F1]",
    imgSrc: PFeatures1,
  },
  {
    title: "Personalized Recommendations that Evolve",
    description:
      "BotWot's AI-driven recommendations adapt to user behavior, enhancing relevance across each customer journey.",
    bgColor: "bg-[#A221AF]/65",
    imgSrc: PFeatures2,
  },
  {
    title: "Visual Insights for Smarter Engagement",
    description:
      "Leverage vision-based prompts to gain deeper understanding and make multimedia content engagement more interactive.",
    bgColor: "bg-[#402282]/65",
    imgSrc: PFeatures3,
  },
  {
    title: "Empathy-Driven Conversations",
    description:
      "Detect and respond to customer emotions, delivering empathetic experiences that strengthen brand loyalty.",
    bgColor: "bg-[#2E2F5F]/65",
    imgSrc: PFeatures4,
  },
  {
    title: "Connect with your favorite apps and library",
    description:
      "Quickly add visuals to slides, import your data, and keep your team in sync.",
    bgColor: "bg-[#A6FED6]/65",
    imgSrc: PFeatures5,
  },
];

const ProductFeatures: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-[#B0B7C3]/50 font-semibold text-gray-800 mb-10 text-center py-4 rounded-lg">
        Product Features
      </h2>

      {/* First Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col ${feature.bgColor}`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#0B0A0A]/70 mb-4 sm:mb-6 flex-grow">
              {feature.description}
            </p>
            <div className="relative w-full h-24 sm:h-32 md:h-40">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Second Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6 sm:mt-8 lg:mt-10">
        {features.slice(3).map((feature, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col ${feature.bgColor}`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#0B0A0A]/70 mb-4 sm:mb-6 flex-grow">
              {feature.description}
            </p>
            <div className="relative w-full h-24 sm:h-32 md:h-40">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 50vw"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;