import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
const SolarInstallers = ({ setActiveItem }) => {
  const navigate = useNavigate();
  const currentInstallers = [
    {
      id: 1,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 2,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 3,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 4,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 5,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 6,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 7,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 8,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 9,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 10,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 11,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
    {
      id: 12,
      name: "Amazon",
      email: "abhishek@gmail.com",
      phone: "12345678",
      city: "Hyderabad",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest");
  const [selectedInstallerId, setSelectedInstallerId] = useState(null);
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
  const currentDisplayedInstallers = currentInstallers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleRowClick = (installerId) => {
    setSelectedInstallerId(installerId);
    setActiveItem("Installers");
    navigate(`/installers/${installerId}`);
  };

  return (
    <div>
      <div className="m-[3%]">
        {/*---- All users start here ----*/}
        <div className="w-full h-full border border-[#7A7A7A] rounded-lg px-[1%] py-[5%]">
          <div className="flex justify-between mb-4 px-4">
            <p className="text-[22px] font-[600] text-[#000] mr-2">
              All Installers
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
                  <span className="mr-2 text-[#7A7A7A]">{selectedOption}</span>
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
                    Company Name
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
                </tr>
              </thead>
              <tbody>
                {currentDisplayedInstallers.map((installer, index) => (
                  <React.Fragment key={installer.id}>
                    <tr
                      key={installer.id}
                      onClick={() => handleRowClick(installer.id)}
                      className={`cursor-pointer ${
                        selectedInstallerId === installer.id
                          ? "bg-[#4348BD]"
                          : ""
                      }`}
                    >
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.name}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.email}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.phone}
                      </td>
                      <td className="text-[#292D32] font-[500] text-[12px] border-b border-b-gray-300 py-3 text-center">
                        {installer.city}
                      </td>
                    </tr>
                    {index !== currentDisplayedInstallers.length - 1 && (
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
              totalUsers={currentInstallers.length}
              paginate={paginate}
            />
          </div>
        </div>
        {/*---- All users close ----*/}
      </div>
    </div>
  );
};

export default SolarInstallers;
