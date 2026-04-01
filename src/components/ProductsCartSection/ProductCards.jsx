import { use } from "react";
import ProductCard from "./ProductCard";

const ProductCards = ({ productsDataPromise, handleCartProducts, cartProducts }) => {
  const productsData = use(productsDataPromise);

  return (
    <div className="grid gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
      {
        productsData.map(product => (
          <ProductCard 
            key = {product.id}
            product = {product}
            handleCartProducts = {handleCartProducts}
            cartProducts = {cartProducts}
          />
        ))
      }
    </div>
  );
};

export default ProductCards;