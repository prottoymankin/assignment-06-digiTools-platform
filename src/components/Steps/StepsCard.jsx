const StepsCard = ({ card }) => {
  const { id, title, description, icon } = card;

  return (
    <div
      className="border-2 border-[#F1F1F1] flex flex-col gap-4 items-center justify-center h-95 p-6 relative rounded-2xl text-center"
    >
      <span 
        className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center font-bold rounded-full text-sm text-white h-10 w-10 absolute top-5 right-5"
      > 
        {id} 
      </span>

      <div 
        className="bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 flex items-center justify-center h-25 w-25 rounded-full"
      >
        <img 
          src={icon} 
          alt="" 
        />
      </div>

      <h3 className="font-bold text-2xl text-[#101727]">
        {title}
      </h3>

      <p className="text-[#627382]">
        {description}
      </p>
    </div>
  );
};

export default StepsCard;