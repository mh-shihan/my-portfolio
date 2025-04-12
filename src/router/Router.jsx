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
import AddTech from "../pages/dashboard/AddTech";
import Messages from "../pages/dashboard/Messages";
import AdminRoute from "./AdminRoute";
import UpdateResumeURL from "../pages/dashboard/UpdateResumeURL";
import Blogs from "../pages/blogs/Blogs";
import BlogLayout from "../layouts/BlogLayout";

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

  // Blog
  {
    path: "/blogs",
    element: <BlogLayout></BlogLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },

  // Login
  {
    path: "/login",
    element: <Login></Login>,
  },

  // Dashboard
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout></DashboardLayout>
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      { path: "add-project", element: <AddProject></AddProject> },
      { path: "add-certificate", element: <AddCertificate></AddCertificate> },
      { path: "add-tech", element: <AddTech></AddTech> },
      { path: "messages", element: <Messages></Messages> },
      { path: "resume", element: <UpdateResumeURL></UpdateResumeURL> },
    ],
  },
]);
