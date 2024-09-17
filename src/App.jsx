import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Components
import Home from "./Home";
import MentorProfile from "./Pages/MentorProfile" 
import Signin from "./Pages/Signin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentorProfile",
    element: <MentorProfile />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/signin",
    element: <Signin/>,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
