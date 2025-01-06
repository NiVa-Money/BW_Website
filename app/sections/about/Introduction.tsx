import React from "react";
import AboutUsSection from "../../components/AboutUs";

import Image, { StaticImageData } from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CTO, CEO, COO } from "../../../public/assets";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: StaticImageData;
}

const SocialLinks: React.FC = () => (
  <div className="flex gap-2 mt-3">
    <a href="#" className="text-gray-600 hover:text-pink-600">
      <InstagramIcon fontSize="small" />
    </a>
    <a href="#" className="text-gray-600 hover:text-blue-600">
      <FacebookIcon fontSize="small" />
    </a>
    <a href="#" className="text-gray-600 hover:text-sky-600">
      <TwitterIcon fontSize="small" />
    </a>
  </div>
);

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  imageSrc,
}) => (
  <div className="flex flex-col items-center max-w-sm">
    <Image
      src={imageSrc}
      alt={name}
      width={280}
      height={280}
      className="rounded-lg object-cover filter grayscale"
      priority
    />
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-sm font-medium text-blue-600">{role}</p>
    <p className="mt-2 text-sm text-gray-600 text-center">{description}</p>
    <SocialLinks />
  </div>
);

const Introduction: React.FC = () => {
  return (
    <>
      <AboutUsSection />

      {/* Team Section */}
      <section className="py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900">
            Why Choose BotWot
          </h2>
          <p className="text-gray-600 mt-2">What Sets Us Apart</p>
          <p className="text-gray-600">Team with Strong Domain Expertise</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
          <TeamCard
            name="Mohanraj Tamilrasu"
            role="CTO"
            description="Mohanraj brings over 20 years of FinTech expertise and has held senior engineering roles at major companies. His technical knowledge and experience guide the development of BotWot, ensuring a robust, high-performing AI platform."
            imageSrc={CTO}
          />
          <TeamCard
            name="Nitya Prakhar"
            role="CEO"
            description="With a background in customer experience at American Express, Nitya's leadership vision drives Purpleant's mission to revolutionize AI and customer engagement, ensuring impactful, scalable solutions for businesses worldwide."
            imageSrc={CEO}
          />
          <TeamCard
            name="Namita Sharma"
            role="COO"
            description="With 18+ years of experience in e-commerce strategy, Namita leads Purpleant's operations, focusing on scaling AI solutions that enhance business efficiency, growth, and innovation."
            imageSrc={COO}
          />
        </div>
      </section>
    </>
  );
};

export default Introduction;
