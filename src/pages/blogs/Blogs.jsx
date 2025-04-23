import BlogContainer from "../../shared/BlogContainer";
import BlogHeader from "./BlogHeader";
import Blog from "./Blog";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../shared/Loader";
const Blogs = () => {
  const [blogs, isLoading] = useFetchData("/blogs", "blogs");
  // console.log(blogs);

  return (
    <div className="">
      <BlogHeader
        title="Blogs"
        description="I write about JavaScript, MERN Stack, Frontend tools and tech, Backend tech, Nextjs, and New technologies.
          Subscribe to my newsletter to stay in touch. I sync once a month with
          no spam and ads."
      />
      <BlogContainer>
        <div className="flex flex-col gap-10">
          {isLoading && <Loader />}
          {blogs?.map((blog, idx) => (
            <Blog key={idx} blog={blog}></Blog>
          ))}
        </div>
      </BlogContainer>
    </div>
  );
};

export default Blogs;
