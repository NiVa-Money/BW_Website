import React from "react";
import Image, { StaticImageData } from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CTO, CEO, COO } from "../../../public/assets";
import AboutUsSection from "../../components/AboutUs";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: StaticImageData;
}

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
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

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="flex flex-col items-center p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 text-left ml-3">{description}</p>
  </div>
);

const OurValue: React.FC = () => {
  return (
    <div className="w-full">
      <AboutUsSection/>
     
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

      {/* Advantage Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          The BotWot Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
          <AdvantageCard
            title="The Agent Army Hub"
            description="A unique marketplace offering pre-trained AI Workforces tailored to specific industry needs. These AI Workforces are designed to solve real-world problems, providing businesses with ready-to-deploy solutions that enhance efficiency and drive value."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
            }
          />
          <AdvantageCard
            title="No-Code AI Platform"
            description="Our easy-to-use, no-code platform makes it simple for anyone—regardless of technical background—to build, deploy, and scale their AI Workforce. Create powerful, intelligent workflows that revolutionize customer interactions without needing specialized knowledge."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            }
          />
          <AdvantageCard
            title="End-to-End Solutions"
            description="Unlike traditional virtual assistants, BotWot’s AI Workforces handle complex workflows, from automation to personalized customer interactions. Our platform simplifies operations, reducing manual effort and helping businesses scale with minimal resources."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded" />
            }
          />
          <AdvantageCard
            title="In-House Proprietary LLMs for Data Security"
            description="We prioritize security with our in-house developed Large Language Models (LLMs), designed to safeguard sensitive data while maximizing the capabilities of AI-powered solutions. Your customers' privacy is our top concern, and we ensure compliance with the highest standards of data protection."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded" />
            }
          />
        </div>
      </section>
    </div>
  );
};

export default OurValue;
