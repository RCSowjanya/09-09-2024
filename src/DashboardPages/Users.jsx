import React, { useState, useEffect } from "react";
import {
  MdSearch,
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiHashtag } from "react-icons/hi";

const Users = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const [selectedOption, setSelectedOption] = useState("Newest"); // Default dropdown option
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8; // Adjust this value to set how many users to display per page

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

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
        {/*----all users start here----*/}
        <div className="w-1/2 h-full border border-[#7A7A7A] max-[1100px]:w-full rounded-lg px-[1%] py-[5%]">
          <div className="flex justify-between mb-4">
            <p className="text-[22px] font-[600] text-[#000]">All Customers</p>
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
                Sort by :
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
                      pb-2
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
          {/*----table---*/}
          <div className="flex-grow">
            <table className="min-w-full bg-white mt-8">
              <thead>
                <tr>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Name
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Phone Number
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    Email
                  </th>
                  <th className="text-[14px] border-b border-b-gray-300 font-[500] text-[#969891] pb-2">
                    City
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                      {user.name}
                    </td>
                    <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                      {user.phone}
                    </td>
                    <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                      {user.email}
                    </td>
                    <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                      {user.address.city}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/*---pagination---*/}
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
          {/*---pagination close---*/}
        </div>
        {/*---all users close---*/}
        {/*---user details start here---*/}
        <div className="w-1/2 h-full border border-[#7A7A7A]  max-[1100px]:w-full  rounded-lg px-[2%] py-[5%] ">
          <h1 className="text-[20px] text-[#000] font-[600] mb-4">
            Customer Details
          </h1>
          <div className="grid grid-rows-4 grid-cols-2 border-b border-b-gray-300">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div className="">
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Customer Id
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">#258269</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div className="">
                <h4 className="text-[#666666] font-[400] text-[13px]">Name</h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  kurtis weissnat
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div className="">
                <h4 className="text-[#666666] font-[400] text-[13px]">Email</h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  kurtis@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div className="">
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Mobile
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  210-067-6132
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div className="">
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Type of Customer
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Residential
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300  p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div className="">
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Address
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  D.No:24-10-12/A,Patella street,punjab junction,punjab-530044.
                </p>
              </div>
            </div>
          </div>
          {/*----quotations---*/}
          <div className="flex flex-col">
            <h4 className="text-[22px] font-[600] text-[#000] my-4">
              Quotations
            </h4>
            <div className="flex gap-3  justify-between ">
              <div className="space-y-6">
                <h4 className="text-[#666666] font-[400] text-[14px]">
                  Date of Submission
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  30-07-2023
                </p>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  30-07-2023
                </p>
              </div>

              <div className="space-y-6 ">
                <h4 className="text-[#666666] font-[400] text-[14px]">
                  Status
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Pending</p>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Completed
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[#666666] font-[400] text-[14px] ml-7">
                  View
                </h4>
                <button className="text-[14px] text-[#4348BD] font-[500] border border-[#4348BD] py-1 px-8 rounded-lg">
                  View
                </button>
                <p className="text-[14px] text-[#4348BD] font-[500] border border-[#4348BD] py-1 px-8 rounded-lg">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*---user details end here---*/}
      </div>
      {/*---All users and user details---*/}
    </div>
  );
};

export default Users;
