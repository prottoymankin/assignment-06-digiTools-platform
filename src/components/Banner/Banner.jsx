import badgeDotImg from '../../assets/batchDot.png';
import playImg from '../../assets/Play.png';
import bannerImg from '../../assets/banner.png';

const Banner = ({ setActiveTab }) => {
  return (
    <section 
      className="max-w-7xl mx-auto px-4 py-15 flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-between"
    >
      <div className="space-y-8">
        <div className='space-y-4'>
          <div 
            className="bg-[#E1E7FF] font-medium flex gap-1 items-center px-4 py-2 rounded-full w-fit mx-auto lg:mx-0"
          >
            <img 
              src={badgeDotImg} 
              alt="" 
            />

            <span 
              className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'
            >
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1
            className='max-w-159 font-extrabold leading-[1.2] text-[#101727] text-5xl sm:text-6xl xl:text-7xl text-center lg:text-left'
          >
            Supercharge Your Digital Workflow
          </h1>

          <p className='text-[#627382] sm:text-lg text-center lg:text-left max-w-158'>
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
        </div>

        <div 
          className='flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start'
        >
          <a 
            onClick={() => setActiveTab("Products")}
            href="#product-cart-container" 
            className="border border-[#4F39F6] bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer font-semibold rounded-full text-base text-white px-4 py-3 w-full max-w-70 sm:w-fit text-center"
          >
            Explore Products
          </a>

          <button 
            className="border border-[#4F39F6] cursor-pointer flex gap-2.5 items-center justify-center font-semibold rounded-full text-base px-4 py-3 w-full max-w-70 sm:w-fit"
          > 
            <img 
              src={playImg} 
              alt="" 
            />

            <span 
              className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'
            >
              Watch Video
            </span>
          </button>
        </div>
      </div>

      <img 
        src={bannerImg} 
        alt="" 
        className='lg:max-w-107.5 xl:max-w-125'
      />
    </section>
  );
};

export default Banner;