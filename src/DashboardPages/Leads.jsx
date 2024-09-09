import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import Pagination from "./Pagination";
const Leads = () => {
  const currentLeads = [
    {
      id: 1,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 2,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 3,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 4,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 5,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 6,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 7,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 8,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 9,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 10,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 11,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
    {
      id: 12,
      name: "Amazon",
      role: "solar",
      entity: "25-7-2024",
      submission: "28,000",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentDisplayedLeads = currentLeads.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="m-[3%]">
      <div className="flex gap-3 max-[1100px]:flex-col">
        {/*---- All Leads start here ----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full rounded-lg px-[1%] py-[5%]">
          <div className="flex justify-between mb-4">
            <p className="text-[22px] font-[600] text-[#000]">All Leads</p>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-24 p-1 text-[12px] font-[400] text-[#B5B7C0]"
              />
              <MdSearch className="text-[#B5B7C0]  ml-2" />
            </div>
            <div className="relative">
              <p className="flex items-center text-[12px] ml-3 text-[#7E7E7E]">
                Sort by:
                <button
                  onClick={toggleDropdown}
                  className="text-[#7E7E7E] ml-2  px-6 py-2 flex items-center border border-[#7E7E7E] rounded-md"
                >
                  <span className="mr-2 text-[#7E7E7E]">{selectedOption}</span>
                  <MdKeyboardArrowDown />
                </button>
              </p>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                  <Link to="#">
                    <button
                      onClick={() => handleOptionClick("Newest")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Newest
                    </button>
                  </Link>
                  <Link to="#">
                    <button
                      onClick={() => handleOptionClick("Oldest")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Oldest
                    </button>
                  </Link>
                  <Link to="#">
                    <button
                      onClick={() => handleOptionClick("Most Popular")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Most Popular
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/*---- Table ----*/}
          <div className="flex-grow">
            <table className="min-w-full bg-white mt-8">
              <thead>
                <tr>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Company Name
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Business Role
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Entity Type
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Date of Submission
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayedLeads.map((leads, index) => (
                  <React.Fragment key={leads.id}>
                    <tr>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {leads.name}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {leads.role}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {leads.entity}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {leads.submission}
                      </td>
                    </tr>
                    {index !== currentDisplayedLeads.length - 1 && (
                      <tr>
                        <td colSpan="5" className="py-2"></td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          {/*---- Pagination ----*/}
          <div className="flex justify-center items-center mt-4">
            <Pagination
              currentPage={currentPage}
              usersPerPage={usersPerPage}
              totalUsers={currentLeads.length}
              paginate={paginate}
            />
          </div>
        </div>
        {/*---- All  Leads close ----*/}
        {/*---- Leads details start here ----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full rounded-lg px-[2%] py-[5%]">
          <h1 className="text-[22px] font-[600] text-[#000] mb-4">
            Lead Details
          </h1>
          <div className="grid grid-rows-2 grid-cols-3 border-b  border-b-gray-300 ">
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Company Name
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Amazon</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Business Role
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Partner</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Type of Entity
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D] flex">
                  <span>
                    <BiRupee className="mt-1" />
                  </span>
                  28,000
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Total years in Solar Installations
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">5 years</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  GST No
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  GSTIN123456
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Pan No
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  CCGPN2222Q
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Tan No
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  CCGPN2222Q
                </p>
              </div>
            </div>
          </div>
          {/*---- Address ----*/}
          <div className="border-b  border-b-gray-300">
            <h4 className="text-[22px] font-[600] text-[#000] py-4">Address</h4>
            <div className="flex gap-3 justify-between">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Registered Office Address
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    D.No:24-10-12/A,Patella street,punjab
                    junction,punjab-530044.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    State
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Punjab
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Pincode
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">530044</p>
              </div>
            </div>
          </div>
          <div className="border-b  border-b-gray-300">
            <div className="flex gap-4 mt-4 ">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Empanelled with State Electricity Board
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">Yes</p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Name of Electricity Boards Empanelled With
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    APEPDCL,TSEPDCL
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4 ">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Combined Capacity of total Installations done till date
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">12</p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Installation Capacity of the largest Project Worked on
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">100MW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b  border-b-gray-300">
            <div className="flex gap-4 mt-4 ">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    List Of Product Brands
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Product1{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Geographical Regions Where direct Service Can be Provided
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Region1
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4 ">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Total Employees
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">50</p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Total Installation Crews
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">5</p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Reference Site Details
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D] flex">
                    <span>
                      <BiRupee className="mt-1" />
                    </span>
                    28,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*----Atachments---*}
              {/*----quotations---*/}
          <div>
            <div className="flex flex-col ">
              <h4 className="text-[22px] font-[600] text-[#000] py-4">
                Attachments
              </h4>
              <div className="flex gap-3  justify-between ">
                <div className="space-y-5">
                  <h4 className="text-[#666666] font-[400] text-[14px]">
                    S.No
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">1</p>
                  <p className="text-[12px] font-[600] text-[#48494D]">2</p>
                  <p className="text-[12px] font-[600] text-[#48494D]">3</p>
                </div>
                <div className="space-y-5">
                  <h4 className="text-[#666666] font-[400] text-[14px]">
                    Attachment Name
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    GST Certificate
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Empanelment Certificate
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Reference Site Picture
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-[#666666] font-[400] text-[14px] ml-6">
                    View
                  </div>
                  <p className="text-[14px] text-[#4348BD] font-[500] border border-[#4348BD] py-1 px-8 rounded-lg">
                    View
                  </p>
                  <p className="text-[14px] text-[#4348BD] font-[500] border border-[#4348BD] py-1 px-8 rounded-lg">
                    View
                  </p>
                  <p className="text-[14px] text-[#4348BD] font-[500] border border-[#4348BD] py-1 px-8 rounded-lg">
                    View
                  </p>
                </div>
              </div>
            </div>

            {/*---button---*/}
            <div className="flex gap-3 justify-center">
              <Link to="#">
                <button className="px-9 py-4 font-[500] text-[14px] border border-[#4348BD] text-[#4348BD] mt-8 rounded-md">
                  Approve
                </button>
              </Link>
              <Link to="#">
                <button className="px-9 py-4 font-[500] text-[14px] border border-[#4348BD] text-[#4348BD] mt-8 rounded-md">
                  Reject
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*----  Leads details end here ----*/}
    </div>
  );
};

export default Leads;
