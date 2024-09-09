import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";

const FullAddress = ({ formData, handleChange, errors }) => {
  const [activestates, setActivestates] = useState([]);
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    const fetchStatesActive = async () => {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "company/getStatedetailsActive",
        {
          method: "GET",
        }
      );
      const res = await response.json();
      console.log(res);
      if (res.status === 200) {
        setActivestates(res.data);
      } else {
        console.log("Unable to load the Active states");
      }
    };
    fetchStatesActive();
  }, []);
  useEffect(() => {
    const fetchDistrictsByState = async () => {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "company/getDistrictdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({
            states: [formData.state],
          }),
        }
      );
      const res = await response.json();
      console.log(res);
      if (res.status === 200) {
        setDistricts(res.data);
      } else {
        console.log("Unable to load the Districts");
      }
    };
    if (formData.state) {
      fetchDistrictsByState();
    } else {
      setDistricts([]);
    }
  }, [formData.state]);
  return (
    <div>
      <h2 className="text-[16px] font-[600] text-center pb-9 text-blue-700">
        Applicant Full Address
      </h2>
      <div className="flex gap-3 w-full max-[1000px]:flex-col items-center max-[1000px]:space-y-4">
        <div className="w-full relative">
          <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="w-full px-2 py-5 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
              placeholder="Enter House No..."
              required
            />
          </div>
          {errors.houseNumber && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.houseNumber}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-2 py-5 font-[400] text-[16px] rounded-md shadow-lg placeholder-[#8A6112] outline-none"
              placeholder="Street"
              required
            />
          </div>
          {errors.street && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.street}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-5 mt-8 w-full max-[1000px]:flex-col  max-[1000px]:space-y-4">
        <div className="w-full relative">
          <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-2 py-4 font-[400] text-[16px] outline-none rounded-md shadow-lg bg-[#FFFDF9] placeholder-[#8A6112] text-[#8A6112]"
              required
            >
              <option value="" disabled>
                Select State
              </option>
              {activestates.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
          {errors.state && (
            <p className="text-red-500 text-sm pl-4 absolute">{errors.state}</p>
          )}
        </div>
        <div className="w-full relative">
          <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-2 py-4 font-[400] text-[16px] outline-none rounded-md shadow-lg bg-[#FFFDF9] placeholder-[#8A6112] text-[#8A6112]"
              required
            >
              <option value="" disabled>
                Select District
              </option>
              {districts.map((district) => (
                <option key={district.value} value={district.value}>
                  {district.label}
                </option>
              ))}
            </select>
          </div>
          {errors.district && (
            <p className="text-red-500 text-sm pl-4 absolute">
              {errors.district}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-5 mt-8 w-full max-[1000px]:flex-col pb-6 max-[1000px]:space-y-4">
        <div className="w-full relative">
          <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-2 py-4 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
              placeholder="City/Town"
              required
            />
          </div>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.city}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full px-2 py-4 font-[400] text-[16px] outline-none rounded-md shadow-lg placeholder-[#8A6112]"
              placeholder="PinCode"
              required
            />
          </div>
          {errors.pinCode && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.pinCode}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullAddress;
