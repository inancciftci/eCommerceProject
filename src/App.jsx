/* eslint-disable react-hooks/rules-of-hooks */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/layout/AppLayout";
import Error from "./ui/Error";
import HomePage from "./ui/pages/HomePage";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
