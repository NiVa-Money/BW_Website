import React from "react";
import Image from "next/image";
import { AboutUs } from "../../../public/assets";

const Introduction: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <Image
              src={AboutUs}
              alt="Hero Image"
              className="w-[450px] h-auto"
              priority
            />
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
              Transforming Complexity to Productivity,
            </h1>
            <p className="text-lg mt-4 text-gray-600 mb-6">
              We take pride in democratizing AI, empowering businesses of all
              sizes to create intelligent customer experiences effortlessly and{" "}
              <br />
              affordably.
            </p>
            <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
              <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:bg-white hover:text-indigo-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
