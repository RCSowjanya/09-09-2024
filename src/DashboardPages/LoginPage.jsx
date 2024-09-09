import React from "react";
import logo from "../Images/cusplogo.webp";

const LoginPage = () => {
  return (
    <div className="login-bg h-screen w-full flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} className="w-24 mb-4" alt="cusp-logo" />
          <h1 className="font-[700] text-[#153060] text-[40px] mb-2 ad">
            Login
          </h1>
          <p className="text-center mb-3 text-[14px] font-[400] text-[#828282]">
            Enter Email and Password to Login to Your Account
          </p>
        </div>
        <form className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-[14px] font-[400] text-[#153060]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"
            required
          />
          <label
            htmlFor="password"
            className="mb-2 text-[14px] font-[400] text-[#153060]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#0BB68D] text-white p-2 text-[14px] my-4 rounded uppercase"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
