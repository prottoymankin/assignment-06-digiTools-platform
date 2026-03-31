import CartProduct from "./CartProduct";

const CartProducts = ( { cartProducts, setCartProducts, setTotalPrice } ) => {
  return (
    <div className="space-y-4">
      {
        cartProducts.map(product => (
          <CartProduct 
            key = {product.id}
            product = {product}
            setCartProducts = {setCartProducts}
            setTotalPrice = {setTotalPrice}
          />
        ))
      }
    </div>
  );
};

export default CartProducts;