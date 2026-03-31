import SectionHeader from "../SectionHeader/SectionHeader";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15 lg:py-30">
      <SectionHeader
        title = "Simple, Transparent Pricing"
        description = "Choose the plan that fits your needs. Upgrade or downgrade anytime."
      />
      
      <PricingCards />
    </section>
  );
};

export default Pricing;