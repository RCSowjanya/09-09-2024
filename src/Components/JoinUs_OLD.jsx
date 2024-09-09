import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const JoinUs = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    businessRole: "",
    entityType: "",
    solarInstallations: "",
    gstNo: "",
    panNo: "",
    tanNo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Required field validation
    if (!formValues.companyName) {
      formErrors.companyName = "Company Name is required";
    }
    if (!formValues.businessRole) {
      formErrors.businessRole = "Business Role is required";
    }
    if (!formValues.entityType) {
      formErrors.entityType = "Entity Type is required";
    }
    if (!formValues.solarInstallations) {
      formErrors.solarInstallations =
        "Total Years In Solar Installations is required";
    }
    if (!formValues.gstNo) {
      formErrors.gstNo = "GST No is required";
    }
    if (!formValues.panNo) {
      formErrors.panNo = "PAN No is required";
    }
    if (!formValues.tanNo) {
      formErrors.tanNo = "TAN No is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      window.location.href = "/joinusform";
    }
  };

  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full ">
        <div className="aboutbg flex items-center">
          <h2 className="text-4xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Join Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[5%] bg-white shadow-lg  max-w-3xl h-full mx-auto py-[2%]">
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Company Name <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                value={formValues.companyName}
                onChange={handleChange}
              />
              {errors.companyName && (
                <p className="text-red-500 text-[12px]">{errors.companyName}</p>
              )}
            </div>

            {/* Flex items for Business Role and Entity Type */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="businessRole"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-3"
                >
                  Business Role <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="businessRole"
                    className="ad p-3 text-[16px] block w-full cursor-pointer placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    value={formValues.businessRole}
                    onChange={handleChange}
                    style={{ color: "#757575" }}
                  >
                    <option value="">Business Role</option>
                    <option value="OEM">OEM</option>
                    <option value="OEM & Installer">OEM & Installer</option>
                    <option value="Installer">Installer</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
                {errors.businessRole && (
                  <p className="text-red-500 text-[12px]">
                    {errors.businessRole}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="entityType"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-3"
                >
                  Type Of Entity
                  <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="entityType"
                    className="ad p-3 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    value={formValues.entityType}
                    onChange={handleChange}
                    style={{ color: "#757575" }}
                  >
                    <option value="">Select Entity Type</option>
                    <option value="ProprietorShip">ProprietorShip</option>
                    <option value="Unregistered PartnerShip">
                      Unregistered PartnerShip
                    </option>
                    <option value="LLP">LLP</option>
                    <option value="Incorporated Entity">
                      Incorporated Entity
                    </option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
                {errors.entityType && (
                  <p className="text-red-500 text-[12px]">
                    {errors.entityType}
                  </p>
                )}
              </div>
            </div>

            {/* Flex items for Solar Installations and GST No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="solarInstallations"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  Total Exp In Solar Installations
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="solarInstallations"
                  type="number"
                  placeholder="Enter Total Years"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formValues.solarInstallations}
                  onChange={handleChange}
                />
                {errors.solarInstallations && (
                  <p className="text-red-500 text-[12px]">
                    {errors.solarInstallations}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="gstNo"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  GST No
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="gstNo"
                  type="text"
                  placeholder="Enter GST No"
                  className="ad mt-1 p-3 block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formValues.gstNo}
                  onChange={handleChange}
                />
                {errors.gstNo && (
                  <p className="text-red-500 text-[12px]">{errors.gstNo}</p>
                )}
              </div>
            </div>

            {/* Flex items for PAN No and TAN No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="panNo"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  PAN No
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="panNo"
                  type="text"
                  placeholder="Enter PAN No"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formValues.panNo}
                  onChange={handleChange}
                />
                {errors.panNo && (
                  <p className="text-red-500 text-[12px]">{errors.panNo}</p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="tanNo"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  TAN No
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="tanNo"
                  type="text"
                  placeholder="Enter TAN No"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formValues.tanNo}
                  onChange={handleChange}
                />
                {errors.tanNo && (
                  <p className="text-red-500 text-[12px]">{errors.tanNo}</p>
                )}
              </div>
            </div>

            {/* Register Office Address */}
            <div>
              <label
                htmlFor="register-office-address"
                className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
              >
                Registered Office Address
              </label>
              <input
                id="register-office-address"
                type="text"
                placeholder="Enter Building Name /Flat No"
                className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>

            {/* Flex items for Street, City, Pincode, State */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="street"
                  type="text"
                  placeholder="Enter Street"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="ad mt-1 p-3 block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="pincode"
                  type="text"
                  placeholder="Enter Pincode"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Next Button */}
            <div>
              <button
                type="submit"
                className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
