import { Suspense, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductCards from "./ProductCards";

const fetchProductsData = async() => {
  const response = await fetch("/Products.json");
  return response.json();
}

const Products = () => {
  const [activeTab, setActiveTab] = useState('Products');

  const productsDataPromise = fetchProductsData();

  const activeStyle = 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]';
  const inActiveStyle = 'text-[#25065D] bg-white';

  return (
    <section className="px-4 py-15 lg:py-30 max-w-7xl mx-auto">
      {/* Product Section Header */}
      <SectionHeader
        title = {"Premium Digital Tools"}
        description = {"Choose from our curated collection of premium digital products designed to boost your productivity and creativity."}
      />

      {/* Toggling Tabs */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setActiveTab("Products")}
          className={ `cursor-pointer font-bold px-4 py-3 rounded-full ${activeTab === 'Products' ? activeStyle : inActiveStyle}` }
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("Cart")}
          className={ `cursor-pointer font-bold px-4 py-3 rounded-full ${activeTab === 'Cart' ? activeStyle : inActiveStyle}` }
        >
          Cart(0)
        </button>
      </div>

      {/* Products */}
      <Suspense>
        <ProductCards productsDataPromise={productsDataPromise} />
      </Suspense>
    </section>
  );
};

export default Products;