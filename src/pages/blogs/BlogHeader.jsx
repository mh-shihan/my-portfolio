const BlogHeader = ({ title, description }) => {
  return (
    <div className="h-[80vh] bg-[linear-gradient(315deg,_#130f40_0%,_#000000_74%)] relative">
      <div className="absolute pt-16 max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20 top-28">
        <h1 className="text-7xl font-medium bg-[linear-gradient(to_bottom,_#fff,_#696969)] bg-clip-text text-transparent interFont py-2">
          {title}
        </h1>
        <p className="text-[rgb(180,180,180)] text-xl mt-4 w-1/2 ml-12">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
