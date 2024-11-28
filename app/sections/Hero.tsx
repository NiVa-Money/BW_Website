import Image from "next/image";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 mt-12 px-6 overflow-hidden ">
      <div className="max-w-7xl mx-auto flex items-stretch gap-10">
        {/* Left Section */}
        <div className="flex flex-col w-1/2 text-black mt-12 space-y-8 h-full">
          <h1 className="text-4xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
            Revolutionizing Customer Engagement with Intelligent Experiences
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">
            BotWot’s ICX platform leverages proprietary AI to predict, adapt,
            and respond, transforming every customer interaction into a
            personalized journey.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-8 hover:bg-white hover:text-indigo-600 transition duration-300">
              Explore the Future of CX
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative w-1/2 h-full flex justify-center">
          {/* Card 1 */}
          <div className="absolute bg-white rounded-xl p-6 mt-12 shadow-xl w-80 h-48 -top-8 left-0">
            <p className="text-xs font-light text-gray-600">
              User Active Possibility
            </p>
            <h3 className="text-3xl font-bold text-[#4732BA] mt-2">
              $44.3578
            </h3>
            <Image
              src="/assets/charts/Graph.png"
              alt="Chart"
              className="mt-4"
              width={320}
              height={180}
            />
          </div>

          {/* Card 2 */}
          <div className="absolute bg-white rounded-xl p-6 ml-16 shadow-lg w-96 h-70 top-16 right-0 overflow-hidden">
            <p className="text-xl font-bold text-[#4732BA]">
              <span className="text-4xl tracking-wider">$4.8k</span>{" "}
              <span className="text-xs font-light text-gray-600">/ Daily</span>
            </p>

            <Image
              src="/assets/charts/BarChart.png"
              alt="Data Image"
              className="w-full h-32 object-contain mt-4" // Make the image responsive and contain within card height
              width={640}
              height={360}
            />

            <div className="flex justify-between text-sm mt-4 text-gray-600">
              <span>Facilisis</span>
              <span>Sed</span>
              <span className="text-rose-500">Molestie</span>
              <span>Cursus</span>
              <span>Elit</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute bg-white rounded-xl mt-20 p-6 shadow-xl w-96 h-64 top-40 left-0">
            <h3 className="text-lg font-semibold text-gray-700">
              Data Analysis
            </h3>
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
            <Image
              src="/assets/charts/Intersect.png"
              alt="Chart"
              className="mt-4"
              width={320}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
