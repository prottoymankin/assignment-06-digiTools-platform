import { toast } from "react-toastify";
import CartProducts from "./CartProducts";
import EmptyCart from "./EmptyCart";

const CartSection = ({ cartProducts, setCartProducts, totalPrice, setTotalPrice }) => {
  const handleCheckout = () => {
    setCartProducts([]);
    setTotalPrice(0);
    toast.success("Checkout successful!");
  }

  return (
    <section className="border-2 border-gray-300 rounded-2xl p-10">
      {
        cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-6">
            <h2 className="font-bold text-2xl text-[#101727]">
              Your Cart
            </h2>
            
            <CartProducts
              cartProducts = {cartProducts}
              setCartProducts = {setCartProducts}
              setTotalPrice = {setTotalPrice}
            />

            <div className="flex items-center justify-between">
              <span className="text-[#627382]">
                Total:
              </span>
              
              <span className="font-bold text-2xl text-[#101727]">
                ${totalPrice}
              </span>
            </div>

            <button 
              onClick={handleCheckout}
              className="cursor-pointer font-bold px-4 py-3 rounded-full text-white w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] active:scale-95 transition duration-300"
            >
              Process to Checkout
            </button>
          </div>
        )
      }
    </section>
  );
};

export default CartSection;