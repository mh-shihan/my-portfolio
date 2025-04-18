import { useLoaderData } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import BlogContainer from "../../shared/BlogContainer";
import { BsCalendarDateFill } from "react-icons/bs";
import { TbCategoryFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import MarkdownPreview from "@uiw/react-markdown-preview"; //Very Important
import { Fullscreen } from "lucide-react";

const BlogDetails = () => {
  const blog = useLoaderData();
  const [blogContent, setBlogContent] = useState(``);
  useEffect(() => {
    setBlogContent(blog.blog);
  }, [blog]);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <BlogHeader title={blog.title} description={blog.short_description} />
      <BlogContainer>
        <div className=" flex flex-col xl:flex-row xl:grid xl:grid-cols-12 gap-6 xl:gap-12 ">
          <div className="w-full xl:col-span-9 mr-10">
            <div className="border-b mb-6 border-[#C4F000] pb-8 space-y-6 xl:max-w-full  overflow-hidden">
              <img
                className="rounded-sm w-full h-auto max-w-full object-cover aspect-video"
                src={blog.img}
                alt={blog.title}
              />
              <h2 className="text-white text-3xl md:text-4xl font-medium">
                {blog.title}
              </h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <p className="flex text-sm md:text-base items-center justify-center gap-2 text-[#1d1d26]  uppercase bg-[#C4F000] px-6 py-2 rounded-xl">
                  <BsCalendarDateFill /> {blog.posted_date}
                </p>
                <p className="flex text-sm md:text-base items-center justify-center gap-2 text-[#1d1d26]  uppercase bg-[#C4F000] px-6 py-2 rounded-xl">
                  <TbCategoryFilled />
                  {blog.category}
                </p>
              </div>
            </div>

            {/* Markdown Content */}
            <div className=" max-w-full px-4 xl:px-0 overflow-x-hidden ">
              <MarkdownPreview
                source={blogContent}
                style={{
                  padding: 16,
                  overflow: "scroll",
                  maxWidth: Fullscreen,
                }}
                rehypeRewrite={(node, index, parent) => {
                  if (
                    node.tagName === "a" &&
                    parent &&
                    /^h(1|2|3|4|5|6)/.test(parent.tagName)
                  ) {
                    parent.children = parent.children.slice(1);
                  }
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-6 px-3 md:px-0">
              {blog.tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-outline text-gray-200 hover:text-gray-200 border border-[#C4F000] hover:border-[#C4F000]  mt-3 ml-2 cursor-default hover:bg-transparent"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="xl:col-span-3 flex flex-col">
            <img
              className="rounded-sm w-full h-auto object-cover"
              src={blog.img}
              alt={blog.title}
            />
          </div>
        </div>
      </BlogContainer>
    </div>
  );
};

export default BlogDetails;
