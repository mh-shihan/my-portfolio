import { Calendar, Star, Trophy, BookOpen } from "lucide-react";

const EducationCard = () => {
  return (
    <div className="text-white p-6 rounded-2xl  max-w-full mx-auto ">
      <div className="flex justify-between ">
        <h2 className="flex flex-col font-medium">
          <span className="text-white text-2xl font-medium">
            Bachelor of Science in Computer Science - (BSC)
          </span>
          <span className="text-lg text-gray-400">Uttara University</span>
        </h2>
        <div className="flex items-center text-lg text-gray-300 mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          <span>2022 - 2025</span>
        </div>
      </div>
      <span className="pb-4 text-sm text-gray-300">
        Currently pursuing my degree in Computer Science, where I'm focusing on
        software development, web technologies, and database management. I'm
        passionate about coding and love solving complex problems through
        technology.
      </span>

      <div className="my-4">
        <h4 className="flex items-center text-sm font-semibold mb-2 text-white ">
          <Trophy className="w-4 h-4 mr-2 text-lime-400" />
          Achievements
        </h4>
        <ul className="list-disc list-inside text-base text-gray-300 space-y-1">
          <li>Organize Web </li>
          <li>Dean's List Award for Academic Excellence</li>
          <li>Best Project Award in Final Year</li>
        </ul>
      </div>
      <div>
        <h4 className="flex items-center text-base font-semibold mb-2 text-white">
          <BookOpen className="w-4 h-4 mr-2 text-lime-400 " />
          Key Courses
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Data Structures and Algorithms",
            "Web Development",
            "Database Management",
            "Software Engineering",
            "Artificial Intelligence",
          ].map((course, index) => (
            <span
              key={index}
              className="badge bg-zinc-700 border-none text-white py-3"
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
