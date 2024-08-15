import React from 'react'
import InputForm from '../components/InputForm'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <div className=" con-align h-[100vh] flex justify-between gap-2 max-md:flex-col-reverse ">
      {/* password */}
      <div className="w-1/2 flex justify-center items-center max-md:w-full">
        <div className=" px-5 w-[410px] max-md:w-full">
          <h3 className="text-[28px] leading-9 mb-2  font-bold">
            Welcome Back
          </h3>
          <p className="text-[#313957] text-lg mb-2">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </p>
          <InputForm
            type="email"
            label=" Email"
            placeholder="Example@email.com"
          />
          <InputForm
            type="password"
            label=" Password"
            placeholder="At least 8 characters"
          />
          <div className="mt-5 flex justify-end  text-[#1E4AE9]">
            <p>Forgot Password?</p>
          </div>
          <button className="btn w-full bg-[#162D3A] text-white mt-3">
            Sign in
          </button>
          <div>
            <div className="flex items-center justify-center mt-4">
              <div className="h-px bg-gray-700 w-1/2"></div>
              <p className="mx-4">or</p>
              <div className="h-px bg-gray-700 w-1/2"></div>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-5 max-md:flex-wrap">
            <button className="btn  flex items-center w-full bg-[#F3F9FA]">
              <FcGoogle className="text-xl" />
              <span className="text-xl">Sign in with Google</span>
            </button>
            <button className="btn  flex items-center w-full bg-[#F3F9FA]">
              <FaFacebook className="text-xl text-blue-500 " />
              <span className="text-xl">Sign in with Facebook</span>
            </button>
          </div>
          <p className="text-center mt-5 flex  justify-center gap-1">
            Don't you have an account?
            <button className="capitalize link-primary"> Sign up</button>
          </p>
        </div>
      </div>
      {/* img */}
      <div className="">
        <img className=" h-full w-full max-md:h-[180px] object-center" src="./images/manzara.png" alt="" />
      </div>
    </div>
  );
}

export default Login