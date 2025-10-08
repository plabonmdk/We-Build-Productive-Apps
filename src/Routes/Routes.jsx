import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";

import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ProductDetails from "../Pages/AppsDetails";
import AppsDetails from "../Pages/AppsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement:<p>Loading........</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=> fetch("../Data.json"),
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path:"/appsDetails/:id",
        element:<AppsDetails></AppsDetails>
      }
    ],
  },
  
]);

export default router;
