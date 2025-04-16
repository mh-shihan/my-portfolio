import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ScrollPageToTop from "../components/ScrollPageToTop";
import ScrollProgress from "../components/ScrollProgress";

const MainLayout = () => {
  return (
    <div className="interFont">
      <ScrollPageToTop />
      <Navbar />
      <div className="pt-16 max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20">
        <Outlet></Outlet>
      </div>
      <Footer />
      <ScrollProgress />
    </div>
  );
};

export default MainLayout;
