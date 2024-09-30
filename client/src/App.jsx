// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import HomePage from "./pages/homePage/homePage";
import AllMajors from "./pages/allMajor/allMajors";
import MajorReview from "./pages/majorReview/majorReview";
import WriteReview from "./pages/writeReview/writeReview";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import UsuagePage from "./pages/usuagePage/usuagePage";
import AboutUsPage from "./pages/aboutUsPage/aboutusPage";
import { Layout } from "./pages/layout/layout";
import { reviewloader } from "./lib/loaders";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/majors",
          element: <AllMajors/>
        },
        {
          path: "/majors/:majorName",
          element: <MajorReview />,
          loader: reviewloader
        },
        {
          path: "/reviews/:majorName",
          element: <WriteReview />,
          loader: reviewloader
        },
        {
          path: "/register",
          element: <RegisterPage/>
        },
        {
          path: "/login",
          element: <LoginPage/>
        },

        {
          path: "/aboutus",
          element: <AboutUsPage/>
        },

        {
          path: "/usuage",
          element: <UsuagePage/>
        },

      ]
    },

  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

