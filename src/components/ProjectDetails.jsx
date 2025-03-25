import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="z-20 btn text-white btn-sm btn-circle btn-ghost absolute right-[1%] top-8">
            ✕
          </button>
        </form>
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold">{project?.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{project?.subTitle}</p>
          </div>

          {/* Grid Layout for Project Details */}
          <div className="grid grid-cols-1 gap-5 my-10 items-start">
            {/* Left Content (Project Details & Image) */}
            <div className="max-h-[70vh]">
              <img
                className="rounded-lg shadow-md w-full max-h-[70vh] object-cover"
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
              <p className="text-justify text-gray-300">{project?.details}</p>

              <SectionTitle
                sectionName={"Key features of this project"}
              ></SectionTitle>

              <p className="text-justify text-gray-300">{project?.features}</p>

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
              <div className="flex space-x-3">
                <Link
                  to={project?.live_link}
                  className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm "
                >
                  Live Link
                </Link>
                <Link
                  to={project?.client_link}
                  className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm"
                >
                  Client Repo
                </Link>
                <Link
                  to={project?.server_link}
                  className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm"
                >
                  Server Repo
                </Link>
              </div>
            </div>
            {/* Right Content (Information Panel) */}
            <div className="bg-zinc-800 p-6 pt-8 rounded-lg shadow-lg md:col-span-4 md:-mt-32">
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
                  <span className="font-bold text-gray-300">Duration:</span>{" "}
                  {project?.duration || "N/A"}
                </p>
              </div>
            </div>
          </div>
          {/* MOdal Action */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectDetails;
