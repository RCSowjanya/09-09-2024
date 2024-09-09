import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "../Images/cusp-footer-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#1A2A36] pt-[5%] px-[5%]">
      <div className="grid grid-cols-12 max-[600px]:grid-cols-1 items-center justify-between gap-4">
        {/*---first column----*/}
        <div className="col-span-6 max-[600px]:col-span-12 max-[600px]:text-center">
          <div className="">
            <a href="/" className="flex py-4 px-2">
              <img src={logo} alt="Logo" className="max-[600px]:mx-auto" />
            </a>
            <p className="text-[16px] font-[400] text-[#C7C7C7] leading-[22.4px] robot">
              CUSP is dedicated to transforming the energy landscape in India by
              making solar power accessible and convenient for all. Our platform
              connects users with reliable service providers, ensuring a
              seamless transition to renewable energy.
            </p>
          </div>
        </div>
        {/*---second column----*/}
        <div className="col-span-3 max-[600px]:col-span-12 text-center mb-6">
          <h2 className="text-[16px] font-[700] mb-3 text-[#F9F9F9] ad">
            Quick Links
          </h2>
          <div className="flex flex-col space-y-2 text-[#929BA2] text-[14px] font-[400]">
            <a className="robot" href="/termsofservice">
              Terms of Service
            </a>
            <a className="robot" href="/privacypolicy">
              Privacy policy
            </a>
          </div>
        </div>
        {/*---third column----*/}
        <div className="col-span-3 max-[600px]:col-span-12 text-center space-y-1">
          <p className="robot text-[18px] font-[300] text-white">
            <a href="tel:+918448499133" className="hover:underline">
              +91 8448499133
            </a>
          </p>
          <p className="text-[#32C36C]">
            <a href="mailto:support@cuspsolar.com" className="hover:underline">
              Email: support@cuspsolar.com
            </a>
          </p>
          <div className="text-center">
            <h4 className="text-[16px] font-[500] mb-3 text-[#F9F9F9] ad mt-5">
              Social Media Links
            </h4>
            <div className="flex gap-2 items-center justify-center mt-4">
              <a
                href="https://www.facebook.com/cuspsolar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/cuspsolar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/cuspsolar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@CuspSolar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*---copyrights---*/}
      <div className="text-center pt-[4rem] pb-6">
        <p className="text-[#fff] text-[14px]">
          © 2024 CUSP by <span className="text-[#32C36C]"> Cuspsolar.com </span>
          all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
