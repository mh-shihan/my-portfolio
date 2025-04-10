import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const items = [
  // Core MERN Stack
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",

  // State Management
  "Redux",

  // Backend Utilities & Frameworks
  "Mongoose",
  "Prisma",

  // Frontend Libraries & Frameworks
  "Tailwind CSS",
  "Material-UI",
  "Shadcn/ui",

  // DevOps & Deployment
  "Docker",
  "Vercel",
  "AWS",
  "Firebase",

  // Database & Caching
  "MongoDB Atlas",
  "PostgreSQL (if hybrid)",
  "MySQL (if hybrid)",

  // Framework
  "Next.Js",
];

const SelectItem = ({ setTags }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setTags(selectedItems);
  }, [selectedItems, setTags]);

  const toggleSelection = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeSelection = (removedItem) => {
    setSelectedItems(selectedItems.filter((item) => item !== removedItem));
  };
  // console.log(selectedItems);

  return (
    <div className="relative">
      {/* <label className="block text-sm font-medium text-gray-700">
        Preferred Location<span className="text-red-500">*</span>
      </label> */}
      <div
        className="mt-1 flex flex-wrap gap-2 items-center  bg-zinc-950 border border-gray-300 rounded-md p-2 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedItems?.length === 0 && (
          <div className="w-full flex justify-between">
            <span className="text-gray-500">Select Tags...</span>
            <span className="pt-1">
              {isDropdownOpen ? (
                <FaAngleUp className="text-white" />
              ) : (
                <FaAngleDown className="text-white" />
              )}
            </span>
          </div>
        )}
        {selectedItems.map((item) => (
          <div
            key={item}
            className="bg-lime-500 text-purple-700 px-2 py-1 rounded flex items-center space-x-1"
          >
            <span className="text-white">{item}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeSelection(item);
              }}
              className="text-lg text-white font-bold hover:text-red-500"
            >
              {/* &times; */}
              <MdCancel />
            </button>
          </div>
        ))}
      </div>

      {isDropdownOpen && (
        <ul className="absolute w-full mt-1 max-h-72 overflow-auto border border-gray-300 rounded-md bg-zinc-900 shadow-lg z-10">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => toggleSelection(item)}
              className={`p-2   ${
                selectedItems.includes(item)
                  ? "bg-gray-500 cursor-not-allowed"
                  : "cursor-pointer hover:bg-zinc-500"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectItem;
