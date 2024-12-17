
// import ProductCard from "../../components/ProductCard";
// import { aiAgentsContent } from "../../data/products";

// const AiAgentsPage = () => {
//   // Find all the content blocks that have the pageId "ai-agents"
//   const pageData = aiAgentsContent.content.filter(
//     (page) => page.pageId === "ai-agents"
//   );

//   return (
//     <div className="p-10 bg-white flex flex-col min-h-screen">
//       {/* Rendering Product Cards */}
//       <ProductCard />

//       {/* Rendering Page Data */}
//       {pageData.map((data, pageIndex) => (
//         <div key={pageIndex} className="mb-8">
//           <h1 className="text-4xl text-center font-bold text-purple-800">
//             {data.title}
//           </h1>
//           <p className="mt-4 text-xl text-center text-gray-700">
//             {data.description}
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Rendering Product Cards for each use case */}
//             {data.useCases.map((card, index) => (
//               <ProductCard
//                 key={index}
//                 title={card.industry}
//                 description={card.description}
//                 useCases={card.useCases}  // Assuming this is passed from the card data
//                 onClick={() => {}}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AiAgentsPage;


import { WobbleCard } from "../../components/AnimationCards";
import { aiAgentsContent } from "../../data/products";

const AiAgentsPage = () => {
  // Find all the content blocks that have the pageId "ai-agents"
  const pageData = aiAgentsContent.content.filter(
    (page) => page.pageId === "ai-agents"
  );

  return (
    <div className="p-10 bg-white flex flex-col min-h-screen">
      {pageData.map((data, pageIndex) => (
        <div key={pageIndex} className="flex justify-center overflow-x-auto space-x-6">
          {data.useCases.map((card, index) => (
            <WobbleCard key={index} containerClassName="bg-white mt-4 p-4 min-w-[300px]">
              <h2 className="text-[#2E2F5F] text-center text-2xl font-semibold mb-2">
                {data.title} {/* Title */}
              </h2>
              <h3 className="text-[#2E2F5F] text-center text-lg font-medium mb-1">
                Industry: {card.industry} {/* Industry */}
              </h3>
              <p className="text-[#2E2F5F] text-center mb-2">
                {card.description} {/* Description */}
              </p>
            </WobbleCard>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AiAgentsPage;
