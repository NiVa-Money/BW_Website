import Hero from "../../components/HeroSection";
import ProductSection from "../../components/ProductCard";
import { integrationsContent } from "../../data/products";

const IntegrationsPage = () => {
  return (
    <>
      <div className="mt-10">
        <Hero />
        <ProductSection data={integrationsContent.content.map(item => ({
          pageId: item.pageId,
          title: item.crmAndTicketingSoftwareIntegrations[0]?.title || '',
          description: item.crmAndTicketingSoftwareIntegrations[0]?.description || '',
          useCases: item.crmAndTicketingSoftwareIntegrations[0]?.useCases.map(useCase => ({
            industry: useCase.title,
            description: useCase.description
          }))
        }))} />
      </div>
    </>
  );
};

export default IntegrationsPage;
