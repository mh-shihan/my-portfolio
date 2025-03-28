import { Calendar, Trophy, BookOpen } from "lucide-react";

const EducationCard = () => {
  return (
    <div className="text-white px-0 md:px-6 pt-4 rounded-2xl  max-w-full mx-auto ">
      <div className=" flex flex-col lg:flex-row justify-between">
        <h2 className="flex flex-col font-medium">
          <span className="text-white text-lg md:text-2xl font-medium">
            Bachelor of Science in Computer Science - (BSC)
          </span>
          <span className="text-lg text-gray-300 mb-0 lg:mb-4">
            Uttara University
          </span>
        </h2>
        <div className="flex items-center text-base text-gray-300 mb-2 lg:mb-8">
          <Calendar className="w-4 h-4 mr-1" />
          <span>2022 - 2025</span>
        </div>
      </div>
      <p className="text-sm text-gray-300 text-justify">
        Currently pursuing my degree in Computer Science, where I'm focusing on
        software development, web technologies, and database management. I'm
        passionate about coding and love solving complex problems through
        technology.
      </p>

      <div className="my-4">
        <h4 className="flex items-center text-sm font-semibold mb-2 text-white ">
          <Trophy className="w-4 h-4 mr-2 text-lime-400" />
          Achievements
        </h4>
        <ul className="list-disc list-inside text-[12px] md:text-sm text-gray-300 space-y-1">
          <li>Organize Web Hackathon From UU Pr0gramming Club</li>
          <li>Organize Programming Contest From UU Pr0gramming Club</li>
          <li>Best Project Award in Software Engineering Course</li>
        </ul>
      </div>
      <div>
        <h4 className="flex items-center text-base font-semibold mb-2 text-white">
          <BookOpen className="w-4 h-4 mr-2 text-lime-400 " />
          Key Courses
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Data Structure & Algorithm",
            "Web Development",
            "Database Management",
            "Software Engineering",
            "Artificial Intelligence",
          ].map((course, index) => (
            <span
              key={index}
              className="badge bg-zinc-700 border-none text-[12px] md:text-base text-white py-3"
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
