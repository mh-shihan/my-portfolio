import { useEffect, useState } from "react";
import BlogContainer from "../../shared/BlogContainer";
import BlogHeader from "./BlogHeader";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  console.log(blogs);
  return (
    <div className="">
      <BlogHeader
        title="Blogs"
        description="I write about JavaScript, MERN Stack, Frontend tools and tech, Backend tech, Nextjs, and New technologies.
          Subscribe to my newsletter to stay in touch. I sync once a month with
          no spam and ads."
      />
      <BlogContainer>
        <div className="flex flex-col">
          {blogs?.map((blog, idx) => (
            <Blog key={idx} blog={blog}></Blog>
          ))}
        </div>
      </BlogContainer>
    </div>
  );
};

export default Blogs;
