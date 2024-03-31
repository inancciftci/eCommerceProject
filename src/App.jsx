/* eslint-disable react-hooks/rules-of-hooks */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/layout/AppLayout";
import Error from "./ui/Error";
import HomePage from "./ui/pages/HomePage";
import TeamPage from "./ui/pages/TeamPage";
import AboutPage from "./ui/pages/AboutPage";
import ContactPage from "./ui/pages/ContactPage";
import ProductPage from "./ui/pages/ProductPage";
import SignupPage from "./ui/pages/SignupPage";
import LoginPage from "./ui/pages/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/authentication/userSlice";
import { API_URL } from "./app/api";
import axios from "axios";
import ShopPage from "./ui/pages/ShopPage";
import CartPage from "./features/cart/CartPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios
      .get(`${API_URL}/verify`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => dispatch(setUser(res.data)));
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/team",
          element: <TeamPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/product/:category/:productId/:productName",
          element: <ProductPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
