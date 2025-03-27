import { FaGraduationCap } from "react-icons/fa6";
import SectionTitle from "../../../shared/SectionTitle";

const Educations = () => {
  const educationData = [
    {
      title: "Diploma of Computer Science in Engineering",
      institution: "Sherpur Polytechnic Institute",
      location: "Sherpur, Bangladesh",
      duration: "2019 - 2023",
      cgpa: "3.85/4.00",
      achievements: [
        "First Class First Position",
        "Dean’s List Award for Academic Excellence",
        "Best Project Award in Final Year",
      ],
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
        "Artificial Intelligence",
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Ideal College",
      location: "Dhaka, Bangladesh",
      duration: "2016 - 2018",
      cgpa: "4.96/5.00",
      achievements: ["Board Merit List"],
    },
  ];
  return (
    <div>
      <SectionTitle sectionName={"Education Section"}></SectionTitle>
      <div className="relative max-w-4xl mx-auto py-12">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-700 transform -translate-x-1/2"></div>

        {educationData.map((edu, index) => (
          <div key={index} className="relative mb-12 flex items-center">
            <div
              className={`w-1/2 p-6 ${
                index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
              }`}
            >
              <div className="bg-gradient-to-br from-purple-800 to-pink-700 p-6 rounded-2xl shadow-lg text-white">
                <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                <p className="text-sm mb-1">{edu.institution}</p>
                <p className="text-xs opacity-80 mb-2">{edu.location}</p>
                <p className="mb-2">📅 {edu.duration}</p>
                <p className="mb-2">⭐ CGPA: {edu.cgpa}</p>
                <div className="mb-2">
                  <h4 className="font-medium">Achievements:</h4>
                  <ul className="list-disc ml-4 text-sm">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
                {edu.courses && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-purple-900 px-2 py-1 rounded-full text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
              <FaGraduationCap className="text-white text-xs" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
