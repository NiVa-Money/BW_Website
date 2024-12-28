// "use client";
// import React, { useState } from "react";

// // ProductCard component to render individual use cases
// const ProductCard = ({
//   title,
//   description,
//   useCases,
// }: {
//   title: string;
//   description: string;
//   useCases: { industry: string; description: string }[];
// }) => (
//   <div className=" shadow-xl rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105">
//     <h3 className="text-xl font-semibold">{title}</h3>
//     <p className="text-sm text-gray-600 mt-2">{description}</p>
//     {/* Iterate over the useCases and render each one below the description */}
//     <div className="mt-4">
//       {useCases.map((useCase, index) => (
//         <div key={index} className="mt-2 p-4 bg-gray-100 rounded-lg">
//           <h4 className="text-lg font-semibold">{useCase.industry}</h4>
//           <p className="text-sm text-gray-500">{useCase.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// interface ProductSectionProps {
//   pageId: string;
//   title: string;
//   description: string;
//   useCases: { industry: string; description: string }[];
// }

// const ProductSection = ({
//   title,
//   description,
//   useCases,
// }: ProductSectionProps) => {
//   const [selectedCard, setSelectedCard] = useState<number | null>(null);

//   return (
//     <div>
//       {/* Products Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-2 gap-6">
//           {/* Render ProductCard for each use case */}
//           {useCases.map((useCase, index) => (
//             <div
//               key={index}
//               className={`transform transition-all ${
//                 selectedCard === index ? "scale-110" : ""
//               }`}
//               onMouseEnter={() => setSelectedCard(index)}
//               onMouseLeave={() => setSelectedCard(null)}
//             >
//               <ProductCard
//                 title={title}
//                 description={description}
//                 useCases={[useCase]}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductSection;

import React from "react";

const ProductCard = ({
  number,
  title,
  description,
  useCases,
}: {
  number: string;
  title: string;
  description: string;
  useCases: { industry: string; description: string }[];
}) => (
  <div className="bg-white rounded-lg p-8 w-[400px] flex flex-col gap-4 shadow-lg">
    <span className="text-4xl font-light text-gray-300">{number}</span>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <div className="mt-2">
      {useCases.map((useCase, index) => (
        <div key={index} className="mt-2 p-4 bg-gray-100 rounded-lg">
          <h4 className="text-lg font-semibold">{useCase.industry}</h4>
          <p className="text-sm text-gray-500">{useCase.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProductSection = ({
  data,
}: {
  data: {
    pageId: string;
    title: string;
    description: string;
    useCases?: { industry: string; description: string }[];
  }[];
}) => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            number={`0${index + 1}`}
            title={item.title}
            description={item.description}
            useCases={item.useCases || []}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
