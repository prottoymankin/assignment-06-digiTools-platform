import emptyCartImage from "../../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="min-h-[50vh] flex flex-col gap-4 items-center justify-center">
      <img src={emptyCartImage} alt="" className="max-w-62.5" />
      <p className="font-bold text-xl text-[#627382]">Your cart is empty</p>
    </div>
  );
};

export default EmptyCart;