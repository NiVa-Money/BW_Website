import Image, { StaticImageData } from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: StaticImageData | string;
  title: string;
  iconAlt?: string;
}

const BenefitCard: React.FC<FeatureCardProps> = ({ icon, title, iconAlt }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch p-px my-auto rounded-xl shadow-lg basis-0 min-w-[240px]">
      <div className="flex gap-2 justify-center items-center py-9 pr-7 pl-8 min-h-[99px] max-md:px-5 hover:border-4 hover:border-[#387D8C]/65 hover:rounded-lg">
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

export default BenefitCard;
