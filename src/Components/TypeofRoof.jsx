import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const TypeofRoof = ({
  formData,
  handleRoofTypeChange,
  handleChange,
  errors,
}) => {
  const [otherDetails, setOtherDetails] = useState("");

  return (
    <div className="">
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
        Type of Roof
      </h2>
      <div className="w-full">
        <div className="flex flex-wrap gap-3 items-center justify-center w-full">
          <button
            className={`px-11 py-4 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  shadow-md border-dashed ${
              formData.typeofRoof === "concrete"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleRoofTypeChange("concrete")}
          >
            <FaRegUser
              className={`mx-auto mb-2 ${
                formData.typeofRoof === "concrete"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Concrete
          </button>
          <button
            className={`px-11 py-4 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  shadow-md border-dashed ${
              formData.typeofRoof === "tinShade"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleRoofTypeChange("tinShade")}
          >
            <FaRegUser
              className={`mx-auto mb-2 ${
                formData.typeofRoof === "tinShade"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Tin Shade
          </button>
          <button
            className={`px-11 py-4 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  shadow-md border-dashed ${
              formData.typeofRoof === "others"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleRoofTypeChange("others")}
          >
            <FaRegUser
              className={`mx-auto mb-2 ${
                formData.typeofRoof === "others"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Others
          </button>
        </div>

        {/* Conditional Input Field for "Others" */}
        {formData.typeofRoof === "others" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Please specify:
            </label>
            <input
              type="text"
              value={otherDetails}
              onChange={(e) => setOtherDetails(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D3900D] focus:border-[#D3900D] sm:text-sm"
            />
          </div>
        )}
        {errors.typeofRoof && (
          <p className="text-red-500 text-sm mt-1 pl-[15rem] absolute">
            {errors.typeofRoof}
          </p>
        )}
      </div>
      {/* Total Roof Area */}
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center py-4 mt-6">
        Total Roof Area (in Sqft)
      </h2>
      <div className="flex gap-3 w-full max-[1000px]:flex-col">
        <div className="w-full">
          <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="lengthl"
              value={formData.lengthl}
              onChange={handleChange}
              placeholder="Enter Length"
              className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] outline-none"
            />
          </div>
          {errors.lengthl && (
            <p className="text-red-500 text-sm mt-1  py-3">{errors.lengthl}</p>
          )}
        </div>
        <div className="w-full">
          <div className="flex items-center w-full  border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="breadth"
              value={formData.breadth}
              onChange={handleChange}
              placeholder="Enter Breadth"
              className="w-full px-4 py-5 rounded-md text-[14px] shadow-lg placeholder-[#8A6112] outline-none"
            />
          </div>
          {errors.breadth && (
            <p className="text-red-500 text-sm mt-1 text-center py-3">
              {errors.breadth}
            </p>
          )}
        </div>
        <div className="w-full">
          <div className="flex items-center w-full order border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="sft"
              value={formData.sft}
              onChange={handleChange}
              placeholder="Sft"
              className="w-full px-4 py-5 text-[14px] rounded-md shadow-lg placeholder-[#8A6112] outline-none"
            />
          </div>
          {errors.sft && (
            <p className="text-red-500 text-sm mt-1 text-center py-3">
              {errors.sft}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeofRoof;
