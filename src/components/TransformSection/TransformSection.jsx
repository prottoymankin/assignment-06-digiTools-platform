const TransformSection = () => {
  return (
    <section 
      className="px-4 py-15 lg:py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col gap-10 items-center justify-center text-white"
    >
      <div className="text-center space-y-4">
        <h2 className="font-extrabold text-3xl sm:text-4xl xl:text-5xl">
          Ready to Transform Your Workflow?
        </h2>

        <p>
          Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button 
            className="bg-white cursor-pointer font-bold px-4 py-3 rounded-full w-full sm:w-fit"
          >
            <span
              className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
            > 
              Explore Products
            </span>
          </button>

          <button 
            className="border border-white bg-transparent px-4 py-3 rounded-full w-full sm:w-fit"
          >
            View Pricing
          </button>
        </div>

        <p className="text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>

    </section>
  );
};

export default TransformSection;