import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import CubeApp from "./components/cube/CubeApp.tsx";
import Home from "./components/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/cube',
        element: <CubeApp />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);