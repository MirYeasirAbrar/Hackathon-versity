import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../components/Login'/Login";
import Register from "../components/Register/Register";

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
    ],
  },
]);

export default routers;
