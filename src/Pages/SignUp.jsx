import React,{ useState } from "react";
import { Link } from "react-router-dom";
// imoport images
import logo from "../assets/LOGOS/MSlogo.png";
// importing Components

// import icons from react icons
import { GrGoogle } from "react-icons/gr"; 
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";


const SignUp = () => {
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
    <div className="h-screen flex flex-col justify-center align-middle bg-gradient-to-r from-blue-400 to-purple-400 gap-2">
      {/* Growth Mentor Logo */}
      <Link to="/" className="w-fit mx-auto">
        <span className="flex max-sm:flex-col gap-2 w-fit mx-auto text-center">
          <img
            src={logo}
            alt="Mentor Sarthi Signin"
            className="h-12 max-sm:w-fit max-sm:mx-auto"
          />
          <h1 className="flex gap-2 text-3xl font-bold my-auto h-fit w-fit mx-auto">
            Mentor Sarthi
          </h1>
        </span>
      </Link>

      {/* Main Signup Card */}
      <div className="h-fit sm:min-w-96 mx-auto bg-white p-4 rounded-xl flex flex-col gap-2 scale-90 ">
        <p className="font-bold text-2xl">
          Create Your MentorSarthi account
        </p>

        <hr />
        <div className="flex gap-2 max-md:flex-col">
          <sapn>
            <label htmlFor="FName" className="font-semibold">
              First Name
            </label>
            <input
              type="text"
              className="w-full h-12  rounded-md border-2 border-gray-200 p-1 focus:shadow-lg focus:shadow-blue-400"
              id="FName"
            />
          </sapn>
          <span>
            <label htmlFor="LName" className="font-semibold">
              Last Name
            </label>
            <input
              type="text"
              className="w-full h-12  rounded-md border-2 border-gray-200 p-1 focus:shadow-lg focus:shadow-blue-400"
              id="LName"
            />
          </span>
        </div>

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
        <button className="w-full p-2 bg-purple-600 rounded-xl text-2xl text-white hover:bg-violet-500 hover:text-black font-bold font- ">
          Sign in
        </button>

        <p className="text-gray-500 text-center text-sm">By signing up, you agree to our <span className="text-gray-600 underline" >terms of use.</span></p>

        <hr />

         {/* Social Accounts Signin  */}
         <p className="text-gray-600 w-fit mt-2 mx-auto font-semibold">SignUp with your Social Accounts</p>
        <span className="flex flex-col gap-2">
          <button className="flex text-xl text-gray-500 bg-gray-300 w-full rounded-md p-2 align-middle gap-2 hover:bg-gray-200 hover:text-gray-600"><GrGoogle className="relative top-1 text-2xl my-auto"/> Sign in With Google</button>

          <button className="flex text-xl text-gray-500 bg-gray-300 w-full rounded-md p-2  gap-2 hover:bg-gray-200 hover:text-gray-600"><FaFacebook  className="relative top-1 text-2xl my-auto"/> Sign in With Facebook</button>

          <button className="flex text-xl text-gray-500 bg-gray-300 w-full rounded-md p-2 align-middle gap-2 hover:bg-gray-200 hover:text-gray-600"><BsLinkedin  className="relative top-1 text-2xl my-auto"/> Sign in With Linkedin</button>


        </span>
        
        <div className="flex justify-between">
          <p className="w-fit text-xs text-gray-600">Don't have an Account? <Link to="/signin" className="hover-underline-animation">SignIn</Link></p>
          <p className="w-fit text-xs text-gray-600 font-playWrite max-sm:hidden">made with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
