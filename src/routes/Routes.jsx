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
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import InstructorRoute from "./InstructorRoute";
import StudentRoue from "./StudentRoue";
import AdminRoute from "./AdminRoute";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import InstructorDetails from "../pages/InstructorsPage/InstructorDetails";
import { getUser } from "../api/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <InstructorsPage />,
      },
      {
        path: "user/:email",
        element: <InstructorDetails />,
        loader: ({ params }) => getUser(params.email),
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
        element: <UserProfile />,
      },
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/selectedclasses",
        element: (
          <StudentRoue>
            <SelectedClass />
          </StudentRoue>
        ),
      },
      {
        path: "/dashboard/enrolledclasses",
        element: (
          <StudentRoue>
            <EnrolledClasses />
          </StudentRoue>
        ),
      },
      {
        path: "/dashboard/addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;