"use client";
import Image from "next/image";
import { avatar2, Products, Solutions } from "../../public/assets";
import { usePathname } from "next/navigation";
import Tag from "./Tag";
import { productUrlMapping } from "../data/products";
import solutions from "../data/solution";

const Hero = () => {
  const pathname = usePathname();

  // Extract conditions for products and solutions
  const isProductPage = pathname.startsWith("/products/");
  const isSolutionPage = pathname.startsWith("/solutions/");

  // Function to get the name based on the pathname
  const getPageName = () => {
    if (isProductPage) {
      // Check if the pathname exists in the productUrlMapping
      const pageName =
        productUrlMapping[pathname as keyof typeof productUrlMapping];

      // Return the corresponding product name or "Product Not Found"
      return pageName || "Product Not Found";
    }

    return "";
  };

   // Function to get the label for solution pages
   const getSolutionLabel = () => {
    if (isSolutionPage) {
      // Find the solution that matches the current pathname
      const solution = solutions.find((solution) => pathname === solution.href);
      return solution ? solution.label : "Solution Not Found";
    }
    return "";
  };


  // Set dynamic content based on the page type
  const pageName = getPageName();
  const solutionLabel = getSolutionLabel();

  const imageToDisplay = isProductPage
    ? Products
    : isSolutionPage
    ? Solutions
    : null;
  const textToDisplay = isProductPage
    ? "Product Page"
    : isSolutionPage
    ? "Solution Page"
    : "";

  return (
    <section className="relative py-18 px-6 lg:px-8 overflow-hidden w-full mb-0">
      <div className="flex justify-center items-center h-full">
        <Tag className="text-center mt-10">{textToDisplay}</Tag>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-black mt-6 lg:mt-20 space-y-6 lg:space-y-8 h-full">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap">
             {isProductPage ? pageName : solutionLabel}
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl whitespace-nowrap">
            Simple to set up. Ready to transform your businesses with AI.
          </p>
          <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:text-indigo-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="rounded-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="font-semibold mt-2">Best AI agents in market!</div>
            <p className="text-zinc-700 mt-1">
              Botwot&apos;s recommendation engine has been a game-changer for
              our platform. It&apos;s like having a personal beauty assistant
              that knows our users better than we do.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Image
                loading="lazy"
                src={avatar2}
                alt="Profile Picture"
                width={26}
                height={26}
                className="object-contain shrink-0 self-start rounded-full aspect-square w-[26px]"
              />
              <span>Arthi Benjaram</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 flex">
          <div className="relative w-full h-[30rem] sm:h-[36rem] lg:h-[35rem]">
            {imageToDisplay && (
              <Image
                src={imageToDisplay}
                alt={isProductPage ? "Products" : "Solutions"}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
