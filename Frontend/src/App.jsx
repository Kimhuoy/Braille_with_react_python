import React from "react";
import HomePage from "./Components/Home/homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Guideline from "./Components/Home/guideline-page";
import AboutUs from "./Components/Home/about-us";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/guideline",
          element: <Guideline />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
