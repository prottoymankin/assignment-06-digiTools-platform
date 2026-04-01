import { Menu, ShoppingCart } from "lucide-react";

const Navbar = ({ cartProducts }) => {
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
        <li> <a>Products</a> </li>
        <li> <a>Features</a> </li>
        <li> <a>Pricing</a> </li>
        <li> <a>Testimonials</a> </li>
        <li> <a>FAQ</a> </li>
      </ul>

      <div className="flex gap-4 items-center">
        <button className="btn btn-circle relative">
          {
            cartProducts.length > 0 && (
              <span
                className="absolute -top-2.5 -right-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-5 w-5 font-bold text-white"
              >
                {cartProducts.length}
              </span>
            )
          }

          <ShoppingCart />
        </button>

        <button className="btn rounded-full hidden md:block">
          Login
        </button>

        <button 
          className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn font-semibold rounded-full text-base text-white hidden md:block"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;