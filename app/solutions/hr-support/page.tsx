import { WobbleCard } from "../../components/AnimationCards";
import cardData from "../../../data.json";

const HrSupportPage = () => {

  const pageData = cardData.find((page) => page.pageId === "hr-support");

  const cards = pageData?.cards || [];

  return (
    <div className="p-10 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <WobbleCard key={index} containerClassName="bg-white border ">
          <h2 className="text-[#2E2F5F] text-2xl font-bold">{card.title}</h2>
          <p className="text-[#2E2F5F] font-normal mt-1">{card.description}</p>
        </WobbleCard>
      ))}
    </div>
  );
};

export default HrSupportPage;
