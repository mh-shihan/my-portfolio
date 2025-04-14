import { useLoaderData } from "react-router-dom";
import BlogHeader from "./BlogHeader";

const BlogDetails = () => {
  const blog = useLoaderData();
  return (
    <div>
      <BlogHeader title={blog.title} description={blog.short_description} />
      {blog.title}
    </div>
  );
};

export default BlogDetails;
