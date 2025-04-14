import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="flex flex-col items-center xl:grid  xl:grid-cols-12 gap-6 xl:gap-12">
      <div className="xl:col-span-6 xl:max-w-[616px] xl:max-h-[380px] overflow-hidden rounded-md relative">
        <Link to={`/blogs/${blog._id}`}>
          <img
            className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:blur-sm rounded-md hover:rounded-md"
            src={blog.img}
            alt={blog.title}
          />
        </Link>
        <p className="absolute top-2 left-2 text-base md:text-lg  text-white bg-[#00000033] px-2 py-1 rounded-full">
          {blog.type}
        </p>
      </div>
      <div className="xl:col-span-6 space-y-4 md:space-y-6">
        <h4 className="text-base text-[#B4B4B4] uppercase font-medium">
          posted on {blog.posted_date}
        </h4>
        <h2 className="text-white text-3xl md:text-4xl font-medium">
          {blog.title}
        </h2>
        <Link to={`/blogs/${blog._id}`}>
          <button className="mt-4 md:mt-6 flex justify-center items-center gap-1 text-black font-medium bg-[#C4F000] px-8 py-4 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.25)] rounded-full hover:text-white  hover:bg-transparent border border-transparent hover:border hover:border-[#C4F000]">
            Read more
            <BsArrowRight className="pt-1 text-xl hover:text-white font-medium" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
