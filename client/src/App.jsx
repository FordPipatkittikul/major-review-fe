// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import HomePage from "./pages/homePage/homepage";
import AllMajors from "./pages/allMajor/allMajors";
import MajorReview from "./pages/majorReview/majorReview";
import WriteReview from "./pages/writeReview/writeReview";
import LoginPage from "./pages/longinPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import UsuagePage from "./pages/usuagePage/usuagePage";
import AboutUsPage from "./pages/aboutUsPage/aboutusPage";
import { Layout, RequireAuthLayout } from "./pages/layout/layout";

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
          element: <MajorReview />
        },
        {
          path: "/reviews/:majorName",
          element: <WriteReview />
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

