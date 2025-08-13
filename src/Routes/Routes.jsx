import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Contact from "../components/Contact/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import AnnouncementPage from "../components/Announcements_News/AnnouncementPage";
import EventRegistration from "../Registration_Form/EventRegistration";

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
        element: <AnnouncementPage />,
      },
      {
        path: "/dashboard/:role",
        element: <DashboardLayout />,
      },
      {
        path: "/eventRegistration/:eventId",
        element: <EventRegistration />,
      }
    ],
  },
]);

export default routers;
