import { Suspense, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tabs from "./Tabs";
import ProductCards from "./ProductCards";
import CartSection from "./CartSection";

const fetchProductsData = async() => {
  const response = await fetch("/Products.json");
  return response.json();
}

const ProductsCartSection = ({ cartProducts, handleCartProducts, setCartProducts, totalPrice, setTotalPrice }) => {
  const [activeTab, setActiveTab] = useState('Products');

  const productsDataPromise = fetchProductsData();

  return (
    <section className="px-4 py-15 lg:py-30 max-w-7xl mx-auto">
      <SectionHeader
        title = {"Premium Digital Tools"}
        description = {"Choose from our curated collection of premium digital products designed to boost your productivity and creativity."}
      />

      <Tabs
        cartProducts = {cartProducts}
        activeTab = {activeTab}
        setActiveTab = {setActiveTab}
      />

      {
        activeTab === "Products" && (
          <Suspense>
            <ProductCards
              productsDataPromise = {productsDataPromise}
              handleCartProducts = {handleCartProducts}
            />
          </Suspense>
        )
      }

      {
        activeTab === "Cart" && (
          <CartSection
            cartProducts = {cartProducts}
            setCartProducts = {setCartProducts}
            totalPrice = {totalPrice}
            setTotalPrice = {setTotalPrice}
          />
        )
      }
    </section>
  );
};

export default ProductsCartSection;