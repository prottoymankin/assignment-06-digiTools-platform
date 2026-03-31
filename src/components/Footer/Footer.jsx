import facebookIcon from "../../assets/facebook.png";
import instaIcon from "../../assets/insta.png";
import xIcon from "../../assets/x.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] pb-7.5 pt-15 lg:pt-30 px-4 space-y-20">
      <div className="text-white gap-10 lg:gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto">
        <aside className="lg:col-span-2 space-y-4">
          <h2 className="font-bold text-3xl text-white">DigiTools</h2>
          <p className="max-w-75">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </aside>

        <nav className="flex flex-col gap-4 font-thin">
          <h6 className="font-medium text-white text-xl">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>

        <nav className="flex flex-col gap-4 font-thin">
          <h6 className="font-medium text-white text-xl">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>

        <nav className="flex flex-col gap-4 font-thin">
          <h6 className="font-medium text-white text-xl">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav className="space-y-4">
          <h6 className="font-medium text-white text-xl">Social Links</h6>
          <div className="flex gap-4">
            <a className="bg-white rounded-full flex items-center justify-center h-10 w-10">
              <img src={instaIcon} alt="" />
            </a>

            <a className="bg-white rounded-full flex items-center justify-center h-10 w-10">
              <img src={facebookIcon} alt="" />
            </a>

            <a className="bg-white rounded-full flex items-center justify-center h-10 w-10">
              <img src={xIcon} alt="" />
            </a>
          </div>
        </nav>
      </div>

      <div 
        className="border-t border-[#E5E7EB] pt-7.5 text-[#FAFAFA] flex flex-col md:flex-row gap-4 items-center justify-between max-w-7xl mx-auto"
      >
        <p>© 2026 Digitools. All rights reserved.</p>
        
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;