import SectionHeader from "../SectionHeader/SectionHeader";
import StepsCards from "./StepsCards";


const Steps = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-15 lg:py-30"
    >
      <SectionHeader
        title = {"Get Started in 3 Steps"}
        description = {"Start using premium digital tools in minutes, not hours."}
      />

      <StepsCards />
    </section>
  );
};

export default Steps;