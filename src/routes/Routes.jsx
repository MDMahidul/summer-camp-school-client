import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn&Up/SignIn";
import SignUp from "../pages/SignIn&Up/SignUp";
import DashBoard from "../layouts/DashBoard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/userprofile",
        element: <UserProfile/>,
      },
    ],
  },
]);

export default router;