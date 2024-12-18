// // import { WobbleCard } from "../../components/AnimationCards";
// import ProductSection from "../../components/ProductCard";
// import { aiAgentsContent } from "../../data/products";

// const AiAgentsPage = () => {
//   // Find the first content block that matches pageId "ai-agents"
//   const pageData = aiAgentsContent.content.find(
//     (page) => page.pageId === "ai-agents"
//   );

//   return (
//     <div className="p-10 bg-white flex flex-col min-h-screen">
//       {pageData && (
//         <>
//           {/* Render Product Section */}
//           <ProductSection
//             title={pageData.title}
//             description={pageData.description}
//             useCases={pageData.useCases}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default AiAgentsPage;

import ProductSection from "../../components/ProductCard";
import { aiAgentsContent } from "../../data/products";

const AiAgentsPage = () => {
  // Filter out duplicates based on "pageId" and ensure unique titles
  const uniquePageData = Array.from(
    new Map(
      aiAgentsContent.content
        .filter((page) => page.pageId === "ai-agents")
        .map((item) => [item.useCases, item]) // Map unique titles
    ).values()
  );

  return (
    <div className="p-10 bg-white flex flex-col min-h-screen">
      {/* Render ProductSection for each unique content block */}
      {uniquePageData.map((data, index) => (
        <ProductSection
          key={index}
          useCases={data.useCases} // Only passing 'useCases' as the left and right sections are static
        />
      ))}
    </div>
  );
};

export default AiAgentsPage;
