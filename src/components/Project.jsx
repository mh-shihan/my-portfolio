import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const Project = ({ project }) => {
  const handleProjectDetails = (id) => {
    console.log(id);
    console.log("Project name", project.title);
  };

  return (
    <div className="px-2" key={project._id}>
      <div className="card card-compact bg-zinc-900 shadow-xl border border-zinc-50/10 group p-2">
        <figure className="overflow-hidden ">
          <img
            className=" group-hover:scale-110 transition rounded-md"
            src={project?.img}
            alt={project?.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="flex justify-between">
            <span className="card-title font-bold text-[#AFD138]">
              {project?.title}
            </span>
            <span onClick={() => handleProjectDetails(project._id)}>
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
              >
                <span className="text-sm text-zinc-800">Details</span>
                <FaArrowRight className="text-lg text-zinc-800" />
              </button>
              <ProjectDetails project={project}></ProjectDetails>
            </span>
          </h2>
          <p>{project?.description?.slice(0, 100)}...</p>
          <div className="space-x-2">
            {project?.tags?.map((tag, idx) => (
              <div
                key={idx}
                className="badge bg-zinc-700 border-none text-zinc-300  mb-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-right  flex  justify-center gap-2 md:gap-0 md:justify-between">
            <span>
              {project?.live_link && (
                <Link
                  to={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
                >
                  <IoIosLink className="text-xl text-zinc-800 hidden md:block" />
                  <span className="text-sm text-zinc-800">Live</span>
                </Link>
              )}
            </span>
            <span>
              {project?.client_link && (
                <Link
                  to={project.client_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
                >
                  <FaGithub className="text-xl text-zinc-800 hidden md:block" />
                  <span className="text-sm text-zinc-800">Client</span>
                </Link>
              )}
            </span>
            <span>
              {project?.server_link && (
                <Link
                  to={project.server_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
                >
                  <FaGithub className="text-xl text-zinc-800 hidden md:block" />
                  <span className="text-sm text-zinc-800">Server</span>
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
