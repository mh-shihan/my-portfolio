import Technology from "../../components/Technology";
import useFetchData from "../../hooks/useFetchData";
import SectionTitle from "../../shared/SectionTitle";

const Technologies = () => {
  const [skills] = useFetchData("/technologies", "technologies");

  return (
    <div className="my-16 text-white font-medium">
      <div className="my-5">
        <SectionTitle sectionName={"Technologies"}></SectionTitle>
        <p className="mt-2 mx-4 md:mx-0">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 justify-center mx-4 md:mx-0">
        {skills?.map((skill) => (
          <Technology key={skill._id} skill={skill}></Technology>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
