import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import ProductsCartSection from "./components/ProductsCartSection/ProductsCartSection";
import { toast, ToastContainer } from "react-toastify";

const Layout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCartProducts = (product) => {
    const isProductAlreadyExists = cartProducts.find(pdt => pdt.id === product.id);

    if(isProductAlreadyExists) {
      toast.warning("Already added to the cart");
      return;
    } 

    toast.success("Added to the cart");
    setTotalPrice(prev => prev + product.price);
    setCartProducts(prev => [...prev, product]);
  }

  return (
    <>
      <header className="border border-[#F2F2F2]">
        <Navbar 
          cartProducts = {cartProducts}
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
        />

        <Steps />
        <Pricing />
      </main>

      <Footer />

      <ToastContainer 
        theme = "dark"
      />
    </>
  );
};

export default Layout;