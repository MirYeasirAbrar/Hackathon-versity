import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import routers from "./Routes/Routes.jsx";
import ContextProvider from "./Context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={routers}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </ContextProvider>
);
