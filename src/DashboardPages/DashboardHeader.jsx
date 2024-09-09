import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md"; // Correctly import MdNotificationsNone
import avatar from "../Images/test-1.png";

import notification from "../Images/Notifications.png";
import { Link } from "react-router-dom";

const DashboardHeader = ({ title }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="m-[2%]">
      {/*----dashboard header----*/}
      <div className="flex items-center justify-between mb-4 max-[700px]:flex-col max-[1100px]:space-y-8 max-[1100px]:justify-center">
        <div className="flex-1">
          <h1 className="text-[36px] font-[600] text-[#4348BD]">{title}</h1>
        </div>
        <div className="flex-1 flex justify-center items-center border border-gray-300 rounded-lg px-2 py-1 max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full p-1"
          />
          <MdSearch className="text-gray-500 text-xl ml-2" />
        </div>
        <div className="flex-1 flex justify-end">
          <img src={notification} className="" alt="" />
          <div className="flex items-center gap-4">
            <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col items-end">
              <span className="text-[16px] font-[500] text-[#151D4B]">
                John Doe
              </span>
              <span className="text-[14px] text-[#737791]">Developer</span>
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-indigo-600"
              >
                <MdKeyboardArrowDown />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*---header close----*/}
    </div>
  );
};

export default DashboardHeader;
