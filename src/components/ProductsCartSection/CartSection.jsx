import CartProducts from "./CartProducts";
import EmptyCart from "./EmptyCart";

const CartSection = ({ cartProducts, setCartProducts, totalPrice, setTotalPrice }) => {
  const handleCheckout = () => {
    setCartProducts([]);
    setTotalPrice(0);
  }

  return (
    <section className="border-2 border-gray-300 rounded-2xl p-10">
      {
        cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-6">
            <h2 className="font-bold text-2xl text-[#101727]">Your Cart</h2>
            
            <CartProducts
              cartProducts = {cartProducts} 
            />

            <div className="flex items-center justify-between">
              <span className="text-[#627382]">Total:</span>
              <span className="font-bold text-2xl text-[#101727]">${totalPrice}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="cursor-pointer font-bold px-4 py-3 rounded-full text-white w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
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