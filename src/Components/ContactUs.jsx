import React, { useState } from "react";
import ThankyouPage from "./ThankyouPage";
import cuspbg from "../Images/cusp-contact.webp";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    isNotRobot: false, // Add a state for the checkbox
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full Name is required";
    }

    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      formErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      formErrors.phone =
        "Mobile number must start with 6, 7, 8, or 9 and be exactly 10 digits long";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    if (!formData.isNotRobot) {
      formErrors.isNotRobot =
        "Please check the box to confirm you are not a robot";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      navigate("/thankyoupage");
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          CUSP Solar Company Contact Information Reach Our CUSP Solar Team
        </title>
        <meta
          name="description"
          content="To Know About more information of CUSP Solar ? Contact us and get information now"
        />
      </Helmet>
      <div className="common-bg flex items-center max-[600px]:justify-center">
        <div className="bg-[rgba(13,13,13,0.5)] p-3 my-3 w-auto max-[1000px]:p-2">
          <h2 className="text-[2rem] max-[1000px]:text-[2rem] text-white font-bold rounded-md ">
            Get in touch with us
          </h2>
          <p className="text-[1rem] font-[400] leading-[25px] mt-1 text-white max-[1000px]:text-[14px] max-[1000px]:leading-[20px]">
            Empowering communities with Sustainable <br /> Solar Solutions
          </p>
        </div>
      </div>

      {/*--form---*/}
      <div className="p-[5%] drop-shadow-2xl bg-white">
        <div className="flex items-center justify-center h-full max-[1000px]:flex-col">
          <div className="w-1/2 max-[1000px]:w-full">
            <img src={cuspbg} className="w-full h-auto" alt="cuspbg" />
          </div>
          <div className="w-1/2 max-[1000px]:w-full">
            <div className="max-w-4xl mx-auto p-5">
              <form className="space-y-7" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Full Name <span className="text-[#A45D17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Subject<span className="text-[#A45D17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block w-full text-[16px] font-[500] text-[#A45D17] ad"
                    >
                      Email<span className="text-[#A45D17]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block w-full text-[16px] font-[500] text-[#A45D17]"
                    >
                      Phone<span className="text-[#A45D17]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone Number"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#A45D17]"
                  >
                    Message<span className="text-[#A45D17]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="4"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="isNotRobot"
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="isNotRobot"
                      name="isNotRobot"
                      checked={formData.isNotRobot}
                      onChange={handleChange}
                      className="form-checkbox w-6 h-6 custom-checkbox"
                    />
                    <span className="ml-2 text-[#A45D17] ">
                      I'm not a robot
                    </span>
                  </label>
                  {errors.isNotRobot && (
                    <p className="text-red-500 text-sm">{errors.isNotRobot}</p>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#A45D17] shadow-sm hover:bg-[#6B4D28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A45D17]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
