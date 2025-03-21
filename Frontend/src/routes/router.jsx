
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import CartPage from "../pages/Book/CartPage";
import CheckoutPage from "../pages/Book/CheckoutPage";
import SingleBook from "../pages/Book/SingleBook";


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
            element: <h1>login</h1>,
        },
        {
          path:"/register",
          element:<h1>Register</h1>,
        },
        {
          path:"/cart",
          element: <CartPage/>,
        },
        {
          path:"/checkout",
          element: <CheckoutPage/>,
        },
        {
          path:"/books/:id",
          element:<SingleBook/>
        },
      ]
    },
  ]);