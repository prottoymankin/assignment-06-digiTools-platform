const SectionHeader = ({ title, description }) => {
  return (
    <header className="mb-10 space-y-4 text-center">
      <h2
        className="font-extrabold text-3xl sm:text-4xl xl:text-5xl text-[#101727]"
      >
        {title}
      </h2>

      <p className="text-[#627382]"> {description} </p>
    </header>
  );
};

export default SectionHeader;