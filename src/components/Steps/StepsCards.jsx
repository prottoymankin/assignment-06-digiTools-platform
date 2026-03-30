import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";
import StepsCard from "./StepsCard";

const cards = [
  {
    id: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocketIcon
  }
];

const StepsCards = () => {
  return (
    <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
      {
        cards.map(card => (
          <StepsCard
            key = {card.id}
            card = {card}
          />
        ))
      }
    </div>
  );
};

export default StepsCards;