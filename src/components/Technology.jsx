const Technology = ({ skill }) => {
  return (
    <div
      className="flex gap-2 items-center ring-2 ring-inset ring-zinc-50/10 rounded-xl p-3 hover:bg-zinc-800 transition-colors group"
      key={skill._id}
    >
      <figure>
        <img
          className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 group-hover:bg-zinc-900 transition-colors p-3"
          width={40}
          height={32}
          src={skill?.img}
          alt={skill?.technology}
        />
      </figure>
      <div className="flex flex-col ">
        <h3 className="text-xl font-semibold">{skill?.technology}</h3>
        <p className="text-sm">{skill?.description}</p>
      </div>
    </div>
  );
};

export default Technology;
