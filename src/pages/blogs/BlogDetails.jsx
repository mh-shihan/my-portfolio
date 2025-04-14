import { useLoaderData } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import BlogContainer from "../../shared/BlogContainer";

const BlogDetails = () => {
  const blog = useLoaderData();
  return (
    <div>
      <BlogHeader title={blog.title} description={blog.short_description} />
      <BlogContainer>
        <div className=" flex flex-col items-center xl:grid gird-cols-12 gap-6 xl:gap-12">
          <div className="col-span-6"></div>
          <div className="col-span3"></div>
        </div>
      </BlogContainer>
    </div>
  );
};

export default BlogDetails;
