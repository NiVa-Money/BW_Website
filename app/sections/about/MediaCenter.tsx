import Image from "next/image";
import React from "react";

import { mediaCenter } from "../../data/about";

const MediaCenter: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-[1440px] mx-auto px-4">
    
      {/* Title Section */}
      <SectionTitle
        title="Media Center"
        subtitle="Launch of BotWot, Our Flagship Product"
        content={
          "We successfully launched BotWot, our no-code chatbot platform, which has already gained significant traction in the market. We're proud to say that the launch was featured in over 12 media outlets across major newspapers and online platforms. This exposure has driven tremendous interest and recognition for our mission to revolutionize customer interactions with AI."
        }
      />

      {/* Media Section */}
      <MediaSection media={mediaCenter} />

      {/* Recognition Sections */}
      <SectionTitle
        title="Global Recognition in AI Solutions"
        content={
          "We successfully launched BotWot, our no-code chatbot platform, which has already gained significant traction in the market. We're proud to say that the launch was featured in over 12 media outlets across major newspapers and online platforms. This exposure has driven tremendous interest and recognition for our mission to revolutionize customer interactions with AI."
        }
      />
      <SectionTitle
        title="Women That Build Awards, by Globant Winner of Tech Entrepreneur Award 2024"
        content={
          "We are honored to announce that Purpleant Technologies Pvt. Ltd. has been named the Top Global Business Award Winner 2024 in the AI Solutions category by the prestigious Great Companies Global Business Awards. A heartfelt thank you to Arwinder, President of Great Companies, for this incredible acknowledgment. We look forward to sharing more details once the official media coverage and announcement are released."
        }
      />
      <SectionTitle
        title="Recognition by Glantor X"
        content={
          "Purpleant Technologies Pvt. Ltd. Founder Namita Sharma was also featured by Glantor X, a fast-growing media research and analysis company in India. Known for its cutting-edge algorithms and impactful media analysis, Glantor X highlighted our work in scaling NiVa and BotWot into successful products."
        }
      />
    </div>
  );
};

// Reusable Section Title
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  content: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  content,
}) => (
  <div className="w-full max-w-[1099px] px-4">
    <div className="text-center">
      <h1 className="text-4xl mt-20 font-semibold leading-tight text-[#2E2F5F] mb-4">
        {title}
      </h1>
      {subtitle && (
        <h3 className="text-3xl font-medium text-slate-700 mb-6">{subtitle}</h3>
      )}
      <div className=" mb-6 text-xl text-zinc-500">{content}</div>
    </div>
  </div>
);

// Media Section
const MediaSection: React.FC<{ media: { src: string; text: string }[] }> = ({
  media,
}) => (
  <div className="w-full max-w-[1324px] px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {media.map((item, index) => (
        <Card key={index} imageSrc={item.src} title={item.text} />
      ))}
    </div>
  </div>
);

// Card Component
interface CardProps {
  imageSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => (
  <div className="bg-white rounded-3xl border border-zinc-100 shadow-lg p-6 h-full flex flex-col">
    <div className="flex-1 flex items-center justify-center min-h-[200px]">
      <div className="relative w-full h-[160px]">
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>
    </div>
    <div className="mt-4 text-xl font-semibold text-slate-700 text-center">
      {title}
    </div>
  </div>
);

export default MediaCenter;
