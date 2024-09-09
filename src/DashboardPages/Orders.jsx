import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import Pagination from "./Pagination";
const Orders = () => {
  const currentOrders = [
    {
      id: 1,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 2,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 3,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 4,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 5,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 6,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 7,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 8,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 9,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 10,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 11,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
    },
    {
      id: 12,
      name: "Amazon",
      installer: "solar",
      orderDate: "25-7-2024",
      amount: "28,000",
      status: "pending",
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
  const currentDisplayedOrders = currentOrders.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="m-[3%]">
      <div className="flex gap-3  max-[1100px]:flex-col">
        {/*---- All Orders start here ----*/}
        <div className="w-1/2 h-full border border-[#7E7E7E]  max-[1100px]:w-full rounded-lg px-[1%] py-[5%]">
          <div className="flex justify-between mb-4">
            <p className="text-[22px] font-[600] text-[#000]">All Orders</p>
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
                    Solar Installer Name
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Order Date
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Amount
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayedOrders.map((orders, index) => (
                  <React.Fragment key={orders.id}>
                    <tr>
                      <td className="text-[#292D32] border-b border-b-gray-300 font-[500] text-[12px]  py-2 text-center">
                        {orders.name}
                      </td>
                      <td className="text-[#292D32] border-b border-b-gray-300  font-[500] text-[12px]  py-2 text-center">
                        {orders.installer}
                      </td>
                      <td className="text-[#292D32] border-b border-b-gray-300  font-[500] text-[12px]  py-2 text-center">
                        {orders.orderDate}
                      </td>
                      <td className="text-[#292D32] border-b border-b-gray-300  font-[500] text-[12px] py-2 text-center">
                        {orders.amount}
                      </td>
                      <td className="text-[#292D32] border-b border-b-gray-300  font-[500] text-[12px]  py-2 text-center">
                        {orders.status}
                      </td>
                    </tr>
                    {index !== currentDisplayedOrders.length - 1 && (
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
              totalUsers={currentOrders.length}
              paginate={paginate}
            />
          </div>
        </div>
        {/*---- All Orders close ----*/}
        {/*---- Orders details start here ----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A]  max-[1100px]:w-full rounded-lg px-[2%] py-[5%]">
          <h1 className="text-[22px] font-[600] text-[#000]">Order Details</h1>
          <div className="grid grid-rows-2 grid-cols-3 border-b border-b-gray-300   gap-y-8 py-4 justify-between">
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Order Id
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">#258369</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Order Date
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  26-07-2024
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Amount
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
                  Proposal Id
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">#287654</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Quotation Id
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">#123456</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  status
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Pending</p>
              </div>
            </div>
          </div>
          {/*----  Customer Details ----*/}
          <div className="border-b border-b-gray-300">
            <h4 className="text-[22px] font-[600] text-[#000] py-6">
              Customer Details
            </h4>
            <div className="flex gap-3 justify-between">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    User Id
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    #123456
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Name
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Rounak
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Email Id
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    rounak@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Phone Number
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    +91 12345678
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Address
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    D.No:24-10-12/A,Patella street,punjab
                    junction,punjab-530044.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*----Solar installer details---*/}
          <div className="border-b border-b-gray-300">
            <h4 className="text-[22px] font-[600] text-[#000] py-6">
              Solar Installer Details
            </h4>
            <div className="flex gap-3">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Installer Id
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    #12345678
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Company Name
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Amazon
                  </p>
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
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    rounak@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*----solar installer close---*}
            {/*---button---*/}
          <div className="text-center">
            <Link to="#">
              <button className="px-9 py-4 text-[16px] border font-[500] border-[#4348BD] text-[#4348BD] mt-9 rounded-md">
                Generate Invoice
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*---- Orders details end here ----*/}
    </div>
  );
};

export default Orders;
