import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  color: string;
  title: string;
  description: string[];
}

interface FeatureSectionProps {
  icon: string;
  color: string;
  title: string;
  headline1: string;
  headline2: string;
  featureCards: FeatureCardProps[];
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, color, title, description }) => (
  <div className={`flex gap-3.5 items-start pt-2 pb-8 pl-4 max-w-full bg-white rounded-xl border border-solid shadow-md`}>
    <div className={`flex flex-col grow shrink-0 mt-4 basis-0 w-fit`}>
      <div className={`flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-gray-200`}>
        <Image src={icon} alt={title} width={24} height={24} className="object-contain" />
      </div>
      <div className={`self-start font-semibold tracking-tight leading-loose text-${color}`}>{title}</div>
      <div className="flex flex-col mt-3 leading-loose text-neutral-600">
        {description.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
    <div className={`flex shrink-0 rounded-xl bg-${color} w-[3px] h-24`} />
  </div>
);

const FeatureSection: React.FC<FeatureSectionProps> = ({
  icon,
  color,
  title,
  headline1,
  headline2,
  featureCards,
  imageSrc,
}) => (
  <div className="flex flex-col items-start pt-24 pl-8 mt-24 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
    <div className={`flex gap-3 text-base font-semibold tracking-tight leading-loose text-${color}`}>
      <Image src={icon} alt={title} width={40} height={40} className="object-contain shrink-0 w-10 aspect-square" />
      <div className="my-auto basis-auto">{title}</div>
    </div>
    <div className="flex flex-col mt-4 mr-0 text-5xl font-semibold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
      <div className="leading-none max-md:max-w-full max-md:text-4xl">{headline1}</div>
      <div className="leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">{headline2}</div>
    </div>
    <div className="flex z-10 flex-wrap gap-10 items-start mt-24 mr-0 mb-0 min-h-[556px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex flex-col grow shrink text-base min-w-[240px] w-[274px] max-md:pb-24">
        {featureCards.map((card, index) => (
          <div key={index} className="mb-4">
            <FeatureCard icon={card.icon} color={color} title={card.title} description={card.description} />
          </div>
        ))}
      </div>
      <div className="flex overflow-hidden flex-col grow shrink pb-8 min-w-[240px] w-[662px] max-md:max-w-full">
        <Image src={imageSrc} alt="Feature Illustration" width={662} height={476} className="object-contain w-full aspect-[1.39] max-md:max-w-full" />
      </div>
    </div>
  </div>
);

export default FeatureSection;