/* eslint-disable react-hooks/rules-of-hooks */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/layout/AppLayout";
import Error from "./ui/Error";
import HomePage from "./ui/pages/HomePage";
import TeamPage from "./ui/pages/TeamPage";
import AboutPage from "./ui/pages/AboutPage";
import ContactPage from "./ui/pages/ContactPage";
import ProductPage from "./ui/pages/ProductPage";

const App = () => {
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
          path: "/product",
          element: <ProductPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
