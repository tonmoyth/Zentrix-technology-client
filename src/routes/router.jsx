import { Children, Component } from "react";
import MainLayout from "../Layout/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);