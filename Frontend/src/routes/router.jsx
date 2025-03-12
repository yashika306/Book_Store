
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:"/",
            element: <Home/>,
        },
        {
            path:"/orders",
            element: <h1>Order</h1>,
        },
        {
            path:"/about",
            element: <h1>About us</h1>,
        },
        {
            path:"/login",
            element: <h1>Login</h1>,
        }
      ]
    },
  ]);