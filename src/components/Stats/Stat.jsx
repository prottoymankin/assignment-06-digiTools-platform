const Stat = ({ count, text, isMiddleState }) => {
  return (
    <div 
      className={
        `space-y-3 text-center py-4 border-[#9514FA] 
        ${isMiddleState && 'md:border-l-3 md:border-r-3 border-t-3 md:border-t-0 border-b-3 md:border-b-0'}`
      }
    >
      <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl">
        {count}
      </h2>

      <span className="font-medium sm:text-xl lg:text-2xl">
        {text}
      </span>
    </div>
  );
};

export default Stat;