import React from "react";
import phone from "../Images/phone.png";
import whatsapp from "../Images/whatsapp.png";
import mail from "../Images/mail.png";
const Stickyicons = () => {
  return (
    <div className="flex flex-col space-y-2 fixed right-1 max-[600px]:right-3 bottom-[5%] z-[999]">
      <a href="tel:+918448499133">
        <img src={phone} className="w-8 h-8" alt="cusp-phoneNumber" />
      </a>
      <a
        href="https://wa.me/918448499133"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} className="w-8 h-8" alt="cusp-whatsapp" />
      </a>
      <a href="mailto:support@cuspsolar.com">
        <img src={mail} className="w-8 h-8" alt="cusp-mail" />
      </a>
    </div>
  );
};

export default Stickyicons;
