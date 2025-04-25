const BlogHeader = ({ title, description }) => {
  return (
    <div className="h-[50vh] md:h-[70vh] xl:h-[80vh] bg-[linear-gradient(315deg,_#130f40_0%,_#000000_74%)] relative px-2 md:px-0">
      <div className="max-w-[1360px] mx-auto pt-20 xl:pt-28  px-0 md:px-6 xl:px-20">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-medium bg-[linear-gradient(to_bottom,_#fff,_#696969)] bg-clip-text text-transparent interFont py-2">
          {title}
        </h1>
        <p className="text-[rgb(180,180,180)] text-sm md:text-base xl:text-xl mt-2 md:mt-4 w-full xl:w-1/2  xl:ml-12 pr-2 md:pr-0 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
