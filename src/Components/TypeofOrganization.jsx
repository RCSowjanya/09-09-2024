import React, { useState } from "react";
import { LuSchool } from "react-icons/lu";
import { MdOutlineFactory } from "react-icons/md";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { FaRegHospital } from "react-icons/fa";

const TypeofOrganization = ({ formData, handleOrganizationTypeChange }) => {
  const [otherDetails, setOtherDetails] = useState("");

  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-4">
        Type of Organization
      </h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {[
          { label: "Schools", Icon: LuSchool },
          { label: "Factories", Icon: MdOutlineFactory },
          { label: "Petrol Pumps", Icon: BsFuelPumpDiesel },
          { label: "Hospitals", Icon: FaRegHospital },
          { label: "Others", Icon: LuSchool }, // Reuse icon for 'Others' or use a new one
        ].map(({ label, Icon }) => (
          <div key={label}>
            <button
              className={`w-40 h-30 px-4 py-6 border border-[#8A6112] rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-md border-dashed ${
                formData.typeofOrganization === label
                  ? "bg-[#004A9C] text-white"
                  : "text-[#D3900D]"
              }`}
              onClick={() => handleOrganizationTypeChange(label)}
            >
              <Icon
                className={`mx-auto mb-2 ${
                  formData.typeofOrganization === label
                    ? "text-white"
                    : "text-[#D3900D]"
                }`}
              />
              <span className="whitespace-nowrap text-center">{label}</span>
            </button>
          </div>
        ))}
      </div>
      {formData.typeofOrganization === "Others" && (
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
    </div>
  );
};

export default TypeofOrganization;
