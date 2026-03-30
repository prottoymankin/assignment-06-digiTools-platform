import { Menu, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav 
      className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6.5"
    >
      <div className="flex gap-2.5 items-center">
        <button className="btn btn-circle lg:hidden">
          <Menu />
        </button>

        <h1
          className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer font-bold text-3xl pb-0.5"
        >
          DigiTools
        </h1>
      </div>

      <ul 
        className="font-semibold text-[#101727] hidden lg:flex gap-8 items-center"
      >
        <li><a href="#">Products</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>

      <div className="flex gap-4 items-center">
        <button className="btn btn-circle">
          <ShoppingCart />
        </button>

        <button className="btn rounded-full hidden md:block">
          Login
        </button>

        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn font-semibold rounded-full text-base text-white hidden md:block">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;