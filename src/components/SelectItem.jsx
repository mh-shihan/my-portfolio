import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const locations = [
  "300 Feet",
  "Abdullahpur",
  "Adabor",
  "Adarsha Nagar",
  "Aftab Nagar",
  "Agargaon",
  "Agargaon Taltola",
];

const SelectItem = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSelection = (location) => {
    if (!selectedLocations.includes(location)) {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const removeSelection = (location) => {
    setSelectedLocations(selectedLocations.filter((item) => item !== location));
  };
  console.log(selectedLocations);

  return (
    <div className="w-full max-w-lg mx-auto relative">
      <label className="block text-sm font-medium text-gray-700">
        Preferred Location<span className="text-red-500">*</span>
      </label>
      <div
        className="mt-1 flex flex-wrap gap-2 items-center   border border-gray-300 rounded-md p-2 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedLocations.length === 0 && (
          <div className="w-full flex justify-between">
            <span className="text-gray-500">Select locations...</span>
            <span className="pt-1">
              {isDropdownOpen ? (
                <FaAngleUp className="text-white" />
              ) : (
                <FaAngleDown className="text-white" />
              )}
            </span>
          </div>
        )}
        {selectedLocations.map((location) => (
          <div
            key={location}
            className="bg-lime-500 text-purple-700 px-2 py-1 rounded flex items-center space-x-1"
          >
            <span className="text-white">{location}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeSelection(location);
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
        <ul className="absolute w-full mt-1 max-h-60 overflow-auto border border-gray-300 rounded-md bg-zinc-900 shadow-lg z-10">
          {locations.map((location) => (
            <li
              key={location}
              onClick={() => toggleSelection(location)}
              className={`p-2   ${
                selectedLocations.includes(location)
                  ? "bg-lime-500 cursor-not-allowed"
                  : "cursor-pointer hover:bg-purple-200"
              }`}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectItem;
