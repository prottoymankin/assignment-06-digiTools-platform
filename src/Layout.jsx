import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Products from "./components/Products/Products";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";

const Layout = () => {
  return (
    <>

      <header className="border border-[#F2F2F2]">
        <Navbar />
      </header>

      <main>
        <Banner />
        <Stats />
        <Products />
        <Steps />
        <Pricing />
      </main>

      <Footer />
    </>
  );
};

export default Layout;