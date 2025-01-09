"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { products, productUrlMapping } from "../data/products";
import solutions from "../data/solution";
import { Products, Solutions } from "../../public/assets";

const Hero = () => {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/products/");
  const isSolutionPage = pathname.startsWith("/solutions/");

  const getPageName = () => {
    if (isProductPage) {
      return (
        productUrlMapping[pathname as keyof typeof productUrlMapping] ||
        "Product Not Found"
      );
    }
    return "";
  };

  const getSolutionLabel = () => {
    if (isSolutionPage) {
      const solution = solutions.find((solution) => pathname === solution.href);
      return solution ? solution.label : "Solution Not Found";
    }
    return "";
  };

  const getProductImage = () => {
    if (isProductPage) {
      const product = products.find(
        (product) => product.name === getPageName()
      );
      return product?.img || Products;
    }
    return null;
  };

  const getSolutionImage = () => {
    if (isSolutionPage) {
      const solution = solutions.find((solution) => pathname === solution.href);
      return solution?.img || Solutions;
    }
    return null;
  };

  const getSubtitle = () => {
    if (isProductPage) {
      const product = products.find(
        (product) => product.name === getPageName()
      );
      return product?.subtitle || "Explore our cutting-edge product!";
    }
    return "";
  };

  const getSlogan = () => {
    if (isSolutionPage) {
      const solution = solutions.find((solution) => pathname === solution.href);
      return solution?.slogan || "Unlock your potential with our solutions!";
    }
    return "";
  };

  const handleExploreButtonClick = () => {
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pageName = getPageName();
  const solutionLabel = getSolutionLabel();
  const subtitle = getSubtitle();
  const slogan = getSlogan();
  const imageToDisplay = isProductPage
    ? getProductImage()
    : isSolutionPage
    ? getSolutionImage()
    : null;

  return (
    <section className="relative mt-8 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-black space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-left">
            {isProductPage ? pageName : solutionLabel}
          </h1>
          <p className="text-lg sm:text-xl font-light text-center lg:text-left">
            {isProductPage ? subtitle : slogan}
          </p>
          <div className="flex justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <button
              className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:text-indigo-600 hover:bg-white transition duration-300"
              onClick={handleExploreButtonClick}
            >
              Explore UseCases
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-auto max-h-[500px] lg:max-h-[600px]">
            {imageToDisplay && (
              <Image
                src={imageToDisplay}
                alt={getPageName()}
                layout="intrinsic"
                objectFit="contain"
                priority
              />
            )}
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div
        id="explore-section"
        className="mt-6 flex justify-center items-center"
      >
        {/* Additional content can go here */}
      </div>
    </section>
  );
};

export default Hero;
