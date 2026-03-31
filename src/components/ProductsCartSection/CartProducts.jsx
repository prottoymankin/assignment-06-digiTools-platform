import CartProduct from "./CartProduct";

const CartProducts = ( {cartProducts} ) => {
  return (
    <div className="space-y-4">
      {
        cartProducts.map(product => (
          <CartProduct 
            key = {product.id}
            product = {product}
          />
        ))
      }
    </div>
  );
};

export default CartProducts;