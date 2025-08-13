import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Contact from "../components/Contact/Contact";
<<<<<<< HEAD
import Announcement from "../components/Announcement/Announcement";
import DashboardLayout from "../Layouts/DashboardLayout";
=======
import AnnouncementPage from "../components/Announcements_News/AnnouncementPage";
>>>>>>> f4a80fe4dff056f1c6d5c3cb1aa394d43f8b14b1

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/announcement",
        element: <AnnouncementPage />
      },
      {
        path: "/dashboard/:role",
        element: <DashboardLayout />,
      },
    ],
  },
]);

export default routers;
