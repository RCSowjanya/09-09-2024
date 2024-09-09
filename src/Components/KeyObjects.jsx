import React from "react";
import abouticon1 from "../Images/cusp-about-icon1.webp";
import abouticon2 from "../Images/cusp-about-icon2.webp";
import abouticon from "../Images/cusp about icon.webp";

const KeyObjects = () => {
  const data = [
    {
      heading: "Sustainability",
      description:
        "Promoting sustainable energy practices that benefit the environment.",
      img: abouticon1,
    },
    {
      heading: "Empowered Customers:",
      description:
        "Providing tools and information for informed energy choices.",
      img: abouticon,
    },
    {
      heading: "Prosperous Providers",
      description: "Ensuring growth and success for our service partners.",
      img: abouticon2,
    },
  ];
  return (
    <div className="bg-[#FFF4D9] px-[4%] py-[4%] ">
      <div className="text-center">
        <h4 className="text-[#196625] inter font-[700] text-[24px]">
          Key Objectives
        </h4>
        <h2 className="text-[34px] font-[600] text-[#004A9C] ad max-[600px]:text-[30px]">
          Driving Sustainability, Empowering Customers, Supporting Providers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-11">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#54E4A6] p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="mx-auto">
              <img
                className="w-20 h-20 object-cover rounded-t-lg "
                src={item.img}
                alt={item.img}
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-900">
                {item.heading}
              </h3>

              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyObjects;
