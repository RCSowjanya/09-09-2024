import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Select from "react-select";

const JoinusForm = () => {
  const [isEmpanelled, setIsEmpanelled] = useState(false);
  const [formData, setFormData] = useState({
    empanelledBoards: [],
    geographicalRegions: [],
    others: "",
    combinedCapacity: "",
    largestProjectCapacity: "",
    productBrands: "",
    totalEmployees: "",
    totalCrews: "",
    referenceSiteDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleToggle = () => {
    setIsEmpanelled(!isEmpanelled);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (selectedOptions, actionMeta) => {
    const fieldName = actionMeta.name;
    setFormData({
      ...formData,
      [fieldName]: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.empanelledBoards.length === 0) {
      newErrors.empanelledBoards = "This field is required.";
    }
    if (formData.geographicalRegions.length === 0) {
      newErrors.geographicalRegions = "This field is required.";
    }
    if (!formData.combinedCapacity) {
      newErrors.combinedCapacity = "This field is required.";
    }
    if (!formData.largestProjectCapacity) {
      newErrors.largestProjectCapacity = "This field is required.";
    }
    if (!formData.productBrands) {
      newErrors.productBrands = "This field is required.";
    }
    if (!formData.totalEmployees) {
      newErrors.totalEmployees = "This field is required.";
    }
    if (!formData.totalCrews) {
      newErrors.totalCrews = "This field is required.";
    }
    if (!formData.referenceSiteDetails) {
      newErrors.referenceSiteDetails = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or navigation
      window.location.href = "/JoinUsUploads";
    }
  };

  // Options for the multi-select dropdown
  const empanelledOptions = [
    { value: "state1", label: "ProprietorShip" },
    { value: "state2", label: "Unregistered PartnerShip" },
    { value: "state3", label: "LLP" },
    { value: "state4", label: "Incorporated Entity" },
  ];

  const geographicalRegionsOptions = [
    { value: "region1", label: "Andhra Pradesh" },
    { value: "region2", label: "Assam" },
    { value: "region3", label: "Bihar" },
    { value: "region4", label: "Chattisgarh" },
    { value: "region5", label: "Delhi" },
    { value: "region6", label: "Gujarat" },
    { value: "region7", label: "Haryana" },
    { value: "region8", label: "Jharkhand" },
    { value: "region9", label: "Karnataka" },
    { value: "region10", label: "Kerala" },
    { value: "region11", label: "Manipur" },
    { value: "region12", label: "Madhya pradesh" },
    { value: "region13", label: "Maharasthra" },
    { value: "region14", label: "Meghalaya" },
    { value: "region15", label: "Orissa" },
    { value: "region16", label: "Rajasthan" },
    { value: "region17", label: "Tamilnadu" },
    { value: "region18", label: "Tripura" },
    { value: "region19", label: "Uttarakhand" },
    { value: "region20", label: "Uttar Pradesh" },
    { value: "region21", label: "West Bengal" },
  ];

  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full">
        <div className="aboutbg flex items-center">
          <h2 className="text-4xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Join Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg max-w-3xl h-full mx-auto py-[2%]">
          <Link to="/JoinUs">
            <button className="py-2 px-4 flex gap-2 text-[#0BB68D] text-[16px] font-[500]">
              <FiArrowLeftCircle className="mt-1" />
              Back
            </button>
          </Link>
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-1">
              <span className="text-[14px] font-semibold text-[#004A9C] mr-7">
                Empanelled with Electricity Board
                <span className="text-[#004A9C]">*</span>
              </span>
              <div
                onClick={handleToggle}
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                  isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full p-0.5 shadow-md transform ${
                    isEmpanelled ? "translate-x-6" : ""
                  } transition-transform duration-300`}
                />
              </div>
              <span
                className={`text-[14px] font-semibold ${
                  isEmpanelled ? "text-[#0BB68D]" : "text-gray-400"
                }`}
              >
                {isEmpanelled ? "Yes" : "No"}
              </span>
            </div>
            <div>
              <label
                htmlFor="empanelledBoards"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Name Of Electricity Boards Empanelled With
                <span className="text-[#004A9C]">*</span>
              </label>
              <Select
                id="empanelledBoards"
                isMulti
                options={empanelledOptions}
                value={empanelledOptions.filter((option) =>
                  formData.empanelledBoards.includes(option.value)
                )}
                onChange={handleSelectChange}
                name="empanelledBoards"
                placeholder="Select empanelled boards"
                className="basic-single"
                classNamePrefix="select"
              />
              {errors.empanelledBoards && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.empanelledBoards}
                </p>
              )}
            </div>
            {/*---others----*/}
            <div>
              <label
                htmlFor="others"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Others
              </label>
              <input
                id="others"
                type="text"
                value={formData.others}
                onChange={handleChange}
                placeholder="Enter Electricity Board Name"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
              {errors.others && (
                <p className="text-red-500 text-xs mt-1">{errors.others}</p>
              )}
            </div>
            {/* Dropdown Fields in Flex */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="combinedCapacity"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Combined Capacity Of total installations done till date{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="combinedCapacity"
                  type="number"
                  value={formData.combinedCapacity}
                  onChange={handleChange}
                  placeholder="Enter Combined Capacity  KW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.combinedCapacity && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.combinedCapacity}
                  </p>
                )}
              </div>

              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="largestProjectCapacity"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Installation capacity of the largest project worked on{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="largestProjectCapacity"
                  type="number"
                  value={formData.largestProjectCapacity}
                  onChange={handleChange}
                  placeholder="Enter Installation Capacity KW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.largestProjectCapacity && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.largestProjectCapacity}
                  </p>
                )}
              </div>
            </div>
            {/* Dropdown Field 2 */}
            <div className="w-full">
              <label
                htmlFor="productBrands"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Brands You Deal With <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="productBrands"
                type="text"
                value={formData.productBrands}
                onChange={handleChange}
                placeholder="Brand1,Brand2,Brand3"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
              {errors.productBrands && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.productBrands}
                </p>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="geographicalRegions"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Geographical Regions Of Operations{" "}
                <span className="text-[#004A9C]">*</span>
              </label>
              <Select
                id="geographicalRegions"
                isMulti
                options={geographicalRegionsOptions}
                value={geographicalRegionsOptions.filter((option) =>
                  formData.geographicalRegions.includes(option.value)
                )}
                onChange={handleSelectChange}
                name="geographicalRegions"
                placeholder="Select geographical regions"
                className="basic-single"
                classNamePrefix="select"
              />
              {errors.geographicalRegions && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.geographicalRegions}
                </p>
              )}
            </div>

            {/*----Total employees----*/}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="totalEmployees"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total Employees <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="totalEmployees"
                  type="number"
                  value={formData.totalEmployees}
                  onChange={handleChange}
                  placeholder="Enter Total Employees"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.totalEmployees && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.totalEmployees}
                  </p>
                )}
              </div>

              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="totalCrews"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total Crews Available{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="totalCrews"
                  type="number"
                  value={formData.totalCrews}
                  onChange={handleChange}
                  placeholder="Enter Total Crews Available"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {errors.totalCrews && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.totalCrews}
                  </p>
                )}
              </div>
            </div>
            {/*----site details----*/}
            <div className="w-full">
              <label
                htmlFor="referenceSiteDetails"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Reference Site Details <span className="text-[#004A9C]">*</span>
              </label>
              <textarea
                id="referenceSiteDetails"
                value={formData.referenceSiteDetails}
                onChange={handleChange}
                placeholder="Enter Reference Site Details"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
              {errors.referenceSiteDetails && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.referenceSiteDetails}
                </p>
              )}
            </div>

            <div className="flex gap-5">
              <div className="w-1/2 max-[600px]:w-full">
                <Link to="/joinUs">
                  <button className="px-4 py-3 border border-[#0BB68D] text-[#0BB68D] w-full rounded-md shadow-sm  focus:outline-none ">
                    Previous
                  </button>
                </Link>
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <Link to="/JoinUsUploads">
                  <button className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinusForm;
