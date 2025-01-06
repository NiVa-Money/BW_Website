import React from "react";
import AboutUsSection from "../../components/AboutUs";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

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
      <AboutUsSection />

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
