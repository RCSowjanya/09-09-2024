import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const CustomerFullDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="border border-gray-300 rounded-md p-6 m-[5%]">
        <div>
          <h2 className="text-[#004A9C] font-[600] text-[16px] ">
            Customer Details
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 justify-between  border-b border-b-gray-300">
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Type Of Customer
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                Residential
              </p>
            </div>
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Customer Name
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                Phani Kumar
              </p>
            </div>
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Applicant Full Address
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {" "}
                D.No:24-10-12/A, Patella street, Punjab junction, Punjab-530044.
              </p>
            </div>
            <div className=" ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Mobile Number
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {" "}
                999909090
              </p>
            </div>
            <div className=" ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">Email</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {" "}
                Phani@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#004A9C] font-[600] text-[16px] mt-4">
            Connection Details
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 justify-between  border-b border-b-gray-300 ">
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Connection Type
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">On Grid</p>
            </div>
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Need Subsidy?
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Yes</p>
            </div>
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">
                Current Sanction Load
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]"> 12KW</p>
            </div>
            <div className=" ">
              <h4 className="text-[#004A9C] font-[400] text-[13px]">
                Consumption Over Last Month
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {" "}
                1200 Units
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#004A9C] font-[600] text-[16px] mt-4">
            Roof Details
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 justify-between  border-b border-b-gray-300 ">
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">Length</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">20 Meters</p>
            </div>
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">Breadth</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">20 Meters</p>
            </div>
            <div className="my-3 ">
              <h4 className="text-[#004A9C] font-[400] text-[14px]">Sqft</h4>
              <p className="text-[12px] font-[600] text-[#48494D]"> 1050sft</p>
            </div>
            <div className=" ">
              <h4 className="text-[#004A9C] font-[400] text-[13px]">
                Roof Layout
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                {" "}
                20 Meters
              </p>
            </div>
          </div>
        </div>
        {/*---flooor Number----*/}
        <div className="mt-3 ">
          <h4 className="text-[#004A9C] font-[400] text-[13px]">
            Roof/Site of installation Located at Floor Number
          </h4>
          <p className="text-[12px] font-[600] text-[#48494D]"> 3rd Floor</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 justify-between  border-b border-b-gray-300 mt-3">
          <div className="my-3 ">
            <h4 className="text-[#004A9C] font-[400] text-[14px]">
              Video Upload
            </h4>
            <p className="text-[12px] font-[600] text-[#48494D]">20 Meters</p>
          </div>
          <div className="my-3 ">
            <h4 className="text-[#004A9C] font-[400] text-[14px]">
              Image Upload
            </h4>
            <p className="text-[12px] font-[600] text-[#48494D]">20 Meters</p>
          </div>
          <div className="my-3 ">
            <h4 className="text-[#004A9C] font-[400] text-[14px]">
              Electricity Bill
            </h4>
            <p className="text-[12px] font-[600] text-[#48494D]">20 Meters</p>
          </div>
          <div className=" ">
            <h4 className="text-[#004A9C] font-[400] text-[13px]">
              Roof Layout
            </h4>
            <p className="text-[12px] font-[600] text-[#48494D]"> 20 Meters</p>
          </div>
        </div>
        {/*----check box----*/}
        <div className="flex items-center space-x-2 my-4 ">
          <div
            onClick={handleCheckboxChange}
            className={`flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-md cursor-pointer ${
              isChecked ? "bg-[#0BB68D]" : "bg-white"
            }`}
          >
            {isChecked && (
              <FaCheck
                className={`text-white ${isChecked ? "block" : "hidden"}`}
              />
            )}
          </div>
          <label className="text-gray-400 text-[14px]">
            By checking this, you will accept Terms & Conditions With Data
            Privacy.
          </label>
        </div>
        {/*----buttons----*/}
        <div className="flex gap-5 py-5">
          <div className="w-1/2 max-[600px]:w-full">
            <Link to="/">
              <button className="px-4 py-3 border border-[#0BB68D] text-[#0BB68D] w-full rounded-md shadow-sm  focus:outline-none ">
                Edit
              </button>
            </Link>
          </div>
          <div className="w-1/2 max-[600px]:w-full">
            <Link to="/">
              <button className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFullDetails;
