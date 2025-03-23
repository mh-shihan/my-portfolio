import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <div className="interFont">
      <Navbar></Navbar>
      <div className=" ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
