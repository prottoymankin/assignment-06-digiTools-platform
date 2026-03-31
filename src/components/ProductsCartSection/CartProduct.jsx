const CartProduct = ({ product }) => {
  const { icon, name, price } = product;

  return (
    <div 
      className="bg-[#F9FAFC] p-5 rounded-2xl flex flex-col sm:flex-row gap-4 sm:items-center justify-between"
    >
      <div className="flex gap-4 items-center">
        <div 
          className="h-15 w-15 rounded-full flex items-center justify-center border border-[#F2F2F2]"
        >
          <img src={icon} alt="" className="w-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-[#101727]"> {name} </h3>
          <span className="font-medium text-[#627382]"> ${price} </span>
        </div>
      </div>

      <button className="border border-[#FF3980] btn font-bold text-[#FF3980] hover:bg-white">
        Remove
      </button>
    </div>
  );
};

export default CartProduct;