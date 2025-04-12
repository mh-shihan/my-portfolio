import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const BlogLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="pt-16 max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogLayout;
