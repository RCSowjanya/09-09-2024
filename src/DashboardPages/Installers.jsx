import React from "react";
import { HiHashtag } from "react-icons/hi";
const Installers = () => {
  const attachments = [
    "GST Certificate",
    "PAN",
    "TAN",
    "Empanelment Certificate",
    "Reference Site Pictures",
  ];
  return (
    <div className="mx-[3%]">
      <div className="flex gap-3 max-[1100px]:flex-col">
        <div className="w-2/3 max-[1100px]:w-full border border-[#7A7A7A] mt-11  rounded-lg">
          <div className="p-6">
            <div className="flex justify-between mb-6">
              <h4 className="text-[22px] font-[600] text-[#000]">
                Installer Details
              </h4>
              <button className="px-5 py-2 border border-gray-500 rounded-full">
                Change Status
              </button>
            </div>
            <div className="grid grid-rows-5 grid-cols-4 space-y-2 justify-between border-b border-b-gray-300 py-4">
              {[
                { label: "Installer Id", value: "258369" },
                { label: "Company Name", value: "Abhishek Sharma goyal" },
                { label: "Business Role", value: "abhishek@gmail.com" },
                { label: "Type of Entity", value: "abhishek@gmail.com" },
                { label: "Total Years in Solar Installation", value: "23" },
                { label: "GST Number", value: "8899089" },
                { label: "PAN Number", value: "8899089" },
                {
                  label: "Registration Office Address",
                  value:
                    "D.No:24-10-12/A,Patella street,punjab junction,punjab-530044.",
                },
                { label: "City", value: "Amritsar" },
                { label: "State", value: "Punjab" },
                { label: "Pincode", value: "530044" },
                { label: "Email Id", value: "rounak@gamil.com" },
                { label: "Phone Number", value: "830044990" },
                {
                  label: "Empanelled with State Electrical Board",
                  value: "Yes/No",
                },
                {
                  label: "Name of the Electricity Boards Empaneled With",
                  value: "APEPDCL",
                },
                {
                  label:
                    "Combined Capacity Of total installations done till date",
                  value: "100MW",
                },
                {
                  label: "Installation capacity of the Largest Project Worked",
                  value: "20MW",
                },
                { label: "List of Product Brands", value: "Product1" },
                {
                  label:
                    "Geographical Regions Where Direct Service Can be Provided",
                  value: "Region1",
                },
                { label: "Total Employees", value: "50" },
                { label: "Total Installation Crews", value: "5" },
                { label: "Reference Site Details", value: "Site Details" },
              ].map((detail, index) => (
                <div className="flex gap-3" key={index}>
                  <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                    <HiHashtag className="w-5 h-5" />
                  </div>
                  <div className="break-words overflow-wrap break-word">
                    <h4 className="text-[#666666] font-[400] text-[13px]">
                      {detail.label}
                    </h4>
                    <p className="text-[12px] font-[600] text-[#48494D]  break-all">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/*---attacments----*/}
            <div>
              <div>
                <h4 className="text-[22px] font-[600] text-[#000] pt-4">
                  Attachments
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between py-4">
                    <div className="flex gap-9">
                      <p className="text-[#666666] font-[400] text-[14px]">
                        S.NO
                      </p>
                      <p className="text-[#666666] font-[400] text-[14px]">
                        Attachment Name
                      </p>
                    </div>
                  </div>
                  {attachments.map((attachment, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-b-gray-300 py-2"
                    >
                      <div className="flex gap-11 ">
                        <p>{index + 1}</p>
                        <p className="text-[14px] font-[600] text-[#48494D] ml-6">
                          {attachment}
                        </p>
                      </div>
                      <button className="text-[#4348BD] border border-[#4348BD] py-2 px-11 rounded-lg hover:underline">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 border border-[#7A7A7A] mt-11 p-3 max-[1100px]:w-full rounded-lg">
          <button className="w-full bg-indigo-800 text-white text-center text-[18px] py-2">
            Quotations Received
          </button>
          <h4 className="text-[22px] font-[600] text-[#000] py-3">
            Quotations Received
          </h4>
          <div className="flex gap-3  justify-between ">
            <div className="space-y-6">
              <h4 className="text-[#666666] font-[400] text-[14px]">
                Date of Receival
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">2-07-2024</p>
              <p className="text-[12px] font-[600] text-[#48494D]">
                28-07-2024
              </p>
              <p className="text-[12px] font-[600] text-[#48494D]">3-08-2024</p>
            </div>

            <div className="space-y-6 ">
              <h4 className="text-[#666666] font-[400] text-[14px]">Status</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Pending</p>
              <p className="text-[12px] font-[600] text-[#48494D]">Completed</p>
              <p className="text-[12px] font-[600] text-[#48494D]">
                Inprogress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installers;
