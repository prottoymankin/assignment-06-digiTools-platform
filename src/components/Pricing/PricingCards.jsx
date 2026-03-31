import HighlightPricingCard from "./HighlightPricingCard";
import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    price: 0,
    description: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community Support",
      "1 project per month"
    ],
    buttonText: "Get Started Free",
    highlight: false,
    badge: null
  },
  {
    id: 2,
    title: "Pro",
    price: 29,
    description: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advance analytics"
    ],
    buttonText: "Start Pro Trial",
    highlight: true,
    badge: "Most Popular"
  },
  {
    id: 3,
    title: "Enterprise",
    price: 99,
    description: "For large scale teams",
    features: [
      "Everything in pro",
      "Team collaboration",
      "Custom integrations",
      "SLA guarantee",
      "Custom branding",
      "Dedicated support"
    ],
    buttonText: "Contact Sales",
    highlight: false,
    badge: null
  }
];

const PricingCards = () => {
  return (
    <div className="grid gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
      {
        pricingPlans.map(pricingPlan => (
          pricingPlan.highlight ? (
            <HighlightPricingCard
              key = {pricingPlan.id}
              pricingPlan = {pricingPlan}
            />
          ) : (
            <PricingCard
              key = {pricingPlan.id}
              pricingPlan = {pricingPlan}
            />
          ) 
        ))
      }
    </div>
  );
};

export default PricingCards;