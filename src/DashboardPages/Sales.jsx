import React from "react";
import icon1 from "../Images/users-Icon.png";
import icon2 from "../Images/installer Icon.png";
import icon3 from "../Images/quote-icon.png";
import icon4 from "../Images/proposals-icon.png";

const Sales = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      number: 200,
      description: "Total Users",
      bgColor: "#DCFCE7",
      iconBgColor: "#3CD856",
    },
    {
      id: 2,
      icon: icon2,
      number: 300,
      description: "Solar Installers",
      bgColor: "#F3E8FF",
      iconBgColor: "#BF83FF",
    },
    {
      id: 3,
      icon: icon3,
      number: 5,
      description: "Total Quotes Submitted",
      bgColor: "#FFE2F5",
      iconBgColor: "#FA5A7D",
    },
    {
      id: 4,
      icon: icon4,
      number: 8,
      description: "Total Proposals Dispatched",
      bgColor: "#FFF4DE",
      iconBgColor: "#FF947A",
    },
  ];

  return (
    <div>
      {/*---Today's Sales----*/}
      <div className="space-y-3 mt-11">
        <h2 className="text-[20px] font-[600] ad">Today's Sales</h2>
        <p className="text-[16px] font-[400]">Sales Summary</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bgColor }}
            className="text-white p-4 rounded-lg flex items-center"
          >
            <div
              style={{ backgroundColor: item.iconBgColor }}
              className="p-3 rounded-full text-white mr-4 text-2xl"
            >
              <img src={item.icon} alt="item-icons" />
            </div>
            <div>
              <div className="text-[20px] font-[600] ad text-[#151D48]">
                {item.number}
              </div>
              <div className="text-[14px] text-[#425166] font-[400]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*---Today's Sales----*/}
    </div>
  );
};

export default Sales;
