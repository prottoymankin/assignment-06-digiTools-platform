import Stat from "./Stat";

const Stats = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15">
      <div 
        className="max-w-7xl mx-auto grid gap-4 md:grid-cols-3 text-white px-10 lg:px-0"
      >
        <Stat
          count = "200k+"
          text = "Active Users"
          isMiddleState = {false} 
        />

        <Stat
          count = "200+"
          text = "Premium Tools"
          isMiddleState = {true}
        />

        <Stat
          count = "4.9"
          text = "Rating"
          isMiddleState = {false}
        />
      </div>
    </section>
  );
};

export default Stats;