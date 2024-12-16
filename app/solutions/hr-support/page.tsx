import { WobbleCard } from "../../components/AnimationCards";
import cardData from "../../../data.json";

const HrSupportPage = () => {

  const pageData = cardData.find((page) => page.pageId === "hr-support");

  const cards = pageData?.cards || [];

  return (
    <div className="p-10 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <WobbleCard key={index} containerClassName="bg-purple-500">
          <h2 className="text-white text-2xl font-semibold">{card.title}</h2>
          <p className="text-white mt-1">{card.description}</p>
        </WobbleCard>
      ))}
    </div>
  );
};

export default HrSupportPage;
