const Tabs = ({ cartProducts, activeTab, setActiveTab }) => {
  const activeStyle = 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]';
  const inActiveStyle = 'text-[#25065D] bg-white';

  return (
    <div className="flex justify-center mb-10">
      <button
        onClick={() => setActiveTab("Products")}
        className={
          `cursor-pointer font-bold px-4 py-3 rounded-full 
          ${activeTab === 'Products' ? activeStyle : inActiveStyle}`
        }
      >
        Products
      </button>

      <button
        onClick={() => setActiveTab("Cart")}
        className={
          `cursor-pointer font-bold px-4 py-3 rounded-full 
          ${activeTab === 'Cart' ? activeStyle : inActiveStyle}`
        }
      >
        Cart({cartProducts.length})
      </button>
    </div>
);
};

export default Tabs;