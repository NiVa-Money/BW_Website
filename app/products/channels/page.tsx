import Hero from "../../components/HeroSection";
import ProductSection from "../../components/ProductCard";
import { channelsContent } from "../../data/products";

const ChannelsPage = () => {
  return (
    <>
      <div className="mt-10">
        <Hero />
        <ProductSection data={channelsContent.content} />
      </div>
    </>
  );
};

export default ChannelsPage;
