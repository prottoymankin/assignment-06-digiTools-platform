import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {
  return (
    <>

      <header className="border border-[#F2F2F2]">
        <Navbar />
      </header>

      <main>
        <Banner />
      </main>

    </>
  );
};

export default Layout;