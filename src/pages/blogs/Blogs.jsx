import BlogContainer from "../../shared/BlogContainer";
import BlogHeader from "./BlogHeader";

const Blogs = () => {
  return (
    <div className="">
      <BlogHeader
        title="Blogs"
        description="I write about JavaScript, MERN Stack, Frontend tools and tech, Backend tech, Nextjs, and New technologies.
          Subscribe to my newsletter to stay in touch. I sync once a month with
          no spam and ads."
      />
      <BlogContainer></BlogContainer>
    </div>
  );
};

export default Blogs;
