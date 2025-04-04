// import React from "react";
// import Image from "next/image";
// import { features } from "../data/data";

// const ProductFeatures: React.FC = () => {
//   return (
//     <>
//       <section className="py-10 px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center py-4 rounded-lg">
//           Product Features
//         </h2>

//         {/* Line separator */}
//         <div className="border-t border-black/50 my-8" />

//         {/* First Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {features.slice(0, 3).map((feature, index) => (
//             <div
//               key={index}
//               className={`p-4 sm:p-6 rounded-lg shadow-2xl shadow-[#E8DEF8] w-full flex flex-col ${feature.bgColor}`}
//             >
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
//                 {feature.title}
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-[#0B0A0A]/70  flex-grow">
//                 {feature.description}
//               </p>
//               <div className="relative w-full h-24 sm:h-32 md:h-40">
//                 <Image
//                   src={feature.imgSrc}
//                   alt={feature.title}
//                   fill
//                   className="object-contain rounded-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mt-2 sm:mt-8 lg:mt-5">
//           {features.slice(3).map((feature, index) => (
//             <div
//               key={index}
//               className={`p-4 sm:p-6 rounded-lg shadow-2xl shadow-[#E8DEF8] w-full flex flex-col ${feature.bgColor}`}
//             >
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
//                 {feature.title}
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-[#0B0A0A]/70 flex-grow">
//                 {feature.description}
//               </p>
//               <div className="relative w-full h-24 sm:h-32 md:h-40">
//                 <Image
//                   src={feature.imgSrc}
//                   alt={feature.title}
//                   fill
//                   className="object-contain rounded-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductFeatures;


import React from "react";
import Image from "next/image";
import { features } from "../data/data";

const ProductFeatures: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center py-4 rounded-lg">
        Product Features
      </h2>

      {/* Line separator */}
      <div className="border-t border-black/50 my-8" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Top row: 3 Cards */}
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className={`col-span-12 lg:col-span-4 p-6 rounded-lg shadow-md shadow-[#E8DEF8] flex flex-col`}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">
              {feature.description}
            </p>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        ))}

        {/* Bottom row: 2 Wide Cards */}
        {features.slice(3).map((feature, index) => (
          <div
            key={index}
            className={`col-span-12 lg:col-span-6 p-6 rounded-lg shadow-md shadow-[#E8DEF8] flex flex-col`}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">
              {feature.description}
            </p>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
