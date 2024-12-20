// pages/AiAgentsPage.tsx
import HeroSection from "../../components/HeroSection";
import ProductSection from "../../components/ProductCard"; // Assuming it's the same ProductCard component
import { aiAgentsContent } from "../../data/products";

const AiAgentsPage = () => {
  // Filter out duplicates based on "pageId" and ensure unique titles
  const uniquePageData = Array.from(
    new Map(
      aiAgentsContent.content
        .filter((page) => page.pageId === "ai-agents")
        .map((item) => [item.useCases, item])
    ).values()
  );

  return (
    <div className="p-10 bg-white flex flex-col min-h-screen">
      {/* Render HeroSection once */}
      <HeroSection />

      {/* Render ProductSection for each unique content block */}
      {uniquePageData.map((data, index) => (
        <ProductSection
          key={index}
          pageId={data.pageId} // Now you can pass pageId
          title={data.title}
          description={data.description}
          useCases={data.useCases}
        />
      ))}
    </div>
  );
};

export default AiAgentsPage;
