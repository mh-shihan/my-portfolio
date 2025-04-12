import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import BlogHeader from "../pages/blogs/BlogHeader";

const BlogLayout = () => {
  return (
    <div>
      <Navbar />

      <BlogHeader
        title="Blogs"
        description="I write about JavaScript, MERN Stack, Frontend tools and tech, Backend tech, Nextjs, and New technologies.
          Subscribe to my newsletter to stay in touch. I sync once a month with
          no spam and ads."
      />

      <div className="pt-16 max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default BlogLayout;
