import Image, { StaticImageData } from "next/image";
import * as React from "react";
import { benefits } from "../data/data";
import GradientAnimation from "../components/GradientAnimation";

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  iconAlt?: string;
}

const BenefitCard: React.FC<FeatureCardProps> = ({ icon, title, iconAlt }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch p-px my-auto bg-white rounded-xl shadow-lg basis-0 min-w-[240px]">
      <GradientAnimation />

      <div className="flex gap-2 justify-center items-center py-9 pr-7 pl-8 bg-white min-h-[99px] max-md:px-5">
        <Image
          loading="lazy"
          src={icon}
          alt={iconAlt || ""}
          width={24}
          height={24}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto bg-blend-normal">{title}</div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="flex flex-col px-16 py-10 mt-10 max-md:px-5">
      <div className="flex flex-col items-center justify-center w-full text-center max-md:max-w-full">
        <h1 className="text-4xl font-medium text-black max-md:max-w-full">
          No Coding.
          <br />
          Just Results
        </h1>
        <p className="text-2xl text-zinc-500 max-md:max-w-full">
          Discover what&apos;s possible with BotWot.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mt-12 w-full text-xl text-black max-md:mt-10 max-md:max-w-full">
        {benefits.map((feature, index) => (
          <BenefitCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            iconAlt={feature.iconAlt}
          />
        ))}
      </div>
    </section>
  );
};

export { Benefits };
