import React from "react";
import ReactDOM from "react-dom/client";
import routesConfig from "./routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./GlobalStyles.js";

const routes = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
