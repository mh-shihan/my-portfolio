import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import { Helmet } from "react-helmet";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white interFont">
      <Helmet>
        <title>Dashboard | Shihan&apos;s Portfolio </title>
      </Helmet>
      {/* Left Side: Sidebar Component */}
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
