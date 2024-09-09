import React from "react";
import visibility from "../Images/visibility.webp";
import marketing from "../Images/marketing.webp";
import efficient from "../Images/efficient.webp";
import compititive from "../Images/compititive.webp";
import access from "../Images/access.webp";
import credibility from "../Images/credibility.webp";
import flexibility from "../Images/flexibility.webp";
import network from "../Images/network.webp";
import advtimg from "../Images/cusp-partner.webp";
import advt1 from "../Images/cups icon1.webp";
const PartnerwithUs = () => {
  const data = [
    {
      id: 1,
      img: visibility,
      heading: "Increased Visibility and Reach",
      description:
        "CUSP has a large user base, providing you a wider audience.",
    },
    {
      id: 2,
      img: marketing,
      heading: "We are your cost-effective extended marketing arm",
      subheading1: "Lead Generation : ",
      subdescription1:
        "CUSP generate leads through its marketing efforts, customer reviews, and digital marketing strategies.",
      subheading2: "Targeted Marketing : ",
      subheading2des:
        "CUSP targets Pan India demographics and locations. Market consolidation increases the likelihood of attracting interested customers.",
    },
    {
      id: 3,
      img: efficient,
      heading: "Efficient and Convenient Administration:",
      description:
        "CUSP process from lead generation to contract award significantly saves your time and effort, reduces administrative burden enabling you to focus on core work of installation.",
    },
    {
      id: 4,
      img: compititive,
      heading: "Competitive Advantage:",
      description:
        "Joining CUSP helps you stay competitive in an increasingly digital marketplace.",
    },
  ];
  const content = [
    {
      id: 1,
      img: access,
      heading: "Access to Data:",
      description:
        "CUSP provides valuable data analytics and insights on customer behavior, preferences, and trends, enabling your business with better decision-making and strategy adjustments.",
    },
    {
      id: 2,
      img: credibility,
      heading: "Enhanced Credibility:",
      description:
        "Based on customer reviews we will do regular ratings which will scale up your reputation and attract more business.",
    },
    {
      id: 3,
      img: flexibility,
      heading: "Flexibility and Scalability",
      subheading1: "Flexible Operations : ",
      subdescription1:
        "CUSP provides you the flexibility to manage operations from anywhere and facilitates to expand your business in multiple locations.",
      subheading2: "Scalability : ",
      subheading2des:
        "CUSP can easily scale to accommodate increased demand resulting in your increased revenue with zero investment from your side.",
    },
    {
      id: 4,
      img: network,
      heading: "Networking Opportunities:",
      description:
        "Through CUSP events you get an opportunity to engage with other professionals, share knowledge and stay updated on industry trends.",
    },
  ];
  return (
    <div className="bg-[#FFF4D9]">
      <h2 className="text-[40px] text-center leading-[47.4px] font-[600] ad text-[#382305] pt-[4%]">
        Partner With CUSP
      </h2>
      <p className="text-[24px] leading-[28.44px] text-[#4D4D4D] text-center my-[1%] font-[600] ad">
        Advantages for solar installers
      </p>
      {/*---3 columns----*/}
      <div className="flex flex-col min-[1000px]:flex-row  mt-11 pb-11 mx-[3%] h-auto">
        {/* First Column */}
        <div className="flex-1 flex flex-col">
          {data.map((item) => (
            <div key={item.id} className="mb-4 flex-1 flex flex-col">
              <div className="flex gap-3 bg-[#FFB950] p-2 rounded-l-2xl rounded-br-2xl items-center h-full">
                <img src={item.img} className="" alt="navy-logo" />
                <div>
                  <h2 className="text-[18px] font-[600] leading-[22.5px] text-[#382305] ad">
                    {item.heading}
                  </h2>
                  <h4 className="text-[16px] font-[500] leading-[24px] my-1">
                    {item.subheading1}
                    <span className="font-[400] text-[16px] leading-[24px]">
                      {item.subdescription1}
                    </span>
                  </h4>
                  <h4 className="text-[16px] font-[500] leading-[24px] my-1">
                    {item.subheading2}
                    <span className="font-[400] text-[16px] leading-[24px]">
                      {item.subheading2des}
                    </span>
                  </h4>
                  <p className="text-[16px] font-[400] leading-[24px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column (Image) */}
        <div className="flex  items-end ">
          <img
            src={advtimg}
            alt="advt"
            className="w-[20rem] h-auto  max-[1000px]:max-w-[50%]!important"
          />
        </div>

        {/* Third Column */}
        <div className="flex-1 flex flex-col">
          {content.map((item) => (
            <div key={item.id} className="mb-4 flex-1 flex flex-col">
              <div className="flex gap-3 bg-[#FFB950] p-2 rounded-r-2xl rounded-bl-2xl items-center h-full">
                <img src={item.img} className="" alt="navy-logo" />
                <div>
                  <h2 className="text-[18px] font-[600] leading-[22.5px] text-[#382305] ad">
                    {item.heading}
                  </h2>
                  <h4 className="text-[16px] font-[500] leading-[24px] my-1">
                    {item.subheading1}
                    <span className="font-[400] text-[16px] leading-[24px]">
                      {item.subdescription1}
                    </span>
                  </h4>
                  <h4 className="text-[16px] font-[500] leading-[24px] my-1">
                    {item.subheading2}
                    <span className="font-[400] text-[16px] leading-[24px]">
                      {item.subheading2des}
                    </span>
                  </h4>
                  <p className="text-[16px] font-[400] leading-[24px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*---3 columns close----*/}
    </div>
  );
};

export default PartnerwithUs;
