import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Roles from "../pages/Roles";
import Permissions from "../pages/Permissions";
import Layout from "../components/layout/Layout";
import Monitoring from "../pages/Monitoring";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/roles",
        element: <Roles />,
      },
      {
        path: "/permissions",
        element: <Permissions />,
      },
      {
        path: "/monitoring",
        element: <Monitoring />,
      },
    ],
  },
]);

export default router;
