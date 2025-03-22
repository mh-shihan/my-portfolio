import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-900/0 interFont">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto h-[100vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
