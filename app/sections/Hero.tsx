import Image from "next/image";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
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
            <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover: hover:text-indigo-600 hover:bg-white transition duration-300">
              Explore the Future of Workforce Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 h-full flex justify-center lg:justify-end flex-wrap gap-6 lg:gap-0">
          {/* Card 1 */}
          <div className="relative  rounded-xl p-6 shadow-xl w-full sm:w-80 h-auto md:h-48 lg:absolute lg:w-80 lg:h-50 lg:top-0 lg:left-0">
            <p className="text-xs font-light text-gray-600">Engagement Rate</p>
            <h3 className="text-3xl font-bold text-[#4732BA] mt-2">44.35%</h3>
            <div className="relative w-full h-24 sm:h-32 mt-4">
              <Image
                src="/assets/charts/Graph.png"
                alt="Chart"
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl p-6 shadow-lg w-full sm:w-96 h-auto md:h-70 lg:absolute lg:w-96 lg:h-70 lg:top-16 lg:right-0">
            <p>Agent-wise NPS</p>
            <p className="text-xl font-bold text-[#4732BA]">
              <span className="text-4xl tracking-wider">92%</span>{" "}
              <span className="text-xs font-light text-gray-600">
                / Monthly average
              </span>
            </p>
            <div className="relative w-full h-32 mt-4">
              <Image
                src="/assets/charts/BarChart.png"
                alt="Data Image"
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 50vw"
                className="object-contain"
              />
            </div>
            <div className="flex justify-between text-sm mt-4 text-gray-600">
              <span>JAN</span>
              <span>FEB</span>
              <span className="text-rose-500">MAR</span>
              <span>APR</span>
              <span>MAY</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative  rounded-xl p-6 shadow-xl w-full sm:w-96 h-auto lg:absolute lg:w-96 lg:h-65 lg:top-60 lg:left-0">
            <h3 className="text-lg font-semibold text-gray-700">
              Sentiment Insights
            </h3>
            <div className="flex gap-6 mt-4 text-sm text-indigo-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                <span>Neutral</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span>Negative</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span>Positive</span>
              </div>
            </div>
            <div className="relative w-full h-24 sm:h-32 mt-4">
              <Image
                src="/assets/charts/Intersect.png"
                alt="Chart"
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
