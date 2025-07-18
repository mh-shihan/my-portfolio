const SectionTitle = ({ sectionName }) => {
  return (
    <div
      className={`mt-10 ${
        sectionName === "About Me" ? "md:mt-0 lg:mt-20" : ""
      } mx-4 md:mx-0 mb-2 md:mb-4 lg:mb-6`}
    >
      <h2 className="text-3xl font-semibold relative bg-gradient-to-r from-zinc-50 to-zinc-600 bg-clip-text text-transparent inline-block after:content-[''] after:block after:h-[2px] after:w-14 after:bg-[#afd138] after:mt-1">
        {sectionName}
      </h2>
    </div>
  );
};

export default SectionTitle;
