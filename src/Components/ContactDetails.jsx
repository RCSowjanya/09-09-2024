import React from "react";
import { FaRegUser } from "react-icons/fa";
const ContactDetails = ({ formData, handleChange }) => {
  return (
    <div className="">
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Contact Details
      </h2>
      <div className="flex gap-5 max-[1000px]:flex-col w-full">
        <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Mobile number"
            className="w-full px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-lg placeholder-[#8A6112] outline-none focus:outline-none"
          />
        </div>
        <div className="flex items-center border border-[#CDC4B1] w-full rounded-md bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
