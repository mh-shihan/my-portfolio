import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import ScrollPageToTop from "../components/ScrollPageToTop";
import ScrollToTop from "../components/ScrollToTop";

const BlogLayout = () => {
  return (
    <div>
      <ScrollPageToTop />

      <Navbar />

      <Outlet />

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default BlogLayout;
