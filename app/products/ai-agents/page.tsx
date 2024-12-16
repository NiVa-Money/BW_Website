// import { WobbleCard } from "../../components/AnimationCards";
// import ProductCard from "../../components/ProductCard";
// import { aiAgentsContent } from "../../data/products";

// const AiAgentsPage = () => {
//   // Find all the content blocks that have the pageId "ai-agents"
//   const pageData = aiAgentsContent.content.filter(
//     (page) => page.pageId === "ai-agents"
//   );

//   return (
//     <div className="p-10 bg-white flex flex-col  min-h-screen">
//       <ProductCard/>
//       {pageData.map((data, pageIndex) => (
//         <div key={pageIndex} className="mb-8 ">
//           <h1 className="text-4xl text-center font-bold text-purple-800">
//             {data.title}
//           </h1>
//           <p className="mt-4 text-xl text-center text-gray-700">
//             {data.description}
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {data.useCases.map((card, index) => (
//               <WobbleCard key={index} containerClassName="bg-purple-500 mt-4">
//                 <h2 className="text-white text-center text-2xl font-semibold">
//                   {card.industry}
//                 </h2>
//                 <p className="text-white text-center  mt-1">
//                   {card.description}
//                 </p>
//               </WobbleCard>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AiAgentsPage;


import ProductCard from "../../components/ProductCard";
import { aiAgentsContent } from "../../data/products";

const AiAgentsPage = () => {
  // Find all the content blocks that have the pageId "ai-agents"
  const pageData = aiAgentsContent.content.filter(
    (page) => page.pageId === "ai-agents"
  );

  return (
    <div className="p-10 bg-white flex flex-col min-h-screen">
      {/* Rendering Product Cards */}
      <ProductCard />

      {/* Rendering Page Data */}
      {pageData.map((data, pageIndex) => (
        <div key={pageIndex} className="mb-8">
          <h1 className="text-4xl text-center font-bold text-purple-800">
            {data.title}
          </h1>
          <p className="mt-4 text-xl text-center text-gray-700">
            {data.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rendering Product Cards for each use case */}
            {data.useCases.map((card, index) => (
              <ProductCard
                key={index}
                title={card.industry}
                description={card.description}
                useCases={card.useCases}  // Assuming this is passed from the card data
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AiAgentsPage;
