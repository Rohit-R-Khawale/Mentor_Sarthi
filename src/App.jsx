import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Components
import Home from "./Home";
import MentorProfile from "./Pages/MentorProfile" 
import Signin from "./Pages/Signin"
import SignUp from "./Pages/SignUp"

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
  },

  {
    path:"/signUp",
    element:<SignUp/>,
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
