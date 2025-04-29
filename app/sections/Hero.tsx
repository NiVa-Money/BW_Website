"use client";

import Image from "next/image";
import * as React from "react";
import { animation } from "../../public/assets";
import FullScreenGradientAnimation from "../components/GradientAnimation";

const HeroSection: React.FC = () => {
  return (
    <>
     
      <FullScreenGradientAnimation />
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-1/2 text-black mt-6 lg:mt-12 space-y-6 lg:space-y-8 h-full">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
              Revolutionizing Work: Meet the Autonomous Workforce That Scales
              Businesses Overnight
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl">
              BotWot AI enables businesses to scale globally without increasing
              headcount, providing a workforce that operates 24/7 with precision
              and consistency.
            </p>
            <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
              <button
                onClick={() => (window.location.href = "https://app.botwot.io")}
                className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:text-[#387D8C] hover:bg-white transition duration-300"
              >
                Explore the Future of Workforce Now
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-full lg:w-1/2 h-full flex justify-center lg:justify-end flex-wrap gap-6 lg:gap-0">
            <div className="w-full h-auto flex items-center justify-center bg-transparent">
              <Image
                src={animation}
                alt="Animated Illustration"
                width={1500}
                height={1000}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
