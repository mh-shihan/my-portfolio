import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import ScrollPageToTop from "../components/ScrollPageToTop";
const BlogLayout = () => {
  return (
    <div>
      <ScrollPageToTop />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default BlogLayout;
