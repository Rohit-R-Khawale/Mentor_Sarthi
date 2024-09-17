import React, { useState } from "react";
import { Link } from "react-router-dom";
// importing Images
import logo from "../assets/LOGOS/MSlogo.png";
// import icons from react icons
import { GrGoogle } from "react-icons/gr"; 
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center align-middle bg-gradient-to-r from-blue-300 to-purple-300">

      {/* Growth Mentor Logo */}
      <Link to="/">
        <span className="flex gap-2 w-fit mx-auto mb-9">
          <img src={logo} alt="Mentor Sarthi Signin" className="h-12" />
          <h1 className="flex gap-2 text-3xl font-bold my-auto h-fit w-fit mx-auto">
            Mentor Sarthi
          </h1>
        </span>
      </Link>


      {/* Main Signin Card */}
      <div className="w-1/3 h-fit mx-auto bg-white p-4 rounded-xl flex flex-col gap-3 ">
        <p className="font-semibold text-2xl">Welcome Back, Sign in.</p>
        <hr className="h-0.5 border-gray-600 " />
        <div className="flex flex-col my-2 gap-1">
          {/* Email */}
          <span className="flex flex-col gap-2">
            <label htmlFor="Email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              className="w-full h-12  rounded-md border-2 border-gray-200 p-1 focus:shadow-lg focus:shadow-blue-400"
              id="Email"
            />
          </span>
          {/* Password */}
          <span className="flex flex-col gap-2">
            <label htmlFor="Password" className="text-xl">
              Password
            </label>
            <input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full h-12  rounded-md border-2 border-gray-200 p-1 focus:shadow-lg focus:shadow-blue-400"
              id="Password"
              
            />
            <p className="flex gap-2" htmlFor="ShowPass">
              <input type="checkbox" onClick={handleToggle} />
              Show Password
            </p>
          </span>
          {/* Sign in Button */}
          <button className="w-full p-2 bg-purple-600 rounded-xl text-2xl text-white hover:bg-violet-500 hover:text-black font-bold font- ">Sign in</button>


        {/* Social Accounts Signin  */}
        <p className="text-gray-400 w-fit mt-2 mx-auto">Signin with your Social Accounts</p>
        <span className="flex flex-col gap-2">
          <button className="flex text-xl text-gray-500 bg-gray-300 w-full rounded-md p-2 align-middle gap-2 hover:bg-gray-200 hover:text-gray-600"><GrGoogle className="relative top-1 text-2xl"/> Sign in With Google</button>

          <button className="flex text-xl text-gray-500 bg-gray-300 w-full rounded-md p-2  gap-2 hover:bg-gray-200 hover:text-gray-600"><FaFacebook  className="relative top-1 text-2xl"/> Sign in With Facebook</button>

          <button className="flex text-xl text-gray-500 bg-gray-300 w-full rounded-md p-2 align-middle gap-2 hover:bg-gray-200 hover:text-gray-600"><BsLinkedin  className="relative top-1 text-2xl"/> Sign in With Linkedin</button>


        </span>


        </div>
        <p className="w-fit text-xs text-gray-600 font-playWrite self-end">made with ❤️</p>
      </div>

     
    </div>
  );
};

export default Signin;
