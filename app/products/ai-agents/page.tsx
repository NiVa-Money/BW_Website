import { WobbleCard } from "../../components/AnimationCards";
import { aiAgentsContent } from "../../data/products";

const AiAgentsPage = () => {
  // Find the content associated with the "ai-agents" pageId
  const pageData = aiAgentsContent.content.find((page) => page.pageId === "ai-agents");

  // Access cards (useCases) for each content block
  const cards = pageData?.useCases || [];

  return (
    <div className="p-10 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <WobbleCard key={index} containerClassName="bg-purple-500">
          <h2 className="text-white text-2xl font-semibold">{card.industry}</h2>
          <p className="text-white mt-1">{card.description}</p>
        </WobbleCard>
      ))}
    </div>
  );
};

export default AiAgentsPage;
