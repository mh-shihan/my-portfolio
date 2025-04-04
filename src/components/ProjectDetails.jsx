import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";

const ProjectDetails = ({ project, modalId }) => {
  return (
    <div className="">
      <dialog id={modalId} className="modal ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="z-20 btn text-white text-xl font-bold btn-sm btn-circle btn-ghost absolute right-[15%] top-8">
            ✕
          </button>
        </form>
        <div className="modal-box w-11/12 max-w-5xl text-white bg-zinc-900 opacity-2 shadow-lg shadow-zinc-800">
          <div className="text-center">
            <h2 className="text-4xl font-bold">{project?.title}</h2>
            <p className="text-base text-gray-400 mt-2">{project?.subtitle}</p>
          </div>

          {/* Grid Layout for Project Details */}
          <div className="grid grid-cols-1 gap-5 my-10 items-start">
            {/* Left Content (Project Details & Image) */}
            <div className="md:max-h-[70vh]">
              <img
                className="rounded-lg shadow-md w-full md:max-h-[70vh] object-cover"
                src={project?.img}
                alt={project?.title}
              />
            </div>
          </div>

          {/* bottom */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* left Content */}
            <div className="md:col-span-8 space-y-4">
              <SectionTitle
                sectionName={"Short description of this project"}
              ></SectionTitle>
              <p className="text-justify text-gray-300">
                {project?.description}
              </p>

              <SectionTitle
                sectionName={"Key features of this project"}
              ></SectionTitle>

              <p className="text-justify text-gray-300">
                {project?.key_features}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2">
                {project?.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-3 text-[12px] md:text-base">
                <Link
                  to={project?.live_link}
                  target="_blank"
                  className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm "
                >
                  Live Link
                </Link>
                <Link
                  to={project?.client_link}
                  target="_blank"
                  className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm"
                >
                  Client Repo
                </Link>
                <Link
                  to={project?.server_link}
                  target="_blank"
                  className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm"
                >
                  Server Repo
                </Link>
              </div>
            </div>
            {/* Right Content (Information Panel) */}
            <div className="bg-zinc-800 w-full p-6 pt-8 rounded-lg shadow-lg md:col-span-4 md:-mt-32">
              <h3 className="text-xl font-semibold mt-8 mb-4">Information</h3>
              <div className="space-y-4">
                <p>
                  <span className="font-bold text-gray-300">Project Name:</span>{" "}
                  {project?.title}
                </p>
                <p>
                  <span className="font-bold text-gray-300">Clients:</span>{" "}
                  {project?.client || "Unknown"}
                </p>
                <p>
                  <span className="font-bold text-gray-300">Developers:</span>{" "}
                  {project?.developer || "Unknown"}
                </p>
                <p>
                  <span className="font-bold text-gray-300">Duration:</span>{" "}
                  {project?.duration || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectDetails;
