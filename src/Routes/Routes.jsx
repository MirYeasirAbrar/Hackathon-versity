import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../components/Login'/Login";
import Register from "../components/Register/Register";
import Contact from "../components/Contact/Contact";

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
        element: <Contact/>
      }
    ],
  },
]);

export default routers;
