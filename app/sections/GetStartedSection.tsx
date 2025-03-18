'use client'

import Link from "next/link";
import React from "react";

const GetStartedSection: React.FC = () => {
  return (
    <section className="container flex flex-col items-center px-5 md:px-20 font-medium">
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] px-5 py-12 md:px-20 md:py-20 bg-[#77C9F1]/65 rounded-2xl">
        {/* Content Section */}
        <div className="text-center w-full max-w-[681px]">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Explore the Future of ICX
          </h2>
          {/* Subheading */}
          <p className="mt-4 text-sm sm:text-base md:text-xl text-black/70 leading-relaxed">
            Elevate customer relationships with BotWot ICX. <br />
            Schedule a free demo to see AI in action!
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            {/* Try for Free Button */}
            <button
              onClick={() => (window.location.href = "https://app.botwot.io")}
              className="px-5 py-3 text-white bg-black rounded-full transition hover:bg-gray-800 w-full sm:w-auto"
            >
              Try for Free
            </button>

            {/* Book a Demo Button */}
            <Link href="https://outlook.office365.com/book/BotWotDemo@nivamoney.com/" passHref>
              <button className="px-5 py-3 text-emerald-500 border border-emerald-500 rounded-full transition hover:bg-emerald-100 w-full sm:w-auto">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
