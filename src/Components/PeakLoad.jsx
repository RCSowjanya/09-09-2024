import React, { useState, useEffect } from "react";
import { FaRegUser, FaMinus } from "react-icons/fa";

// Utility function to convert dot notation keys into a nested object
const parseDotNotationErrors = (errorObject) => {
  const parsedErrors = {};

  Object.keys(errorObject).forEach((key) => {
    const keys = key.split(/[.[\]]+/).filter(Boolean); // Split and filter empty strings
    keys.reduce((acc, curr, index) => {
      if (index === keys.length - 1) {
        acc[curr] = errorObject[key]; // Set the error message on the last key
      } else {
        acc[curr] = acc[curr] || {}; // Create nested object if not exists
      }
      return acc[curr];
    }, parsedErrors);
  });

  return parsedErrors;
};

const PeakLoad = ({
  formData,
  errors = {},
  handlePeakLoadChange = () => {},
}) => {
  // State to manage multiple field sets
  const [fieldSets, setFieldSets] = useState(
    formData?.load?.length > 0
      ? formData.load
      : [
          {
            id: Date.now(),
            equipmentName: "",
            capacity: "",
            operation: "",
            equipments: "",
          },
        ]
  );

  // Function to handle adding a new set of fields
  const addFieldSet = () => {
    const newFieldSet = {
      id: Date.now(),
      equipmentName: "",
      capacity: "",
      operation: "",
      equipments: "",
    };
    const updatedFieldSets = [...fieldSets, newFieldSet];
    setFieldSets(updatedFieldSets);
    handlePeakLoadChange(updatedFieldSets); // Update the formData.load in the parent
  };

  // Function to handle removing a set of fields
  const removeFieldSet = (id) => {
    const updatedFieldSets = fieldSets.filter((fieldSet) => fieldSet.id !== id);
    setFieldSets(updatedFieldSets);
    handlePeakLoadChange(updatedFieldSets); // Update the formData.load in the parent
  };

  // Function to handle changes in input fields
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedFieldSets = fieldSets.map((fieldSet) =>
      fieldSet.id === id ? { ...fieldSet, [name]: value } : fieldSet
    );

    setFieldSets(updatedFieldSets); // Update local state
    handlePeakLoadChange(updatedFieldSets); // Update the formData.load in the parent
  };

  // Parse the dot notation errors into nested objects
  const parsedErrors = parseDotNotationErrors(errors);

  return (
    <div className="relative">
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center p-3">
        Peak Load
      </h2>
      <p className="text-center pb-3 text-[14px]">
        Please provide a complete list of appliances and their usage
      </p>
      {/* Scrollable container */}
      <div
        className="scrollable-container relative overflow-y-auto"
        style={{ maxHeight: "500px", paddingRight: "60px" }}
      >
        {fieldSets.map((fieldSet, index) => (
          <div
            key={fieldSet.id}
            className="flex flex-col gap-5 w-full max-[1000px]:flex-col mb-5 border border-gray-400 rounded-md p-4 relative"
          >
            <div className="flex max-[1100px]:flex-col gap-5 w-full max-[1000px]:flex-col">
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="text"
                    name="equipmentName"
                    value={fieldSet.equipmentName}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="Appliance Name"
                    className="w-full px-4 py-5 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
                  />
                </div>
                {parsedErrors?.load?.[index]?.equipmentName && (
                  <p className="text-red-500 text-sm mt-1">
                    {parsedErrors.load[index].equipmentName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="number"
                    name="capacity"
                    value={fieldSet.capacity}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="Watt Capacity"
                    className="w-full px-4 py-5 text-[16px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none"
                  />
                </div>
                {parsedErrors?.load?.[index]?.capacity && (
                  <p className="text-red-500 text-sm mt-1">
                    {parsedErrors.load[index].capacity}
                  </p>
                )}
              </div>
            </div>

            <div className="flex max-[1100px]:flex-col gap-5 w-full max-[1000px]:flex-col">
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="number"
                    name="operation"
                    value={fieldSet.operation}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="Hours of Operation/Day"
                    className="w-full px-4 py-5 text-[16px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none"
                  />
                </div>
                {parsedErrors?.load?.[index]?.operation && (
                  <p className="text-red-500 text-sm mt-1">
                    {parsedErrors.load[index].operation}
                  </p>
                )}
              </div>
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="number"
                    name="equipments"
                    value={fieldSet.equipments}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="No. of Appliances"
                    className="w-full px-4 py-5 text-[16px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none"
                  />
                </div>
                {parsedErrors?.load?.[index]?.equipments && (
                  <p className="text-red-500 text-sm mt-1">
                    {parsedErrors.load[index].equipments}
                  </p>
                )}
              </div>
            </div>

            {/* Minus button to remove the field set */}
            <button
              onClick={() => removeFieldSet(fieldSet.id)}
              className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center"
            >
              <FaMinus size={14} />
            </button>
          </div>
        ))}
        {errors?.load && (
          <p className="text-red-500 text-sm mt-1">{errors.load}</p>
        )}
      </div>

      {/* Fixed Add Button */}
      <button
        onClick={addFieldSet}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#0bb68d] text-white rounded-full text-2xl flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default PeakLoad;
