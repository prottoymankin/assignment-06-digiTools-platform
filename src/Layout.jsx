import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import ProductsCartSection from "./components/ProductsCartSection/ProductsCartSection";
import { toast, ToastContainer } from "react-toastify";
import TransformSection from "./components/TransformSection/TransformSection";

const Layout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeTab, setActiveTab] = useState('Products');

  const handleCartProducts = (product) => {
    toast.success("Added to the cart");
    setTotalPrice(prev => prev + product.price);
    setCartProducts(prev => [...prev, product]);
  }

  return (
    <>
      <header className="border border-[#F2F2F2]">
        <Navbar 
          cartProducts = {cartProducts}
          setActiveTab = {setActiveTab}
        />
      </header>

      <main>
        <Banner />
        <Stats />

        <ProductsCartSection
          cartProducts = {cartProducts}
          handleCartProducts = {handleCartProducts}
          setCartProducts = {setCartProducts}
          totalPrice = {totalPrice}
          setTotalPrice = {setTotalPrice}
          activeTab = {activeTab}
          setActiveTab = {setActiveTab}
        />

        <Steps />
        <Pricing />
        <TransformSection />
      </main>

      <Footer />

      <ToastContainer 
        theme = "dark"
        autoClose = {1000}
      />
    </>
  );
};

export default Layout;