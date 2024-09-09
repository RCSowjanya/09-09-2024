import React, { useState } from "react";
import {
  MdSearch,
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

const Quotations = () => {
  const currentQuotations = [
    {
      id: 1,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 2,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 3,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 4,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 5,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 6,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 7,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 8,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 9,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 10,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 11,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
    {
      id: 12,
      name: "Abhishek",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
      status: "InProgress",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Closed");
  const [users, setUsers] = useState(currentQuotations); // Replace with the actual users data
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentDisplayedUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 1;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(
        currentPage - Math.floor(maxPageNumbersToShow / 2),
        1
      );
      const endPage = Math.min(
        startPage + maxPageNumbersToShow - 1,
        totalPages
      );

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        if (startPage > 2) {
          pageNumbers.unshift("...");
        }
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => number !== "..." && paginate(number)}
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === number ? "bg-[#4348BD] text-white" : "bg-gray-300"
        }`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="m-[3%]">
      <div className="flex gap-3 max-[1100px]:flex-col">
        {/*---- All Quotations start here ----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full rounded-lg px-[1%] py-[5%]">
          <div className="flex justify-between mb-4">
            <p className="text-[22px] font-[600] text-[#000] mr-2">
              All Quotations
            </p>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-24 p-1 text-[12px] font-[400] text-[#B5B7C0]"
              />
              <MdSearch className="text-gray-500 text-xl ml-2" />
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
                      onClick={() => handleOptionClick("Closed")}
                      className="block w-full text-left px-4 py-2 text-[#7E7E7E] hover:bg-gray-100"
                    >
                      Closed
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
                    Name
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Email Id
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Phone Number
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    City
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentQuotations.map((quotations, index) => (
                  <React.Fragment key={quotations.id}>
                    <tr>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.name}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.email}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.phone}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.city}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {quotations.status}
                      </td>
                    </tr>
                    {index !== currentDisplayedUsers.length - 1 && (
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
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded-md mr-2"
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            {renderPageNumbers()}
            <button
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded-md ml-2"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        {/*---- All Quotations close ----*/}
        {/*---- Quotations details start here ----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full rounded-lg px-[2%] py-[5%]">
          <h1 className="text-[22px] font-[600] text-[#000] mb-4">
            Quotations Details
          </h1>
          <div className="grid grid-rows-2 grid-cols-3 border-b border-b-gray-300  gap-y-8 py-4 ">
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Quotation Id
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">12345</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">Name</h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Abhishek Sharma
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px] break-words">
                  Email Id
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D] break-all">
                  abhishek@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Phone Number
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  123456789
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
                  D.No:24-10-12/A,Patella street,punjab junction,punjab-530044.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Status
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Pending</p>
              </div>
            </div>
          </div>
          {/*---Proposals Received to the User---*/}
          <div>
            <div className="flex flex-col ">
              <h4 className="text-[22px] font-[600] text-[#000] py-4">
                Proposals Received to the User
              </h4>
              <div className="flex gap-3  justify-between ">
                <div className="space-y-5">
                  <h4 className="text-[#666666] font-[400] text-[14px]">
                    Company Name
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Company 1
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Company 2
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Company 3
                  </p>
                </div>
                <div className="space-y-5">
                  <h4 className="text-[#666666] font-[400] text-[14px]">
                    Date Of submission
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    27-07-2024
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    28-07-2024
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    29-07-2024
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="text-[#666666] font-[400] text-[14px]">
                    Amount
                  </div>
                  <p className="text-[12px] font-[600] text-[#48494D] flex">
                    <span>
                      <BiRupee className="mt-1" />
                    </span>
                    28,000
                  </p>
                  <p className="text-[12px] font-[600] text-[#48494D] flex">
                    <span>
                      <BiRupee className="mt-1" />
                    </span>
                    28,000
                  </p>
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
        </div>
      </div>
      {/*---- Quotations details end here ----*/}
    </div>
  );
};

export default Quotations;
