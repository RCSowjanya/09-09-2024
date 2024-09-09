import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const YourName = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
          Your Name
        </h2>
        <div className="mb-4 relative pb-2">
          <div className="flex items-center w-full border quote rounded-md bg-[#FFFDF9]">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-2 py-5 text-[16px] max-[600px]:text-[12px] font-[400] w-full rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
              placeholder="Please Enter Your Name"
              required
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.name}
            </p>
          )}
        </div>
      </div>
      {/*---contact details---*/}
      {/*---contact details---*/}
      <div className="mt-5">
        <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-4">
          Contact Details
        </h2>
        <div className="flex gap-5 max-[1000px]:flex-col w-full max-[1000px]:space-y-5">
          <div className="w-full relative">
            <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Mobile number"
                className="w-full px-2 py-5 text-[16px] max-[600px]:text-[12px]  font-[400] rounded-md shadow-lg placeholder-[#8A6112] outline-none focus:outline-none"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 pl-4 absolute">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <div className="flex items-center border border-[#CDC4B1] w-full rounded-md bg-[#FFFDF9] quote">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-2 py-5 text-[16px] max-[600px]:text-[12px]  font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 pl-4 absolute">
                {errors.email}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourName;
