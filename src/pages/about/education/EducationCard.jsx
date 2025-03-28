import { Calendar, Trophy, BookOpen } from "lucide-react";

const EducationCard = ({ education }) => {
  return (
    <div className="text-white px-0 md:px-6 pt-4 rounded-2xl  max-w-full mx-auto ">
      <div className=" flex flex-col lg:flex-row justify-between">
        <h2 className="flex flex-col font-medium">
          <span className="text-white text-lg md:text-2xl font-medium">
            {education.degree}
          </span>
          <span className="text-lg text-gray-300">{education.university}</span>
        </h2>
        <div className="flex items-center text-base text-gray-300 mb-2 lg:mb-8">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{education.duration}</span>
        </div>
      </div>
      <p className="text-sm text-gray-300 text-justify">
        {education.description}
      </p>

      <div className="my-4">
        <h4 className="flex items-center text-lg font-semibold mb-2 text-white ">
          <Trophy className="w-4 h-4 mr-2 text-lime-400" />
          Achievements
        </h4>
        <ul className="list-disc list-inside text-[12px] lg:text-sm text-gray-300 space-y-1">
          {education.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="flex items-center text-base font-semibold mb-2 text-white">
          <BookOpen className="w-4 h-4 mr-2 text-lime-400 " />
          Key Courses
        </h4>
        <div className="flex flex-wrap gap-2">
          {education.key_courses.map((course, index) => (
            <span
              key={index}
              className="badge bg-zinc-700 border-none text-[12px] md:text-sm text-white py-3"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
