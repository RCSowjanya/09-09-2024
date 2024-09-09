import React from "react";
import { FaRegUser } from "react-icons/fa";
const LocationDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
        Location Details
      </h2>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Auto Location"
        className="w-full px-6 py-2 rounded-full   shadow-lg placeholder-[#8A6112] focus:outline-none focus:ring-0 border-none"
      />
    </div>
  );
};

export default LocationDetails;
