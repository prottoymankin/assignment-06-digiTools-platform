import { Check } from "lucide-react";

const ProductCard = ({ product, handleCartProducts }) => {
  const { name, description, price, period, tag, tagType, features, icon} = product;

  return (
    <div className="border-2 border-[#F2F2F2] p-6 relative rounded-2xl flex flex-col gap-4">

      <span 
        className={`font-medium px-3 py-1.5 rounded-full text-sm absolute top-2.5 right-2.5 ${tagType === 'best' && 'bg-[#FEF3C6] text-[#BB4D00]'} ${tagType === 'new' && 'bg-[#DBFCE7] text-[#0A883E]'} ${tagType === 'popular' && 'bg-[#E1E7FF] text-[#9514FA]'}`}
      > 
        {tag} 
      </span>

      <div 
        className="border border-[#F2F2F2] rounded-full h-15 w-15 flex items-center justify-center"
      >
        <img src={icon} alt="" className="w-8" />
      </div>

      <h2 className="font-bold text-2xl text-[#101727]"> {name} </h2>

      <p className="text-[#627382]"> {description} </p>

      <p className="font-bold text-2xl text-[#101727]">
        ${price}<span className="font-normal text-base text-[#627382]">/{period}</span>
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
        onClick={() => handleCartProducts(product)}
        className="cursor-pointer font-bold px-4 py-3 rounded-full text-white w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;