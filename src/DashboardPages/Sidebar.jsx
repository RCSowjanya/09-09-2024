import React, { useState } from "react";
import {
  MdDashboard,
  MdPeople,
  MdLeaderboard,
  MdShoppingCart,
  MdInsertDriveFile,
} from "react-icons/md"; // Adjust according to your icons
import { FaTools, FaCommentDots } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import logo from "../Images/cusplogo.webp"; // Import your logo image here

const sidebarItems = [
  { name: "dashboard", label: "Dashboard", icon: MdDashboard },
  { name: "customerRFQs", label: "CustomerRFQs", icon: MdDashboard },
  { name: "orders", label: "Orders", icon: MdShoppingCart },
  { name: "proposals", label: "Proposals", icon: MdInsertDriveFile },
  { name: "users", label: "Customers", icon: MdPeople },
  // { name: "quotations", label: "Quotations", icon: FaFileContract },
  { name: "solarInstallers", label: "SolarInstallers", icon: FaTools },
  { name: "Installers", label: "Installers", icon: MdLeaderboard },
  { name: "leads", label: "Leads", icon: MdLeaderboard },
  { name: "feedback", label: "Feedback", icon: FaCommentDots },
  { name: "customerDetails", label: "CustomerDetails", icon: FaCommentDots },
];

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    setActiveItem(item);
    if (window.innerWidth <= 768) setIsOpen(false); // Close sidebar on mobile
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen max-[1100px]:overflow-auto bg-[#4348BD] text-white ${
        isOpen || window.innerWidth > 768 ? "w-60" : "w-11"
      } transition-width duration-300 z-50`}
    >
      <div className="flex flex-col items-center justify-center py-4">
        {/* Logo */}
        <div className="mx-auto mb-8 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className={`w-40 h-auto mr-4 ${isOpen ? "block" : "hidden"}`}
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className={`mb-4 ${window.innerWidth > 768 ? "hidden" : "block"}`}
        >
          <span
            className={`transform ${
              isOpen ? "rotate-90" : ""
            } transition-transform duration-300`}
          >
            <FaArrowLeft className="text-white" />
          </span>
        </button>

        {/* Menu Items */}
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            className={`py-4 px-8 ad w-56  cursor-pointer rounded-lg flex  gap-4 text-[16px] font-[500] transition-colors duration-300  ${
              activeItem === item.name ? "bg-white text-[#4348BD]" : ""
            }`}
          >
            <item.icon
              className={`text-[18px] font-[500] ad transition-colors duration-300  ${
                activeItem === item.name ? "text-[#4348BD]" : "text-white"
              }`}
              style={{ width: "20px", height: "20px" }}
            />
            {isOpen && <span className="ml-2">{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
