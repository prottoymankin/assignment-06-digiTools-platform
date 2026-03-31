import StepsCards from "./StepsCards";
import StepsHeader from "./StepsHeader";

const Steps = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-15 lg:py-30"
    >
      <StepsHeader />
      <StepsCards />
    </section>
  );
};

export default Steps;