import React from "react";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

const CustomerDetails = () => {
  const customerDetails = [
    { label: "Quotation Id", value: "258369" },
    { label: "Date", value: "28-07-2024" },
    { label: "Name", value: "abhishek sharma" },
    { label: "Email Id", value: "abhishek@gmail.com" },
  ];

  const requirementDetails = [
    { label: "Establishment", value: "Residential/Commercial" },
    { label: "Connection Type", value: "OnGrid/OffGrid" },
    { label: "Total Roof Area", value: "XXXX sqft" },
    { label: "Capacity", value: "XXXX KW" },
    { label: "Current Sanction Load", value: "XXXX KW" },
  ];

  const consumptionDetails = [
    { label: "Last Month Consumption", value: "xxx units" },
    { label: "Need Subsidy", value: "yes/No" },
    { label: "Floor No", value: "2" },
    { label: "Roof Rights?", value: "Yes/No" },
  ];
  const requirementDetails1 = [
    { label: "Establishment", value: "Residential/Commercial" },
    { label: "Connection Type", value: "OnGrid/OffGrid" },
    { label: "Total Roof Area", value: "XXXX Sqft" },
    { label: "Capacity", value: "XXXX KW" },
    { label: "Electricity Connectivity", value: "Yes/No" },
  ];

  const consumptionDetails1 = [
    { label: "Power Outage In Hours", value: "xxx Hours" },
  ];
  const requirementDetails2 = [
    { label: "Establishment", value: "Residential/Commercial" },
    { label: "Connection Type", value: "OnGrid/OffGrid" },
    { label: "Total Roof Area", value: "XXXX sqft" },
    { label: "Capacity", value: "XXXX KW" },
    { label: "Current Sanction Load", value: "XXXX KW" },
  ];

  const consumptionDetails2 = [
    { label: "Last Month Consumption", value: "xxx units" },
    { label: "Type Of Roof", value: "Concrete/Tin Shade/others" },
  ];

  const attachments = [
    "RoofLayout",
    "Electricity Bill",
    "GST Certificate(if Commercial)",
    "Identity Proof",
  ];
  const proposals = [
    { company: "Company1", date: "30-07-2023", amount: "28,000" },
    { company: "Company2", date: "30-07-2023", amount: "28,000" },
    { company: "Company3", date: "30-07-2023", amount: "28,000" },
  ];

  const renderDetails = (details) =>
    details.map(({ label, value, icon: Icon }, index) => (
      <div key={index} className="flex gap-3">
        <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
          {Icon ? (
            <Icon className="w-5 h-5" />
          ) : (
            <HiHashtag className="w-5 h-5" />
          )}
        </div>
        <div>
          <h4 className="text-[#666666] font-[400] text-[13px]">{label}</h4>
          <p className="text-[12px] font-[600] text-[#48494D]">{value}</p>
        </div>
      </div>
    ));

  return (
    <div className="border border-[#7A7A7A] mt-11 mx-[3%] rounded-lg">
      <div className="p-6">
        <div className="flex gap-8 mb-6">
          <h4 className="text-[22px] font-[600] text-[#000]">
            Customer Details
          </h4>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Status</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Pending</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-between">
          {renderDetails(customerDetails)}
        </div>

        {/*---2nd row----*/}
        <div className="flex gap-2 mt-11 py-6 justify-between border-b border-b-gray-300">
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Phone Number
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                88888909877
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Address</h4>
              <div className="flex">
                <p className="text-[12px] font-[600] text-[#48494D]">
                  D.No:24-10-12/A, Patella street, Punjab junction,
                  Punjab-530044.
                </p>
                <button className="px-6 border border-gray-500 rounded-full text-[12px] bg-red-400">
                  Show Navigation Button
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Organization Type
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                School/Factory
              </p>
            </div>
          </div>
        </div>

        {/*----3rd row----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex gap-8 mb-6 py-4">
            <h4 className="text-[22px] font-[600] text-[#000]">Requirement</h4>
            <button className="px-6 border border-gray-500 rounded-full text-[12px] bg-red-400">
              Residential On Grid
            </button>
          </div>
          <div className="flex justify-between gap-3">
            {renderDetails(requirementDetails)}
          </div>
          <div className="flex justify-between gap-3 pt-11">
            {renderDetails(consumptionDetails)}
          </div>
        </div>
        {/*---4th row----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex gap-8 mb-6 py-4">
            <h4 className="text-[22px] font-[600] text-[#000]">Requirement</h4>
            <button className="px-6 border border-gray-500 rounded-full text-[12px] bg-red-400">
              Residential and off Grid
            </button>
          </div>
          <div className="flex justify-between gap-3">
            {renderDetails(requirementDetails1)}
          </div>
          <div className="flex justify-between gap-3 pt-11">
            {renderDetails(consumptionDetails1)}
          </div>
        </div>
        {/*---5th row----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex gap-8 mb-6 py-4">
            <h4 className="text-[22px] font-[600] text-[#000]">Requirement</h4>
            <button className="px-6 border border-gray-500 rounded-full text-[12px] bg-red-400">
              Commercial
            </button>
          </div>
          <div className="flex justify-between gap-3">
            {renderDetails(requirementDetails2)}
          </div>
          <div className="flex justify-between gap-3 pt-11">
            {renderDetails(consumptionDetails2)}
          </div>
        </div>

        {/*----Attachments section----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between py-2">
              <div className="flex gap-9">
                <p className="text-[#666666] font-[400] text-[14px]">S.NO</p>
                <p className="text-[#666666] font-[400] text-[14px]">
                  Attachment Name
                </p>
              </div>
            </div>
            {attachments.map((attachment, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-b-gray-300"
              >
                <div className="flex gap-11 ">
                  <p>{index + 1}</p>
                  <p className="text-[14px] font-[600] text-[#48494D] ml-6">
                    {attachment}
                  </p>
                </div>
                <button className="text-[#4348BD] border border-[#4348BD] py-2 px-11 rounded-lg hover:underline mb-2">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
        {/*----proposals received by user---*/}
        <div className="flex flex-col">
          <h4 className="text-[22px] font-[600] text-[#000] py-4">
            Proposals Received to the User
          </h4>
          <div className="space-y-5">
            <div className="flex gap-3">
              <h4 className="text-[#666666] font-[400] text-[14px] flex-1">
                Company Name
              </h4>
              <h4 className="text-[#666666] font-[400] text-[14px] flex-1">
                Date of Submission
              </h4>
              <h4 className="text-[#666666] font-[400] text-[14px] flex-1">
                Amount
              </h4>
            </div>
            {proposals.map((proposal, index) => (
              <div
                key={index}
                className="flex gap-3 justify-between border-b border-b-gray-300 py-2"
              >
                <p className="text-[12px] font-[600] text-[#48494D] flex-1">
                  {proposal.company}
                </p>
                <p className="text-[12px] font-[600] text-[#48494D] flex-1">
                  {proposal.date}
                </p>
                <p className="text-[12px] font-[600] text-[#48494D] flex items-center flex-1">
                  <span>
                    <BiRupee className="mt-1" />
                  </span>
                  {proposal.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
