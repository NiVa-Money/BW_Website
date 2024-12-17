import { WobbleCard } from "../../components/AnimationCards";
import ProductSection from "../../components/ProductCard";
import { aiAgentsContent } from "../../data/products";

const AiAgentsPage = () => {
  // Find the first content block that matches pageId "ai-agents"
  const pageData = aiAgentsContent.content.find(
    (page) => page.pageId === "ai-agents"
  );

  return (
    <div className="p-10 bg-white flex flex-col min-h-screen">
      {pageData && (
        <>
          {/* Render Product Section */}
          <ProductSection
            title={pageData.title}
            description={pageData.description}
            useCases={pageData.useCases}
          />
        </>
      )}
    </div>
  );
};

export default AiAgentsPage;
