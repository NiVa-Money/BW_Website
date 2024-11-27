import Image from "next/image";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-stretch gap-10">
        {/* Left Section */}
        <div className="flex flex-col w-1/2 text-black space-y-8 h-full">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Revolutionizing Customer Engagement with Intelligent Experiences
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">
            BotWot’s ICX platform leverages proprietary AI to predict, adapt, and respond, transforming every customer interaction into a personalized journey.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-transparent text-black font-semibold border-2 border-black rounded-full py-3 px-8 hover:bg-white hover:text-indigo-600 transition duration-300">
              Explore the Future of CX
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-1/2 space-y-10 mt-8 md:mt-0 h-full">
          {/* User Active Possibility */}
          <div className="bg-white rounded-xl p-6 shadow-lg h-full">
            <p className="text-xs font-light text-gray-600">User Active Possibility</p>
            <h3 className="text-3xl font-bold text-purple-700 mt-2">$44.3578</h3>
            <div className="mt-4 bg-indigo-700 rounded-2xl h-48 w-full"></div>
          </div>

          {/* Daily Data */}
          <div className="bg-white rounded-xl p-6 shadow-lg h-full">
            <p className="text-xl font-bold text-indigo-600">
              <span className="text-4xl tracking-wider">$4.8k</span> <span className="text-xs font-light text-gray-600">/ Daily</span>
            </p>
            <Image
              src="/assets/charts/BarChart.png"
              alt="Data Image"
              className="w-full rounded-xl mt-6"
              width={640} // Provide width for next/image optimization
              height={360} // Provide height for next/image optimization
            />
            <div className="flex justify-between text-sm mt-4 text-gray-600">
              <span>Facilisis</span>
              <span>Sed</span>
              <span className="text-rose-500">Molestie</span>
              <span>Cursus</span>
              <span>Elit</span>
            </div>
          </div>

          {/* Data Analysis */}
          <div className="bg-white rounded-3xl p-6 shadow-lg h-full">
            <h3 className="text-lg font-semibold text-gray-700">Data Analysis</h3>
            <p className="text-xs text-gray-500 mt-1">Viverra tristique</p>
            <div className="flex gap-6 mt-4 text-sm text-indigo-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                <span>Aliquam</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span>Morbi</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span>Molestie</span>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-gray-300 my-6"></div>
            <div className="flex items-center space-x-6">
              <Image
                src="/assets/charts/Intersect.png"
                alt="Chart"
                className="w-1/2 h-auto"
                width={320} // Provide width for next/image optimization
                height={180} // Provide height for next/image optimization
              />
              <div className="w-1/2 space-y-2">
                <div className="h-1 bg-gray-300 rounded-full"></div>
                <div className="h-1 bg-gray-300 rounded-full"></div>
                <div className="h-1 bg-gray-300 rounded-full"></div>
                <div className="h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
