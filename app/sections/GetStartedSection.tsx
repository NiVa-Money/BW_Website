import React from "react";

const GetStartedSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-5 md:px-20 font-medium">
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] px-5 py-16 md:px-20 md:py-26 bg-[#77C9F1]/65 rounded-2xl">
        {/* Content Section */}
        <div className="text-center w-full max-w-[681px]">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap text-black leading-tight">
            Revolutionize your operations
          </h2>
          {/* Subheading */}
          <p className="mt-4 text-base md:text-xl text-black/70 leading-relaxed">
            Schedule a free demo and experience the AI workforce in action
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            {/* Try for Free Button */}
            <button className="px-5 md:px-6 py-3 text-white bg-black rounded-full transition hover:bg-gray-800">
              Try for Free
            </button>
            {/* Book a Demo Button */}
            <button className="px-5 md:px-6 py-3 text-emerald-500 bg-white border border-emerald-500 rounded-full transition hover:bg-emerald-100">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
