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

  const getProductImage = () => {
    if (isProductPage) {
      const pageName = getPageName();
      const product = products.find((product) => product.name === pageName);
      return product?.img || Products;
    }
    return null;
  };

  const getSolutionImage = () => {
    if (isSolutionPage) {
      const solution = solutions.find((solution) => pathname === solution.href);
      return solution?.img || Solutions; // Fallback to default image
    }
    return null;
  };

  const getSubtitle = () => {
    if (isProductPage) {
      const pageName = getPageName();
      const product = products.find((product) => product.name === pageName);
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

  // Set dynamic content based on the page type
  const pageName = getPageName();
  const solutionLabel = getSolutionLabel();
  const subtitle = getSubtitle();
  const slogan = getSlogan();

  const imageToDisplay = isProductPage
    ? getProductImage()
    : isSolutionPage
    ? getSolutionImage()
    : null;

  // const highlights = [
  //   {
  //     title: "Pre-Trained for Industry Use Cases",
  //     description:
  //       "AI workforce tailored for healthcare, finance, and retail challenges—no setup needed!",
  //   },
  //   {
  //     title: "24/7 Global Availability",
  //     description:
  //       "Multilingual, always-on support to scale your customer service globally.",
  //   },
  //   {
  //     title: "Effortless Integration",
  //     description:
  //       "Plug-and-play compatibility with CRMs, ERPs, and e-commerce platforms.",
  //   },
  // ];

  // // Auto-slide carousel every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === highlights.length - 1 ? 0 : prevSlide + 1
  //     );
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, [highlights.length]);

  // Scroll to the "Explore More UseCases" button on click
  const handleExploreButtonClick = () => {
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-2 px-6 lg:px-8 w-full mb-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-black mt-6 lg:mt-20 space-y-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
            {isProductPage ? pageName : solutionLabel}
          </h1>
          <p className="text-lg lg:text-xl font-light">
            {isProductPage ? subtitle : slogan}
          </p>

          {/* Call to Action */}
          <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
            <button
              className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:text-indigo-600 hover:bg-white transition duration-300"
              onClick={handleExploreButtonClick}
            >
              Explore More UseCases
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 flex">
          <div className="relative w-full ml-24 mt-10 h-[30rem] sm:h-[36rem] lg:h-[35rem]">
            {imageToDisplay && (
              <Image
                src={imageToDisplay}
                alt={getPageName()}
                width={1000} // Consistent width
                height={1000} // Consistent height
                className="object-contain aspect-square" // Ensures the image remains within bounds
              />
            )}
          </div>
        </div>
      </div>

      {/* The explore section */}
      <div id="explore-section" className="mt-12">
        {/* Your content for the explore section goes here */}
      </div>
    </section>
  );
};

export default Hero;
