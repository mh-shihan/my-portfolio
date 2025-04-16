import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import ScrollPageToTop from "../components/ScrollPageToTop";
import ScrollProgress from "../components/ScrollProgress";
const BlogLayout = () => {
  return (
    <div>
      <ScrollPageToTop />

      <Navbar />

      <Outlet />

      <Footer />

      <ScrollProgress />
    </div>
  );
};

export default BlogLayout;
