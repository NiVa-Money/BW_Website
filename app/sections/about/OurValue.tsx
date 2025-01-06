// import React from "react";
// import AboutUsSection from "../../components/AboutUs";

// interface AdvantageCardProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const AdvantageCard: React.FC<AdvantageCardProps> = ({
//   title,
//   description,
//   icon,
// }) => (
//   <div className="flex flex-col items-center p-6">
//     <div className="mb-4">{icon}</div>
//     <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//     <p className="text-sm text-gray-600 text-left ml-3">{description}</p>
//   </div>
// );

// const OurValue: React.FC = () => {
//   return (
//     <div className="w-full">
//       <AboutUsSection/>

//       {/* Advantage Section */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
//           The BotWot Advantage
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
//           <AdvantageCard
//             title="The Agent Army Hub"
//             description="A unique marketplace offering pre-trained AI Workforces tailored to specific industry needs. These AI Workforces are designed to solve real-world problems, providing businesses with ready-to-deploy solutions that enhance efficiency and drive value."
//             icon={
//               <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
//             }
//           />
//           <AdvantageCard
//             title="No-Code AI Platform"
//             description="Our easy-to-use, no-code platform makes it simple for anyone—regardless of technical background—to build, deploy, and scale their AI Workforce. Create powerful, intelligent workflows that revolutionize customer interactions without needing specialized knowledge."
//             icon={
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
//             }
//           />
//           <AdvantageCard
//             title="End-to-End Solutions"
//             description="Unlike traditional virtual assistants, BotWot’s AI Workforces handle complex workflows, from automation to personalized customer interactions. Our platform simplifies operations, reducing manual effort and helping businesses scale with minimal resources."
//             icon={
//               <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded" />
//             }
//           />
//           <AdvantageCard
//             title="In-House Proprietary LLMs for Data Security"
//             description="We prioritize security with our in-house developed Large Language Models (LLMs), designed to safeguard sensitive data while maximizing the capabilities of AI-powered solutions. Your customers' privacy is our top concern, and we ensure compliance with the highest standards of data protection."
//             icon={
//               <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded" />
//             }
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurValue;

import React from "react";
import AboutUsSection from "../../components/AboutUs";
import Image from "next/image";
import { mission, vision } from "../../../public/assets";

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
const MissionComponent = () => {
  return (
    <div className="flex flex-col px-4 md:px-20 text-slate-700 py-16">
      <h2 className="text-4xl font-semibold text-center text-[#2E2F5F] mb-8">
        Our Mission and Vision
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1 p-8 rounded-3xl border border-gray-400 flex flex-col min-h-[300px]">
          <div className="flex items-start gap-4 mb-4">
            <Image
              loading="lazy"
              src={mission}
              alt="Mission Icon"
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-3xl text-[#2E2F5F] mt-1 font-semibold">Mission</h3>
          </div>
          <p className="text-xl text-black leading-relaxed">
            To democratize AI for businesses, empowering them to streamline
            operations and deliver transformative customer experiences—all
            without the need for increased manpower. We aim to make AI
            Workforces accessible and scalable, enabling companies to drive
            growth and efficiency through automation.
          </p>
        </div>

        <div className="flex-1 p-8 rounded-3xl border border-gray-400 flex flex-col min-h-[300px]">
          <div className="flex items-start gap-4 mb-4">
            <Image
              loading="lazy"
              src={vision}
              alt="Vision Icon"
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-3xl text-[#2E2F5F] mt-1 font-semibold">Vision</h3>
          </div>
          <p className="text-xl text-black leading-relaxed">
            To be at the forefront of the global shift towards effortless,
            AI-driven operations, setting a new standard for business
            efficiency. Our goal is to redefine how businesses engage with their
            customers, enhancing every interaction while promoting innovation,
            scalability, and operational excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

const OurValue: React.FC = () => {
  return (
    <div className="w-full">
      <AboutUsSection />
      <MissionComponent /> {/* Integrated MyComponent here */}
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
