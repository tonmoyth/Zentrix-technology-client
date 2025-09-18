import { Children, Component } from "react";
import MainLayout from "../Layout/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: 'products',
          Component: Products
        },
        {
          path: 'service',
          Component: Services
        }
    ]
  },
]);