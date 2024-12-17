'use client'

import React, { useState } from "react";
import Image from "next/image";
import { robot } from "../../public/assets";
import { aiAgentsContent } from "../../data/products";  

const ProductCard = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index === selectedCard ? null : index);  // Toggle selection
  };

  const ProductCard = ({
    title,
    description,
    useCases,
    onClick,
  }: {
    title: string;
    description: string;
    useCase: string;
    onClick: () => void;
  }) => (
    <div
      className="bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="mt-4 text-sm text-gray-400">{useCases}</p>
    </div>
  );

  return (
    <div>
      {/* Existing Section */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden w-full">
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
          </div>

          {/* Right Section */}
          <div className="relative w-full lg:w-1/2 h-full flex justify-center lg:justify-end flex-wrap gap-6 lg:gap-0">
            <div className="relative w-full h-72 sm:h-80 lg:h-96">
              <Image
                src={robot}
                alt="robot"
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Products</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiAgentsContent.map((product: { title: string; description: string; useCase: string; }, index: React.Key | null | undefined) => (
            <div
              key={index}
              className={`transform transition-all ${selectedCard === index ? 'scale-110' : ''}`}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                useCase={product.useCase}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductCard;

// import React from "react";
// import Image from "next/image";
// import { robot } from "../../public/assets";



// const ProductCard = () => {

//   return (
//     <div>
//       {/* Existing Section */}
//       <section className="relative py-20 px-6 lg:px-8 overflow-hidden w-full">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
//           {/* Left Section */}
//           <div className="flex flex-col w-full lg:w-1/2 text-black mt-6 lg:mt-12 space-y-6 lg:space-y-8 h-full">
//             <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
//               AI Workforce Built for Seamless Customer Engagement
//             </h1>
//             <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl">
//               Simple to set up. Ready to transform your businesses with AI.
//             </p>
//             <div className="flex flex-wrap items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
//               <button className="bg-[#2E2F5F] text-white font-semibold border-2 border-black rounded-full py-3 px-6 md:px-8 hover:bg-white hover:text-indigo-600 transition duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="relative w-full lg:w-1/2 h-full flex justify-center lg:justify-end flex-wrap gap-6 lg:gap-0">
//             <div className="relative w-full h-72 sm:h-80 lg:h-96">
//               <Image
//                 src={robot}
//                 alt="robot"
//                 fill
//                 sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="max-w-7xl mx-auto py-12 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Products</h2>
       
//       </section>
//     </div>
//   );
// };

// export default ProductCard;