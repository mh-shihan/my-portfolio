import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/about-page/AboutPage";
import ErrorPage from "../pages/error/ErrorPage";
import Login from "../pages/login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProject from "../pages/dashboard/AddProject";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddCertificate from "../pages/dashboard/AddCertificate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "about", element: <AboutPage></AboutPage> },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      { path: "add-project", element: <AddProject></AddProject> },
      { path: "add-certificate", element: <AddCertificate></AddCertificate> },
    ],
  },
]);
