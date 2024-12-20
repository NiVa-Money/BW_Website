// components/HeroSection.tsx
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { avatar2, Products } from "../../public/assets";

const HeroSection = () => {
  return (
    <section className="relative py-18 px-6 lg:px-8 overflow-hidden w-full mb-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-black mt-6 lg:mt-12 space-y-6 lg:space-y-8 h-full">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
            AI Workforce Built for Seamless Customer Engagement
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl">
            Simple to set up. Ready to transform your businesses with AI.
          </p>
          <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:bg-white hover:text-indigo-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="mt-2 flex flex-row">
            <StarRateRoundedIcon sx={{ color: "gold", fontSize: 40 }} />
            <StarRateRoundedIcon sx={{ color: "gold", fontSize: 40 }} />
            <StarRateRoundedIcon sx={{ color: "gold", fontSize: 40 }} />
            <StarRateRoundedIcon sx={{ color: "gold", fontSize: 40 }} />
            <StarRateRoundedIcon sx={{ color: "gold", fontSize: 40 }} />
          </div>

          <div className="text-lg font-semibold">Best AI agents in market!</div>
          <div className="leading-6 text-zinc-700">
            Botwot&apos;s recommendation engine has been a game-changer for our
            platform. <br />
            It&apos;s like having a personal beauty assistant that knows our
            users better than we do.
          </div>
          <div className="flex gap-2.5 mt-3 leading-7">
            <Image
              loading="lazy"
              src={avatar2}
              alt="Profile Picture"
              width={26}
              height={26}
              className="object-contain shrink-0 self-start rounded-full aspect-square w-[26px]"
            />
            <div>Arthi Benjaram</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 flex">
          <div className="relative w-full h-[30rem] sm:h-[36rem] lg:h-[35rem]">
            <Image
              src={Products}
              alt="robot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl mt-20 font-bold text-center">Products</h2>
    </section>
  );
};

export default HeroSection;
