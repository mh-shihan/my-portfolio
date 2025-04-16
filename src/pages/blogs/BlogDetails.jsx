import { useLoaderData } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import BlogContainer from "../../shared/BlogContainer";
import { BsCalendarDateFill } from "react-icons/bs";
import { TbCategoryFilled } from "react-icons/tb";
import Markdown from "react-markdown";

const BlogDetails = () => {
  const blog = useLoaderData();
  return (
    <div>
      <BlogHeader title={blog.title} description={blog.short_description} />
      <BlogContainer>
        <div className=" flex xl:grid xl:grid-cols-12 gap-6 xl:gap-10 ">
          <div className="xl:col-span-9 mr-10  ">
            <div className="border-b border-[#C4F000] pb-8 space-y-6">
              <img
                className="rounded-sm w-full"
                src={blog.img}
                alt={blog.title}
              />
              <h2 className="text-white text-3xl md:text-4xl font-medium">
                {blog.title}
              </h2>
              <div className="flex gap-10">
                <p className="flex  items-center justify-center gap-2 text-[#1d1d26]  uppercase bg-[#C4F000] px-6 py-2 rounded-xl">
                  <BsCalendarDateFill /> {blog.posted_date}
                </p>
                <p className="flex  items-center justify-center gap-2 text-[#1d1d26]  uppercase bg-[#C4F000] px-6 py-2 rounded-xl">
                  <TbCategoryFilled />
                  {blog.category}
                </p>
              </div>
            </div>
            <Markdown>{blog.blog}</Markdown>
            {/* <pre className="whitespace-pre-wrap text-gray-200">{blog.blog}</pre> */}
          </div>

          <div className="xl:col-span-3 border">
            <img className="rounded-sm" src={blog.img} alt={blog.title} />
          </div>
        </div>
      </BlogContainer>
    </div>
  );
};

export default BlogDetails;
