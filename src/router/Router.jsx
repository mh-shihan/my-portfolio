import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/about-page/AboutPage";
import ErrorPage from "../pages/error/ErrorPage";
import Login from "../pages/login/Login";

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
    path: "login",
    element: <Login></Login>,
  },
]);
