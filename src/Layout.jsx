import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
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
        <Steps />
      </main>

    </>
  );
};

export default Layout;