import { Check } from "lucide-react";

const PricingCard = ({ pricingPlan }) => {
  const { title, price, description, features, buttonText, highlight, badge} = pricingPlan;

  return (
    <div 
      className="bg-[#F9FAFC] border-2 border-[#F2F2F2] h-full p-6 rounded-2xl flex flex-col gap-6" 
    >
      <h3 className="font-bold text-2xltext-[#101727]"> {title} </h3>

      <p className="text-[#627382]"> {description} </p>

      <p className="font-bold text-[40px] text-[#101727]">
        ${price}<span className="font-normal text-xl text-[#627382]">/month</span>
      </p>

      <ul className="grow flex flex-col gap-2">
        {
          features.map((feature, index) => (
            <li 
              key = {index}
              className="flex gap-2 items-center text-[#627382]"
            >
              <span className="text-[#30B868]"> <Check /> </span>
              <span>{feature}</span> 
            </li>
          ))
        }
      </ul>

      <button 
        className="cursor-pointer font-bold px-4 py-3 rounded-full text-white w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;