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
import BlogDetails from "../pages/blogs/BlogDetails";
import PostBlog from "../pages/dashboard/PostBlog";

const baseURL = import.meta.env.VITE_SERVER_API;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <AboutPage /> },
    ],
  },

  // Blog
  {
    path: "/blogs",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`${baseURL}/blogs/${params.id}`),
      },
    ],
  },

  // Login
  {
    path: "/login",
    element: <Login />,
  },

  // Dashboard
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      { path: "add-project", element: <AddProject /> },
      { path: "add-certificate", element: <AddCertificate /> },
      { path: "add-tech", element: <AddTech /> },
      { path: "messages", element: <Messages /> },
      { path: "resume", element: <UpdateResumeURL /> },
      { path: "post-blog", element: <PostBlog /> },
    ],
  },
]);
