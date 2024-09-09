import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../Images/cusplogo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Solar Calculator", href: "/solar" },
    // {
    //   name: "Contribute to our Blog",
    //   href: "https://slb.hin.mybluehostin.me/",
    // },
    { name: "Contact", href: "/contactus" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#5372FF] shadow-2xl nav z-[9999]">
      <div className="px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div>
            <a href="/" className="w-full">
              <img src={logo} className="w-[150px]" alt="cusp-logo" />
            </a>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden min-[1000px]:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                key={item.name}
                className={`py-4 px-2  transition duration-300 text-white text-[15px] font-[600px] hover:text-[#FD7F07]`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-3 max-[1000px]:hidden">
            <a href="/joinus">
              <button className="py-2 px-4 border-2 border-[#FFAC0B] bg-[#4348BD] font-[700px] text-[#FFAC0B] rounded-md hover:bg-yellow-500 hover:text-black transition duration-300 flex items-center">
                Partner With Us
                <FaArrowRight className="ml-2" />
              </button>
            </a>
            {/* <a href="/getquote">
              <button className="py-2 px-4 bg-[#FFAC0B] text-[#553B0A] rounded-md font-[700px] border-2 border-yellow-500 hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 transition duration-300 flex items-center">
                Get a Quote <FaArrowRight className="ml-2" />
              </button>
            </a> */}
          </div>

          {/* Mobile menu button */}
          <div className="min-[1000px]:hidden flex items-center ">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <IoClose size={24} className="text-yellow-500" />
              ) : (
                <HiMenuAlt2 size={24} className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`min-[1000px]:hidden pl-6 py-6 ${
          isOpen ? "block" : "hidden"
        } mobile-menu z-[10000]`}
      >
        <ul className="">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={`block text-sm px-2 py-3 transition duration-300 text-white hover:text-yellow-500`}
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-5">
            <a href="/joinus" onClick={closeMenu}>
              <button className="py-2 mb-5 px-4 border-2 border-[#FFAC0B] bg-[#4348BD] font-bold text-[#FFAC0B] rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 flex items-center">
                Partner With Us
                <FaArrowRight className="ml-2" />
              </button>
            </a>
          </li>
          <li>
            {/* <a href="/getquote" onClick={closeMenu}>
              <button className="py-2 px-4 bg-[#FFAC0B] text-[#553B0A] rounded-lg font-bold border-2 border-yellow-500 hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 transition duration-300 flex items-center">
                Get a Quote <FaArrowRight className="ml-2" />
              </button>
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
