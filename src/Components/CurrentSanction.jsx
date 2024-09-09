import React from "react";
import { FaRegUser, FaInfoCircle } from "react-icons/fa";

const CurrentSanction = ({ formData, handleChange, errors }) => {
  return (
    <div className="w-full">
      {/* Current sanction load and consumption over last month */}
      <div className="">
        {/* Current Sanction Load */}
        <div className="w-full max-[1000px]:mb-3 relative">
          <h2 className="text-[#004A9C] font-[600] text-[14px] text-center pt-6 pb-3">
            Current Sanction Load (In kW)
          </h2>
          <div className="flex flex-col">
            <div className="flex items-center border max-[1000px]:w-full w-[50%] mx-auto border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote mb-1">
              <div className="border-r border-r-[#8A6112] p-2 flex items-center">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="currentSanctionLoad"
                value={formData.currentSanctionLoad || ""}
                onChange={handleChange}
                placeholder="Enter Load"
                className="w-full px-2 py-5 rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
              />
              <div className="relative ml-2 flex items-center group">
                <FaInfoCircle className="text-[#8A6112] cursor-pointer mr-2" />
                <div className="absolute hidden group-hover:block bg-gray-700 text-white text-sm rounded p-2 top-full mt-[-2.3rem] right-full w-64 z-10">
                  Sanctioned Load is mentioned in your electricity bill
                </div>
              </div>
            </div>
            {errors.currentSanctionLoad && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {errors.currentSanctionLoad}
              </p>
            )}
          </div>
        </div>
        {/* Consumption Over Last Month */}
        <div className="w-full relative">
          <h2 className="text-[#004A9C] font-[600] text-[14px] text-center pt-6 pb-3">
            Consumption Over Last Month (in Units)
          </h2>
          <div className="flex flex-col">
            <div className="flex items-center border max-[1000px]:w-full w-[50%] mx-auto border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote mb-1">
              <div className="border-r border-r-[#8A6112] p-2">
                <FaRegUser className="text-[#8A6112] ml-3" />
              </div>
              <input
                type="number"
                name="consumption"
                value={formData.consumption || ""}
                onChange={handleChange}
                placeholder="Enter Values in Units"
                className="w-full px-2 py-5 rounded-md shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
              />
            </div>
            {errors.consumption && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {errors.consumption}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSanction;
