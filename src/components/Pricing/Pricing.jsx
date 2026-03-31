import PricingCards from "./PricingCards";
import PricingHeader from "./PricingHeader";

const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15 lg:py-30">
      <PricingHeader />
      <PricingCards />
    </section>
  );
};

export default Pricing;