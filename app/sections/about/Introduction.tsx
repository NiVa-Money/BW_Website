import React from "react";
import AboutUsSection from "../../components/AboutUs";

import Image, { StaticImageData } from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CTO, CEO, COO } from "../../../public/assets";
import Link from "next/link";
import { introBenefits } from "../../data/data";
import BenefitCard from "../../components/BenefitCard";
import MissionComponent from "../../components/MissionVision";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: StaticImageData;
  linkedinUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  imageSrc,
  linkedinUrl,
}) => (
  <div className="flex flex-col items-center w-full max-w-sm min-h-full">
    <div className="w-[280px] h-[350px] relative">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="rounded-lg object-cover"
        priority
      />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-md font-medium text-blue-600">
      {role}
      <Link
        href={linkedinUrl}
        target="_blank"
        className="ml-2 text-gray-600 hover:text-blue-600"
      >
        <LinkedInIcon fontSize="large" />
      </Link>
    </p>
    <p className="mt-2 text-base text-gray-600 text-center">{description}</p>
  </div>
);

const Introduction: React.FC = () => {
  return (
    <>
      <AboutUsSection />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center text-[#2E2F5F] mb-8">
          About BotWot
        </h2>
      </div>
      <div className="max-w-5xl mx-auto text-lg leading-7 text-gray-700 space-y-6">
        <p>
          BotWot, the flagship product of Purpleant Technologies Pvt. Ltd.,
          represents our bold vision to redefine how businesses operate using
          AI-driven solutions.
        </p>
        <p>
          Established in 2024 under the Startup India Program, Purpleant is on a
          mission to revolutionize business efficiency and customer engagement
          through automation and innovation. In September 2024, we unveiled
          BotWot, an AI Workforce platform that is already transforming
          industries across India and the Middle East.
        </p>
        <p>
          Backed by global incubators like NASSCOM India and in5 Dubai, we’re
          leveraging mentorship and global networks to create scalable,
          impactful solutions that empower businesses of all sizes.
        </p>
        <p>
          At Purpleant, we believe that the future of work lies in AI-powered
          digital workforces. BotWot is not just a platform—it’s a new era in
          operational excellence, designed to help businesses scale effortlessly
          while maintaining superior service quality.
        </p>
        <p>
          With BotWot, businesses can automate repetitive tasks, enhance
          customer interactions, and focus on what matters most—growth and
          innovation. Join us in leading the charge toward a smarter, more
          efficient future.
        </p>
      </div>
      <section className="py-16 px-8 mt-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#2E2F5F]">Who we are</h2>
          <p className="text-gray-600 mt-2">
            Discover what&apos;s possible with BotWot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {introBenefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconAlt={benefit.iconAlt}
            />
          ))}
        </div>
      </section>
      <MissionComponent />
      {/* Team Section */}
      <section className="py-16 px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-indigo-900">
            Meet the Founders
          </h2>
          <p className="text-gray-600 mt-2">What Sets Us Apart</p>
          <p className="text-gray-600">Team with Strong Domain Expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <TeamCard
            name="Mohanraj Tamilrasu"
            role="Chief Technology Officer"
            description="Mohanraj brings over 20 years of FinTech expertise and has held senior engineering roles at major companies. His technical knowledge and experience guide the development of BotWot, ensuring a robust, high-performing AI platform."
            imageSrc={CTO}
            linkedinUrl="https://www.linkedin.com/in/mohanrajtamilarasu/"
          />
          <TeamCard
            name="Nitya Prakhar"
            role="Chief Executive Officer"
            description="With a background in customer experience at American Express, Nitya's leadership vision drives Purpleant's mission to revolutionize AI and customer engagement, ensuring impactful, scalable solutions for businesses worldwide."
            imageSrc={CEO}
            linkedinUrl="https://www.linkedin.com/in/nityaprakhar/"
          />
          <TeamCard
            name="Namita Sharma"
            role="Chief Operating Officer"
            description="With 18+ years of experience in e-commerce strategy, Namita leads Purpleant's operations, focusing on scaling AI solutions that enhance business efficiency, growth, and innovation."
            imageSrc={COO}
            linkedinUrl="https://www.linkedin.com/in/namitas05/"
          />
        </div>
      </section>
    </>
  );
};

export default Introduction;
