import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routesConfig from './routes.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
