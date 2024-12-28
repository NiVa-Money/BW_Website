import React from "react";
import Image from "next/image";
import { achievements, partnerships } from "../../data/about";
import { Partnerships } from "../../../public/assets";

const OurPartnerships: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Image Section */}
      <div className="lg:w-full mt-10 flex items-center justify-center">
        <Image
          src={Partnerships}
          alt="Story Image"
          className="w-full p-6 h-[500px]"
          priority
        />
      </div>

      {/* Title Section */}
      <div className="flex overflow-hidden flex-col items-center px-20 pb-10 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[1099px] max-md:mb-2.5 max-md:max-w-full">
          <h1 className="text-6xl mb-4 font-bold leading-none text-center text-neutral-800 max-md:max-w-full max-md:text-4xl">
            Partnerships & Alliances
          </h1>
          <h2 className="self-center text-4xl font-medium text-slate-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Startup Recognition
          </h2>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="flex flex-col self-center max-w-full rounded-3xl w-[1324px]">
        <div className="max-md:max-w-full">
          <h2 className="text-6xl font-medium text-center text-[#2E2F5F] max-md:text-4xl">
            Achievements
          </h2>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 mt-10">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                imageSrc={achievement.image}
                imageAlt={`${achievement.title} Logo`}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-6xl font-medium text-center text-[#2E2F5F] max-md:text-4xl">
            Partnerships & Credits
          </h2>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 mt-10 mb-10">
            {partnerships.map((partnership, index) => (
              <Card
                key={index}
                imageSrc={partnership.image}
                imageAlt={`${partnership.title} Logo`}
                title={partnership.title}
                description={partnership.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => (
  <div className="flex flex-col w-full max-md:w-full">
    <div className="flex flex-col grow justify-center items-center px-4 pt-4 pb-8 w-full text-base bg-white rounded-3xl border border-solid border-zinc-100 shadow-lg min-h-[300px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={200}
        className="object-contain max-w-full"
      />
      <div className="mt-3.5 font-semibold tracking-tight leading-loose text-slate-700 text-center">
        {title}
      </div>
      <p className="mt-3.5 leading-6 text-center text-neutral-600">
        {description}
      </p>
    </div>
  </div>
);

export default OurPartnerships;
