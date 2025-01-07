'use client';

import React from "react";
import { AboutUs } from "../../../public/assets";
import Image from "next/image";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const handleMoreButton = () => {
  const learnSection = document.getElementById("advantage");
  if (learnSection) {
    learnSection.scrollIntoView({ behavior: "smooth" });
  }
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, icon }) => (
  <div className="flex flex-col h-full p-6 bg-white shadow-lg rounded-lg hover:border-2 hover:border-[#2E2F5F] transition-shadow duration-300">
    <div className="flex flex-col h-full">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          {title}
        </h3>
        <p className="text-sm text-gray-600 text-start">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const OurValue: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative p-6 lg:p-8  text-black">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <Image
              src={AboutUs}
              alt="Hero Image"
              className="w-[400px] h-auto"
              priority
            />
          </div>
          <div className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-12">
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              Empowering Your&nbsp;Vision with AI.
            </h1>
            <p className="text-lg mt-4 mb-6">
              Revolutionize the way you work with cutting-edge AI solutions. At
              BotWot, we transform your business challenges into seamless,
              scalable, and secure workflows that deliver unmatched value.
            </p>
            <div className="flex flex-wrap items-center space-x-4">
              <button onClick={handleMoreButton} className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover: hover:text-indigo-600 hover:bg-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-16">
        <h2 id="advantage" className="text-4xl font-bold text-center text-black mb-12">
          The BotWot Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
          <AdvantageCard
            title="The Agent Army Hub"
            description="Access our comprehensive marketplace of pre-trained AI Workforces, each meticulously designed for specific industry applications. These intelligent solutions are ready to deploy immediately, requiring minimal setup time while maximizing operational efficiency. Our AI agents are continuously updated with industry best practices and emerging technologies to ensure optimal performance. Experience the power of custom-tailored AI solutions that adapt to your unique business challenges and drive measurable results."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
            }
          />
          <AdvantageCard
            title="No-Code AI Platform"
            description="Transform your business operations with our intuitive no-code platform, designed to empower teams regardless of their technical expertise. Create sophisticated AI workflows and automations through our drag-and-drop interface, eliminating the need for complex coding or specialized knowledge. Customize and deploy intelligent solutions that streamline customer interactions and internal processes. Scale your AI capabilities while maintaining full control over your automated workflows."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            }
          />
          <AdvantageCard
            title="End-to-End Solutions"
            description="Experience the future of business automation with our comprehensive end-to-end AI Workforces. Unlike traditional virtual assistants, our solutions handle complex, multi-step workflows with sophisticated decision-making capabilities. Automate entire business processes from initial customer contact to final resolution, reducing manual intervention and human error. Our intelligent systems learn and adapt to your specific business needs, continuously improving their performance over time."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded" />
            }
          />
          <AdvantageCard
            title="In-House Proprietary LLMs"
            description="Leverage our cutting-edge proprietary Large Language Models, developed in-house to ensure maximum security and performance. Our LLMs are specifically designed to handle sensitive business data with the highest standards of privacy and protection. Benefit from continuous model improvements and updates that enhance capabilities while maintaining strict compliance with industry regulations. Experience enterprise-grade AI solutions that prioritize both innovation and data security."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded" />
            }
          />
          <AdvantageCard
            title="Real-Time Assistance"
            description="Enhance your operations with instantaneous AI support that provides intelligent guidance exactly when you need it. Our real-time assistance system monitors and analyzes ongoing activities, offering proactive suggestions and solutions to potential challenges. Benefit from AI-driven insights that help optimize decision-making processes and improve response times. Experience seamless integration with your existing workflows while maintaining high accuracy and reliability."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded" />
            }
          />
          <AdvantageCard
            title="Faster Summaries"
            description="Revolutionize your communication efficiency with our advanced AI-powered call summarization technology. Automatically generate detailed, accurate summaries of conversations while capturing key points, action items, and sentiment analysis. Save valuable time by transforming hours of calls into concise, actionable reports that can be easily shared and referenced. Integrate with your existing communication tools for seamless workflow enhancement."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded" />
            }
          />
          <AdvantageCard
            title="AI-Powered Insights"
            description="Unlock the full potential of your business data with our sophisticated AI analytics engine. Generate comprehensive insights that reveal hidden patterns, trends, and opportunities within your operations. Transform raw data into actionable intelligence that drives strategic decision-making and business growth. Our AI continuously learns from your unique business context to provide increasingly relevant and valuable recommendations."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
            }
          />
          <AdvantageCard
            title="Scalable AI Solutions"
            description="Future-proof your business with our highly scalable AI infrastructure designed to grow alongside your organization. Our flexible solutions automatically adjust to increasing demands while maintaining optimal performance and reliability. Benefit from seamless scaling capabilities that accommodate growing data volumes and user bases without service interruption. Experience enterprise-grade stability combined with the agility to adapt to changing business needs."
            icon={
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            }
          />
        </div>
      </section>
    </div>
  );
};

export default OurValue;
