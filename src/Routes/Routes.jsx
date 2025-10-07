import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";

import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
      },
      {
        path: "/Installation",
        element: <Installation></Installation>,
      },
    ],
  },
  
]);

export default router;
