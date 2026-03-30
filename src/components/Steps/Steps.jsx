import StepsCards from "./StepsCards";
import StepsHeader from "./StepsHeader";

const Steps = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4"
    >
      <StepsHeader />
      <StepsCards />
    </section>
  );
};

export default Steps;