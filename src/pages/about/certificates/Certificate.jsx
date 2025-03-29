const Certificate = ({ certificate }) => {
  return (
    <a
      key={certificate._id}
      href={certificate?.credential || ""}
      target="_blank"
    >
      <div className="px-2" key={certificate._id}>
        <div className="relative card card-compact bg-zinc-900 shadow-xl border border-zinc-50/10 group p-2 overflow-hidden ">
          <figure className="overflow-hidden">
            <img
              className="group-hover:scale-110 transition-transform duration-300 rounded-md w-full md:h-[280px]"
              src={certificate?.image}
              alt={certificate?.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-zinc-50 font-bold">
              {certificate?.title}
            </h2>
            <p>{certificate?.platform}</p>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">
              View Credential
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Certificate;
