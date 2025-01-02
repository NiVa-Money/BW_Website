import Image from "next/image";
import * as React from "react";
import { detailedFeatures } from "../data/data";

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  bgColor,
  textColor,
}) => (
  <div
    className={`flex flex-col p-4  rounded-xl shadow-lg flex-1 transition-all duration-300 ease-in-out hover:border-[${bgColor}] hover:shadow-[0px_0px_20px_0px_${bgColor}]`}
    style={{
      borderColor: bgColor,
      boxShadow: `0px 0px 10px 0px ${bgColor}`, // default shadow
    }}
  >
    <div className={`text-[${textColor}] font-semibold tracking-tight`}>
      {title}
    </div>
    <div className="mt-3.5 text-neutral-600 leading-loose">{description}</div>
  </div>
);

const DetailedFeatures: React.FC = () => {
  return (
    <>
      {detailedFeatures.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-start px-8 py-6 max-w-[1200px] md:px-5 mx-auto"
        >
          {/* Section 1 & 2 - Title and Description */}
          <div className="relative flex flex-col gap-3">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <div
                className="absolute left-50 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-40 blur-[100px]"
                style={{ backgroundColor: feature.bgColor }} // Dynamically change background color based on the feature bgColor
              ></div>
            </div>

            {/* Title Section */}
            <div className="flex gap-3">
              <Image
                src={feature.icon}
                alt="Icon"
                width={40}
                height={40}
                className="object-contain"
                loading="lazy"
              />
              <div className="justify-center items-center mt-2">
                <p
                  className="text-base font-semibold tracking-tight"
                  style={{ color: feature.bgColor }}
                >
                  {feature.title}
                </p>
              </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col items-start w-full text-4xl font-semibold tracking-tighter text-black mt-4 max-md:text-xl">
              <div className="max-md:max-w-full">{feature.description}</div>
            </div>
          </div>

          {/* Section 3 - Cards and Image */}
          <div className="flex flex-col md:flex-row gap-10 justify-center mt-6">
            {/* Left Column (Cards) */}
            <div className="flex flex-col gap-4 text-base w-full transition-all duration-300 ease-in-out hover:border-[${bgColor}] hover:shadow-[0px 0px 20px 0px ${bgColor}] max-w-[342px] flex-1">
              {feature.cards.map((card, idx) => (
                <FeatureCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  bgColor={feature.bgColor}
                  textColor={feature.textColor}
                />
              ))}
            </div>

            {/* Right Column (Image) */}
            <div className="flex flex-col items-center justify-center flex-1 max-w-full">
              <Image
                src={feature.image}
                alt="Image"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailedFeatures;
