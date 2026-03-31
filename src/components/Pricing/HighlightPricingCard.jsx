import { Check } from "lucide-react";

const HighlightPricingCard = ({ pricingPlan }) => {
  const { title, price, description, features, buttonText, badge} = pricingPlan;

  return (
    <div 
      className="h-full p-6 relative rounded-2xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col gap-6"
    >
      { 
        badge && (
          <span 
            className="bg-[#FEF3C6] font-medium px-3 py-1.5 rounded-full text-[#BB4D00] text-sm absolute -top-4 left-1/2 -translate-x-1/2"
          > 
            {badge} 
          </span>
        )
      } 

      <h3 className="font-bold text-2xl"> {title} </h3>

      <p> {description} </p>

      <p className="font-bold text-[40px]">
        ${price}<span className="font-normal text-xl">/month</span>
      </p>

      <ul className="grow flex flex-col gap-2">
        {
          features.map((feature, index) => (
            <li 
              key = {index}
              className="flex gap-2 items-center"
            >
              <span className="text-[#30B868]"> <Check /> </span>
              <span> {feature} </span>
            </li>
          ))
        }
      </ul>

      <button className="bg-white cursor-pointer font-bold px-4 py-3 rounded-full w-full">
        <span
          className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
        > {buttonText} </span>
      </button>
    </div>
  );
};

export default HighlightPricingCard;