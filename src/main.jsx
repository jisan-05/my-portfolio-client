import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: "/",
            element: <Home></Home> 
          }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
        <Toaster></Toaster>
    </StrictMode>
);
